// LICENSE : MIT
"use strict";
import {element} from 'decca'
export const Leading = {
    render({props}){
        return <div className="Leading">
            <p className="Leading-description">
                <img className="Leading-textlint-icon" width="256" height="256"
                     src="img/textlint-icon_256x256.png" alt="textlint"/>
            </p>
            <p className="Leading-description">The pluggable linting tool for text and markdown.</p>
            <p className="Leading-description"><a className="Leading-downloadButton"
                                                  href="https://github.com/textlint/textlint"
                                                  title="Download from GitHub">Install</a></p>
        </div>;
    }
};