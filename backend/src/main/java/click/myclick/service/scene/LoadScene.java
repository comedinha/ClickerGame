package click.myclick.service.scene;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.dto.scene.SceneDTO;
import click.myclick.model.Scene;

import org.springframework.stereotype.Service;


@Service
public class LoadScene {
    public SceneDTO getScene(SceneService service, String idScene) {
        SceneDTO dto = new SceneDTO();
        Scene scene = service.find(idScene);

        dto.setIdCreator(scene.getIdCreator());
        dto.setName(scene.getName());
        dto.setSmallDescription(scene.getSmallDescription());
        dto.setCompleteDescription(scene.getCompleteDescription());
        dto.setImage(scene.getImage());
        dto.setWorlds(scene.getWorlds());
        dto.setCoins(scene.getCoins());
        dto.setCoinsCount(scene.getCoinsCount());
        
        return dto;
    }
}