import React, { Component } from 'react'

export class LocationDisplay extends Component {
  constructor(props){
    super(props);
    this.state={error:false,latitude:null,longitude:null}
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (msg) => {
        console.log(msg.coords.latitude) 
        console.log(msg.coords.longitude) 
        this.setState({error:false,latitude:msg.coords.latitude,longitude:msg.coords.longitude})
        
      }
       ,
      (err) => {
        console.log(err)
        this.setState({error:true})
      }
    );
    
  }


  render() {

    if(this.state.error==false){
      return (
        <div>
          <h3>Lat: {this.state.latitude}</h3>
          <h3>Long: {this.state.longitude}</h3>
        </div>
      )
    }
    else{ // error, display error message
      return (<h3>Error: Location not found</h3>);
    }


  }
}

export default LocationDisplay
