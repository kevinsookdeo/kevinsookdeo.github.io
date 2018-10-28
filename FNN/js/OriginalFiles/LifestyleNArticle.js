//Lifestyle Javascript
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

//Lifestyle Section
var LifestyleTitleGen = ["Bacon Linked to Longevity", "Living in Houses at an all Time Low", "Photography Usage at an all Time Low", "Smart Phones now Able to Cook Your Meal", "Drones are the new Airplanes", "Broccoli Linked to Obesity", "Popcorn - the Latest Superfood", "Eating on Plates is no Longer a Thing", "Cockroaches to go on Strike", "Divorce at an all Time low", "The Average Family now has 12.3 Children"];
var LifestyleTXTGen = ["Doctors recommend having five strips of bacon per day", "People rather smaller studio apartments", "People would rather trust the words of others", "Humans are no longer needed in society", "Drones are taking the industry by storm, with low operating costs and no seats per flight", "Kale linked to heart disease", "Popcorn is now the healthiest food on the planet", "People would rather eat food from their hands", "They demand better treatment in the home", "People are once again marrying for love", "Parents worried nobody will take care of them"];
var LifestyleIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var LifestyleAuthor = ["Caleb Lim", "Irving Davie", "Zahraa Mohamed", "Christiana Ford", "Reid Callahan", "Harleen Bradshaw", "Lyndsey Harper", "Usamah Hinton", "Arslan Torres", "Nichole Wong", "Isobel Dunlop"];
var DATE = new Date();

var LifestyleTitle1 = LifestyleTitleGen[URL - 1];
var LifestyleTXT1 = LifestyleTXTGen[URL - 1];
var LifestyleIMAGE1 = LifestyleIMAGE[URL - 1];
var LifestyleAuth1 = LifestyleAuthor[URL - 1];

$("#ArticleNewsTitle1").text(LifestyleTitle1);
$("#ArticleNewsTitle3").text(LifestyleTXT1);
$("#ArticleNewsTitleIMG").attr("src", "../img/NewsPics/Lifestyle/" + LifestyleIMAGE1 + ".jpg");
$("#ArticleNewsTitle6").text("By " + LifestyleAuth1 + " / " + DATE);
$("title").text(LifestyleTitle1);


var TYPEEE = ['make-it-spicy', 'all-meat', 'filler']
var MATH1 = Math.floor(Math.random() * 2 + 1); console.log(MATH1);
var MATH2 = Math.floor(Math.random() * 2 + 1); console.log(MATH2);

var TYPEEE1 = TYPEEE[MATH1]; console.log(TYPEEE1);
var TYPEEE2 = TYPEEE[MATH2]; console.log(TYPEEE2);

RandomTXT1(TYPEEE1, 'ArticleNewsBlank2');
RandomTXT2(TYPEEE2, 'ArticleNewsBlank1');

function RandomTXT1(type, id){
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