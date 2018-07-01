package click.myclick.repository;

import click.myclick.model.SaveScene;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SaveSceneRepository extends MongoRepository<SaveScene, String> {
}
