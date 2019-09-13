import React from "react";
import { Features } from './features';
import { Search } from './search';
import { Home } from './home';

export const Header = () => (
    <div id="header">
        <Home />
        <Search />
        <Features />
    </div>);
