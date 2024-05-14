import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './css/login.css';
import './css/project-styling.css';
import './css/proposal.css';
import './css/search-page.css';

//render the App component into a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render an instance of the App component into that root
root.render(<App />);


reportWebVitals();
