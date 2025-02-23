package click.myclick.converter.dto;

import click.myclick.dto.scene.SceneDTO;
import click.myclick.model.Scene;

import org.springframework.core.convert.converter.Converter;

public class SceneDTOConverter implements Converter<SceneDTO, Scene> {

    @Override
    public Scene convert(final SceneDTO dto) {
        final Scene scene = new Scene();

        scene.setIdCreator(dto.getIdCreator());
        scene.setName(dto.getName());
        scene.setApproved(false);
        scene.setDeleted(false);
        scene.setComplete(false);
        scene.setSmallDescription(dto.getSmallDescription());
        scene.setCompleteDescription(dto.getCompleteDescription());
        scene.setTotalplayed(0);
        scene.setTotalComplete(0);
        scene.setRating(0);
        scene.setImage(dto.getImage());
        scene.setNumberReports(0);
        scene.setWorlds(dto.getWorlds());
        scene.setCoins(dto.getCoins());
        scene.setCoinsCount(dto.getCoinsCount());

        return scene;
    }

}
