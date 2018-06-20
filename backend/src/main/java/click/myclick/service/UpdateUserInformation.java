package click.myclick.service;

import click.myclick.service.UserService;
import click.myclick.dto.UserUpdateDTO;
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

            if(passwordEncoder.matches(dto.getOldpassword(), user.getPassword())) {
                return 1;
            }

            if(dto.getName() != null)
                user.setName(dto.getName());
            if(dto.getPassword() != null)
                user.setPassword(passwordEncoder.encode(dto.getPassword()));
            
            service.getRepository().save(user);

            return 0;
        } catch(Exception e) {
            return 2;
        }
    }
}