function getWeatherByIP(){
 $.getJSON('https://ipinfo.io', function(data){
  lat = data.loc.split(",")[0];
  lon = data.loc.split(",")[1];
  url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=255400cdd5d22ef697e163ba4c2f367d"
  obj ={lat:lat, lon:lon, url:url};
  newFunc = getWeatherHttp.bind(obj);
  newFunc();
  }); 
}

function getWeatherHttp(){
 var output = $.ajax({
      url: "https://crossorigin.me/"+this.url,
      jsonp: "callback",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        $(".temperature").html('The local temperature is: ' + data.main.temp + ' Kelvins');
  $(".weather").html('The current weather condition is: ' + data.weather[0].main + ' with '+ data.weather[0].description);    
      },
      xhrFields: {
        withCredentials: false
      }
    });
}

