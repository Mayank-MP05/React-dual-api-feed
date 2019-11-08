import React from 'react';
import { Link , Switch , Route , Router} from 'react-router-dom';

class Navbar extends React.Component{
  render() {
    return (
      <div className="navbar navbar-light bg-light">
        <a className="navbar-brand">MP-5 Digital Networks</a>
        <div style={{display:'flex',flexDirection:'row'}}>
          <Link to='/feed' style={this.linkStyle}><h4>Data-Show</h4></Link>
          <Link to='/about' style={this.linkStyle}><h4>About</h4></Link>
          <Link to='/contact' style={this.linkStyle}><h4>Contact</h4></Link>
        </div>
      </div>
    );
  }  

  linkStyle = {
    marginLeft:10,
    marginRight:10,
    textDecoration:'none'
  }

} 
export default Navbar;
