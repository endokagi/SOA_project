/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soafinal.repository;

import com.soafinal.bean.GoogleApp;
import com.soafinal.bean.GoogleUserReviews;
import java.util.List;

/**
 *
 * @author Thewlip
 */
public interface IGooglePlayRepository {
    
    List<GoogleApp> findApp();
    List<GoogleApp> topFreeApp();
    List<GoogleApp> FreeApp();
    List<GoogleApp> topRecommendedApp();
    List<GoogleApp> RecommendedApp();
    
    List<GoogleApp>searchApp(String app);
    List<GoogleApp>selectApp(String app);
    List<GoogleUserReviews> selectReviews(String app);
    
    List<GoogleApp> findAppByCate(String category);
    List<GoogleApp> findAppByRating(String rating);
    List<GoogleApp> findAppByType(String type);
    
    List<GoogleApp>searchbyCategory();
    List<GoogleApp>searchbyRating();
    List<GoogleApp>searchbyType();
    List<GoogleApp>searchprice(float price);
}
