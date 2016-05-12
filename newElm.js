function newElm(obj) {
  if (!obj || !obj.type) {
    return;
  }
  var elm = document.createElement(obj.type);
  console.log('TYPE:'+obj.type);
  for (prop in obj) {
    if (prop === 'type') {
    	console.log('Skip TYPE!');
      continue;
    }
    if (prop === 'content') {
      if (typeof obj[prop] === 'string') {
      	console.log('CONTENT is Text:'+obj[prop]); 	
        elm.appendChild(document.createTextNode(obj[prop]));
      
      } else if (Array.isArray(obj[prop])) {
     		console.log('CONTENT is Array:'+JSON.stringify(obj[prop])); 	
				var tempArray = obj[prop];
        var i=0,l = tempArray.length;
        for(;i<l;i++) 
				{
          if (typeof tempArray[i] === 'string') {
            elm.innerHTML = tempArray[i];
          } else {
        		elm.appendChild(newElm(tempArray[i]));
          }
        }
      } else {
      	console.log('CONTENT is Element:'+JSON.stringify(obj[prop])); 	
        elm.appendChild(newElm(obj[prop]));
      }
    } else {
      elm.setAttribute(prop, obj[prop]);
    }
  }
  return elm;
}
