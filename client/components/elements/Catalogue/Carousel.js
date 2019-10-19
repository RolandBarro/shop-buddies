
import { Carousel } from 'react-bootstrap';

export default function CarouselComponent(props) {
  const { items } = props;
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/72529431_143341606948211_4179558664308260864_n.jpg?_nc_cat=109&_nc_oc=AQn3QqK_7mX9pzOTTKmRgvCGBj-z1YQzpjuRDqiEEyY0X6n9cQPX7CsH-5_Vsw1M8iY&_nc_ht=scontent.fcgy1-1.fna&oh=c59a905c56eba629f3906cb1bc04512f&oe=5E1DB645"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/72529431_143341606948211_4179558664308260864_n.jpg?_nc_cat=109&_nc_oc=AQn3QqK_7mX9pzOTTKmRgvCGBj-z1YQzpjuRDqiEEyY0X6n9cQPX7CsH-5_Vsw1M8iY&_nc_ht=scontent.fcgy1-1.fna&oh=c59a905c56eba629f3906cb1bc04512f&oe=5E1DB645"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

