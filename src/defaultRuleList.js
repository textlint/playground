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
        name: "textlint-rule-sjsj(Simplified JavaScript Jargon)",
        rule: require("textlint-rule-sjsj"),
        enable: true
    }, {
        id: 3,
        name: "textlint-rule-unexpanded-acronym",
        rule: require("textlint-rule-unexpanded-acronym"),
        enable: true
    }, {
        id: 4,
        name: "textlint-rule-rousseau",
        rule: require("textlint-rule-rousseau"),
        enable: true
    }
];


