import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainerAllProjects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="grid place-items-center h-screen"
      >
        <Map
          containerStyle={{ maxHeight: "1000px", maxWidth: "2000px" }}
          google={this.props.google}
          zoom={3}
        >
          {this.props.latAndLng.map((eachMarker) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                name={"Current location"}
                position={{ lat: eachMarker.lat, lng: eachMarker.lng }}
              />
            );
          })}

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
             <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> 
        </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBKjQ7O0KZo8bUmUlRxN-w1maCu0KRdGZA",
})(MapContainerAllProjects);
