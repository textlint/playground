// LICENSE : MIT
"use strict";
import {element} from 'deku'
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
const noTodo = require("textlint-rule-no-todo");
const validator = createValidator({
    rules: {"no-todo": noTodo}
});
export default {
    render({props}){
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