package click.myclick.service;

import click.myclick.service.UserService;
import click.myclick.model.User;
import click.myclick.dto.PasswordResetDTO;

import java.util.Random;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class PasswordRecovery {
    public boolean resetPassword(UserService service, PasswordResetDTO dto) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        System.out.println("Reset");
        String username = dto.getUsername();
        String token = dto.getToken();

        User user = service.findByUsername(username);

        if(user == null) {
            return false;
        }

        if(user.getTokenEmail().equals(token)) {
            user.setTokenEmail("-1");
            user.setPassword(passwordEncoder.encode(dto.getPassword()));
            service.getRepository().save(user);
            return true;
        } else {
            return false;
        }
    }

    public boolean recovery(UserService service, String username) {
        System.out.println("Recovery0");
        System.out.println("username: " + username);
        User user = service.findByUsername(username);

        System.out.println("Recovery1");

        if(user == null) {
            return false;
        }
        System.out.println("Recovery2");
        Email email = new Email();
        
        String token = Integer.toString(new Random().nextInt(1000000));
        String msg = "Clique no link para fazer a alteração da senha da conta\n\n" +
        "http://localhost:8080/#/ResetPassword/" + username + "/" + token;

        user.setTokenEmail(token);
        service.getRepository().save(user);

        email.send(user.getUsername(), token, msg);

        return true;
    }
}
