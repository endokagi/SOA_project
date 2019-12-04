/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soafinal.repository;

import com.soafinal.bean.GoogleApp;
import com.soafinal.bean.GoogleUserReviews;
import java.sql.ResultSet;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Thewlip
 */
@Repository
public class GooglePlayRepository implements IGooglePlayRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<GoogleApp> findApp() {
        return jdbcTemplate.query("select * from google_app",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

//    freeApp
    @Override
    public List<GoogleApp> topFreeApp() {
        return jdbcTemplate.query("select * from google_app where price = 0 limit 6",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> FreeApp() {
        return jdbcTemplate.query("select * from google_app where price = 0",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

//    
//    Recommended
    @Override
    public List<GoogleApp> topRecommendedApp() {
        return jdbcTemplate.query("select * from google_app where rating like 5 limit 6",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> RecommendedApp() {
        return jdbcTemplate.query("select * from google_app where rating like 5",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }
//

//   searchApp
    @Override
    public List<GoogleApp> searchApp(String app) {
        return jdbcTemplate.query("select * from google_app where app like ?",
                new Object[]{"%" + app + "%"},
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

//    reviewApp
    @Override
    public List<GoogleApp> selectApp(String app) {
        return jdbcTemplate.query("select * from google_app where app = ?",
                new Object[]{app},
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleUserReviews> selectReviews(String app) {
        return jdbcTemplate.query("select * from google_user_reviews where app = ?",
                new Object[]{app},
                (rs, rowNum)
                -> new GoogleUserReviews(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5)
                )
        );
    }

    @Override
    public List<GoogleApp> searchbyCategory() {
        return jdbcTemplate.query("select * from google_app group by category",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> searchbyRating() {
        return jdbcTemplate.query("select * from google_app group by rating",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> searchbyType() {
        return jdbcTemplate.query("select * from google_app group by type",
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> findAppByCate(String category) {
        return jdbcTemplate.query("select * from google_app where category like ?",
                new Object[]{"%" + category + "%"},
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> findAppByRating(String rating) {
        return jdbcTemplate.query("select * from google_app where rating like ?",
                new Object[]{"" + rating + "%"},
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> findAppByType(String type) {
        return jdbcTemplate.query("select * from google_app where type like ?",
                new Object[]{"%" + type + "%"},
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    @Override
    public List<GoogleApp> searchprice(float price) {
        return jdbcTemplate.query("select * from google_app where price <= ? order by price DESC",
                new Object[]{price},
                (rs, rowNum)
                -> new GoogleApp(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getFloat(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13)
                )
        );
    }

    
}
