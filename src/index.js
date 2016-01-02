import {dom, element} from 'deku'
import {createStore} from 'redux'
import textlintApp from './reducers/textlintReducer';
import TextlintEditor from "./components/TextlintEditor"
const {createRenderer} = dom;

// Dispatch an action when the button is clicked
const log = dispatch => event => {
    dispatch({
        type: 'CLICKED'
    })
};

// Define a state-less component
const MyButton = {
    render: ({ context, props, children, dispatch }) => {
        console.log(context);
        return <button onClick={log(dispatch)}>{children}</button>
    }
};

// Create a Redux store to handle all UI actions and side-effects
const store = createStore(textlintApp);

// Create a renderer that can turn vnodes into real DOM elements
const render = createRenderer(document.body, store.dispatch);

// Update the page and add redux state to the context
render(
    <TextlintEditor />,
    store.getState()
);