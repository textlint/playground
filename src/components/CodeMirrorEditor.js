// LICENSE : MIT
"use strict";
import {dom, element} from 'deku'
import CodeMirror from "codemirror"
const mirrorMap = {};
function mutateAfterMount(path, options) {
    return ()=> {
        var textarea = document.getElementById(path);
        mirrorMap[path] = CodeMirror.fromTextArea(textarea, options);
    };
}
function updateCmState(cm, state) {
    // options
    if (typeof state.options === 'object') {
        Object.keys(state.options).forEach(optionName => {
            if (state.options.hasOwnProperty(optionName)) {
                cm.setOption(optionName, state.options[optionName]);
            }
        });
    }
}
const CodeMirrorEditor = {
    onCreate({path, props}){
        const {options} = props;
        requestAnimationFrame(mutateAfterMount(path, options));
    },
    onUpdate({props, path}){
        const cm = mirrorMap[path];
        const {options} = props;
        updateCmState(cm, options);
    },
    onRemove({path}){
        const cm = mirrorMap[path];
        if (cm) {
            cm.toTextArea();
            mirrorMap[path] = null;
        }
    },
    render({path}){
        return <div class="CodeMirrorEditor">
            <textarea id={path}></textarea>
        </div>
    }
};

export default CodeMirrorEditor;