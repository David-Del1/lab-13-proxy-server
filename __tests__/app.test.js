import { formatLocations } from '../lib/munge-utils';
import locationData from '../data/location';

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


});
