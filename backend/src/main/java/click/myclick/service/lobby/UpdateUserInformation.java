package click.myclick.service.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.dto.lobby.UserUpdateDTO;
import click.myclick.model.User;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UpdateUserInformation {
    public int update(UserService service, UserUpdateDTO dto, String username) {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        
        try {
            User user = service.findByUsername(username);

            System.out.println(dto.getName());
            System.out.println(dto.getPassword());
            System.out.println(dto.getOldPassword());
            System.out.println(dto.getOldPassword() + " = " + user.getPassword());

            if(!passwordEncoder.matches(dto.getOldPassword(), user.getPassword())) {
                return 1;
            }

            if(dto.getName().length() > 3) {
                user.setName(dto.getName());
            }
            if(dto.getPassword().length() > 3) {
                user.setPassword(passwordEncoder.encode(dto.getPassword()));
            }

            service.getRepository().save(user);
            return 0;
        } catch(Exception e) {
            return 2;
        }
    }
}