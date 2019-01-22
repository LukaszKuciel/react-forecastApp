import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const cityname = cityData.city.name;
        let temps = [];
        let pressure  = [];
        let humidity = [];

        cityData.list.map(weather => {
            temps.push(weather.main.temp - 273.15);
            pressure.push(weather.main.pressure);
            humidity.push(weather.main.humidity);
        })
        
        const { lat, lon } = cityData.city.coord;
        
        return (
            <tr key={cityname}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="orange" unit="C"/></td>
                <td><Chart data={pressure} color="green" unit="hPa"/></td>
                <td><Chart data={humidity} color="blue" unit="%"/></td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);