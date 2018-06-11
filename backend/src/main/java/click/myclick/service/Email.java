package click.myclick.service;

import click.myclick.dto.UserDTO;

import java.util.Properties;
import java.util.Random;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

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
    
    public String enviar(UserDTO user) {
		JavaMailSender javaMailSender = configMail();
		
		String token = Integer.toString(new Random().nextInt(1000000));
		
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setFrom("sudowinchester@gamil.com");
		simpleMailMessage.setTo(user.getUsername());
		simpleMailMessage.setSubject("Confirmação de cadastro");
		simpleMailMessage.setText("Clique no link para confirmar o e-mail\n\n" +
									"http://localhost:8080/#/email/" + user.getUsername() + "/" + token);
		javaMailSender.send(simpleMailMessage);
		return token;
	}
}
