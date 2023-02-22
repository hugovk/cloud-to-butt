walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// https://stackoverflow.com/a/5904945/724176

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
	const re = /(January|February|March|April|May|June|July|August|September|October|November|December) [0-3]?\d, 20\d\d/g;
	const matches = v.matchAll(re);

	for (const match of matches) {
		const unix = Date.parse(match[0]);
		const shortDayName = new Date(unix).toLocaleString('en-us', {weekday: 'short'});
		const longDayName = new Date(unix).toLocaleString('en-us', {weekday: 'long'});
		const position = match.index;
		const newText = '[' + shortDayName + '] ';
		const skip = [
			shortDayName + ' ' + match[0],
			shortDayName + ', ' + match[0],
			longDayName + ' ' + match[0],
			longDayName + ', ' + match[0],
		];
		const alreadyHasDayName = skip.some(str => v.includes(str));
		if (!alreadyHasDayName) {
			v = [v.slice(0, position), newText, v.slice(position)].join('');
		}

	}

	textNode.nodeValue = v;
}


