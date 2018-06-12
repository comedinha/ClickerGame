package click.myclick.service;

import click.myclick.model.User;
import click.myclick.service.UserService;
import click.myclick.dto.CodeDTO;

import org.springframework.stereotype.Service;

@Service
public class CheckTokenEmail {
    
    public boolean checkToken(UserService service, CodeDTO dto) {

        String username = dto.getUsername();
        String token = dto.getToken();

        User user = service.findByUsername(username);

        if(user == null) {
            return false;
        }

        if(user.getTokenEmail().equals(token)) {
            user.setEnabled(true);
            user.setTokenEmail("-1");
            service.getRepository().save(user);
            return true;
        } else {
            return false;
        }
    }
}
