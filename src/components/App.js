// LICENSE : MIT
"use strict";
import {element} from 'decca'
import EnabledTextlintRuleList from "./EnabledTextlintRuleList";
import DisabledTextlintRuleList from "./DisabledTextlintRuleList";
import TextlintEditor from "./TextlintEditor"
const App = {
    render({context}){
        const enabledRules = context.rules.filter(rule => rule.enable);
        const disabledRules = context.rules.filter(rule => !rule.enable);
        return <div class="App">
            <div>
                <h2>Rule List</h2>
                <EnabledTextlintRuleList rules={enabledRules}/>
                <DisabledTextlintRuleList rules={disabledRules}/>
            </div>
            <TextlintEditor enabledRules={enabledRules}/>
        </div>
    }
};
export default App;
