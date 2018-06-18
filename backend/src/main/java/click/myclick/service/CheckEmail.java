package click.myclick.service;

import click.myclick.model.User;
import click.myclick.service.UserService;
import click.myclick.dto.CodeDTO;

import org.springframework.stereotype.Service;

@Service
public class CheckEmail {

    public int checkExistingEmail(UserService service, String username) {
        try {
            User user = service.findByUsername(username);
            if (user.getUsername().equals(username)) {
                return 0;
            } else {
                return 1;
            }
        } catch(Exception e) {
            return 1;
        }
    }

    public int isEnable(UserService service, String username) {
        try {
            return service.findByUsername(username).isEnabled()? 0 : 1;
        } catch(Exception e) {
            return 2;
        }
    }
    
    public int checkToken(UserService service, CodeDTO dto) {

        String username = dto.getUsername();
        String token = dto.getToken();

        User user = service.findByUsername(username);

        if(user == null) {
            return 1;
        }

        if(user.getTokenEmail().equals(token)) {
            user.setEnabled(true);
            user.setTokenEmail("-1");
            service.getRepository().save(user);
            return 0;
        } else {
            return 2;
        }
    }
}
