/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soafinal.bean;

/**
 *
 * @author Thewlip
 */
public class GoogleUserReviews {
    private final String app,translated_reviews,sentiment,sentiment_polarity,sentiment_subjectivity;

    public GoogleUserReviews(String app,String translated_reviews,String sentiment,String sentiment_polarity,String sentiment_subjectivity) {
        this.app = app;
        this.translated_reviews = translated_reviews;
        this.sentiment = sentiment;
        this.sentiment_polarity = sentiment_polarity;
        this.sentiment_subjectivity = sentiment_subjectivity;
    }

    public String getApp() {
        return app;
    }

    public String getTranslated_reviews() {
        return translated_reviews;
    }

    public String getSentiment() {
        return sentiment;
    }

    public String getSentiment_polarity() {
        return sentiment_polarity;
    }

    public String getSentiment_subjectivity() {
        return sentiment_subjectivity;
    }
    
    
    
    
}
