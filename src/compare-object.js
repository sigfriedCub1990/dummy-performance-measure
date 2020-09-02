const compareObjects = function(obj1, obj2) {
  Object.keys(obj1).forEach(prop => {
    if (Object.hasOwnProperty(obj2, prop)) {
      return false;
    }
  });
  return true;
};

const compareObjectsAsStrings = function(obj1, obj2) {
  const obj1Stringified = JSON.stringify(obj1);
  const obj2Stringified = JSON.stringify(obj2);

  return obj1Stringified === obj2Stringified;
}

module.exports = {
  compareObjects,
  compareObjectsAsStrings,
}
