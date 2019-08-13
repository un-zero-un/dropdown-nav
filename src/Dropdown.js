import Config from "./Config";

export default class Dropdown {
    _rootElement;
    _config;

    constructor(rootElement, config) {
        this._rootElement = rootElement;
        this._config = new Config(config);

        Array.from(this._rootElement.querySelectorAll(this._config.get('linkSelector'))).forEach(link => {
            link.addEventListener('click', this.onLinkClick.bind(this, link));
        });
    }

    toggle(link, panel) {
        if (panel.classList.contains(this._config.get('openPanelClassPrefix') + this._config.get('openPanelClass'))) {
            return this.close(link, panel);
        }

        return this.open(link, panel);
    }

    open(link, panel) {
        Array.from(this._rootElement.querySelectorAll(this._config.get('linkSelector'))).forEach(_link => {
            this.close(_link, this._config.get('findPanel')(_link));
        });

        link.classList.add(this._config.get('activeLinkClassPrefix') + this._config.get('activeLinkClass'));
        panel.classList.add(this._config.get('openPanelClassPrefix') + this._config.get('openPanelClass'));
    }
    close(link, panel) {
        link.classList.remove(this._config.get('activeLinkClassPrefix') + this._config.get('activeLinkClass'));
        panel.classList.remove(this._config.get('openPanelClassPrefix') + this._config.get('openPanelClass'));
    }

    onLinkClick(link, event) {
        event.preventDefault();

        this.toggle(link, this._config.get('findPanel')(link));
    }
}
