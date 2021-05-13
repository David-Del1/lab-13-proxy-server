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

export function formatReviews(data) {
  const arr = data.businesses.map(rest => {
    return {
      name: rest.name,
      image_url: rest.image_url,
      price: rest.price,
      rating: rest.rating,
      url: rest.url
    };
  });

  return arr.slice(0, 1);
}
