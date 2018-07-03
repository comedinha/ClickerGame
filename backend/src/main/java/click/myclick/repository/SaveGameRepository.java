package click.myclick.repository;

import click.myclick.model.SaveGame;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SaveGameRepository extends MongoRepository<SaveGame, String> {
}
