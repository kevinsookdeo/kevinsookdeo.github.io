//World News Javascript
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

//World News Section
var WorldTitleGen = ["UN to Vote on Bill That Destroys the Planet", "Security Experts Believe Niger Will Declare War on Nigeria", "Canadian Minister Shocked to Find Out There are Multiple Religions", "5-Year Old to Become President of Flin Flon", "Public Fornication now Legal in Switzerland", "European Union Bans Several Letters From the Alphabet", "Yellow Water: Trending in America, Worries Elsewhere", "France welcomes the Triple Double Baconator as the National Dish", "Pigs and Ducks Outnumber People in the Marshall Islands", "National Speed Limit Increases to 100mph in America", "Indian Pilots are the Happiest People in the World"];
var WorldTXTGen = ["The bill will allow the activation of the Planet Earth Self Destruction button", "Niger is not pleased with having a similar name to Nigeria", "He thought Catholicism was the only religion", "She won with only one vote. Citizens wonder who casted that vote", "Adult video companies move to Switzerland", "Select letters include: 'F', 'C' and 'K'", "Experts in other countries believe Americans are going crazy since yellow water is dangerously toxic", "Who knows what the old national dish was?", "Pigs are a 2 to 1 ratio to humans while ducks are a 3 to 1 ratio", "Drivers still worried there will be traffic", "They're just   glad they do not have to take the train"];
var WorldIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var WorldAuthor = ["Caleb Lim", "Irving Davie", "Zahraa Mohamed", "Christiana Ford", "Reid Callahan", "Harleen Bradshaw", "Lyndsey Harper", "Usamah Hinton", "Arslan Torres", "Nichole Wong", "Isobel Dunlop"];
var DATE = new Date();

var WorldTitle1 = WorldTitleGen[URL - 1];
var WorldTXT1 = WorldTXTGen[URL - 1];
var WorldIMAGE1 = WorldIMAGE[URL - 1];
var WorldAuth1 = WorldAuthor[URL - 1];

$("#ArticleNewsTitle1").text(WorldTitle1);
$("#ArticleNewsTitle3").text(WorldTXT1);
$("#ArticleNewsTitleIMG").attr("src", "../img/NewsPics/WorldNews/" + WorldIMAGE1 + ".jpg");
$("#ArticleNewsTitle6").text("By " + WorldAuth1 + " / " + DATE);
$("title").text(WorldTitle1);


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