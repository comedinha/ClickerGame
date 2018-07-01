package click.myclick.service.dao.saveScene;

import click.myclick.repository.SaveSceneRepository;
import click.myclick.model.SaveScene;

import java.util.List;


public interface SaveSceneService {

    SaveScene create(SaveScene object);

    SaveScene find(String id);

    List<SaveScene> findAll();

    SaveScene update(String id, SaveScene object);

    String delete(String id);
    
    SaveSceneRepository getRepository();
    
}
