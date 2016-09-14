import {
    default as React
} from "react";
import ReactDOM from 'react-dom';

import { Component } from 'react';

import {
    GoogleMap
} from "react-google-maps";
import {
    default as InfoBox
} from "react-google-maps/lib/addons/InfoBox";


const CENTER_MARKER_POSITION = {
    lat: -25.363,
    lng: 131.044
};

const contentString = '<h1> Learn More </h1>';

const clothingCenters = [{
    lat: 45.5087,
    lng: -73.554
}, {
    lat: 45.5098,
    lng: -73.558
}, {
    lat: 45.5089,
    lng: -73.550
}, {
    lat: 45.5089,
    lng: -73.550
}, ];

var markers = [];
const ARC_DE_TRIOMPHE_POSITION = {
    lat: 45.5017,
    lng: -73.5673
};

const EIFFEL_TOWER_POSITION = {
    lat: 45.5017,
    lng: -73.5673
};


class Map extends Component {
    constructor() {
        super();
        this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: EIFFEL_TOWER_POSITION,
            zoom: 15,
            styles: [{
                featureType: 'all',
                stylers: [{
                    saturation: -80
                }]
            }, {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                    hue: '#00ffee'
                }, {
                    saturation: 50
                }]
            }, {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }]
        });
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        this.marker = new google.maps.Marker({
            position: ARC_DE_TRIOMPHE_POSITION,
            map: this.map,
            title: 'Hello World!'
        });
        this.marker.addListener('click', function() {
          infowindow.open(this.map, this.marker);
        });
        this.drop();
    }

    panToArcDeTriomphe() {
        this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
    }

    drop() {
        for (var i = 0; i < clothingCenters.length; i++) {
            console.log(i);
            markers.push(new google.maps.Marker({
                position: clothingCenters[i],
                map: this.map,
                animation: google.maps.Animation.DROP
            }))
        }
    }
    render() {
        const mapStyle = {
            width: 2000,
            height: 1000
        };

        return ( <
            div >
            <
            button onClick = {
                this.panToArcDeTriomphe
            } > Go to Arc De Triomphe < /button> <
            div ref = "map"
            style = {
                mapStyle
            } > I should be a map! < /div> < /
            div >
        );
    }
}
