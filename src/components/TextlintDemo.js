// LICENSE : MIT
"use strict";
import {element} from 'decca'
import EnabledTextlintRuleList from "./TextlintDemo/EnabledTextlintRuleList";
import DisabledTextlintRuleList from "./TextlintDemo/DisabledTextlintRuleList";
import AddTextlintRule from "./TextlintDemo/AddTextlintRule";
import TextlintEditor from "./TextlintDemo/TextlintEditor"
import TextlintErrorList from "./TextlintDemo/TextlintErrorList"
export const TextlintDemo = {
    render({props}){
        const {enabledRules, disabledRules, ruleErrors, text} = props;
        return <div className="TextlintDemo">
            <div className="TextlintDemo-Content">
                <TextlintEditor enabledRules={enabledRules} value={text}/>
                <TextlintErrorList errors={ruleErrors}/>
            </div>
            <div className="TextlintDemo-Setting">
                <h2>Rule List</h2>
                <EnabledTextlintRuleList rules={enabledRules}/>
                <DisabledTextlintRuleList rules={disabledRules}/>
                <AddTextlintRule />
            </div>
        </div>
    }
};