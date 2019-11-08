import React from 'react';

class Photorender extends React.Component{
  render() {
    console.log(this.props)
    return (
      <button onClick={this.getData} className="btn btn-primary">Get API Data</button>
    );
  }  
} 
export default Photorender;
