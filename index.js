(function freezePrototypes() {
  if (typeof Object.freeze !== 'function') {
    throw new Error('Missing Object.freeze');
  }
  Object.freeze(Object.prototype);
  Object.freeze(Array.prototype);
  Object.freeze(Function.prototype);
}());
