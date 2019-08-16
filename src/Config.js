export default class Config {
    static defaultConfig = {
        activeLinkClassPrefix: 'NavLink',
        activeLinkClass: '--active',
        openPanelClassPrefix: 'Nav',
        openPanelClass: '--open',
        rootClassPrefix: 'Dropdown',
        rootClass: '--open',
        findPanel: link => document.querySelector('[data-dropdown-panel="' + link.dataset.dropdownLink + '"]'),
    };

    static requiredConfig = [
        'linkSelector',
        'panelSelector',
    ];

    _config;

    constructor(config) {
        Config.requiredConfig.forEach(key => {
            if (!config[key]) {
                throw '[Dropdown config] Missing required key ' + key;
            }
        });

        this._config = {
            ...Config.defaultConfig,
            ...config
        };
    }

    get(key) {
        return this._config[key];
    }
}
