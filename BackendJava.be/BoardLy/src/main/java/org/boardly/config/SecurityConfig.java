package org.boardly.config;

import org.boardly.service.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

	 private final CustomUserDetailsService customUserDetailsService;

	    public SecurityConfig(CustomUserDetailsService customUserDetailsService) {
	        this.customUserDetailsService = customUserDetailsService;
	    }

	    @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
	        return config.getAuthenticationManager();
	    }

	    @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder(); // ✅ encode passwords
	    }

	    @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http
	            .csrf().disable()
	            .authorizeHttpRequests(auth -> auth
	                .requestMatchers(
	                    "/swagger-ui/**",
	                    "/v3/api-docs/**",
	                    "/swagger-resources/**",
	                    "/webjars/**"
	                ).permitAll()
	                .requestMatchers("/auth/**").permitAll()  
	                .anyRequest().authenticated()
	            );

	        return http.build();
	    }
}
