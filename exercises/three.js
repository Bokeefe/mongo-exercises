module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?
	
	//iterate through movies and save each distict value as an element with a value of 0
	//if the key movie is already in the temp element add 1 to its value, else add it.

Checkout.aggregate (
	    [
	        { $group: {
	            _id: '$movieId', 
	            "movieCount": {$sum: 1 }
	        }},
	        
	        { "$sort": { "movieCount": -1 } },
	        
	        { "$limit": 1 }

	    ],
	    function(err,result) {
	    	if(err){
	    		console.log("it doesn't work");
	    	}
	    	//console.log(result[0]._id);
	    	var movieNum = result[0]._id;

		Movie.findOne({_id:movieNum},function(err,result){
			if(err){
				console.log("not work");
				} console.log(result.title);
			});
		}
	);
};


