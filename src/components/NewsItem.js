import React from 'react';
import './newsitem.css';
import './normalize.css';

const NewsItem = ({ title, description, content, url, image, publishedAt, source }) => {
  
  const openOriginalArticle = () => {
    window.open(url, '_blank');
  };

  // Function to format the date in Spanish
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div className='news-app'>
      <div className='news-item'>
        <img className='news-img' src={image} alt={image} />
        <h3>{title}</h3>
        {source && source.name && <p className='no-margin'>Fuente: {source.name}</p>}
        <p className='no-margin'>Fecha: {formatDate(publishedAt)}</p> {/* Format the date here */}
        <h4>{description}</h4>
        <p>{content}</p>
        <button onClick={openOriginalArticle}>Acceder al artículo</button>
      </div>
    </div>
  );
};

export default NewsItem;
