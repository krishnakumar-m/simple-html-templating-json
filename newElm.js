var newElm = function(obj) {
  // If not a good JSON, dont do anything
  if (!obj || !obj.type) {
    return;
  }
  // Create the DOM element as per type attribute
  var elm = document.createElement(obj.type), prop;
  console.log('TYPE:' + obj.type);
  // For all properties in the JSON
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      // If it is type, no need to handle, already done. Skip and continue.
      if (prop === 'type') {
        console.log('Skip TYPE!');
        continue;
      }
      // It is content, create the content
      if (prop === 'content') {
        // If the value is string, create a text node
        if (typeof obj[prop] === 'string') {
          console.log('CONTENT is Text:' + obj[prop]);
          elm.appendChild(document.createTextNode(obj[prop]));

        }
        // If it is a list, iterate and handle recursively
        else if (Array.isArray(obj[prop])) {
          console.log('CONTENT is List:' + JSON.stringify(obj[prop]));
          var tempArray = obj[prop];
          var i = 0,
            l = tempArray.length;
          for (; i < l; i++) {
            // Fixed for a Node appendChild error
            if (typeof tempArray[i] === 'string') {
              elm.innerHTML = tempArray[i];
            } else {
              elm.appendChild(newElm(tempArray[i]));
            }
          }
        }
        // Otherwise its an object, handle recursively
        else {
          console.log('CONTENT is Element:' + JSON.stringify(obj[prop]));
          elm.appendChild(newElm(obj[prop]));
        }
      }
      // Otherwise it is an attribute, add the attribute 
      else {
        elm.setAttribute(prop, obj[prop]);
      }
    }
  }
  return elm;
};
