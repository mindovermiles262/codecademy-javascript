/*jshint multistr:true */

var text = "It was a bright cold day in April, and the clocks were striking \
thirteen. Winston Smiht, his chin nuzzled into his breast in an effort to \
escape the vile wind, slipped quickly through the glass doors of Victory \
Mansions, though not quickly enough to prevent a swirl of gritty dust from \
entering along with him.";
var myName = "Winston";
var hits = [];
for (var i=0; i < text.length; i++) {
	if (text[i] === myName[0]){
		for (var j = i; j < myName.length + i; j++) {
			hits.push(text[j])
		}
	}
}
if (hits.length > 0){
	console.log(hits)
}
else {
	console.log("Your name wasn't found")
}