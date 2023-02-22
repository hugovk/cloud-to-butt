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

  v = v.replace(/\bmachine learning\b/g, "thing labelling");
  v = v.replace(/\bMachine learning\b/g, "Thing labelling");
  v = v.replace(/\bMachine Learning\b/g, "Thing Labelling");
  v = v.replace(/\bMACHINE LEARNING\b/g, "THING LABELLING");
  v = v.replace(/\bML\b/g, "TL");

  textNode.nodeValue = v;
}
