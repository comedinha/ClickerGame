package click.myclick.service.dao.game;

import click.myclick.repository.SaveGameRepository;
import click.myclick.model.SaveGame;

import java.util.List;

public interface SaveGameService {

    SaveGame create(SaveGame object);

    SaveGame find(String id);

    List<SaveGame> findAll();

    SaveGame update(String id, SaveGame object);

    String delete(String id);
    
    SaveGameRepository getRepository();
    
}
