import React from 'react';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';
import Albums from '../layout/Albums';
import Books from '../layout/Books';

const Favorites = () =>
  <div>
      <Albums />
      <Books />
      <BackArrow />
      <Footer />
  </div>

export default Favorites;
