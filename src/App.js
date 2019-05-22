import React from 'react';
import './App.css';
import Accordion from './stateDrills/Accordion.js'

// import Tabs from './stateDrills/tabs'
// import RouletteGun from './stateDrills/drillsIndex.js'
// const tabsProp = [
//     {
//         name: 'First tab',
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
//     },
//     {
//         name: 'Second tab',
//         content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
//     },
//     {
//         name: 'Third tab',
//         content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
//     },
// ];

// class App extends React.Component {
//     render() {
//         return <div>
//             <Tabs tabs={tabsProp} />
//         </div>
//     }
// }

class App extends React.Component {
    render() {
        return <div>
            <Accordion />
        </div>
    }
}

export default App;

