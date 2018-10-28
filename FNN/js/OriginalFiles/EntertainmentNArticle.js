//Entertainment Javascript
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

//Entertainment Section
var EntertainmentTitleGen = ["Hollywood to Move to Portland, Oregon", "Silent Movies are now the Trending Thing in Theaters", "99% of Celebrity Marriages Last for Life", "Spotify to merge with Netflix", "Perry Dishes on Lambert", "Instagram Users Believe the Kardashians are Bullies", "Instagram Stars now Eligible for a Star on the Walk of Fame", "All Television Shows to be Replaced with 24/7 News Coverage", "Celebrity Wigs go Missing", "Recall on 50,000 Movies After Failing to Excite Viewers", "Study Shows that Usage of Online Streaming Services Rapidly Decreasing"];
var EntertainmentTXTGen = ["The scenery in California was getting old", "It's also cheaper to produce", "Moving to Portland, Oregon has really made couples happier", "Users will still have to pay two seperate fees", "7 things you did not know", "Recent posts have taken a strange direction", "The walk of fame will now be twenty miles longer", "FNN will now have 20 seperate channels", "The Kardashian Wig has a $20 million reward", "Refunds will not be offered", "More people just staring at walls"];
var EntertainmentIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var EntertainmentAuthor = ["Caleb Lim", "Irving Davie", "Zahraa Mohamed", "Christiana Ford", "Reid Callahan", "Harleen Bradshaw", "Lyndsey Harper", "Usamah Hinton", "Arslan Torres", "Nichole Wong", "Isobel Dunlop"];
var DATE = new Date();

var EntertainmentTitle1 = EntertainmentTitleGen[URL - 1];
var EntertainmentTXT1 = EntertainmentTXTGen[URL - 1];
var EntertainmentIMAGE1 = EntertainmentIMAGE[URL - 1];
var EntertainmentAuth1 = EntertainmentAuthor[URL - 1];

$("#ArticleNewsTitle1").text(EntertainmentTitle1);
$("#ArticleNewsTitle3").text(EntertainmentTXT1);
$("#ArticleNewsTitleIMG").attr("src", "../img/NewsPics/Entertainment/" + EntertainmentIMAGE1 + ".jpg");
$("#ArticleNewsTitle6").text("By " + EntertainmentAuth1 + " / " + DATE);
$("title").text(EntertainmentTitle1);

var TYPEEE = ['make-it-spicy', 'all-meat', 'filler']
var MATH1 = Math.floor(Math.random() * 2); console.log(MATH1);
var MATH2 = Math.floor(Math.random() * 2); console.log(MATH2);

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