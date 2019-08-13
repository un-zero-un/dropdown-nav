"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown(rootElement, config) {
    var _this = this;

    _classCallCheck(this, Dropdown);

    _defineProperty(this, "_rootElement", void 0);

    _defineProperty(this, "_config", void 0);

    this._rootElement = rootElement;
    this._config = new _Config["default"](config);
    Array.from(this._rootElement.querySelectorAll(this._config.get('linkSelector'))).forEach(function (link) {
      link.addEventListener('click', _this.onLinkClick.bind(_this, link));
    });
  }

  _createClass(Dropdown, [{
    key: "toggle",
    value: function toggle(link, panel) {
      if (panel.classList.contains(this._config.get('openPanelClassPrefix') + this._config.get('openPanelClass'))) {
        return this.close(link, panel);
      }

      return this.open(link, panel);
    }
  }, {
    key: "open",
    value: function open(link, panel) {
      var _this2 = this;

      Array.from(this._rootElement.querySelectorAll(this._config.get('linkSelector'))).forEach(function (_link) {
        _this2.close(_link, _this2._config.get('findPanel')(_link));
      });
      link.classList.add(this._config.get('activeLinkClassPrefix') + this._config.get('activeLinkClass'));
      panel.classList.add(this._config.get('openPanelClassPrefix') + this._config.get('openPanelClass'));
    }
  }, {
    key: "close",
    value: function close(link, panel) {
      link.classList.remove(this._config.get('activeLinkClassPrefix') + this._config.get('activeLinkClass'));
      panel.classList.remove(this._config.get('openPanelClassPrefix') + this._config.get('openPanelClass'));
    }
  }, {
    key: "onLinkClick",
    value: function onLinkClick(link, event) {
      event.preventDefault();
      this.toggle(link, this._config.get('findPanel')(link));
    }
  }]);

  return Dropdown;
}();

exports["default"] = Dropdown;