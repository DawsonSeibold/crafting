

var ref = new Firebase("https://project-3394395307247337099.firebaseio.com/");
//var commentsRef = firebase.database().ref('');
ref.on('child_added', function(test) {
        console.log('test');
})
//commentsRef.on('child_added', function(data) {
 // addCommentElement(postElement, data.key, data.val().text, data.val().author);
//});
