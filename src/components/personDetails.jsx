import React from 'react';
import axios from 'axios'

class Persondetails extends React.Component{
  state = {
    user : null
  }

  componentWillMount(){
    this.getSingleUserData();
  }

  async getSingleUserData(){
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      user : data.results[0]
    })

  }

  filldata = () => {
    console.log(this.state.user)
  }

  render() {
    if(this.state.user != null){
    const user = this.state.user;
    return (
      <div className="row profile">
        <div className="col-md-6 col-sm-12">
          <div className="profile-sidebar">
            <h4>User ID : {this.props.match.params.identity} => {user.name.first} {user.name.last}  Details:</h4>
            <div className="">
              <img src={user.picture.large} className="img-fluid" alt="" style={{width:"80%",height:`auto`}}/>
            </div>
            
            <div className="profile-usertitle">
              <div className="profile-usertitle-name">
                <h5>{`${user.name.first} ${user.name.last}`}</h5>
              </div>
              <div className="profile-usertitle-job">
                <p>Age : {user.registered.age}</p>
                <p>Date : {user.registered.date}</p>
              </div>
            </div>
            
            <div className="profile-userbuttons">
              <button type="button" className="btn btn-success btn-sm m-2">{user.email}</button>
              <button type="button" className="btn btn-danger btn-sm m-2">{`${user.cell} / ${user.phone}`}</button>
            </div>
           
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="profile-content">
            <hr/>
            <h3>User Location Deatails</h3>
            <hr/>
            <p>State : {user.location.state}</p>
            <p>City : {user.location.city}</p>
            <p>Country : {user.location.country}</p>
            <p>Pincode : {user.location.postcode}</p>
          </div>
          <hr/>
        </div>
      </div>
    );
    }else{
      return(
        <p> Data is Loading ...</p>
      );
    }
  }  
} 
export default Persondetails;
