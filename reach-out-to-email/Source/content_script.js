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

	v = v.replace(/\breach out to\b/g, "email");
	v = v.replace(/\breached out to\b/g, "emailed");
	v = v.replace(/\breaching out to\b/g, "emailing");
	v = v.replace(/\breach out\b/g, "email");
	v = v.replace(/\breached out\b/g, "emailed");
	v = v.replace(/\breaching out\b/g, "emailing");

	textNode.nodeValue = v;
}


