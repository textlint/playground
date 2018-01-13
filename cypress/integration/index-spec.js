// MIT © 2018 azu
"use strict";
const DefaultErrorList = 4;
describe("The Home Page", function() {
    it("successfully loads", function() {
        cy.visit("/");

        cy.get(".TextlintErrorList-listItem").should(e => {
            assert.isAbove(e.length, DefaultErrorList);
        });
    });
    it("Delete all text and disappear error list items", function() {
        cy.visit("/");
        cy.get(".TextlintErrorList-listItem").should(e => {
            assert.isAbove(e.length, DefaultErrorList);
        });

        cy
            .get(".CodeMirror textarea")
            .type("{meta}A", {
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
