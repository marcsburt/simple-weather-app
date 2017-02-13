weatherApp.directive("weatherReport", function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope:{
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});



weatherApp.controller('forecastController', ['$scope', 'cityService', '$routeParams', 'weatherService', function($scope, cityService, $routeParams, weatherService){
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $scope.description = $scope.weatherResult.list[0].clouds;
    console.log($scope.description)
    console.log($scope.weatherResult);
    
    $scope.convertToFahrenheit = function(degK){
        
        return Math.round((1.8 * (degK - 273))+32);
        
    }
    
    $scope.convertToDate  = function(dt){
        
        return new Date(dt * 1000); 
    
    }

//USAGE
<weather-report weather-day = "w" convert-to-standard = "convertToFahrenheit(daytimeTemp)" convert-to-date = "convertToDate(dt)" date-format = "MMM d, y"></weather-report>