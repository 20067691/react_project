import React from 'react';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StarRateIcon from '@mui/icons-material/StarRate';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import img from '../../images/film-poster-placeholder.png'
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const TopRatedMovieCard = ({ topRatedMovie}) => {
    return (
      <Card sx={{ display: 'flex', maxWidth: 600, marginBottom: 2, marginLeft: 2 }}>
        <CardMedia
          sx={{ width: 200, minWidth: 200 }}
          component="img"
          image={
            topRatedMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${topRatedMovie.poster_path}`
              : img // Replace with a fallback image URL or handle as needed
          }
          alt={topRatedMovie.title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ backgroundColor: 'red' }}>
                <StarRateIcon />
              </Avatar>
            }
            title={
              <Typography variant="h5" component="p">
                {topRatedMovie.title}{" "}
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {topRatedMovie.release_date}
            </Typography>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {topRatedMovie.vote_average}{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {topRatedMovie.overview}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', marginBottom: 1 }}>
          <CardActions disableSpacing>
            <Link to={`/movies/${topRatedMovie.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
            </Link>
            </CardActions>
          </Box>
        </Box>
      </Card>
    );
  };
  
  export default TopRatedMovieCard;

