package click.myclick.converter;

import click.myclick.converter.factory.ConverterFactory;
import click.myclick.dto.UserDTO;
import click.myclick.model.User;
import click.myclick.service.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class ConverterFacade {

    @Autowired
    private ConverterFactory converterFactory;

    public User convert(final UserDTO dto) {
        Email email = new Email();
        String token = email.enviar(dto);
        User user = (User) converterFactory.getConverter(dto.getClass()).convert(dto);

        user.setTokenEmail(token);

        return user;
    }

}
