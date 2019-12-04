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
public class GoogleApp {
    
    private final String app,category,rating,size,installs,type,content_rating,genres,last_updated,current_Ver,android_Ver;
    private final int reviews;
    private final float price;
    
    public GoogleApp(String app,String category,String rating,int reviews,String size,String installs,String type
            ,float price,String content_rating,String genres,String last_updated,String current_Ver,String android_Ver) {
        this.app = app;
        this.category = category;
        this.rating = rating;
        this.reviews = reviews;
        this.size = size;
        this.installs = installs;
        this.type = type;
        this.price = price;
        this.content_rating = content_rating;
        this.genres = genres;
        this.last_updated = last_updated;
        this.current_Ver = current_Ver;
        this.android_Ver = android_Ver;
    }

    public String getApp() {
        return app;
    }

    public String getCategory() {
        return category;
    }

    public String getRating() {
        return rating;
    }

    public int getReviews() {
        return reviews;
    }

    public String getSize() {
        return size;
    }

    public String getInstalls() {
        return installs;
    }

    public String getType() {
        return type;
    }

    public float getPrice() {
        return price;
    }

    public String getContent_rating() {
        return content_rating;
    }

    public String getGenres() {
        return genres;
    }

    public String getLast_updated() {
        return last_updated;
    }

    public String getCurrent_Ver() {
        return current_Ver;
    }

    public String getAndroid_Ver() {
        return android_Ver;
    }

}
