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

<div>
<p>'Simple text with no formatting.</p>
</div>

Usage :

var htmlElement = newElm(htmlArr);
