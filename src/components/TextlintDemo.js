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
            <h2 className="TextlintDemo-title header-has-icon"><a name="demo">Online DEMO</a></h2>
            <p className="TextlintDemo-lead">
                Take textlint for a spin, start typing below. Want to use more? Go to <a
                href="https://github.com/textlint/textlint" title="textlint/textlint">GitHub</a>
            </p>
            <div className="TextlintDemo-Content l-flex-container l-flex-row">
                <div className="TextlintDemo-Editor l-flex-left-half">
                    <TextlintEditor enabledRules={enabledRules} value={text}/>
                </div>
                <div className="TextlintDemo-Setting l-flex-right-half l-flex-container l-flex-col">
                    <div className="TextlintDemo-ruleBox l-flex-top-half">
                        <h3>Rule Errors</h3>
                        <TextlintErrorList errors={ruleErrors}/>
                    </div>
                    <div className="TextlintDemo-errorBox l-flex-bottom-half">
                        <h3>Rule Lists</h3>
                        <div className="TextlintRuleListSet">
                            <EnabledTextlintRuleList rules={enabledRules}/>
                            <DisabledTextlintRuleList rules={disabledRules}/>
                        </div>
                        <AddTextlintRule />

                    </div>
                </div>
            </div>
        </div>
    }
};