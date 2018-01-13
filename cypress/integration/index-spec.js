// MIT © 2018 azu
"use strict";
const assert = require("assert");

const DefaultErrorList = 4;
describe("The Home Page", function() {
    beforeEach(function() {
        cy.visit("/");
        cy.get(".TextlintErrorList-listItem").should(e => {
            assert.ok(e.length > DefaultErrorList);
        });
    });

    it("successfully loads", function() {
        cy.get(".TextlintErrorList-listItem").should(e => {
            assert.ok(e.length > DefaultErrorList);
        });
    });

    it("should toggle rule", function() {
        cy.get(".DisabledTextlintRuleList .TextLintRuleListItem").should(e => {
            assert.ok(e.length === 0);
        });
        cy
            .get(".EnabledTextlintRuleList .TextLintRuleListItem")
            .first()
            .click();
        // test disable
        cy.get(".DisabledTextlintRuleList .TextLintRuleListItem").should(e => {
            assert.ok(e.length === 1);
        });
        // click disable
        cy
            .get(".DisabledTextlintRuleList .TextLintRuleListItem")
            .first()
            .click();
        // enable again
        cy.get(".DisabledTextlintRuleList .TextLintRuleListItem").should(e => {
            assert.ok(e.length === 0);
        });
    });

    it("Delete all text and disappear error list items", function() {
        // {selectall}{backspace} workaround for CodeMirror
        cy
            .get(".CodeMirror textarea")
            .type("{meta}A", {
                force: true
            })
            .type("{backspace}", {
                force: true
            })
            .type("{ctrl}A", {
                force: true
            })
            .type("{backspace}", {
                force: true
            });

        cy.get(".TextlintErrorList-listItem").should(e => {
            assert.strictEqual(e.length, 0, "length should be 0");
        });
    });
});
