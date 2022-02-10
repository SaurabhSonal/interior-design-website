import reactDom from 'react-dom';
// to use the renderdom we import the reactdom.

import App from './App';
// this line healps use the app in the content 

import './Index.css';

reactDom.render(
//react dom is getting imported from the react-dom. Render is trasferor/lautana/saupne wala.

    <App/>,
    // to show the app.js on the index.js ( right here),

    document.getElementById('root')
    // expoting the whole page and its getting  fetched by the index.html in the public folder.
);