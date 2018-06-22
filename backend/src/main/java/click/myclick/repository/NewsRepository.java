package click.myclick.repository;

import click.myclick.model.News;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NewsRepository extends MongoRepository<News, String> {
}
