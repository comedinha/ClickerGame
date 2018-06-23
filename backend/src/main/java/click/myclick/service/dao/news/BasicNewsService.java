package click.myclick.service.dao.news;

import click.myclick.model.News;
import click.myclick.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class BasicNewsService implements NewsService {

    private final NewsRepository repository;

    @Autowired
    public BasicNewsService(final NewsRepository repository) {
        this.repository = repository;
    }

    @Override
    public News create(final News news) {
        news.setCreatedAt(String.valueOf(LocalDateTime.now()));
        return repository.save(news);
    }

    @Override
    public News find(final String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<News> findAll() {
        return repository.findAll();
    }

    @Override
    public News update(final String id, final News news) {
        news.setId(id);

        final News saved = repository.findById(id).get();

        if (saved != null) {
            news.setCreatedAt(saved.getCreatedAt());
            news.setUpdatedAt(String.valueOf(LocalDateTime.now()));
        } else {
            news.setCreatedAt(String.valueOf(LocalDateTime.now()));
        }
        repository.save(news);
        return news;
    }

    @Override
    public String delete(final String id) {
        repository.deleteById(id);
        return id;
    }

    @Override
    public NewsRepository getRepository() {
        return repository;
    }
}
