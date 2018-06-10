package click.myclick.service;

import click.myclick.model.User;
import click.myclick.service.UserService;

import org.springframework.stereotype.Service;

@Service
public class CheckTokenEmail {
    
    public boolean checkToken(UserService service, String code) {
        System.out.println("check token 0");

        //Dividir code em email e token:
        //String username = ?;
        //String token = ?;
        //System.out.printf("Username = %s\ntoken = %s\n", username, token);

        User user = service.findByUsername(username);

        if(user == null) {
            System.out.println("User is null");
            return false;
        }

        if(user.getTokenEmail().equals(token)) {
            System.out.println("User token ok");
            user.isEnabled();
            user.setTokenEmail("-1");
            return true;
        } else {
            System.out.println("User token invalid");
            return false;
        }   
    }
}
