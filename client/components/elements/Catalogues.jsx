import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap'

import CarouselComponent from './Catalogue/Carousel';

export default function Catalogues(props) {

  const listings = [
    {
      id: 1,
      listing: 'electronics',
      products: [
        {
          id: 1,
          prodName: 'IN1 PORTABLE GAMEPAD',
          shortDescription: '3IN1 PORTABLE GAMEPAD',
          decription: 'The product is a three in one unit covering functions of phone game lever, cellphone holder and hand phone joystick.',
          price: 120,
          shipping: 30,
          imgSrc: [
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/72529431_143341606948211_4179558664308260864_n.jpg?_nc_cat=109&_nc_oc=AQn3QqK_7mX9pzOTTKmRgvCGBj-z1YQzpjuRDqiEEyY0X6n9cQPX7CsH-5_Vsw1M8iY&_nc_ht=scontent.fcgy1-1.fna&oh=c59a905c56eba629f3906cb1bc04512f&oe=5E1DB645',
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/75237551_143341600281545_6725927714773008384_n.jpg?_nc_cat=106&_nc_oc=AQnwhbDY26xg_NoAa3NoNL33y8-TG9oSMFBR9Uf6rSCNYYPeuDyo1TmlNeNSTPmt3c8&_nc_ht=scontent.fcgy1-1.fna&oh=4987e6539058cfc3f8c4f7501887aa63&oe=5E2DBADC',
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/74226615_143341656948206_1367675160806555648_n.jpg?_nc_cat=103&_nc_oc=AQkE2wsNxFKKF2L3xsGUfrR-3epORIV8Q_FlnMM9G2w84lFXAKuPzocIDYYh6DRqgmY&_nc_ht=scontent.fcgy1-1.fna&oh=35dcd281eda7d04d68c5da5b0188e0d6&oe=5E5E94DC'
          ]
        },
        {
          id: 2,
          prodName: 'Apple iPad Air',
          shortDescription: 'MD786LL/A Wi-Fi 32GB, 9.7in',
          decription: `
            -9.7-inch (diagonal) LED-backlit Multi-Touch display with IPS technology (2048 x 1536)
            -A7 chip with 64-bit architecture and M7 motion coprocessor
            -Wi-Fi (802.11a, b, g, n) with MIMO; 32 GB capacity, Bluetooth 4.0
            -5-megapixel iSight camera
            -charger and case not includes
          `,
          price: 320,
          shipping: 50,
          imgSrc: [
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/72408803_2402044619844302_7052501802301784064_n.jpg?_nc_cat=110&_nc_oc=AQm4yF2ZZkVlBZVVHe7Rv03MlY4KugVIY-W3yqrPFN0CwLbD0EBonrLH4TRu4lLFtD8&_nc_ht=scontent.fcgy1-1.fna&oh=20a54a14b84fb682608792f4df37bc09&oe=5E1DA8D5',
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/72477262_2402031136512317_949339560855207936_n.jpg?_nc_cat=103&_nc_oc=AQnHbrjPSe4G6wKyj6gVwYhq4vedSxmtSq5Qw1VPa_Pjhh0QObocI8NYuKUMQfY9K4g&_nc_ht=scontent.fcgy1-1.fna&oh=ab1e168939fbf2487de0286e1c2fc305&oe=5E5D0530',
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/73067458_2402044929844271_6468935499053531136_n.jpg?_nc_cat=108&_nc_oc=AQmzCX-mrj9mqv_jwcFzmb7-bZHCq6zfjS6OJ4TJ30Fzph2O4Glh4CHoUnQVX1plVbw&_nc_ht=scontent.fcgy1-1.fna&oh=70686699e2c06d45ea49f653f4c856be&oe=5E18BE11',
          ]
        }
      ]
    },
    {
      id: 2,
      listing: 'apparell',
      products: [
        {
          id: 3,
          prodName: 'KOREAN SHOES FOR MEN',
          shortDescription: 'Korean  SHOES  for  MEN',
          decription: 'avail size :  39 - 44',
          price: 120,
          shipping: 30,
          imgSrc: [
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/73064783_185953142565709_6334722435388014592_n.jpg?_nc_cat=107&_nc_oc=AQnx0u16voFxFfv3DyO48G-rZyKOzYROn_qSetOSEzmDv0GH2veSk8KNKvlFBuccmpY&_nc_ht=scontent.fcgy1-1.fna&oh=13745a9363b73622e6bae60d1c5f425f&oe=5E304363',
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/72915901_185953159232374_881729345322745856_n.jpg?_nc_cat=111&_nc_oc=AQkRYYnJ4ep-lFQwmuuUl2GdTDpmF1qddpjli_Qcg1QCyeqZeZvDYuxNNNU4ZODGirw&_nc_ht=scontent.fcgy1-1.fna&oh=89e037e8a4813f4fb77191ab6cfea21f&oe=5E2BEA49',
          ]
        },
        {
          id: 4,
          prodName: 'O R I G I N A L - Shoes',
          shortDescription: 'Shoes',
          decription: `Custom design shoes`,
          price: 320,
          shipping: 50,
          imgSrc: [
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/71103708_2423015227941958_498025333694398464_n.jpg?_nc_cat=100&_nc_oc=AQkW1O3LYe80u8kNRGbfpye0pqbxYg7g_IQsqDaY9MjA_t1l7ssm-TUTOUX8cespXS4&_nc_ht=scontent.fcgy1-1.fna&oh=9d5109c140eef677415a32be1b5f07b7&oe=5E1C1380',
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/72477262_2402031136512317_949339560855207936_n.jpg?_nc_cat=103&_nc_oc=AQnHbrjPSe4G6wKyj6gVwYhq4vedSxmtSq5Qw1VPa_Pjhh0QObocI8NYuKUMQfY9K4g&_nc_ht=scontent.fcgy1-1.fna&oh=ab1e168939fbf2487de0286e1c2fc305&oe=5E5D0530',
            'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/70656144_2423014454608702_5899561554457657344_n.jpg?_nc_cat=104&_nc_oc=AQnwYG_7yHEzi0ybuW9-nIUU2-EQ-jpwQRBKVYh1sAsMG-CbZ6v3EN9RZlrDFG3npTg&_nc_ht=scontent.fcgy1-1.fna&oh=c06ec80ed1480d0d8232e5dd1e901b9f&oe=5E23F193',
          ]
        }
      ]
    }
  ];

  return (
    <div className="d-md-flex">
      {listings &&
        listings.map((item, index) => {
          return (
            <Col md={4} key={ `card-${item.id}` }>
              <Card>
                <CarouselComponent item={ item } />
              </Card>
            </Col>
          );
        })
      }
    </div>
  );
}