// LICENSE : MIT
"use strict";
import {element} from 'decca'
export const Footer = {
    render({props}){
        return <div className="Footer">
            <ul className="Footer-list">
                <li className="Footer-list-item">
                    The site's source code is available on <a href="https://github.com/textlint/textlint.github.io">GitHub</a>
                </li>
                <li className="Footer-list-item">
                    Copyright © 2014- <a href="https://github.com/azu">@azu</a> All rights reserved.
                </li>
            </ul>
        </div>;
    }
};