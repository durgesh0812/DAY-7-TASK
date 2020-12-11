var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload=function(){
    var data=JSON.parse(this.response)
    console.log(data);
    let lat=data[0].latlng[0];
    let long=data[0].latlng[1];
    getweather(lat,long);
}
function getweather(lat,long){
    let apikey=''
    var request=new XMLHttpRequest();
    let urlstring ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon=' +long +'&appid=3a3d0f0c33abe1a16e9a488f05d2ca22'  
    request.open('GET',urlstring,true)
   request.send();
   request.onload=function(){
       var data=JSON.parse(this.response)
       console.log(data);
    }
}