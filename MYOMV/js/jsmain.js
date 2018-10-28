//Make Your Own Music Video
//Mousetrap Javascript

/*Randomized Words*/
var word = ["studio", "shoulder", "giant", "conversation", "dimension", "program", "dominate", "cancel", "interactive", "seem", "bad", "twilight", "sanctuary", "dough", "consumption", "compose", "undertake", "exercise", "guard", "hunter", "brink", "acceptable", "faint", "order", "pound", "petty", "matrix", "torture", "rotate", "thigh", "stick", "foot", "credit card", "use", "foundation"];
    //Randomized 1
var wordchoices =  Math.floor(Math.random() * word.length);
var randomchoices = word[wordchoices];
    //Randomized 2
var wordchoices2 =  Math.floor(Math.random() * word.length);
var randomchoices2 = word[wordchoices2];
    //Randomized 3
var wordchoices3 =  Math.floor(Math.random() * word.length);
var randomchoices3 = word[wordchoices3];
    //Randomized 4
var wordchoices4 =  Math.floor(Math.random() * word.length);
var randomchoices4 = word[wordchoices4];
    //Randomized 5
var wordchoices5 =  Math.floor(Math.random() * word.length);
var randomchoices5 = word[wordchoices5];
    //Randomized 6
var wordchoices6 =  Math.floor(Math.random() * word.length);
var randomchoices6 = word[wordchoices6];
    //Randoimzed 7
var wordchoices7 =  Math.floor(Math.random() * word.length);
var randomchoices7 = word[wordchoices7];
    //Randomized 8
var wordchoices8 =  Math.floor(Math.random() * word.length);
var randomchoices8 = word[wordchoices8];

/*Keyboard assignments*/
Mousetrap.bind("q", function () {appear(randomchoices, "001")});
Mousetrap.bind("w", function () {appear("", "002")});
Mousetrap.bind("e", function () {appear("", "003")});
Mousetrap.bind("r", function () {appear("", "004")});
Mousetrap.bind("t", function () {appear(randomchoices2, "005")});
Mousetrap.bind("y", function () {appear("", "006")});
Mousetrap.bind("u", function () {appear("", "007")});
Mousetrap.bind("i", function () {appear("", "008")});
Mousetrap.bind("o", function () {appear("", "009")});
Mousetrap.bind("p", function () {appear(randomchoices3, "010")});
Mousetrap.bind("[", function () {appear("", "011")})
Mousetrap.bind("]", function () {appear("", "012")})
Mousetrap.bind("\\", function () {appear("", "013")})
Mousetrap.bind("a", function () {appear("", "14")})
Mousetrap.bind("s", function () {appear(randomchoices4, "15")})
Mousetrap.bind("d", function () {appear("", "16")})
Mousetrap.bind("f", function () {appear("", "17")})
Mousetrap.bind("g", function () {appear("", "18")})
Mousetrap.bind("h", function () {appear("", "19")})
Mousetrap.bind("j", function () {appear(randomchoices5, "20")})
Mousetrap.bind("k", function () {appear("", "21")})
Mousetrap.bind("l", function () {appear("", "22")})
Mousetrap.bind(';', function () {appear("", "23")})
Mousetrap.bind("'", function () {appear("", "24")})
Mousetrap.bind("z", function () {appear(randomchoices6, "25")})
Mousetrap.bind("x", function () {appear("Coding Power", "26")})
Mousetrap.bind("c", function () {appear(randomchoices8, "27")})
Mousetrap.bind("v", function () {appear("Coding Rainbow", "28")})
Mousetrap.bind("b", function () {appear("", "29")})
Mousetrap.bind("n", function () {appear("Dan Schiffman", "30")})
Mousetrap.bind("m", function () {appear(randomchoices7, "31")})
Mousetrap.bind(",", function () {appear("", "32")})
Mousetrap.bind(".", function () {appear("", "33")})
Mousetrap.bind("/", function () {appear("", "34")})
Mousetrap.bind("1", function () {
    newBG("../media/img/1.gif")
    appear("", "35")})        

Mousetrap.bind("2", function () {newBG("../media/img/2.gif")}) 
Mousetrap.bind("3", function () {
    newBG("../media/img/3.gif")
    appear("", "014")})       

Mousetrap.bind("4", function () {
	newBG("../media/img/4.gif")
    appear("", "015")})

Mousetrap.bind("5", function () {newBG("../media/img/5.gif")})        
Mousetrap.bind("6", function () {
	newBG("../media/img/6.gif")
    appear("", "016")})

Mousetrap.bind("7", function () {
    newBG("../media/img/7.gif")
    appear("", "018")})

Mousetrap.bind("8", function () {newBG("../media/img/mainbgold.jpg")}) 
Mousetrap.bind("9", function () {newBG("../media/img/mainbg.jpg")})        
Mousetrap.bind("0", function () {
	newBG("../media/img/1.jpg")
    appear("", "017")}) 

Mousetrap.bind("~", function () {appear("epic", "040")})
Mousetrap.bind("-", function () {appear("beats", "040")})
Mousetrap.bind("=", function () {appear("bass", "040")})
Mousetrap.bind("_", function () {appear("treble", "040")})

/*Functions*/
    //Change Background
function newBG(background) {
    $("html").css("background-image", "url("+background+")");
}

    //Adapted from In The Dark on HotWriting and modified for this project
function appear(text, sounds) {
	if(sounds == '35'){
		$('#WhatToDo').remove();
		var c = getRandomNum(1,99999).toString()
		$('body').append("<legend id='"+c+"' style='margin-left:auto; margin-right: auto; margin-top:20%'>"+text+"</legend>")}
    //Where the text will appear on the screen
    else {
		var a = getRandomNum(0,80)
		var b = getRandomNum(0,85)
		var c = getRandomNum(1,99999).toString()
		if($('#WhatToDo')[0]){$('#WhatToDo')[0].remove()}
		if (b > 65 && a > 65) {
			a -= 10}
		
        a = a.toString() + "%"
		b = b.toString() + "%"
		$('body').append("<h1 id='"+c+"' style='left:"+a+"; top:"+b+"'>"+text+"</h1>")}
	
    var sound = $('#' + sounds)[0];
	$('#'+c).fadeOut(sound.duration * 1000, function() {$(this).remove()})
	playSound(sounds);
	linearCounter = parseInt(sounds.slice(2))
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);}

//Adapted from ToddWords and modified for this project
var playSound = function(id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}