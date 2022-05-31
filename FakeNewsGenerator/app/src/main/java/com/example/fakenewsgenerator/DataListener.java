package com.example.fakenewsgenerator;

import com.example.fakenewsgenerator.models.NewsHeadlines;

import java.util.List;

public interface DataListener<NewsApiResponse> {
    void onFetchData(List<NewsHeadlines> list, String message);
    void omError(String message);


}
