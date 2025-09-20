package org.boardly.repository;



import org.boardly.model.PasswordResetToken;
import org.boardly.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface TokenRepository extends JpaRepository<PasswordResetToken, Long>{
	
	PasswordResetToken findByToken(String token);

	PasswordResetToken findByUser(User user);



}
