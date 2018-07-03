package click.myclick.service.dao.game;

import click.myclick.model.SaveGame;
import click.myclick.repository.SaveGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class BasicSaveGameService implements SaveGameService {

    private final SaveGameRepository repository;

    @Autowired
    public BasicSaveGameService(final SaveGameRepository repository) {
        this.repository = repository;
    }

    @Override
    public SaveGame create(final SaveGame save) {
        save.setCreatedAt(String.valueOf(LocalDateTime.now()));
        return repository.save(save);
    }

    @Override
    public SaveGame find(final String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<SaveGame> findAll() {
        return repository.findAll();
    }

    @Override
    public SaveGame update(final String id, final SaveGame save) {
        save.setId(id);

        final SaveGame saved = repository.findById(id).get();

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
    public SaveGameRepository getRepository() {
        return repository;
    }
}
