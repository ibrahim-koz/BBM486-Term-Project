/* Parse a string function definition and return a function object. Does not use eval.
 * @param {string} str
 * @return {function}
 *
 * Example:
 *  var f = function (x, y) { return x * y; };
 *  var g = parseFunction(f.toString());
 *  g(33, 3); //=> 99
 */
