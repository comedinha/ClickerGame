package click.myclick.converter;

import click.myclick.converter.factory.ConverterFactory;
import click.myclick.dto.UserDTO;
import click.myclick.model.User;
import click.myclick.service.Email;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConverterFacade {

    @Autowired
    private ConverterFactory converterFactory;

    public User convert(final UserDTO dto) {
        Email email = new Email();

        String token = Integer.toString(new Random().nextInt(1000000));
        String title = "Confirmação de Email";
        String msg = "Clique no link para confirmar o e-mail\n\n" +
        "http://localhost:8080/#/email?email=" + dto.getUsername() + "&token=" + token;
        email.send(dto.getUsername(), token, title, msg);

        User user = (User) converterFactory.getConverter(dto.getClass()).convert(dto);

        user.setTokenEmail(token);

        return user;
    }

}
