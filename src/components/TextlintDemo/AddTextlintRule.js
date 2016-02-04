// LICENSE : MIT
"use strict";
import {element} from 'decca'
import {addRule, startRequest, failureResponse, successResponse} from "../../actions/textlintActions";
import camelCase from 'camelcase';
// Dispatch an action when the button is clicked
const fetchModule = (dispatch, moduleName) => {
    return new Promise((resolve, reject) => {
        const camelizedName = camelCase(moduleName);
        const API_URL = `https://www.brcdn.org/${moduleName}/latest?standalone=${camelizedName}`;
        dispatch(startRequest(API_URL));
        var script = document.createElement("script");
        script.src = API_URL;
        script.onload = () => {
            console.log(camelizedName);
            if (window[camelizedName]) {
                dispatch(successResponse(API_URL));
                window[moduleName] = window[camelizedName];
                dispatch(addRule(moduleName, window[camelizedName]));
                resolve(window[moduleName]);
            } else {
                const error = new Error(`Not use ${moduleName}`);
                dispatch(failureResponse(API_URL, error));
                reject(error);
            }
        };
        script.onerror = (error) => {
            dispatch(failureResponse(API_URL, error));
            reject(error);
        };
        document.body.appendChild(script);
    });
};
const onSubmit = (dispatch, path) => {
    var input = document.getElementById(path);
    var moduleName = input.value.trim();
    if (!/^textlint-rule/.test(moduleName)) {
        return;
    }
    fetchModule(dispatch, moduleName).then(()=> {
        input.value = "";
    }).catch((error) => {
        alert(error.message);
    });
};
export default {
    render({props, path, dispatch}){
        return <div class="AddTextlintRule">
            <form onSubmit={(event) => {
                event.preventDefault();
                onSubmit(dispatch, path);
            }}>
                <label>Add <a href="https://github.com/azu/textlint/wiki/Collection-of-textlint-rule">textlint rule</a>: </label>
                <input type="text" id={path} placeholder="textlint-rule-no-todo"></input>
                <input type="submit" value="Add Rule"></input>
            </form>

        </div>
    }
}