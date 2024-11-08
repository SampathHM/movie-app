import React, { useState } from 'react';
import '../Css/Feed2.css';

const Feed2 = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= movies.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="feed2-container">
      <div className="feed2-header">
        <h2 className="feed-heading">Top Movies of the Week</h2>
      </div>
      <div className="carousel-wrapper">
        <button onClick={handlePrev} className="carousel-btn prev">❮</button>
        <div className="carousel">
          {movies.slice(currentIndex, currentIndex + 3).map((movie, index) => (
            <div key={index} className="carousel-item">
              <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
              <p className="movie-name">{movie.title}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="carousel-btn next">❯</button>
      </div>
    </div>
  );
};

export default Feed2;
