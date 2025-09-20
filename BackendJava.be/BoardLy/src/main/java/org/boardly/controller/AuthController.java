package org.boardly.controller;

import java.util.Map;

import org.boardly.config.JwtUtil;
import org.boardly.model.User;
import org.boardly.request.AuthRequest;
import org.boardly.request.ForgotPasswordRequest;
import org.boardly.request.RegisterRequest;
import org.boardly.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.boardly.model.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:5173")
public class AuthController {
	
	  	@Autowired
	    private AuthenticationManager authenticationManager;
	    @Autowired
	    private JwtUtil jwtUtil;
	    
	    @Autowired
	    private  UserService userService;

	    //login user
	    @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
	        try {
	            authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
	            );
	        } catch (Exception e) {
	            return ResponseEntity
	                    .status(401)
	                    .body(new AuthResponse(null, authRequest.getEmail(), "Invalid username/password"));
	        }

	        String token = jwtUtil.generateToken(authRequest.getEmail());
	        return ResponseEntity.ok(new AuthResponse(token, authRequest.getEmail(), "Login successful"));
	    }
	    
	    //register user
	    @PostMapping("/register")
	    public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
	        User savedUser = userService.registerUser(request);
	        return ResponseEntity.ok(savedUser);
	    }
	    
	    //forgot password
	    @PostMapping("/forgotPassword")
	    public ResponseEntity<String> forgotPassword(@RequestBody ForgotPasswordRequest request) {
	    	String email = request.getEmailId();

	        if (email == null || email.isEmpty()) {
	            return ResponseEntity.badRequest().body("Email is required");
	        }

	        try {
	            userService.sendResetLink(email);
	            return ResponseEntity.ok("Reset link sent successfully");
	        } catch (RuntimeException e) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	        }
	    }
	    
	    //reset password 
	    @PostMapping("/resetPassword")
	    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> request) {
	        String token = request.get("token");
	        String newPassword = request.get("newPassword");

	        if (token == null || newPassword == null) {
	            return ResponseEntity.badRequest().body("Token and new password are required");
	        }

	        try {
	            userService.resetPassword(token, newPassword);
	            return ResponseEntity.ok("Password reset successfully");
	        } catch (RuntimeException e) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	        }
	    }
}
