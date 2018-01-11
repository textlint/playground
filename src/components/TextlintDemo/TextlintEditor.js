// LICENSE : MIT
"use strict";
import { element } from "decca";
import debounce from "lodash.debounce";
import { TextlintKernel } from "@textlint/kernel";
import textlintToCodeMirror from "textlint-message-to-codemirror";
import { updateRuleErrors } from "../../actions/textlintActions";
import CodeMirrorEditor from "./CodeMirrorEditor";

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
const textlintKernel = new TextlintKernel();
const createSetupRules = (rules, ruleOptions) => {
    return Object.keys(rules).map(ruleName => {
        return {
            ruleId: ruleName,
            rule: rules[ruleName],
            options: ruleOptions[ruleName]
        };
    });
};
let textlintOption = {};
const createValidator = ({ rules, rulesOption }) => {
    textlintOption = Object.assign(
        {},
        {
            rules: createSetupRules(rules, rulesOption),
            plugins: [
                {
                    pluginId: "markdown",
                    plugin: require("textlint-plugin-markdown")
                }
            ],
            ext: ".md"
        }
    );
    return (text, callback) => {
        if (!text) {
            callback([]);
            return;
        }
        textlintKernel
            .lintText(text, textlintOption)
            .then(result => {
                const lintMessages = result.messages;
                const lintErrors = lintMessages.map(textlintToCodeMirror);
                callback(lintErrors);
            })
            .catch(error => {
                console.error(error);
            });
    };
};
const onChange = dispatch => {
    return text => {
        textlintKernel
            .lintText(text, textlintOption)
            .then(result => {
                dispatch(updateRuleErrors(result.messages));
                return result;
            })
            .catch(error => {
                console.error(error);
            });
    };
};
export default {
    render({ props, dispatch }) {
        const { enabledRules } = props;
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
            lineNumbers: true,
            lineWrapping: true,
            mode: "gfm",
            gutters: ["CodeMirror-lint-markers"],
            lint: {
                getAnnotations: validator,
                async: true
            }
        };
        const onChangeHandler = debounce(onChange(dispatch), 1000);
        return (
            <div class="TextlintEditor">
                <CodeMirrorEditor
                    defaultValue={props.value}
                    options={options}
                    onChange={cm => {
                        return onChangeHandler(cm.getValue());
                    }}
                />
            </div>
        );
    }
};
