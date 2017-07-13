import Axios from 'axios';
import myConfig from '../config.js';

export default {

    fetchGoogleApiCoordinates: () => {
        return Axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key='+myConfig.googleLocation
            ).then(response => {
                //console.log("",response.data);
                var position = response.data;
                return position;
            }).catch(error => {
                console.log("error getting coordinates",error)
            });

    },

    fetchGoogleGeocodingLocation: (lat,lon) => {

        return Axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'&key=' + myConfig.googleGeocoding
            ).then(response => {
                console.log("location",response.data);
                var position = response.data;
                return position;
            }).catch(error => {
                console.log("error getting location",error)
            });
    },

    getCityFromLocationResponse: (location) => {
        return location.results[2].address_components[2].long_name;
    },

    fetchDarkSkyWeather: function(lat,lon) {
        return Axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + myConfig.darkSky +
        '/' + lat + ',' + lon + '?units=si&lang=fi&exclude=[flags,alerts]'
        ).then(response => {
            console.log("weather",response);
            return response.data;
        }).catch(error => {
            console.log("error getting weather",error)
        });
    }
} 