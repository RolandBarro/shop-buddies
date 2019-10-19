import React from 'react';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap'

import CarouselComponent from './Catalogue/Carousel';

export default class Catalogues extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Row>
          <CarouselComponent />
        </Row>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}