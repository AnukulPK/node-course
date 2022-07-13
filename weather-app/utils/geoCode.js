const request = require("request");

const geoCode = (address, callback) => {
  const geoCodeUrl = `http://api.positionstack.com/v1/forward?access_key=61031a5344a762633525f3b1fd0f8874&query=${encodeURIComponent(
    address
  )}`;

  request({ url: geoCodeUrl, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to geo coding service", undefined);
    } else if (body.error) {
      callback("Unable to get location", undefined);
    } else {
      const data2 = body.data[0];
      const latitude = data2.latitude;
      const longitude = data2.longitude;
      const placeName = data2.name;
      callback(undefined, {
        longitude: longitude,
        latitude: latitude,
        location: placeName,
      });
    }
  });
};

module.exports = geoCode;
