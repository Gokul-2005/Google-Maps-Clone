mapboxgl.accessToken = 'pk.eyJ1IjoiZ29rdWx5YWRoYXYxMjMiLCJhIjoiY2xkazVhNXJjMGhkYzNwbGc2MHNqOTE0ciJ9.2MIr4h46r0pTi0W9EhUJow'; //Access Token for mapbox api

navigator.geolocation.getCurrentPosition(setPosition,errorPosition,{enableHighAccuracy:true});


let latitude , longitude ;

function setPosition(pos){
    setMap([pos.coords.longitude,pos.coords.latitude])
}

function errorPosition(err){
    console.log(err);
}

function setMap (center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: center, // starting position [lng, lat]
        zoom: 12, // starting zoom
        });

    const nav = new mapboxgl.NavigationControl({
        showZoom :true,
        showCompass:true,
        visualizePitch: true
        });
        map.addControl(nav, 'bottom-right');    

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });      
     map.addControl(directions, 'top-right');  
     map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        }),'top-left'); 
    map.keyboard.enable();    
        
};

