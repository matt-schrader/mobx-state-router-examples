import React from 'react';
import { RouterLink } from 'mobx-state-router';
import './header.css';

export const Header = () => (
    <header>
        <ul className="navbar">
            <li>
                <RouterLink routeName="home" activeClassName="link--active">
                    Static Content
                </RouterLink>
            </li>
            <li>
                <RouterLink routeName="github" activeClassName="link--active">
                    Github Content
                </RouterLink>
            </li>
            <li>
                <RouterLink
                    routeName="contentful"
                    activeClassName="link--active"
                >
                    Contentful Content
                </RouterLink>
            </li>
        </ul>
    </header>
);
