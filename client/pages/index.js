import React, { useRef } from 'react'

import HtmlHead from '../components/HtmlHead';
import App from '../components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sass/custom.scss';

const Index = () => {
  const htmlHead = useRef();
  console.log('htmlHead: ', htmlHead);
  return (
    <div>
      <HtmlHead />
      <App />
    </div>
  );
};

export default Index;
