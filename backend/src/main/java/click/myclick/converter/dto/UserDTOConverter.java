package click.myclick.converter.dto;

import click.myclick.dto.auth.UserDTO;
import click.myclick.model.Authority;
import click.myclick.model.User;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


public class UserDTOConverter implements Converter<UserDTO, User> {

    @Override
    public User convert(final UserDTO dto) {
        final User user = new User();

        user.setUsername(dto.getUsername());

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setName(dto.getName());

        user.setAccountNonExpired(false);
        user.setCredentialsNonExpired(false);
        user.setEnabled(false);
        user.setLastchecknews(String.valueOf(LocalDateTime.now()));

        List<Authority> authorities = new ArrayList<>();
        authorities.add(Authority.ROLE_USER);
        user.setAuthorities(authorities);
        return user;
    }

}
