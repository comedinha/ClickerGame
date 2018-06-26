package click.myclick.service.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.model.User;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

@Service
public class SaveDateClickNews {
    
    public void saveDate(UserService service, String username) {
        User user = service.findByUsername(username);
        System.out.println("After find");
        user.setLastchecknews(String.valueOf(LocalDateTime.now()));
        System.out.println("set");
        service.getRepository().save(user);
        System.out.println("save");
    }
}