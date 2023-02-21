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
	const re = /(January|February|March|April|May|June|July|August|September|October|November|December) [0-3]?\d, 20\d\d/;
	if (found = v.match(re)) {
		const unix = Date.parse(found[0])
		const dayName = new Date(unix).toLocaleString('en-us', {weekday:'short'});
		const position = found.index;
		const newText = '[' + dayName + '] ';
		v = [v.slice(0, position), newText, v.slice(position)].join('');
	}

	textNode.nodeValue = v;
}


