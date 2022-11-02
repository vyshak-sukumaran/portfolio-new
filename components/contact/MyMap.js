import React, { useEffect, useRef, useState } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

const place = [
    76.35660768387186,
    10.875379008361193
]

const MyMap = () => {
    const [map, setMap] = useState(null)
    const mapElement = useRef(null)
    const mapRef = useRef(null)
    mapRef.current = map
    useEffect(() => {

        const iconFeature = new Feature({
            geometry: new Point(fromLonLat(place)),
            name: 'Somewhere in Kerala',
        });

        const loadMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({ source: new OSM() }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [iconFeature]
                    }),
                    style: new Style({
                        image: new Icon({
                            anchor: [0.5, 46],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'pixels',
                            src: '/location.png'
                          })
                    })
                })
            ],
            view: new View({
                center: fromLonLat(place),
                zoom: 15,
                maxZoom: 18,
                constrainOnlyCenter: true,
            })
        })
        setMap(loadMap)

    }, [])
    return (
        <div ref={mapElement} className='relative w-full h-[25rem] bg-gray rounded-md overflow-hidden'></div>
    )
}

export default MyMap