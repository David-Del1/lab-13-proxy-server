import { formatLocations, formatWeather } from '../lib/munge-utils';
import locationData from '../data/location';
import weatherData from '../data/weather';

describe('API data mugging', () => {

  const expectedGeo =
  {
    formatted_query: 'Portland, Multnomah County, Oregon, USA',
    latitude: '45.5202471',
    longitude: '-122.6741949'
  };



  it('munges geo data', async () => {

    const output = formatLocations(locationData);

    expect(output).toEqual(expectedGeo);
  });



  it('munges weather data', async () => {

    const expectedWeather = 
    [
      {
        'forecast': 'Few clouds',
        'time': '2021-05-13',
      },
      {
        'forecast': 'Few clouds',
        'time': '2021-05-14',
      },
    ];
    const output = formatWeather(weatherData);

    expect(output).toEqual(expectedWeather);
  });


});
