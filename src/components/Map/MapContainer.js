import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Map 
        google={this.props.google} zoom={14}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
      >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBKjQ7O0KZo8bUmUlRxN-w1maCu0KRdGZA')
})(MapContainer)

// Geocoding