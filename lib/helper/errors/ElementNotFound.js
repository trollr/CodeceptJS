const Locator = require ('../../locator');
/**
 * Uses to throw readable element not found error
 * Stringify object's locators
 */
class ElementNotFound {
  constructor(locator, prefixMessage = "Element", postfixMessage = "was not found by text|CSS|XPath") {
    throw new Error(`${prefixMessage} ${(new Locator(locator)).toString()} ${postfixMessage}`);
  }
}

module.exports = ElementNotFound;
