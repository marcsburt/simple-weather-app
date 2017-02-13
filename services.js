//SERVICES
weatherApp.service('cityService', function(){
    
    this.city = "Waltham, MA";
    
});

weatherApp.service('weatherService', ['$resource', function($resource){
    
    this.GetWeather = function(city, days){
        
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=7fa465edf98f162a5ca450f93cda15d6", {get: {method: "JSONP"}});
    
        return weatherAPI.get({ q: city, cnt: days });
    
    };
    
}]);