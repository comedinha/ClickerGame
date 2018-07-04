package click.myclick.service.game;

import click.myclick.service.dao.game.SaveGameService;
import click.myclick.dto.scene.SaveDTO;
import click.myclick.model.SaveGame;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SaveLoad {

    public String save(SaveGameService service, SaveDTO dto) {
        
        try {
            List<SaveGame> saves = service.findAll();

            for(SaveGame save : saves) {
                if(save.getIdplayer().equals(dto.getIdplayer()) && save.getIdscene().equals(dto.getIdscene())) {
                    save.setIdscene(dto.getIdscene());
                    save.setIdplayer(dto.getIdplayer());
                    save.setBuyeditems(dto.getBuyeditems());
                    save.setBuyedupgrades(dto.getBuyedupgrades());
                    save.setClickcount(dto.getClickcount());
                    save.setCoins(dto.getCoins());

                    return service.getRepository().save(save).getId();
                }
            }

            SaveGame save = new SaveGame();

            save.setIdscene(dto.getIdscene());
            save.setIdplayer(dto.getIdplayer());
            save.setBuyeditems(dto.getBuyeditems());
            save.setBuyedupgrades(dto.getBuyedupgrades());
            save.setClickcount(dto.getClickcount());
            save.setCoins(dto.getCoins());
            
            return service.create(save).getId();
        } catch(Exception e) {
            System.out.println(e);
            return "";
        }
    }

    public SaveDTO load(SaveGameService service, String idPlayer, String idScene) {
    
        List<SaveGame> saves = service.findAll();
        SaveDTO dto = new SaveDTO();

        for(SaveGame save : saves) {
            if(save.getIdplayer().equals(dto.getIdplayer()) && save.getIdscene().equals(dto.getIdscene())) {
                dto.setIdsave(save.getId());
                dto.setIdscene(save.getIdscene());
                dto.setIdplayer(save.getIdplayer());
                dto.setBuyeditems(save.getBuyeditems());
                dto.setBuyedupgrades(save.getBuyedupgrades());
                dto.setClickcount(save.getClickcount());
                dto.setCoins(save.getCoins());

                return dto;
            }
        }
        
        return dto;
    }
}
