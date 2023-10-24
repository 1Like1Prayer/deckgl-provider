import { Deck } from '@deck.gl/core/typed';
import { GeoJsonLayer, ScatterplotLayer } from '@deck.gl/layers/typed';

const INITIAL_VIEW_STATE = {
    latitude: 37.8,
    longitude: -122.45,
    zoom: 8,
};
const COUNTRIES =
    'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line

let deck: Deck;

let data2: any = [
    {
        position: [-122.45, 37.8],
        color: [255, 0, 0],
        radius: 500,
    },
];

let layers: any = [
    new GeoJsonLayer({
        id: 'base-map',
        data: COUNTRIES,
        stroked: true,
        filled: true,
        lineWidthMinPixels: 2,
        opacity: 0.4,
        getLineColor: [60, 60, 60],
        getFillColor: [200, 200, 200],
    }),
    new ScatterplotLayer({
        id: 'baseScatter',
        data: data2,
        getColor: (d) => d.color,
        getRadius: (d) => d.radius,
    }),
];

export const createMap = (parent: HTMLDivElement) => {
    deck = new Deck({
        initialViewState: INITIAL_VIEW_STATE,
        parent: parent,
        controller: true,
        layers: layers,
    });
};

export const createPointLayer = (data?: any) => {
    const pointLayer = new ScatterplotLayer({
        id: 'baseScatter',
        data: data2,
        getColor: (d) => d.color,
        getRadius: () => 500,
    });

    // const myLayers = [...layers, pointLayer];
    data2 = data2.map((value: any) => (value.radius = 1000));
    deck.setProps({ layers: layers });
    console.log(deck);
};
