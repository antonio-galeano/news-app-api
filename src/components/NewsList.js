import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://gnews.io/api/v4/top-headlines?category=technology&lang=es&apikey="YOUR_API_KEY"');
            console.log(response);
            setArticles(response.data.articles);
        }
        getArticles();
    }, []);

    return (
        <div>
            <header>
                <h1>Actualidad tecnológica</h1>
                <h2 className="centered-text">Los principales titulares de noticias sobre tecnología en español según Google News.</h2>
            </header>
            {articles.map((article, index) => (
                <NewsItem
                    key={article.url + article.title} // Using both URL and title as keys
                    title={article.title}
                    source={article.source}
                    publishedAt={article.publishedAt}
                    description={article.description}
                    content={article.content}
                    url={article.url}
                    image={article.image}
                />
            ))}
        </div>
    );
};

export default NewsList;
