module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?
	var movieQuery = /^The Lord of the Rings/;

	Movie.find({title:/^The Lord of the Rings/},function(err, result){
		for(var i = 0; i < result.length; i++){
			var movieNums = result[i].id;
				console.log (movieNums);
			Movie.findOne({_id:movieNum},function(err,result){//why it hate the err?
				if (err) {
					console.log("not work");
					} console.log(result.userId);
			});
		}
	});
};