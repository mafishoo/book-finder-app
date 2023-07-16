import React from 'react'
import "./featured.css"
import  { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
export const Featured = (props) => {
  return (
   
<div className="featured">
<h1>Featured</h1>

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{props.books.map((book) => (
<Grid item xs={2} sm={4} md={4}>
<Card key={book.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        edit
        </Button>
        <Button size="small" color="primary">
        delete
        </Button>
      </CardActions>
    </Card>

</Grid>

))}
</Grid>

</div>
  )
}


export default Featured