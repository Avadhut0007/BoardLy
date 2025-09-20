package org.boardly.service;

import lombok.RequiredArgsConstructor;

import org.boardly.model.PasswordResetToken;
import org.boardly.model.User;
import org.boardly.repository.TokenRepository;
import org.boardly.repository.UserRepository;
import org.boardly.request.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.UUID;



import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Autowired
    private EmailService emailService;
    
    @Autowired
	private TokenRepository tokenRepository;
    
    
    

    public User registerUser(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .isActive(true)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .lastLogin(null)
                .build();

        return userRepository.save(user);
    }
    
    public void sendResetLink(String emailId) {
        User user = userRepository.findByEmail(emailId)
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        // Delete old token if exists
        PasswordResetToken existingToken = tokenRepository.findByUser(user);
        if (existingToken != null) {
            tokenRepository.delete(existingToken);
        }

        // Create new token
        String token = UUID.randomUUID().toString();
        PasswordResetToken resetToken = new PasswordResetToken(token, user);
        tokenRepository.save(resetToken);

        // Send mail
        String resetLink = "http://localhost:4200/reset-password?token=" + token;
        emailService.sendEmail(
                user.getEmail(),
                "Password Reset",
                "Click the link to reset your password: " + resetLink
        );
    }
    
    public void resetPassword(String token, String newPassword) {
        PasswordResetToken resetToken = tokenRepository.findByToken(token);

        if (resetToken != null && !resetToken.isExpired()) {
            User user = resetToken.getUser();

            // encode new password before saving
            user.setPassword(passwordEncoder.encode(newPassword));

            userRepository.save(user);

            // delete token so it can't be reused
            tokenRepository.delete(resetToken);
        } else {
            throw new RuntimeException("Invalid or expired token");
        }
    }
    
    
    
}
