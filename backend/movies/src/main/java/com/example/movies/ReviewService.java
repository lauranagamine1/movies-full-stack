package com.example.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewsRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Reviews createReview(String reviewBody, String imdbId){
        Reviews review = repository.insert(new Reviews(reviewBody));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                    .apply(new Update().push("reviewIds").value(review.getId()))
                    .first();

        return review;
    }

    public List<Reviews> getReviews(){
        List<Reviews> review = repository.findAll();
        return review;

    }
}
