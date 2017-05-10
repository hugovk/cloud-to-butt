walk(document.body);

function walk(node)
{
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
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

function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/\boutage\b/g, "outrage");
  v = v.replace(/\bOutage\b/g, "Outrage");
  v = v.replace(/\bOUTAGE\b/g, "OUTRAGE");
  v = v.replace(/\boutages\b/g, "outrages");
  v = v.replace(/\bOutages\b/g, "Outrages");
  v = v.replace(/\bOUTAGEs\b/g, "OUTRAGEs");

  textNode.nodeValue = v;
}
