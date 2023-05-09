import React from 'react';
import { styled } from '@mui/material/styles';

const movies = [  {    id: 1,    title: 'The Shawshank Redemption',    genre: 'Drama',    rating: 9.3,    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_FMjpg_UX1800_.jpg'  },  {    id: 2,    title: 'The Godfather',    genre: 'Crime, Drama',    rating: 9.2,    imageUrl: 'https://www.imdb.com/title/tt0068646/mediaviewer/rm3354267136'  },  {    id: 3,    title: 'The Dark Knight',    genre: 'Action, Crime, Drama',    rating: 9.0,    imageUrl: 'https://www.imdb.com/title/tt0468569/mediaviewer/rm1368828928'  },  {    id: 4,    title: 'Schindler\'s List',    genre: 'Biography, Drama, History',    rating: 8.9,    imageUrl: 'https://www.imdb.com/title/tt0108052/mediaviewer/rm4156924416'  },  {    id: 5,    title: 'The Lord of the Rings: The Return of the King',    genre: 'Action, Adventure, Drama',    rating: 8.9,    imageUrl: 'https://www.imdb.com/title/tt0167260/mediaviewer/rm1141785856'  },];

const Container = styled('div')({
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
  return (
    <Container >
      {movies.map(movie => (
        <Card key={movie.id}>
          <Image src={movie.imageUrl} alt={movie.title} />
          <Title>{movie.title}</Title>
          <Genre>{movie.genre}</Genre>
          <Rating>IMDb Rating: {movie.rating}</Rating>
        </Card>
      ))}
    </Container>
  );
};

export default Feed;
