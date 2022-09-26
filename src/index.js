import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

// Mount the app
const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={ store }>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);