// document.addEventListener("DOMContentLoaded", function () {

    function initMap() {

        var mapStyle = [
            {
                featureType: 'poi',
                stylers: [
                    { visibility: 'off' }
                ]
            }
        ];
        
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13.8,
          center: new google.maps.LatLng(41.717354, -93.600563),
          mapTypeId: "roadmap",
          styles: mapStyle,
          isFractionalZoomEnabled: true,
          streetViewControl: false,
        });
      
        const iconBase = "/img/";
        const icons = {
          on_with_life: {
            name: "On With Life",
            icon: iconBase + "owl.svg",
            sizeW: 50,
            sizeH: 50,
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
        };
        const features = [
          {
            position: new google.maps.LatLng( 41.698770, -93.608780 ),
            type: "on_with_life",
          },
          {
            position: new google.maps.LatLng( 41.704891, -93.623169 ),
            type: "hyvee",
          },
          {
            position: new google.maps.LatLng( 41.734640, -93.602260 ),
            type: "hyvee",
          },
          {
            position: new google.maps.LatLng( 41.702110, -93.599690 ),
            type: "fareway",
          },
          {
            position: new google.maps.LatLng( 41.704781, -93.584122 ),
            type: "walmart",
          },
        ];
      
        features.forEach((feature) => {
            console.log(icons[feature.type].icon);
          new google.maps.Marker({
            position: feature.position,
            icon: {
                url: icons[feature.type].icon,
                scaledSize: new google.maps.Size( icons[feature.type].sizeW, icons[feature.type].sizeH ),
            },
            map: map,
            
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
      
        //map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      }
      
      window.initMap = initMap;
// });