package click.myclick.service.scene;

import click.myclick.service.dao.review.ReviewService;
import click.myclick.dto.ReviewDTO;
import click.myclick.model.Review;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ReviewUtility {    
    
    public void setReview(ReviewService service, ReviewDTO dto) {
        Review review = new Review();

        review.setReview(dto.getReview());
        review.setScene(dto.getScene());
        review.setScore(dto.getScore());

        service.create(review);
    }

    public double getReviewScene(ReviewService service) {

        List<Review> reviews = service.findAll();
        double soma = 0;

        for(Review rev : reviews) {
            soma += rev.getScore();
        }

        return soma/reviews.size();
    }
}