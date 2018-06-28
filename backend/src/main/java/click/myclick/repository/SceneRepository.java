package click.myclick.repository;

import click.myclick.model.Scene;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SceneRepository extends MongoRepository<Scene, String> {
}
