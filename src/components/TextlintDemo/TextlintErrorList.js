// LICENSE : MIT
"use strict";
import {element} from 'decca'
import {toggleRule} from "../../actions/textlintActions";
export default {
    render({props}){
        const errorList = props.errors.map(error => {
            const showMessage = (message) => {
                var lines = message.split(/\n/);
                return lines.map((line, index) => {
                    if (index < (lines.length - 1)) {
                        return <span>{line}<br /></span>;
                    }
                    return <span>{line}</span>;
                });
            };
            const npmLink = (ruleId) => {
                return <a href={"https://www.npmjs.com/package/" + ruleId}>{ruleId}</a>;
            };
            return <li key={`${error.id}${error.line}${error.column}`}>
                <p>{error.line}:{error.column} {showMessage(error.message)} ({npmLink(error.ruleId)})</p>
            </li>
        });
        return <div class="TextlintErrorList">
            <ul>
                {errorList}
            </ul>
        </div>
    }
}