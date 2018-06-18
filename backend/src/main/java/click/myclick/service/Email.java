package click.myclick.service;

import java.util.Properties;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;

@Component
public class Email {

	public JavaMailSender configMail() {

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost("smtp.gmail.com");
		mailSender.setPort(587);
        mailSender.setUsername("sudowinchester@gmail.com");
		mailSender.setPassword("26071998lecc89917062");
		
		Properties props = new Properties();
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.auth", true);
		props.put("mail.smtp.starttls.enable", true);
		props.put("mail.smtp.connectiontimeout", 10000);
		
		mailSender.setJavaMailProperties(props);
		
		return mailSender;
    }
    
    public void send(String email, String token, String title, String msg) {
		JavaMailSender javaMailSender = configMail();
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

		simpleMailMessage.setFrom("sudowinchester@gamil.com");
		simpleMailMessage.setTo(email);
		simpleMailMessage.setSubject(title);
		simpleMailMessage.setText(msg);
		
		javaMailSender.send(simpleMailMessage);
	}
}
