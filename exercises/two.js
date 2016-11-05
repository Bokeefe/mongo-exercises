/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?

   Movie.find({title: /Lord of the Rings/}, (err, titleId) => {
      if (err) { return console.log(err); }

      Checkout.distinct('userId',
         { movieId: { $in : titleId} }, (err, userIds) => {
            console.log("User Ids who checked out LOTR: " + userIds);
      });
   });
};