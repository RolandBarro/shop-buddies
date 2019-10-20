
import { Carousel } from 'react-bootstrap';

export default function CarouselComponent(props) {
  const { item } = props;

  return (
    <Carousel>
      {item.products && item.products.map((product) => {
          return (
            <Carousel.Item key={ `car-${product.id}` }>
              <img
                className="d-block w-100"
                src={ product.imgSrc[0] }
                alt="product-image"
              />
              <Carousel.Caption>
                <h3 className="text-truncate text-uppercase">{ product.prodName }</h3>
                <p>{ product.shortDescription }</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

