package click.myclick.service;

import java.util.Properties;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;

@Component
public class Email {

	@Value("mail.smtp.host")
	private String host;

	@Value("mail.smtp.port")
	private String porta;

	@Value("mail.smtp.username")
	private String username;

	@Value("mail.smtp.password")
	private String password;

	@Value("mail.transport.protocol")
	private String protocol;

	@Value("mail.smtp.auth")
	private String auth;

	@Value("mail.smtp.starttls.enable")
	private String enable;

	@Value("mail.smtp.connectiontimeout")
	private String connectiontimeout;

	public JavaMailSender configMail() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        mailSender.setHost(host);
        mailSender.setPort(Integer.parseInt(porta));
        mailSender.setUsername(username);
        mailSender.setPassword(password);
		
		Properties props = new Properties();
		props.put("mail.transport.protocol", protocol);
		props.put("mail.smtp.auth", Boolean.valueOf(auth));
		props.put("mail.smtp.starttls.enable", Boolean.valueOf(enable));
		props.put("mail.smtp.connectiontimeout", Integer.parseInt(connectiontimeout));
		
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
