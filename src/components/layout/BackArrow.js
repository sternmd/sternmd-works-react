import React from 'react';
import { Link } from 'react-router-dom';

class BackArrow extends React.Component {
  render() {
    return (
      <div className="back">
      <Link to="/"><i className="fas fa-arrow-left"></i> back</Link>
      </div>
    )
  }
}

export default BackArrow;
