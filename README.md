# simple-html-templating-json
Very simple html templating using JSON.

The below JSON ...
```javascript
var htmlArr = {
  type: 'div',
  content: {
    type: 'p',
    content: 'Simple text with no formatting.'
  }
};
```

... gets converted into the following html code ...
```HTML
&lt;div&gt;
&lt;p&gt;Simple text with no formatting.&lt;/p&gt;
&lt;/div&gt;
```

...on using
```javascript
var htmlElement = newElm(htmlArr);
```

Test it [here](https://jsfiddle.net/krishnakumarm777/m9kd572o/)

**Reserved attributes**

type - Tells which the type of DOM element has to be created.

content - The actual content of the element; can take another element, list of elements or simple text as content.

Any other attribute will be taken as the element's HTML attribute.
