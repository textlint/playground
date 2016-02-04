import {dom, element} from 'decca'
import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import textlintApp from './reducers/textlintReducer';
import App from "./components/App"
import defaultRuleList from "./defaultRuleList";
import {updateRuleList} from "./actions/textlintActions"
const {createRenderer} = dom;

// dependency css
require("codemirror/lib/codemirror.css");
require("codemirror/addon/lint/lint.css");
// Create a Redux store to handle all UI actions and side-effects
const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger();
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(textlintApp);

// Create a renderer that can turn vnodes into real DOM elements
const render = createRenderer(document.body, store.dispatch);

// Update the page and add redux state to the context
store.subscribe(()=> {
    render(
        <App />,
        store.getState()
    );
});
// Update with initial data
store.dispatch(updateRuleList(defaultRuleList));