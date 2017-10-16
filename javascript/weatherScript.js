function init() {
        getWeather();
    }
    window.onload = init;

function getWeather(){
    jQuery(document).ready(function ($) {
        $.ajax({
            url: "http://api.wunderground.com/api/ef7bf0e86a6f3e3a/geolookup/conditions/forecast/q/IL/Chicago.json",
            dataType: "jsonp",
            success: function (parsed_json) {
              
              //forecast for current day
    var forecast = parsed_json['forecast']['simpleforecast']['forecastday'][0];
    var current = parsed_json['current_observation']['temp_f'];    
                   
              
              var day = forecast.date.weekday;
              var date=forecast.date.day;
                var condition = forecast.conditions;
                var high = forecast.high.fahrenheit;
                var low = forecast.low.fahrenheit;
                var img = "";   
                var month= forecast.date.month;
                           
              document.getElementById('day').innerHTML = day ; 
              document.getElementById('month').innerHTML = month + '/' + date; 
              document.getElementById('condition').innerHTML = condition ;
              document.getElementById('current').innerHTML = 'Currently: ' + current + '&#x2109';
              document.getElementById('high').innerHTML = 'High: '+ high + '&#x2109';
              document.getElementById('low').innerHTML ='Low: ' + low + '&#x2109';                                                             
            }
        });
    });
}