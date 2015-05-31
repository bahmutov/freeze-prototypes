/**
 freeze-prototypes@0.1.0
 Freezes common prototypes like Array.prototype to avoid any library messing with them
 Gleb Bahmutov <gleb.bahmutov@gmail.com>
 https://github.com/bahmutov/freeze-prototypes
*/

(function freezePrototypes() {
  if (typeof Object.freeze !== 'function') {
    throw new Error('Missing Object.freeze');
  }
  Object.freeze(Object.prototype);
  Object.freeze(Array.prototype);
  Object.freeze(Function.prototype);
}());
