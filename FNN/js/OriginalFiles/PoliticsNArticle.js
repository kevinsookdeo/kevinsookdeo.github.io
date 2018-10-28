//Politics Javascript
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

//Politics Section
var PoliticsTitleGen = ["American Presidential Elections now Take Place Every 10 Years", "Famous Frenchman Calls Trump a 'F*cking Genius'", "All Congressional Seats up for Re-election this November", "Supreme Court Rules that its Existence is Unconstitutional", "DeVos Gets America's Schools to be the Best in the World", "Trump Declares Twitter is a Violation of the First Amendment", "Bush runs for third term as president", "Obama and Family move to Japan", "CDC rules recall on all vegan products to be the best decision ever made", "CDC rules that meat has more nutritional benefits then vegetables", "Schwarzenegger to Move to Idaho to Become Potato Farmer"];
var PoliticsTXTGen = ["You now get to know the president better", "Americans call for French Fries to become the national dish", "The swamp has been drained", "Let everyone handle it among themselves", "America now has the best educational system in the entire world", "There's too many spam accounts preventing people from posting their true thoughts", "He's unaware that there are term limits", "One person is 'beyond ecstatic'", "The CDC, sources say, is trying to stimulate the economy", "Half the nation is in shock", "It's a main staple in his diet"];
var PoliticsIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var PoliticsAuthor = ["Caleb Lim", "Irving Davie", "Zahraa Mohamed", "Christiana Ford", "Reid Callahan", "Harleen Bradshaw", "Lyndsey Harper", "Usamah Hinton", "Arslan Torres", "Nichole Wong", "Isobel Dunlop"];
var DATE = new Date();

var PoliticsTitle1 = PoliticsTitleGen[URL - 1];
var PoliticsTXT1 = PoliticsTXTGen[URL - 1];
var PoliticsIMAGE1 = PoliticsIMAGE[URL - 1];
var PoliticsAuth1 = PoliticsAuthor[URL - 1];

$("#ArticleNewsTitle1").text(PoliticsTitle1);
$("#ArticleNewsTitle3").text(PoliticsTXT1);
$("#ArticleNewsTitleIMG").attr("src", "../img/NewsPics/Politics/" + PoliticsIMAGE1 + ".jpg");
$("#ArticleNewsTitle6").text("By " + PoliticsAuth1 + " / " + DATE);
$("title").text(PoliticsTitle1);


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