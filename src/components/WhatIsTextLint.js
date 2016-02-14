// LICENSE : MIT
"use strict";
import {element} from 'decca'
export const WhatIsTextLint = {
    render({props}) {
        return <div className="WhatIsTextLint">
            <h2 className="WhatIsTextLint-title header-has-icon">What is textlint?</h2>
            <p>
                textlint is an open source text linting utility.<br />
                It it hard to lint text written by natural language, but we try to resolve this issue by <b>pluggable</b> approach.
            </p>
            <h3 className="WhatIsTextLint-title">Everything is pluggable:</h3>
            <ul className="WhatIsTextLint-philosophy-list">
                <li>No bundle rules.</li>
                <li>To use rule, run simply <code>npm install textlint-rule-xxx</code>. See a <a
                    href="https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule"
                    title="Collection of textlint rule · textlint/textlint Wiki">collection of textlint rule</a>
                </li>
                <li><a href="https://github.com/textlint/textlint-plugin-markdown"
                       title="Markdown support for textlint.">Markdown</a> and <a
                    href="https://github.com/textlint/textlint-plugin-text" title="plain txt support for textlint">plain
                    text</a> are support by default.
                    Additionally, <a href="https://github.com/textlint/textlint-plugin-html"
                                     title="textlint/textlint-plugin-html: html support for textlint">HTML</a> and other
                    format support by custom plugin
                </li>
                <li>Formatter(reporter) is used both by bundled and custom formatters</li>
            </ul>
        </div>
    }
};