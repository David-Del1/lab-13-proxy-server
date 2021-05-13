export function formatLocations(data) {

  const obj = data[0];

  return {
    formatted_query: obj.display_name,
    latitude: obj.lat,
    longitude: obj.lon
  };
  
}

export function formatWeather(obj) {
  const arr = obj.data.map(place => {
    return {
      forecast: place.weather.description,
      time: place.datetime
    };
  });
  return arr.slice(0, 2);
}
