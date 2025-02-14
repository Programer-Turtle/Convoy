function ShowLocation(position) {
    const lattext = document.getElementById("lat");
    const lontext = document.getElementById("lon");

    lattext.innerText = position.coords.latitude;
    lontext.innerText = position.coords.longitude;

    // Send location data to the server
    fetch("http://localhost:3000/setlocation", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        })
    })
}

function error() {
    console.log("Error Occurred while fetching location");
}

navigator.geolocation.watchPosition(ShowLocation, error, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
