// LICENSE : MIT
"use strict";
import {element} from 'decca'
import CodeMirrorEditor from "./CodeMirrorEditor"
import {updateRuleErrors, updateText} from "../../actions/textlintActions"
import {TextLintCore} from "textlint"
require("codemirror/addon/mode/overlay.js");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/markdown/markdown.js");
require("codemirror/mode/gfm/gfm.js");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/mode/css/css.js");
require("codemirror/mode/htmlmixed/htmlmixed.js");
require("codemirror/mode/clike/clike.js");
require("codemirror/mode/meta.js");
require("codemirror/addon/edit/continuelist.js");
require("codemirror/addon/lint/lint.js");

const createValidator = require("codemirror-textlint");
const onChange = (textlint, dispatch) => {
    let isLocked = false;
    return (cm) => {
        if (isLocked) {
            return;
        }
        const value = cm.getValue();
        dispatch(updateText(value));
        isLocked = true;
        textlint.lintMarkdown(value).then(result => {
            dispatch(updateRuleErrors(result.messages));
            return result;
        }).finally(()=> {
            isLocked = false;
        });
    }
};
export default {
    render({props, dispatch}){
        const {enabledRules} = props;
        const rules = enabledRules.reduce((rules, rule) => {
            rules[rule.name] = rule.rule;
            return rules;
        }, {});
        const rulesOption = enabledRules.reduce((rules, rule) => {
            rules[rule.name] = rule.options || true;
            return rules;
        }, {});
        const validator = createValidator({
            rules,
            rulesOption
        });
        const textlint = new TextLintCore();
        textlint.setupRules(rules, rulesOption);
        const options = {
            lineNumbers: true,
            lineWrapping: true,
            mode: "gfm",
            gutters: ["CodeMirror-lint-markers"],
            lint: {
                "getAnnotations": validator,
                "async": true
            }
        };
        return <div class="TextlintEditor">
            <CodeMirrorEditor value={props.value} options={options} onChange={(cm)=>{
            return onChange(textlint,dispatch)(cm);
            }}/>
        </div>
    }
}