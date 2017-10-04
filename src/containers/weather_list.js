import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        //below citydata contains a list which holds list of temps, pressures, humidities
        //citydata has a data of each city in form of 
        //{city: {name:'Newyork'},
         //list: [
                //{main: {temp:60, humidity:40, pressure:100}} 
        //]}
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            //instead of using Sparklines tag repeatedly, we make a chart component and send data and build our
            //sparkline html(jsx) inside that file
            //data, color and units are available as props inside the Chart component
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="red" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="green" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>                    
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            //weather made available through this.props is an array.
            //and we use map on that array. This means we are looping through each and every item
            //of weather array, building a html row out of that item. We then display it as list of cities
            //in our ui
        );
    }
}

//mapStateToProps takes state as parameter. We need weather property on state object
//using es6 object destructuring we are now using {weather} (available on state.weather) as paramter
//instead of state
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList); 