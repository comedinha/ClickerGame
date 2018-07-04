package click.myclick.service.dao.review;

import click.myclick.repository.ReviewRepository;
import click.myclick.model.Review;

import java.util.List;


public interface ReviewService {

    Review create(Review object);

    Review find(String id);

    List<Review> findAll();

    Review update(String id, Review object);

    String delete(String id);
    
    ReviewRepository getRepository();    
}
