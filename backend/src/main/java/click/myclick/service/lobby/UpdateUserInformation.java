package click.myclick.service.lobby;

import click.myclick.service.dao.user.UserService;
import click.myclick.dto.lobby.UserUpdateDTO;
import click.myclick.dto.lobby.AdminUserUpdateDTO;
import click.myclick.model.User;
import click.myclick.model.Authority;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.ArrayList;

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

    public int adminUpdate(UserService service, AdminUserUpdateDTO dto) {
        
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        try {
            User user = service.find(dto.getId());

            System.out.println(user.getName());

            if(dto.getName().length() > 3) {
                user.setName(dto.getName());
            }

            if(dto.getEmail().length() > 3) {
                user.setUsername(dto.getEmail());
            }

            if(dto.getPassword().length() > 3 && dto.getPassword().equals(dto.getConfirmPassword())) {
                user.setPassword(passwordEncoder.encode(dto.getPassword()));
            }

            user.setEnabled(dto.getEnable());

            List<Authority> authorities = new ArrayList<>();
            if(dto.getRole().equals("ROLE_USER")) {
                authorities.add(Authority.ROLE_USER);
            } else {
                if(dto.getRole().equals("ROLE_ADMIN")) {
                    authorities.add(Authority.ROLE_ADMIN);
                } else {
                    if(dto.getRole().equals("ANONYMOUS")) {
                        authorities.add(Authority.ANONYMOUS);
                    }
                }
            }
            user.setAuthorities(authorities);

            service.getRepository().save(user);

            return 0;
        } catch(Exception e) {
            return 1;
        }
    }
}