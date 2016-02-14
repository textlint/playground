// LICENSE : MIT
"use strict";
import {TOGGLE_RULE, UPDATE_RULE_LIST, ADD_RULE} from "../actions/textlintActions";
import {UPDATE_RULE_ERRORS} from "../actions/textlintActions";
import {UPDATE_TEXT} from "../actions/textlintActions";

const _______ruleObject = {
    id: 0,
    enable: true,
    name: "",
    options: {},
    rule: Function
};

function toggleRule(rule, action) {
    if (action.id !== rule.id) {
        return rule;
    }
    return Object.assign({}, rule, {
        enable: !rule.enable
    });
}
function addRule(ruleList, ruleName, rule) {
    var rules = ruleList.slice();
    var ruleObject = {
        id: ruleName,
        enable: true,
        name: ruleName,
        rule
    };
    console.log(ruleObject);
    rules.push(ruleObject);
    return rules;
}
/*
    list: []
 */
function ruleListReducer(ruleList = [], action) {
    switch (action.type) {
        case ADD_RULE:
            return addRule(ruleList, action.ruleName, action.rule);
        case UPDATE_RULE_LIST:
            return action.rules.slice();
        case TOGGLE_RULE:
            return ruleList.map(rule => toggleRule(rule, action));
        default:
            return ruleList;
    }
}

function ruleErrorReducer(errors = [], action) {
    switch (action.type) {
        case UPDATE_RULE_ERRORS:
            return action.errors.slice();
        default:
            return errors;
    }
}

const defaultText = `# Textlint

The pluggable linting tool for text and markdown.

Textlint is very useful.

TODO: this is error by textlint-rule-no-todo

Try to input text and lint the text using loaded rules.

`;
function textReducer(text = defaultText, action) {
    switch (action.type) {
        case UPDATE_TEXT:
            return action.text;
        default:
            return text;
    }
}
export default function textlintApp(state = {}, action) {
    return {
        text: textReducer(state.text, action),
        rules: ruleListReducer(state.rules, action),
        ruleErrors: ruleErrorReducer(state.ruleErrors, action)
    };
}