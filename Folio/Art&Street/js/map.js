function myMap() {
    //crée la fontion qui sera rappelée dans le script googleapis
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(43.604659,3.8778469999999743
        ), zoom: 20
    };
    //coordonnées de la map par défaut
    var map = new google.maps.Map(mapCanvas, mapOptions);
    //fonctions googleMap, 2 paramètres
}