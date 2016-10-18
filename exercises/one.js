module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?

	//I need to go through the iterate through the collection of checkouts
	// and count the number of checkouts for each user
	//sort them in ascending order and return the last one.

Checkout.aggregate(
	    [
	        { "$group": { 
	            "_id": '$userId', 
	            "checkoutCount": { "$sum": 1 }
	        }},
	        
	        { "$sort": { "checkoutCount": -1 } },
	        
	        { "$limit": 3 }
	    ],
	    function(err,result) {
	    	if(err){
	    		console.log("it doesn't work");
	    	}
	    	console.log(result);
	      return result;
	    }
	);
};
