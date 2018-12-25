import React from 'react';

const spinnerStyle = {
  fontSize: '2rem',
  padding: '1rem',
  color: '#E74C3C'
};

 const Spinner = () => (
   <div>
     <i style={spinnerStyle} className="fa fa-spinner fa-spin" />
   </div>
 );

 export default Spinner;
