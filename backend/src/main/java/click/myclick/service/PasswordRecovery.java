package click.myclick.service;

import click.myclick.service.UserService;
import click.myclick.model.User;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class PasswordRecovery {

    public boolean recovery(UserService service, String username) { 
        System.out.println("Recovery");

        User user = service.findByUsername(username);

        if(user == null) {
            return false;
        }

        Email email = new Email();
        
        String token = Integer.toString(new Random().nextInt(1000000));
        String msg = "Clique no link para fazer a alteração da senha da conta\n\n" +
        "http://localhost:8080/#/email/" + user.getUsername() + "/" + token;

        user.setTokenEmail(token);
        service.getRepository().save(user);

        //email.send(user.getUsername(), token, msg);
        System.out.println(msg);

        return true;
    }
}
