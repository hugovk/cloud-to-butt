walk(document.body);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;

  v = v.replace(/\balt[-.][Rr]ight\b/g, "neo-Nazi");
  v = v.replace(/\bAlt[-.][Rr]ight\b/g, "Neo-Nazi");
  v = v.replace(/\bAlt[-.]Right\b/g, "Neo-Nazi");
  v = v.replace(/\bALT[-.]RIGHT\b/g, "NEO-NAZI");

  textNode.nodeValue = v;
}
