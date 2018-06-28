package click.myclick.service.dao.scene;

import click.myclick.model.Scene;
import click.myclick.repository.SceneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class BasicSceneService implements SceneService {

    private final SceneRepository repository;

    @Autowired
    public BasicSceneService(final SceneRepository repository) {
        this.repository = repository;
    }

    @Override
    public Scene create(final Scene scene) {
        scene.setCreatedAt(String.valueOf(LocalDateTime.now()));
        return repository.save(scene);
    }

    @Override
    public Scene find(final String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Scene> findAll() {
        return repository.findAll();
    }

    @Override
    public Scene update(final String id, final Scene scene) {
        scene.setId(id);

        final Scene saved = repository.findById(id).get();

        if (saved != null) {
            scene.setCreatedAt(saved.getCreatedAt());
            scene.setUpdatedAt(String.valueOf(LocalDateTime.now()));
        } else {
            scene.setCreatedAt(String.valueOf(LocalDateTime.now()));
        }
        repository.save(scene);
        return scene;
    }

    @Override
    public String delete(final String id) {
        repository.deleteById(id);
        return id;
    }

    @Override
    public SceneRepository getRepository() {
        return repository;
    }
}
