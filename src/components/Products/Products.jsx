import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './style';

const products = [
  {
    id: 1,
    name: 'Macebook Pro',
    description: 'This is the amazing macebook pro.',
    price: '$1299',
    image:
      'https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Surface Pro',
    description: 'This is the amazing surface pro.',
    price: '$1299',
    image:
      'https://images.unsplash.com/photo-1617780421749-ebd0ef657b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product value={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
