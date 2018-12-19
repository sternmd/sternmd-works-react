import React from 'react';
import { Link } from 'react-router-dom';

class BackArrow extends React.Component {
  render() {
    return (
      <div className="back" isHidden="mobile" isDisplay="inline">
      <Link to="/"><i class="fas fa-arrow-left"></i> back</Link> 
      </div>
    )
  }
}

export default BackArrow;
