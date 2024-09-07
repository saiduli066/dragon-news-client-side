import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData();
    const {_id,title,details,image_url,category_id} = news;
    return (
      <div>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`}>
              <Button variant="primary">All news this category</Button>
            </Link>{" "}
          </Card.Body>
        </Card>
      </div>
    );
};

export default News;