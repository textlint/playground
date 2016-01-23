// LICENSE : MIT
"use strict";
import {TOGGLE_RULE, UPDATE_RULE_LIST, ADD_RULE} from "../actions/textlintActions";

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
export default function textlintApp(state = {}, action) {
    return {
        rules: ruleListReducer(state.rules, action)
    };
}