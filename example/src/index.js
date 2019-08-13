import 'core-js/modules/es.array.filter';

import Dropdown from '../../src/Dropdown';

import './index.css';

Array.from(document.querySelectorAll('[data-dropdown-root]')).forEach(
    container => new Dropdown(
        container,
        {
            linkSelector: '[data-dropdown-link]',
            panelSelector: '[data-dropdown-panel]',
            activeLinkClassPrefix: 'NavLvl1__Link',
            openPanelClassPrefix: 'NavLvl2',
        }
    )
);
