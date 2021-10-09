import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './style';

const Product = ({ value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={value.image}
        alt={value.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography varient="h2" gutterBottom>
            {value.name}
          </Typography>
          <Typography varient="h5" gutterBottom>
            {value.price}
          </Typography>
        </div>
        <Typography varient="body2" color="textSecondary">
          {value.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
