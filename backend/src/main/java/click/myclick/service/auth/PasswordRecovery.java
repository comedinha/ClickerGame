package click.myclick.service.auth;

import click.myclick.service.dao.user.UserService;
import click.myclick.model.User;
import click.myclick.dto.PasswordResetDTO;

import java.util.Random;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class PasswordRecovery {
    public int resetPassword(UserService service, PasswordResetDTO dto) {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        String username = dto.getUsername();
        String token = dto.getToken();

        User user = service.findByUsername(username);

        if(user == null) {
            return 1;
        }

        if(user.getTokenEmail().equals(token)) {
            user.setTokenEmail("-1");
            user.setPassword(passwordEncoder.encode(dto.getPassword()));
            service.getRepository().save(user);
            return 0;
        } else {
            return 2;
        }
    }

    public int recovery(UserService service, String username) {

        User user = service.findByUsername(username);

        if(user == null) {
            return 1;
        }

        Email email = new Email();

        String token = Integer.toString(new Random().nextInt(1000000));
        String title = "Recuperação de Senha";
        String msg = "Clique no link para fazer a alteração da senha da conta\n\n" +
        "http://localhost:8080/#/ResetPassword?email=" + username + "&token=" + token;

        user.setTokenEmail(token);
        service.getRepository().save(user);

        email.send(user.getUsername(), token, title, msg);

        return 0;
    }
}
