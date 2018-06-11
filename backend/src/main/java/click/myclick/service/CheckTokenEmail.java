package click.myclick.service;

import click.myclick.model.User;
import click.myclick.service.UserService;
import click.myclick.dto.CodeDTO;

import org.springframework.stereotype.Service;

@Service
public class CheckTokenEmail {
    
    public boolean checkToken(UserService service, CodeDTO dto) {
        System.out.println("check token 0");

        String username = dto.getUsername();
        String token = dto.getToken();
        System.out.printf("Username = %s\ntoken = %s\n", username, token);

        User user = service.findByUsername(username);

        if(user == null) {
            System.out.println("User is null");
            return false;
        }

        if(user.getTokenEmail().equals(token)) {
            System.out.println("User token ok");
            user.setEnabled(true);
            user.setTokenEmail("-1");
            service.getRepository().save(user);
            return true;
        } else {
            System.out.println("User token invalid");
            return false;
        }
    }
}
