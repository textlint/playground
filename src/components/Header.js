// LICENSE : MIT
"use strict";
import { element } from "decca";

const menuItems = [
    {
        title: "Rules",
        url: "https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule"
    },
    {
        title: "Documentation",
        url: "https://github.com/textlint/textlint/tree/master/docs"
    },
    {
        title: "GitHub",
        url: "https://github.com/textlint/textlint"
    }
];
export const Logo = {
    render(props) {
        return (
            <a className="Logo" title="textlint" href="/">
                <img class="Logo-img" alt="" src="img/textlint-icon_256x256.png" />
                <span class="Logo-text">{props.children}</span>
            </a>
        );
    }
};
export const HeaderMenuItem = {
    render({ props }) {
        return (
            <li className="HeaderMenuItem">
                <a href={props.url}>{props.title}</a>
            </li>
        );
    }
};
export const HeaderMenu = {
    render({ props }) {
        const items = props.menuItems.map(item => {
            return <HeaderMenuItem key={item.url} {...item} />;
        });

        return (
            <nav className="HeaderMenuNav">
                <ul className="HeaderMenus">{items}</ul>
            </nav>
        );
    }
};
export const Header = {
    render({ props }) {
        return (
            <div className="Header">
                <Logo>textlint</Logo>
                <HeaderMenu menuItems={menuItems} />
            </div>
        );
    }
};
