package click.myclick.controller.lobby;

import click.myclick.service.dao.review.ReviewService;
import click.myclick.service.scene.ReviewUtility;
import click.myclick.dto.ReviewDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/getReview")
public class GetReviewSceneController {

    private final ReviewUtility reviewUtility;
    private final ReviewService reviewService;

    @Autowired
    public GetReviewSceneController(final ReviewUtility reviewUtility, final ReviewService reviewService) {
        this.reviewUtility = reviewUtility;        
        this.reviewService = reviewService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> getAddNews(@RequestBody final ReviewDTO dto) {

        return new ResponseEntity<>(reviewUtility.getReviewScene(reviewService), HttpStatus.OK);
    }
}
