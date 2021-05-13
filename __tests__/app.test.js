import { formatLocations, formatReviews, formatWeather } from '../lib/munge-utils';
import locationData from '../data/location';
import weatherData from '../data/weather';
import reviewsData from '../data/reviews';

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

  it('munges weather data', async () => {

    const expectedReviews = 
    [
      {
        'name': 'Pike Place Chowder',
        'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
        'price': '$$',
        'rating': 4.5,
        'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=1AWopjGqq8eJ6Ay3x1a9hQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1AWopjGqq8eJ6Ay3x1a9hQ'
      }
    ];
    const output = formatReviews(reviewsData);

    expect(output).toEqual(expectedReviews);
  });


});
