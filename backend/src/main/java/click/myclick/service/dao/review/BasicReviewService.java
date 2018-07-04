package click.myclick.service.dao.review;

import click.myclick.model.Review;
import click.myclick.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class BasicReviewService implements ReviewService {

    private final ReviewRepository repository;

    @Autowired
    public BasicReviewService(final ReviewRepository repository) {
        this.repository = repository;
    }

    @Override
    public Review create(final Review scene) {
        scene.setCreatedAt(String.valueOf(LocalDateTime.now()));
        return repository.save(scene);
    }

    @Override
    public Review find(final String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Review> findAll() {
        return repository.findAll();
    }

    @Override
    public Review update(final String id, final Review scene) {
        scene.setId(id);

        final Review saved = repository.findById(id).get();

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
    public ReviewRepository getRepository() {
        return repository;
    }
}
