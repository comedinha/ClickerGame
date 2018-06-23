package click.myclick.service.dao.news;

import click.myclick.repository.NewsRepository;
import click.myclick.model.News;

import java.util.List;


public interface NewsService {

    News create(News object);

    News find(String id);

    List<News> findAll();

    News update(String id, News object);

    String delete(String id);
    
    NewsRepository getRepository();
    
}
