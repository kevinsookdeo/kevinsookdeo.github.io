//US News Javascript
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

//US News Section
var USTitleGen = ["Osaka Flu Spreads to Millions of People", "Colleges Starting to Offer 'Finger-Licking Stimulation' Classes Online", "Fisherman Drowns After Falling Out of Plane", "5-Year Old to Receive Honorary Degree", "No Charges Filed After Couple Fornicates in Street", "Smart Board Apologizes to Students for Stabbing Teacher", "Yellow Water Becomes New Trend", "New Mexico Votes to Seperate Into Five States", "Recall on Pork Products After Pigs Found to be Starving", "Recall on 50,000 Vehicles After Failing to go Above 75mph", "Mom Credits Pot for Helping Son Become a Pilot"];
var USTXTGen = ["CDC believes flu is now a waterborne virus", "Looking for a better relationship while getting that degree?", "Ironically does not fall on land", "Child accomplishes more then most people do in their lives", "Couple was described as 'a Heffer having sex with a Billy Goat'", "It just wanted some TLC", "Hipster claims that it provides 100 essential nutrients and vitamins and is a super drink", "State to be known as Old Mexico, Baby Mexico, Legal Mexico, Old Man Mexico and Kidnapped Mexico", "Bacon from these pigs tastes like roasted brussels sprouts", "Slow vehicles cause road rage and excessive aggression in grandparents", "Her son loves to fly planes upside down"];
var USIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var USAuthor = ["Caleb Lim", "Irving Davie", "Zahraa Mohamed", "Christiana Ford", "Reid Callahan", "Harleen Bradshaw", "Lyndsey Harper", "Usamah Hinton", "Arslan Torres", "Nichole Wong", "Isobel Dunlop"];
var DATE = new Date();

var USTitle1 = USTitleGen[URL - 1];
var USTXT1 = USTXTGen[URL - 1];
var USIMAGE1 = USIMAGE[URL - 1];
var USAuth1 = USAuthor[URL - 1];

$("#ArticleNewsTitle1").text(USTitle1);
$("#ArticleNewsTitle3").text(USTXT1);
$("#ArticleNewsTitleIMG").attr("src", "../img/NewsPics/USNews/" + USIMAGE1 + ".jpg");
$("#ArticleNewsTitle6").text("By " + USAuth1 + " / " + DATE);
$("title").text(USTitle1);


/*Random Text Generation for Story via BaconIpsum*/
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
