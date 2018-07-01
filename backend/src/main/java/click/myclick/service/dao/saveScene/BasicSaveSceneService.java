package click.myclick.service.dao.saveScene;

import click.myclick.model.SaveScene;
import click.myclick.repository.SaveSceneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class BasicSaveSceneService implements SaveSceneService {

    private final SaveSceneRepository repository;

    @Autowired
    public BasicSaveSceneService(final SaveSceneRepository repository) {
        this.repository = repository;
    }

    @Override
    public SaveScene create(final SaveScene save) {
        save.setCreatedAt(String.valueOf(LocalDateTime.now()));
        return repository.save(save);
    }

    @Override
    public SaveScene find(final String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<SaveScene> findAll() {
        return repository.findAll();
    }

    @Override
    public SaveScene update(final String id, final SaveScene save) {
        save.setId(id);

        final SaveScene saved = repository.findById(id).get();

        if (saved != null) {
            save.setCreatedAt(saved.getCreatedAt());
            save.setUpdatedAt(String.valueOf(LocalDateTime.now()));
        } else {
            save.setCreatedAt(String.valueOf(LocalDateTime.now()));
        }
        repository.save(save);
        return save;
    }

    @Override
    public String delete(final String id) {
        repository.deleteById(id);
        return id;
    }

    @Override
    public SaveSceneRepository getRepository() {
        return repository;
    }
}
