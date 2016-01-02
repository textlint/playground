// LICENSE : MIT
"use strict";
export const TOGGLE_RULE = "TOGGLE_RULE";
export const UPDATE_RULE_LIST = "UPDATE_RULE_LIST";
export function updateRuleList(rules) {
    return {
        type: UPDATE_RULE_LIST,
        rules
    }
}
export function toggleRule(id) {
    return {
        type: TOGGLE_RULE,
        id
    }
}