// LICENSE : MIT
"use strict";
export default [
    {
        id: 1,
        name: "textlint-rule-no-todo",
        rule: require("textlint-rule-no-todo"),
        enable: true
    },
    {
        id: 2,
        name: "textlint-rule-unexpanded-acronym",
        rule: require("textlint-rule-unexpanded-acronym"),
        enable: true
    },
    {
        id: 3,
        name: "textlint-rule-rousseau",
        rule: require("textlint-rule-rousseau"),
        enable: true
    },
    {
        id: 4,
        name: "textlint-rule-alex",
        rule: require("textlint-rule-alex"),
        enable: true
    },
    {
        id: 5,
        name: "textlint-rule-common-misspellings",
        rule: require("textlint-rule-common-misspellings").default,
        enable: true
    }
];
