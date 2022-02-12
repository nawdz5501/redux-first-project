import ReactDOM from 'react-dom';
import { StrictMode } from "react/cjs/react.production.min";
import App from "./App";
import ReduxStore from'./store'
import {Provider} from 'react-redux'
ReactDOM.render(
    <StrictMode>
        <Provider store={ReduxStore()}>
            <App/>
        </Provider>
    </StrictMode>
,document.getElementById('root')
)