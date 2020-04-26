'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: Takes a parameter and returns the value unchanged.
 * 
 * @param {Value} value: Can be any input value
 * 
 * @return {Value}: Will be the same value as my input value. 
 * 
 */
 
 function identity(value) {
     return value; 
 }
 
 module.exports.identity = identity; 
 
 /**
  * typeOf: Takes a parameter and returns the type of value as a string
  * 
  * @param {Value} value: can be a string, array, object, undefined, number, boolean, null, or function
  * 
  * @return {String} String will be the data type of the given value
  *
  */
  
 function typeOf(value) {
    if (typeof(value) === 'string') {
    return "string";
} else if (Array.isArray(value) === true) {
    return "array";
} else if (typeof(value) === 'undefined') {
  return "undefined";
} else if (typeof(value) === "number") {
  return "number";
} else if (typeof(value) === "boolean") {
  return "boolean";
} else if (value === null) {
  return "null";
} else if (typeof(value) === 'object'){
  return "object";
} else {
  return "function";
}
}

module.exports.typeOf = typeOf; 

/**
 * first: Takes an array and a number and returns the first <number> of items in the array.
 *        If a number is not given, it will return the first element of the array. If the array is not 
 *        an array it will return an empty array
 * 
 * @param {array} array: any array that contains elements
 * 
 * @param {number} number: any number value 
 * 
 * @return {array} returns an array with the amount of elements designated by the given number in the parameter number
 * 
 */
 
 function first(array, number) {
   
   let storage = []; 
   
   if (Array.isArray(array) !== true) {
        return []; 
    } else if (number === undefined || ((isNaN(number)) === true)) {
        return array[0]; 
    } else if (number > array.length) {
            return array;
    } else {
        for (let i = 0; i < number; i++) {
            storage.push(array[i]); 
        }
    } return storage; 
}

module.exports.first = first; 

/**
 * 
 * last: Takes an array and a number and returns the last <number> of items in the array
 *       If a number is not given it will return the last element of the array. If the array is not
 *       an array it will return an empty array. 
 * 
 * @param {array} array: any array that contains elements
 * 
 * @param {number} number: any number value 
 * 
 * @return {array} returns an array with the amount of elements designated by the given number in the parameter number
 * 
 */
 
function last(array, number) {
   let storage = []; 
   if (Array.isArray(array) !== true) {
        return []; 
    } else if (number === undefined || ((isNaN(number)) === true)) {
        return array[array.length -1]; 
    } else if (number > array.length) {
            return array;
    } else {
        for (let i = array.length - number; i < array.length; i++) {
            storage.push(array[i]); 
        }
    } return storage; 
}

module.exports.last = last; 

/**
 * indexOf: Takes an array and a value and returns the index of the first occurence of <value>
 *          Returns -1 if <value> is not in the given array
 * 
 * @param {array} array: any array that contains elements
 * 
 * @param {value} value: any value that can be contained in an array
 * 
 * @return {index} number: returns the index in which the value occurs
 * 
 */
 
function indexOf(array, value) {
    if (value > array.length) {
            return array;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value)
            return i;
        } 
    }  return -1;
}

module.exports.indexOf = indexOf; 

/** 
 * contains: Takes an array and a value and returns true if the array contains the value, returns false if otherise
 * 
 * @param {array} array: any array value
 * 
 * @param {value} value: any value that can be contained in an array
 * 
 * @return {boolean} boolean: true or false
 * 
 */
 
function contains(array, value) {
let something = '';
    for (var i = 0; i < array.length; i++) {
        something = value === array[i] ? true : 'notyet';
        if (something === true) {
            return true;
        }
    } return false;
}

module.exports.contains = contains; 

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} method: The Function to be applied to each value in the collection
 * 
 */
function each(collection, method) {
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            method(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            method(collection[key], key, collection);
        }
    }
}

module.exports.each = each;

/**
 * unique: Takes an array and returns a new array of all the elements from the array with the duplicates removed
 * 
 * @param (Array) array: any array value
 * 
 * @return (Array) array: an array with all duplicates removed
 * 
 */
 
function unique(array) {
    let uniquevalues = [...new Set(array)]; 
    return uniquevalues;  
}

module.exports.unique = unique; 

/**
 * filter: Takes an array and a function, calls the function for each element in the array passing the arguements: the
 * element, it's index, and the array. Returns a new array of elements for which calling the function return true.
 *
 * @param {Array} array: any array value
 * 
 * @param {Function} method: The function to be applied to the arguments from the array
 * 
 * @return {Array} array: an array with all the elements for which calling the function returned true
 * 
 */
 
function filter(array, method) {
let storage = [];
    if (Array.isArray(array) === true) { 
        for (let i = 0; i < array.length; i++) {
            if (method(array[i], i, array) === true) {
                storage.push(array[i]); 
            }
        }
    } return storage;
}

module.exports.filter = filter; 

/**
 * reject: Takes an array and a function, calls the function for each element in the array passing the arguements: the
 * element, it's index, and the array. Returns a new array of elements for which calling the function return false.
 * 
 * @param: {Array} array: any array value
 * 
 * @param: {Function} method: The function to be applied to the arguments from the array
 * 
 * @return {Array} array: An array with all the elements for which calling the function returned false
 * 
 */
 
function reject (array, method) {
let storage = array; 
let filtered = []; 
filtered = filter(array, method);
let falseArray = []; 
    for (var i = 0; i < storage.length; i++) { 
        if (contains(filtered, storage[i]) === false) { 
            falseArray.push(storage[i]);
        }
    }
return falseArray; 
}

module.exports.reject = reject; 

/**
 * partition: Takes an array and a function, calls the function for each element in the array passing the arguements: the
 * element, it's index, and the array. Returns a new array made up of two sub arrays: one containing all the values for which
 * the function returned something truthy and one containing all the values for which the function returned something falsy.
 * 
 * @param {Array} array: any array value
 * 
 * @param {Function} method: The function to be applied to the arguements from the array
 * 
 * @return {Array} array: an array with two sub arrays: one containing the truthy returns and one containing the falsy returns
 * 
 */
 
function partition(array, method) {
    let storage = []; // storage equals an empty array
    storage[0] = filter(array, method); //the first element of storage will equal all truthy returns
    storage[1] = reject(array, method); //the second element of storage will equal all the falsy returns
    return storage;
}

module.exports.partition = partition; 

/**
 * map: Takes a collection and a function, calls the function for each element passing the arguments: if collection is an array: the 
 * element, it's index, and the collection; if collection is an object: the value, it's key, and the collection. Returns a new array 
 * with the return value of each call.
 *
 * @param {Array or Object} collection: can be any array or object. 
 * 
 * @param (Function) method: The function to be applied to arguments generated from collection
 * 
 * @return {Array} array: an array with the return values of all the function calls
 * 
 */
 
 function map(collection, method) {
    let storage = []; 
    if (Array.isArray(collection) === true) { 
        for (let i = 0; i < collection.length; i++) { 
            storage.push(method(collection[i], i, collection)); 
    }
    }
    else {
        for (var key in collection) { 
            storage.push(method(collection[key], key, collection));
        }
    }
    return storage;
}

module.exports.map = map; 

/**
 * pluck: Takes an array of objects and a property, and returns an array containing the values of the given property for every 
 * element in the array.
 * 
 * @param {Array} array: an array containing multiple objects
 * 
 * @param {Value} property: a string value that will be searched for a property of the objects within the array
 * 
 * @return {Array} array: an array containing the given property values
 * 
 */
 
function pluck(array, property) {
let storage = (map(array, identity));
let names = [];
    for (let i = 0; i < storage.length; i++ ) { 
        names.push(storage[i].name); 
    }
return names;
}

module.exports.pluck = pluck; 

/**
 * every: Takes a collection and a fuction. Calls the function for each element passing the arguments: if collection is an array: the 
 * element, it's index, and the collection; if collection is an object: the value, it's key, and the collection. If the return element is true 
 * for every function call, return true. If even one is false, return false. If the function is not provided, return true if every
 * element is truthy, otherwise return false.
 * 
 * @param {Array or Object} collection: any array or object
 * 
 * @param {Function} method: The function to be applied to the arguments generated from the collection.
 * 
 * @return {Value}: boolean: returns true or false based on the conditions.
 * 
 */ 
 
 function every(collection, method) {
    let test = '';
   
    if (typeof method !== 'function') { 
          for (let i = 0; i < collection.length; i++) { 
        collection[i] ? test = true : test = false; 
        if (test === false) { 
            return false; 
        } 
        } return true; 
    } 
    
    let results = true; 
    
    
    if (typeof method === 'function') { 
        let storage = map(collection, method); 
        for (let i = 0; i < storage.length; i++) { 
        if (storage[i] === false) { 
            results = false; 
        } 
    }
    }
    return results; 
}

module.exports.every = every; 

/**
 * some: Takes a collection and function. Calls the function for each element in the collection passing the arguments: if collection is an array: the 
 * element, it's index, and the collection; if collection is an object: the value, it's key, and the collection. If the return element is true 
 * for at least one function call, return true. If it is false for all elements, return false. If the function is not provided, return true if at least
 * one element is truthy, otherwise return false.
 * 
 * @param {Array or Object} collection: any array or object
 * 
 * @param {Function} method: any function that will applied to the arguments generated from the collection
 * 
 * @return {Value} boolean: returns true or false based on the conditions. 
 * 
 */
 
 function some(collection, method) {
     let test = ''; 
   
    if (typeof method !== 'function') {
          for (let i = 0; i < collection.length; i++) { 
        collection[i] ? test = true : test = false; 
        if (test !== false) { 
            return true; 
        } 
        } return false; 
    } 
    
    let results = false; 
    
    
    if (typeof method === 'function') {
        let storage = map(collection, method); 
        for (let i = 0; i < storage.length; i++) {
        if (storage[i] === true) {
            results = true; 
        } 
    }
    }
    return results; 
}

module.exports.some = some; 

/**
 * reduce: Takes an array, function, and seed. Calls the function for every element in arguments passing the arguments:
 * previous result, element, and index. Uses the returnvalue of function as the previous result for the next iteration. 
 * On the first iteration use seed as previous result. If no seed was given uses the first element of collection as seed.
 * Returns the return value of the final function call. 
 * 
 * @param {Array} array: any array value. 
 * 
 * @param {Function} method: any function that will be applied to the arguments generated from the given array and seed. 
 * 
 * @seed {Value} value: any given value. 
 * 
 * @return {Value} value: the return value of the final function call
 * 
 */
 
function reduce(array, method, seed) {
let current; 
seed === undefined ? current = array[0] : current = seed; 
let i;
  for (seed === undefined ? i = 1 : i = 0; i < array.length; i++) {
     current = method(current, array[i], i); 
  }
  return current; 
}

module.exports.reduce = reduce; 
 
 /**
  * extend: Takes an two object and possibly more objects. Copies the properties from the second 
  * object to the first object. If more objects are passed in, copy the properties to the first object 
  * in the order they are passed in. 
  * 
  * @param {Object} object: any object value.
  * 
  * @param {Object} ...objects: any number of subsequent objects. 
  * 
  * @return {Object} object: the orignal object with the properties of the other given objects include in it.
  * 
  */
  
  function extend(object, ...objects) { 
    Object.assign(object, ...objects); 
    return object; 
  }
  
 module.exports.extend = extend; 
 