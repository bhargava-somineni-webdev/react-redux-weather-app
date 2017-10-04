import React, { Component } from 'react';

class GoogleMap extends Component {
    //componentDidMount() gets called right after the jsx of the component
    //is rendered to the screen
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        //ref is used so that we can call this particular div anywhere inside our component 
        //by using this.refs.map. This is provided by React for selecting elements
        return <div ref="map"></div>
    }

}

export default GoogleMap;