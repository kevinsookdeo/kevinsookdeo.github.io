//Business Javascript
/*
Notes:
- On the Fake News Network home page, each story is linked to the article page, with a "#" and the story number after it. The URL Variable pulls that number from the URL and that will be used in the following variables to determine what story gets used. 
- Variables with TitleGen contain the stories for that respective section.
- Variables with TXTGen contain a caption, or brief description, for the story. 
- Variables with IMAGE contain the image that will be used with the accompanying story. They are named 01-11, so the corresponding number will match the corresponding story and caption. 
*/

var URL = window.location.hash;
URL = URL.replace('#','');
console.log(URL);

//Business Section
var BusinessTitleGen = ["Oil Prices hit an all Time low", "Markets Drop 50% After FNN Goes off air for Twelve Minutes", "Boeing to Abandon Airplanes", "Airbus to Produce Double Decker Buses", "CRT Technology Returning", "Mom and Pop Businesses Purchases Walmart", "Toy Stores in High Demand", "Adult Film Industry Revenue at an all Time low", "All Lumber Stores go Bankrupt", "Jeopardy has a Staggering Surplus of Money", "Universal Studios to Merge with Five Airlines"];
var BusinessTXTGen = ["People no longer need necessities such as heating or vehicles", "We sincerely regret any inconvenience caused", "It will instead focus on improving the legs of humans", "Double decker airplanes no longer successful", "LEDs proved to be a waste of time and energy", "One hundred businesses partnered together for this astonishing feat", "App Store apps contain too much pornographic content", "People have less urges nowadays", "They probably shouldn't have bet all their money on Wheel of Fortune", "Alex Trebek finally started answering questions", "Nobody has any clue what just happened"];
var BusinessIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var BusinessAuthor = ["Caleb Lim", "Irving Davie", "Zahraa Mohamed", "Christiana Ford", "Reid Callahan", "Harleen Bradshaw", "Lyndsey Harper", "Usamah Hinton", "Arslan Torres", "Nichole Wong", "Isobel Dunlop"];
var DATE = new Date();

var BusinessTitle1 = BusinessTitleGen[URL - 1];
var BusinessTXT1 = BusinessTXTGen[URL - 1];
var BusinessIMAGE1 = BusinessIMAGE[URL - 1];
var BusinessAuth1 = BusinessAuthor[URL - 1];

$("#ArticleNewsTitle1").text(BusinessTitle1);
$("#ArticleNewsTitle3").text(BusinessTXT1);
$("#ArticleNewsTitleIMG").attr("src", "../img/NewsPics/Business/" + BusinessIMAGE1 + ".jpg");
$("#ArticleNewsTitle6").text("By " + BusinessAuth1 + " / " + DATE);
$("title").text(BusinessTitle1);


var TYPEEE = ['make-it-spicy', 'all-meat', 'filler']
var MATH1 = Math.floor(Math.random() * 2 ); console.log(MATH1);
var MATH2 = Math.floor(Math.random() * 2 ); console.log(MATH2);

var TYPEEE1 = TYPEEE[MATH1]; console.log(TYPEEE1);
var TYPEEE2 = TYPEEE[MATH2]; console.log(TYPEEE2);

RandomTXT1(TYPEEE1, 'ArticleNewsBlank2');
RandomTXT2(TYPEEE2, 'ArticleNewsBlank1');

function RandomTXT1(type,id){
	var TEXTURL = 'https://baconipsum.com/api/?callback=?'+type
	   fetch(TEXTURL)
	       .then(function(response){return response.json()})
	       .then(function(data){
		      console.log(data)
		  $('#'+id).text(data)})}

function RandomTXT2(type, id){
	var TEXTURL = 'https://baconipsum.com/api/?callback=?'+type
	   fetch(TEXTURL)
	       .then(function(response){return response.json()})
	       .then(function(data2){
		      console.log(data2)
		  $('#'+id).text(data2)})}