export function formatLocations(data) {

  const obj = data[0];

  return {
    formatted_query: obj.display_name,
    latitude: obj.lat,
    longitude: obj.lon
  };
  
}
