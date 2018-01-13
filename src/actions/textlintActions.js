// LICENSE : MIT
"use strict";
export const TOGGLE_RULE = "TOGGLE_RULE";
export const ADD_RULE = "ADD_RULE";
export const UPDATE_RULE_LIST = "UPDATE_RULE_LIST";
export const UPDATE_RULE_ERRORS = "UPDATE_RULE_ERRORS";
export const START_REQUEST = "START_REQUEST";
export const SUCCESS_RESPONSE = "SUCCESS_RESPONSE";
export const FAILURE_RESPONSE = "FAILURE_RESPONSE";
export const UPDATE_TEXT = "UPDATE_TEXT";
export const EMBED_MODE = "EMBED_MODE";
export function updateText(text) {
    return {
        type: UPDATE_TEXT,
        text
    };
}
export function updateRuleErrors(errors) {
    return {
        type: UPDATE_RULE_ERRORS,
        errors
    };
}
export function updateRuleList(rules) {
    return {
        type: UPDATE_RULE_LIST,
        rules
    };
}
export function toggleRule(id) {
    return {
        type: TOGGLE_RULE,
        id
    };
}
export function addRule(ruleName, rule) {
    return {
        type: ADD_RULE,
        ruleName,
        rule
    };
}

export function startRequest(url) {
    return {
        type: START_REQUEST,
        url
    };
}

export function successResponse(url) {
    return {
        type: SUCCESS_RESPONSE,
        url
    };
}

export function failureResponse(url, error) {
    return {
        type: FAILURE_RESPONSE,
        url,
        error
    };
}
export function enableEmbedMode() {
    return {
        type: EMBED_MODE
    };
}
