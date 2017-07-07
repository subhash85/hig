var Template = require('./password-field.html');
var Interface = require('interface.json');
var Core = require('_core.js');

const TextField = require('../text-field/text-field');

const textFieldMethods = [
    'setLabel',
    'setPlaceholder',
    'setValue',
    'setName',
    'setInstructions',
    'required',
    'noLongerRequired',
    'onBlur',
    'onChange',
    'onFocus',
    'onInput',
    'enable',
    'disable'
];

/**
 * Creates an PasswordField
 *
 * @class
 */

class PasswordField extends Core {

    constructor(options = {}){
        super(options);
        this._render(Template, options);

        this.initialOptions = options;
        this.textField = new TextField(this.initialOptions);
    }

    _componentDidMount() {
        this.mountPartialToComment('PASSWORD-FIELD', this.textField);
        this.textField._setType('password');
    }

    revealPassword() {
        this.textField._setType('text');
    }

    hidePassword() {
        this.textField._setType('password');
    }

    showPasswordRevealButton() {
        this.textField._showPasswordRevealButton();
    }

    hidePasswordRevealButton() {
        this.textField._hidePasswordRevealButton();
    }

    onPasswordRevealButtonClick(fn) {
        return this.textField._onPasswordRevealButtonClick(fn);
    }

}

textFieldMethods.forEach(fn => {
    Object.defineProperty(PasswordField.prototype, fn, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function() {
            return this.textField[fn].apply(this.textField, arguments);
        }
    });
});

PasswordField._interface = Interface['basics']['FormElements']['partials']['PasswordField'];
PasswordField._defaults = Object.assign({}, TextField._defaults, {
    label: "Password"
});
PasswordField._partials = {};

module.exports = PasswordField;