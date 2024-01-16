import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { store } from './store/store';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles />
            <AppRoutes />
        </Provider>
    </React.StrictMode>
);
