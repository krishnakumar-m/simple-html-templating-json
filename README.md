# simple-html-templating-json
Very simple html templating using JSON.

Sample JSON :

var htmlArr = {
  type: 'div',
  content: {
    type: 'p',
    content: 'Simple text with no formatting.'
  }

};

Gets converted into the following html code
<pre>
&lt;div&gt;
&lt;p&gt;Simple text with no formatting.&lt;/p&gt;
&lt;/div&gt;
</pre>

Usage :

var htmlElement = newElm(htmlArr);

**Reserved attributes**

type - Tells which the type of DOM element has to be created

content - The actual content of the element; can take another element, list of elements or simple text as content.
