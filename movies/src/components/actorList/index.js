import React from 'react';
import Grid from '@mui/material/Grid';
import ActorCard from '../actorCard';

const ActorList = ({ actors }) => {
    console.log("Actor list", actors);
  return (
    <Grid container spacing={2}>
      {actors.map((actor) => (
        <Grid item key={actor.id} xs={12} sm={6} md={4}>
          <ActorCard actor={actor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActorList;