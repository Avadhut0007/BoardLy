package org.boardly.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailParseException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Value("$(spring.mail.username)")
	private String fromEmailId;
	
	@Async
	public void sendEmail(String to,String subject,String text) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom(fromEmailId);
		message.setTo(to);
		message.setSubject(subject);
		message.setText(text);
		
		try {
			mailSender.send(message);
		}catch(MailParseException e) {
			System.out.println("Failed to send email"+ e.getMessage());
		}catch (Exception e) {
            e.printStackTrace();
        }
		
	}

}
