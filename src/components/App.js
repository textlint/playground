// LICENSE : MIT
"use strict";
import { element } from "decca";
import { TextlintDemo } from "./TextlintDemo";
import { EmbedPlayground } from "./EmbedPlayground";
import { Header } from "./Header";
import { WhatIsTextLint } from "./WhatIsTextLint";
import { Leading } from "./Leading";
import { Fixable } from "./Fixable";
import { Footer } from "./Footer";
import { scrollToLocationHash } from "../side-effect/scroll-to-location";

const App = {
    onCreate() {
        requestAnimationFrame(function() {
            const hash = location.hash;
            scrollToLocationHash(hash.slice(1));
        });
    },
    render({ context }) {
        const enabledRules = context.rules.filter(rule => rule.enable);
        const disabledRules = context.rules.filter(rule => !rule.enable);
        const { text, ruleErrors, mode } = context;
        if (mode.embed) {
            return (
                <div class="App">
                    <EmbedPlayground
                        enabledRules={enabledRules}
                        disabledRules={disabledRules}
                        ruleErrors={ruleErrors}
                        text={text}
                    />
                </div>
            );
        }
        return (
            <div class="App">
                <Header />
                <TextlintDemo
                    enabledRules={enabledRules}
                    disabledRules={disabledRules}
                    ruleErrors={ruleErrors}
                    text={text}
                />
                <Footer />
            </div>
        );
    }
};
export default App;
