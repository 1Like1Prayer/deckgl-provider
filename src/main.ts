import { createPointLayer, createMap } from './map-handler.ts';
import { EventTypes } from './consts/event-types.ts';
//
// declare global{
//     interface DocumentEventMap{
//         'Add_Map_Layer':CustomEvent<>
//     }
// }
const startEventListeners = () => {
    window.addEventListener(EventTypes.Create_Map, ({ detail }: any) =>
        createMap(detail)
    );
    window.addEventListener(EventTypes.Add_Map_Layer, ({ detail }: any) => {
        createPointLayer(detail);
    });
};
export default startEventListeners;
createMap(document.getElementById('1') as HTMLDivElement);
// createPointLayer({
//     position: [-122.45, 37.8],
//     color: [255, 0, 0],
//     radius: 100,
// });
setTimeout(() => {
    console.log('after 3 sec');
    createPointLayer();
}, 3000);
