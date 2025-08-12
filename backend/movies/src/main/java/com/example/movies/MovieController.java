package com.example.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")

public class MovieController {
    @Autowired
    private MovieService service;

    @GetMapping
    public ResponseEntity<List<Movie>> getMovies(){
        var m = new Movie();
        m.setTitle("X");           // <-- ¿compila?
        System.out.println(m.getTitle());

        return new ResponseEntity<List<Movie>>(service.findAllMovies(), HttpStatus.OK);
    }
}
