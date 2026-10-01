import ReactDOM from 'react-dom/client';
import React from 'react';

import Card from './Card.jsx';

// BEGIN (write your solution here)
const container = document.querySelector('.container')
const root = ReactDOM.createRoot(container)
root.render(<Card />)
// END
