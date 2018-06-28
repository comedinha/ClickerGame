package click.myclick.service.dao.scene;

import click.myclick.repository.SceneRepository;
import click.myclick.model.Scene;

import java.util.List;


public interface SceneService {

    Scene create(Scene object);

    Scene find(String id);

    List<Scene> findAll();

    Scene update(String id, Scene object);

    String delete(String id);
    
    SceneRepository getRepository();
    
}
