function getColor(selection)
{
	switch(selection){
		// Add more options here
	    case 'red':
	    	console.log('available');
			return true;  
	    	
		case 'green':
			console.log('available');  
	    	return true;  
		case 'blue':
			console.log('available');  
	    	return true;
		default:
			console.log('Sorry, that color is not available');
			return false;
	}
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
