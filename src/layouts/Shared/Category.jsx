import React from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    // console.log(categoryNews); 
    return (
      <div>
        <h1>This is a category of </h1>
            {
                categoryNews.map((news,i) => <NewsCard
                    key={i}
                news={news}></NewsCard>)
            }
      </div>
    );
};

export default Category;