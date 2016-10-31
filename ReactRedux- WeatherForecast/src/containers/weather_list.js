import React, { Component } from 'react';
import { connect } from'react-redux'; 
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData){

		const cityName = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure= cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		return (
				<tr key = {cityData.city.name}>
				<td>
				 {cityData.city.name}
				</td>
				<td>
					<Chart color="red" data ={temps} />
					
				</td>
				<td>
				<Chart color="green" data ={pressure} />

				</td>
				<td>

					<Chart color="black" data ={humidity} />
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);