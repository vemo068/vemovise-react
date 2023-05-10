import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const Container = styled('div')({
  fontFamily: 'Roboto, sans-serif',
  height: '100%',
  overflow: 'auto',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 3fr))',
  gap: '1rem',
  padding: '1rem',
});

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  borderRadius: '8px',
  padding: '1rem',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const Image = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem',
});

const Title = styled('h3')({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const Genre = styled('p')({
  fontSize: '1rem',
  marginBottom: '0.5rem',
});

const Rating = styled('p')({
  fontSize: '1rem',
});

const Feed = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.omdbapi.com/?apikey=2efb5c8f&s=Batman&page=2')
      .then(response => {
        setMovies(response.data.Search);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <Container>
      {movies.map(movie => (
        <Card key={movie.id}>
          <Image src={movie.Poster} alt={movie.Title} />
          <Title>{movie.Title}</Title>
          <Genre>{movie.Year}</Genre>
          <Rating>IMDb Rating: 5</Rating>
        </Card>
      ))}
    </Container>
  );
};

export default Feed;
