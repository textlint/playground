// LICENSE : MIT
"use strict";
import {element} from 'decca'
import {toggleRule} from "../../actions/textlintActions";
export default {
    render({props}){
        const errorList = props.errors.map(error => {
            const showMessage = (message) => {
                return message.split(/\n/).map(line => {
                    return <span>{line}<br/></span>;
                });
            };
            return <li key={`${error.id}${error.line}${error.column}`}>
                <p>{error.line}:{error.column} {showMessage(error.message)} ({error.ruleId})</p>
            </li>
        });
        return <div class="TextlintErrorList">
            <ul>
                {errorList}
            </ul>
        </div>
    }
}