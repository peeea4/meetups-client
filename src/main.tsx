import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './components/AppRouter/AppRouter';
import { store } from './store/store';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
);
