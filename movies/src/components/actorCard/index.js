import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ActorCard = ({ actor }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar alt={actor.name} src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} />
        }
        title={actor.name}
        subheader={`Popularity: ${actor.popularity}`}
      />
      <CardContent>
        {/* You can add additional information about the actor here */}
      </CardContent>
    </Card>
  );
};

export default ActorCard;