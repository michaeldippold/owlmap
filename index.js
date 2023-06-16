
function initMap() {

    urlencode = function (str) {
        str = (str + '').toString();
        return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
        replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
    };

    const center = new google.maps.LatLng(41.717427, -93.592745)

    var mapStyle = [
        {
            featureType: 'poi',
            stylers: [
                { visibility: 'off' }
            ]
        }
    ];
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: center,
        mapTypeId: "roadmap",
        styles: mapStyle,
        isFractionalZoomEnabled: true,
        streetViewControl: false,
        mapTypeControl: false
    });
    
    const iconBase = "img/";
    const icons = {
        onwithlife: {
        name: "On With Life",
        icon: iconBase + "owl.svg",
        sizeW: 60,
        sizeH: 60,
        },
        hyvee: {
        name: "HyVee",
        icon: iconBase + "hyvee.svg",
        sizeW: 70,
        sizeH: 40,
        },
        fareway: {
        name: "Fareway",
        icon: iconBase + "fareway.svg",
        sizeW: 80,
        sizeH: 40,
        },
        walmart: {
        name: "Walmart",
        icon: iconBase + "walmart.svg",
        sizeW: 100,
        sizeH: 50,
        },
        postoffice: {
        name: "Post Office",
        icon: iconBase + "usps.png",
        sizeW: 60,
        sizeH: 50,
        },
        homewoodsuites: {
        name: "Homewood Suites",
        icon: iconBase + "homewood.svg",
        sizeW: 100,
        sizeH: 60,
        },
        residenceinn: {
        name: "Residence Inn",
        icon: iconBase + "residenceinn.png",
        sizeW: 100,
        sizeH: 60,
        },
        caseys: {
        name: "Casey's",
        icon: iconBase + "caseys.svg",
        sizeW: 60,
        sizeH: 40,
        },
        target: {
        name: "Target",
        icon: iconBase + "target.svg",
        sizeW: 40,
        sizeH: 40,
        },
        kumgo: {
        name: "Kum & Go",
        icon: iconBase + "kumgo.png",
        sizeW: 60,
        sizeH: 40,
        },
    };
    const features = [
        {
            position: new google.maps.LatLng( 41.698770, -93.608780 ),
            type: "onwithlife",
            address: "715 SW Ankeny Rd, Ankeny, IA 50023",
        },
        {
            position: new google.maps.LatLng( 41.704891, -93.623169 ),
            type: "hyvee",
            address: "2510 SW State St, Ankeny, IA 50023",
        },
        {
            position: new google.maps.LatLng( 41.734640, -93.602260 ),
            type: "hyvee",
            address: "410 N Ankeny Blvd, Ankeny, IA 50023",
        },
        {
            position: new google.maps.LatLng( 41.702110, -93.599690 ),
            type: "fareway",
            address: "109 SE Oralabor Rd, Ankeny, IA 50021",
        },
        {
            position: new google.maps.LatLng( 41.704781, -93.584122 ),
            type: "walmart",
            address: "1002 SE National Dr, Ankeny, IA 50021",
        },
        {
            position: new google.maps.LatLng( 41.740363, -93.599799 ),
            type: "postoffice",
            address: "1011 N Ankeny Blvd, Ankeny, IA 50023",
        },
        {
            position: new google.maps.LatLng( 41.704418, -93.569763 ),
            type: "homewoodsuites",
            address: "2455 SE Creekview Dr, Ankeny, IA 50021",
        },
        {
            position: new google.maps.LatLng( 41.713140, -93.616910 ),
            type: "residenceinn",
            address: "1515 SW Main St, Ankeny, IA 50023",
        },
        {
            position: new google.maps.LatLng( 41.705090, -93.582180 ),
            type: "caseys",
            address: "1010 SE National Dr, Ankeny, IA 50021",
        },
        {
            position: new google.maps.LatLng( 41.729340, -93.600960 ),
            type: "caseys",
            address: "302 S Ankeny Blvd, Ankeny, IA 50023",
        },
        {
            position: new google.maps.LatLng( 41.703750, -93.571120 ),
            type: "caseys",
            address: "2601 SE Creekview Dr, Ankeny, IA 50021",
        },
        {
            position: new google.maps.LatLng( 41.709380, -93.578550 ),
            type: "target",
            address: "2135 SE Delaware Ave, Ankeny, IA 50021",
        },
        {
            position: new google.maps.LatLng( 41.702050, -93.626920 ),
            type: "kumgo",
            address: "1910 SW White Birch Cir, Ankeny, IA 50023",
        },
        {
            position: new google.maps.LatLng( 41.716940, -93.601900 ),
            type: "kumgo",
            address: "1415 SW School St, Ankeny, IA 50023",
        },
    ];

    const infowindow = new google.maps.InfoWindow({
        content: "",
    });
    
    features.forEach((feature) => {
        const marker = new google.maps.Marker({
        position: feature.position,
        icon: {
            url: icons[feature.type].icon,
            scaledSize: new google.maps.Size( icons[feature.type].sizeW, icons[feature.type].sizeH ),
        },
        map: map,
        });
        marker.addListener("click", () => {
        map.setZoom(17);
        // map.setCenter(marker.getPosition());
        map.panTo(marker.getPosition());
        infowindow.setPosition(marker.getPosition());
        infowindow.open({
            anchor: marker,
            map,
        });
        infowindow.setContent(
            '<h2>' + icons[feature.type].name + '</h2>' + 
            '<a  target="_blank" href="https://www.google.com/maps/search/?api=1&query=' + urlencode(feature.address)  + '">' + feature.address + '</a>'
        );
        

        });
    
    });
    
    const legend = document.getElementById("legend");
    
    for (const key in icons) {
        const type = icons[key];
        const name = type.name;
        const icon = type.icon;
        const height = type.sizeH;
        const width = type.sizeW;
        const div = document.createElement("div");
    
        div.innerHTML = '<div class="legend-row"><img src="' + icon + '" style="height:' + height + 'px;width:' + width + 'px;"><div>' + name + '</div></div>';
        legend.appendChild(div);
    }        
    
    document.getElementById("reset-button").addEventListener("click", () => {
        map.setZoom(14);
        map.setCenter(center);
        infowindow.close();
    });

    document.getElementById("legend-toggle").addEventListener("click", (e) => {  
        if (legend.style.right == "5vw") {
            legend.style.right = "-100vw";
        } else {
            legend.style.right = "5vw";
        }
    });
}

window.initMap = initMap;