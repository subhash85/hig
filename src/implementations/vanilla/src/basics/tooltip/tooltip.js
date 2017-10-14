const Template = require('./tool-tip.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const Flyout = require('../flyou/flyout');

/**
 * Creates an PasswordField
 *
 * @class
 */

class Tooltip extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options)

    this.initialOptions = options

    this.flyout = new Flyout(this.initialOptions);
  }

  setContent = () => {
    
  }
}


