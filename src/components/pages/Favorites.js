import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';
import Albums from '../layout/Albums';

const Favorites = () =>
  <div>
      <Albums />
      <BackArrow />
      <Footer />
  </div>

export default Favorites;
