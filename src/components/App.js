// LICENSE : MIT
"use strict";
import {element} from 'decca'
import {TextlintDemo} from "./TextlintDemo";
import {Header} from "./Header";
import {WhatIsTextLint} from "./WhatIsTextLint";
import {Leading} from "./Leading";
import {Footer} from "./Footer";
const App = {
    render({context}){
        const enabledRules = context.rules.filter(rule => rule.enable);
        const disabledRules = context.rules.filter(rule => !rule.enable);
        const {text, ruleErrors} = context;
        return <div class="App">
            <Header />
            <Leading />
            <WhatIsTextLint />
            <TextlintDemo enabledRules={enabledRules} disabledRules={disabledRules}
                          ruleErrors={ruleErrors}
                          text={text}/>
            <Footer/>
        </div>
    }
};
export default App;
