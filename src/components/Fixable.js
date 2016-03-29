// LICENSE : MIT
"use strict";
import {element} from 'decca'
export const Fixable = {
    render({props}){
        return <div className="Fixable">
            <h2 className="Fixable-title header-has-icon">Fixable in textlint</h2>
            <p>
                textlint is a <b>linter</b> and also is <b>fixer</b>.

            </p>
            <p>
                Please see <a href="https://github.com/textlint/textlint#fixable"
                              title="What is fixer?">document about fixer</a> for details.
            </p>
        </div>;
    }
};