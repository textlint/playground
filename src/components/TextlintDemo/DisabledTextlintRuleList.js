// LICENSE : MIT
"use strict";
import { element } from "decca";
import { toggleRule } from "../../actions/textlintActions";
const dispatcherToggle = (dispatch, id) => event => {
    dispatch(toggleRule(id));
};
const RuleItem = {
    render({ props, dispatch }) {
        const { rule } = props;
        return (
            <li className="TextLintRuleListItem">
                <p onClick={dispatcherToggle(dispatch, rule.id)}>
                    <del>{rule.name}</del>
                </p>
            </li>
        );
    }
};
export default {
    render({ props }) {
        const ruleItems = props.rules.map(rule => {
            return <RuleItem key={rule.id} rule={rule} />;
        });
        return (
            <div class="DisabledTextlintRuleListBox">
                <ul className="DisabledTextlintRuleList">{ruleItems}</ul>
            </div>
        );
    }
};
