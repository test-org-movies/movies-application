module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  }
};



// $.ajax({
//   url: '/api/movies',
//   type: 'post',
//   data: {search:search},
//   beforeSend: function(){
//     // Show image container
//     $("#loader").show();
//     $("body").addClass('display');
//
//   },
//   success: function(response){
//   response.json();
//   },
//   complete:function(data){
//     // Hide image container
//     $("#loader").hide();
//     $("body").removeClass("display");
//   }
// });
//
//
// $(document).ajaxStart(function(){
//   // Show image container
//   $("#loader").show();
// });
// $(document).ajaxComplete(function(){
//   // Hide image container
//   $("#loader").hide();
// });
//
//
//   }
// };


//
// function onSuccess(data, status, jqXhr) {
//   // display the requested data to the user
// }
//
// function onFail(jqXhr, status, error) {
//   // tell the user something went wrong, and to try again later
// }
//
// function stopLoadingAnimation() {
//   // the request is no longer pending, hide the loading spinner
// }










// $.ajax("/some-url")
//     .done(onSuccess)
//     .fail(onFail)
//     .always(stopLoadingAnimation);




// if (!this.promise) { 
//   this.promise = this.someTest(); 
//   this.promise.catch(() => {}).then(() =>
//   { this.promise.done = true; }); 
//   retVal = true;                 
// }  
// if ( this.promise.done ) { 
//   this.promise = this.someTest(); 
//   this.promise.catch(() => {}).then(() =>
//   { this.promise.done = true; }); 
//   retVal = true; 
// }
//
// function MakeQuerablePromise(promise) { 
  // Don't modify any promise that has been already modified. 
// if (promise.isResolved) return promise;  
// Set initial state 
// var isPending = true; 
// var isRejected = false; 
// var isFulfilled = false;  
// Observe the promise, saving the fulfillment in a closure scope. 
// var result = promise.then( 
// function(v) { 
// isFulfilled = true; 
// isPending = false; 
// return v;  
// },  
// function(e) { 
// isRejected = true; 
// isPending = false; 
// throw e;  
// } 
// );  
// result.isFulfilled = function() { return isFulfilled; }; 
// result.isPending = function() { return isPending; }; 
// result.isRejected = function() { return isRejected; }; 
// return result;