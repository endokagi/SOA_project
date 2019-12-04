/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soafinal.controller;

import com.soafinal.bean.GoogleApp;
import com.soafinal.bean.GoogleUserReviews;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.soafinal.repository.IGooglePlayRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author Thewlip
 */
@RestController
public class GooglePlayController {

    @Autowired
    private IGooglePlayRepository googleplayservice;

    @CrossOrigin
    @RequestMapping("/findapp")
    public List<GoogleApp> findApp() {
        return googleplayservice.findApp();
    }

//    freeApp
    @CrossOrigin
    @RequestMapping("/topfreeapp")
    public List<GoogleApp> topFreeApp() {
        return googleplayservice.topFreeApp();
    }

    @CrossOrigin
    @RequestMapping("/freeapp")
    public List<GoogleApp> AllFreeApp() {
        return googleplayservice.FreeApp();
    }
//    

//    Recommended
    @CrossOrigin
    @RequestMapping("/topRecommended")
    public List<GoogleApp> topRecommended() {
        return googleplayservice.topRecommendedApp();
    }

    @CrossOrigin
    @RequestMapping("/Recommended")
    public List<GoogleApp> Recommended() {
        return googleplayservice.RecommendedApp();
    }
//   

//    searchby
    @CrossOrigin
    @RequestMapping("/searchbyCategory")
    public List<GoogleApp> searchCategory() {
        return googleplayservice.searchbyCategory();
    }

    @CrossOrigin
    @RequestMapping("/searchbyRating")
    public List<GoogleApp> searchRating() {
        return googleplayservice.searchbyRating();
    }

    @CrossOrigin
    @RequestMapping("/searchbyType")
    public List<GoogleApp> searchType() {
        return googleplayservice.searchbyType();
    }

    @CrossOrigin
    @RequestMapping("/searchbyApp/{app}")
    public List<GoogleApp> searchApp(@PathVariable("app") String app) {
        return googleplayservice.searchApp(app);
    }
    
//    
    @CrossOrigin
    @RequestMapping("/selectApp/{app}")
    public List<GoogleApp> selectApp(@PathVariable("app") String app) {
        return googleplayservice.selectApp(app);
    }
    
    @CrossOrigin
    @RequestMapping("/reviewApp/{app}")
    public List<GoogleUserReviews> reviewsApp(@PathVariable("app") String app) {
        return googleplayservice.selectReviews(app);
    }
    
//    
    @CrossOrigin
    @RequestMapping("/category/{category}")
    public List<GoogleApp> findACategory(@PathVariable("category") String category) {
        return googleplayservice.findAppByCate(category);
    }

    @CrossOrigin
    @RequestMapping("/rating/{rating}")
    public List<GoogleApp> findARating(@PathVariable("rating") String rating) {
        return googleplayservice.findAppByRating(rating);
    }

    @CrossOrigin
    @RequestMapping("/type/{type}")
    public List<GoogleApp> findAType(@PathVariable("type") String type) {
        return googleplayservice.findAppByType(type);
    }
    
     @CrossOrigin
    @RequestMapping("/price/{price}")
    public List<GoogleApp> findAPrice(@PathVariable("price") float price) {
        return googleplayservice.searchprice(price);
    }

}
