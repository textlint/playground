// LICENSE : MIT
"use strict";
import {element} from 'decca'
import CodeMirrorEditor from "./CodeMirrorEditor"
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
export default {
    render({props}){
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
        const options = {
            lineWrapping: true,
            mode: "gfm",
            gutters: ["CodeMirror-lint-markers"],
            lint: {
                "getAnnotations": validator,
                "async": true
            }
        };
        var newVar = `# Textlint

TODO: this is error by textlint-rule-no-todo`;
        return <div class="TextlintEditor">
            <CodeMirrorEditor value={newVar} options={options}/>
        </div>
    }
}