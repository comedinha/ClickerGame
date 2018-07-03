package click.myclick.converter;

import click.myclick.converter.factory.ConverterUserFactory;
import click.myclick.converter.factory.ConverterSceneFactory;
import click.myclick.dto.auth.UserDTO;
import click.myclick.model.User;
import click.myclick.model.Scene;
import click.myclick.dto.scene.SceneDTO;
import click.myclick.service.auth.Email;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConverterFacade {

    @Autowired
    private ConverterUserFactory converterUserFactory;
    @Autowired
    private ConverterSceneFactory converterSceneFactory;

    public User convert(final UserDTO dto) {
        Email email = new Email();

        String token = Integer.toString(new Random().nextInt(1000000));
        String title = "Confirmação de Email";
        String msg = "Clique no link para confirmar o e-mail\n\n" +
        "http://localhost:8080/#/email?email=" + dto.getUsername() + "&token=" + token;
        email.send(dto.getUsername(), token, title, msg);

        User user = (User) converterUserFactory.getConverter(dto.getClass()).convert(dto);

        user.setTokenEmail(token);

        return user;
    }

    public Scene convert(final SceneDTO dto) {
        return converterSceneFactory.getConverter(dto.getClass()).convert(dto);
    }

    public Scene convertSave(final SceneDTO dto, Scene scene) {

        scene.setIdCreator(dto.getIdCreator());
        scene.setName(dto.getName());
        scene.setSmallDescription(dto.getSmallDescription());
        scene.setCompleteDescription(dto.getCompleteDescription());
        scene.setImage(dto.getImage());
        scene.setWorlds(dto.getWorlds());
        scene.setCoins(dto.getCoins());

        return scene;
    }
}
