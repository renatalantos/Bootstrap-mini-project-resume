<script>
        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }

            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXZ";

            var locations = [{
                    lat: 40.785091,
                    lng: -73.668205
                },
                {
                    lat: 41.084045,
                    lng: -73.874245
                },
                {
                    lat: 40.754932,
                    lng: -73.984016
                }
            ];

            var markers = locations.map(function (location, i) {

                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            // Add a marker clusterer to manage the markers.
            // @ts-ignore MarkerClusterer defined via script
            new MarkerClusterer(map, markers, {
                imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
            });

        }
    </script>