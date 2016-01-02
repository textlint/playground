// LICENSE : MIT
"use strict";
import {TOGGLE_RULE, UPDATE_RULE_LIST} from "../actions/textlintActions";

const ruleObject = {
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
/*
    list: []
 */
function ruleListReducer(ruleList = [], action) {
    switch (action.type) {
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