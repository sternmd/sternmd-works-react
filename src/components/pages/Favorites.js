import React from 'react';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';
import Albums from '../layout/Albums';
import Books from '../layout/Books';
import Films from '../layout/Films';

const Favorites = () =>
  <div>
      <Albums />
      <Films />
      <Books />
      <BackArrow />
      <Footer />
  </div>

export default Favorites;
