//Fake News Network Javascript
/*
Notes:
- Variables with TitleGen contain the stories for that respective section.
- Variables with TXTGen contain a caption, or brief description, for the story. 
- Variables with IMAGE contain the image that will be used with the accompanying story. They are named 01-11, so the corresponding number will match the corresponding story and caption. 
- Variables with "x" will be a random number generator that will deermine which stories get selected.
- Variables with TitleRand are selecting the final stories to be placed on the webpage.
- Variables with TXTRand are selecting the final captions to be placed on the webpage.
- Variables with IMAGERand are selecting the final images to be placed on the webpage.
*/

var TITLE = ["Osaka Flu Spreads to Millions of People", "Colleges Starting to Offer 'Finger-Licking Stimulation' Classes Online", "Fisherman Drowns After Falling Out of Plane", "5-Year Old to Receive Honorary Degree", "No Charges Filed After Couple Fornicates in Street", "Smart Board Apologizes to Students for Stabbing Teacher", "Yellow Water Becomes New Trend", "New Mexico Votes to Seperate Into Five States", "Recall on Pork Products After Pigs Found to be Starving", "Recall on 50,000 Vehicles After Failing to go Above 75mph", "Mom Credits Pot for Helping Son Become a Pilot", "UN to Vote on Bill That Destroys the Planet", "Security Experts Believe Niger Will Declare War on Nigeria", "Canadian Minister Shocked to Find Out There are Multiple Religions", "5-Year Old to Become President of Flin Flon", "Public Fornication now Legal in Switzerland", "European Union Bans Several Letters From the Alphabet", "Yellow Water: Trending in America, Worries Elsewhere", "France welcomes the Triple Double Baconator as the National Dish", "Pigs and Ducks Outnumber People in the Marshall Islands", "National Speed Limit Increases to 100mph in America", "Indian Pilots are the Happiest People in the World", "American Presidential Elections now Take Place Every 10 Years", "Famous Frenchman Calls Trump a 'F*cking Genius'", "All Congressional Seats up for Re-election this November", "Supreme Court Rules that its Existence is Unconstitutional", "DeVos Gets America's Schools to be the Best in the World", "Trump Declares Twitter is a Violation of the First Amendment", "Bush runs for third term as president", "Obama and Family move to Japan", "CDC rules recall on all vegan products to be the best decision ever made", "CDC rules that meat has more nutritional benefits then vegetables", "Schwarzenegger to Move to Idaho to Become Potato Farmer", "Hollywood to Move to Portland, Oregon", "Silent Movies are now the Trending Thing in Theaters", "99% of Celebrity Marriages Last for Life", "Spotify to merge with Netflix", "Perry Dishes on Lambert", "Instagram Users Believe the Kardashians are Bullies", "Instagram Stars now Eligible for a Star on the Walk of Fame", "All Television Shows to be Replaced with 24/7 News Coverage", "Celebrity Wigs go Missing", "Recall on 50,000 Movies After Failing to Excite Viewers", "Study Shows that Usage of Online Streaming Services Rapidly Decreasing", "Bacon Linked to Longevity", "Living in Houses at an all Time Low", "Photography Usage at an all Time Low", "Smart Phones now Able to Cook Your Meal", "Drones are the new Airplanes", "Broccoli Linked to Obesity", "Popcorn - the Latest Superfood", "Eating on Plates is no Longer a Thing", "Cockroaches to go on Strike", "Divorce at an all Time low", "The Average Family now has 12.3 Children", "Oil Prices hit an all Time low", "Markets Drop 50% After FNN Goes off air for Twelve Minutes", "Boeing to Abandon Airplanes", "Airbus to Produce Double Decker Buses", "CRT Technology Returning", "Mom and Pop Businesses Purchases Walmart", "Toy Stores in High Demand", "Adult Film Industry Revenue at an all Time low", "All Lumber Stores go Bankrupt", "Jeopardy has a Staggering Surplus of Money", "Universal Studios to Merge with Five Airlines"]

var TEXT = ["CDC believes flu is now a waterborne virus", "Looking for a better relationship while getting that degree?", "Ironically does not fall on land", "Child accomplishes more then most people do in their lives", "Couple was described as 'a Heffer having sex with a Billy Goat'", "It just wanted some TLC", "Hipster claims that it provides 100 essential nutrients and vitamins and is a super drink", "State to be known as Old Mexico, Baby Mexico, Legal Mexico, Old Man Mexico and Kidnapped Mexico", "Bacon from these pigs tastes like roasted brussels sprouts", "Slow vehicles cause road rage and excessive aggression in grandparents", "Her son loves to fly planes upside down", "The bill will allow the activation of the Planet Earth Self Destruction button", "Niger is not pleased with having a similar name to Nigeria", "He thought Catholicism was the only religion", "She won with only one vote. Citizens wonder who casted that vote", "Adult video companies move to Switzerland", "Select letters include: 'F', 'C' and 'K'", "Experts in other countries believe Americans are going crazy since yellow water is dangerously toxic", "Who knows what the old national dish was?", "Pigs are a 2 to 1 ratio to humans while ducks are a 3 to 1 ratio", "Drivers still worried there will be traffic", "They're just   glad they do not have to take the train", "You now get to know the president better", "Americans call for French Fries to become the national dish", "The swamp has been drained", "Let everyone handle it among themselves", "America now has the best educational system in the entire world", "There's too many spam accounts preventing people from posting their true thoughts", "He's unaware that there are term limits", "One person is 'beyond ecstatic'", "The CDC, sources say, is trying to stimulate the economy", "Half the nation is in shock", "It's a main staple in his diet", "The scenery in California was getting old", "It's also cheaper to produce", "Moving to Portland, Oregon has really made couples happier", "Users will still have to pay two seperate fees", "7 things you did not know", "Recent posts have taken a strange direction", "The walk of fame will now be twenty miles longer", "FNN will now have 20 seperate channels", "The Kardashian Wig has a $20 million reward", "Refunds will not be offered", "More people just staring at walls",  "Doctors recommend having five strips of bacon per day", "People rather smaller studio apartments", "People would rather trust the words of others", "Humans are no longer needed in society", "Drones are taking the industry by storm, with low operating costs and no seats per flight", "Kale linked to heart disease", "Popcorn is now the healthiest food on the planet", "People would rather eat food from their hands", "They demand better treatment in the home", "People are once again marrying for love", "Parents worried nobody will take care of them", "People no longer need necessities such as heating or vehicles", "We sincerely regret any inconvenience caused", "It will instead focus on improving the legs of humans", "Double decker airplanes no longer successful", "LEDs proved to be a waste of time and energy", "One hundred businesses partnered together for this astonishing feat", "App Store apps contain too much pornographic content", "People have less urges nowadays", "They probably shouldn't have bet all their money on Wheel of Fortune", "Alex Trebek finally started answering questions", "Nobody has any clue what just happened"]

var IMAGE = ["../img/NewsPics/USNews/01", "../img/NewsPics/USNews/02", "../img/NewsPics/USNews/03", "../img/NewsPics/USNews/04", "../img/NewsPics/USNews/05", "../img/NewsPics/USNews/06", "../img/NewsPics/USNews/07", "../img/NewsPics/USNews/08", "../img/NewsPics/USNews/09", "../img/NewsPics/USNews/10", "../img/NewsPics/USNews/11", "../img/NewsPics/WorldNews/01", "../img/NewsPics/WorldNews/02", "../img/NewsPics/WorldNews/03", "../img/NewsPics/WorldNews/04", "../img/NewsPics/WorldNews/05", "../img/NewsPics/WorldNews/06", "../img/NewsPics/WorldNews/07", "../img/NewsPics/WorldNews/08", "../img/NewsPics/WorldNews/09", "../img/NewsPics/WorldNews/10", "../img/NewsPics/WorldNews/11",  "../img/NewsPics/Politics/01", "../img/NewsPics/Politics/02", "../img/NewsPics/Politics/03", "../img/NewsPics/Politics/04", "../img/NewsPics/Politics/05", "../img/NewsPics/Politics/06", "../img/NewsPics/Politics/07", "../img/NewsPics/Politics/08", "../img/NewsPics/Politics/09", "../img/NewsPics/Politics/10", "../img/NewsPics/Politics/11", "../img/NewsPics/Entertainment/01", "../img/NewsPics/Entertainment/02", "../img/NewsPics/Entertainment/03", "../img/NewsPics/Entertainment/04", "../img/NewsPics/Entertainment/05", "../img/NewsPics/Entertainment/06", "../img/NewsPics/Entertainment/07", "../img/NewsPics/Entertainment/08", "../img/NewsPics/Entertainment/09", "../img/NewsPics/Entertainment/10", "../img/NewsPics/Entertainment/11", "../img/NewsPics/Lifestyle/01", "../img/NewsPics/Lifestyle/02", "../img/NewsPics/Lifestyle/03", "../img/NewsPics/Lifestyle/04", "../img/NewsPics/Lifestyle/05", "../img/NewsPics/Lifestyle/06", "../img/NewsPics/Lifestyle/07", "../img/NewsPics/Lifestyle/08", "../img/NewsPics/Lifestyle/09", "../img/NewsPics/Lifestyle/10", "../img/NewsPics/Lifestyle/11", "../img/NewsPics/Business/01", "../img/NewsPics/Business/02", "../img/NewsPics/Business/03", "../img/NewsPics/Business/04", "../img/NewsPics/Business/05", "../img/NewsPics/Business/06", "../img/NewsPics/Business/07", "../img/NewsPics/Business/08", "../img/NewsPics/Business/09", "../img/NewsPics/Business/10", "../img/NewsPics/Business/11"]

var LOC = ["USNews", "USNews", "USNews", "USNews", "USNews", "USNews", "USNews", "USNews", "USNews", "USNews", "USNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews",  "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Business", "Business", "Business", "Business", "Business", "Business", "Business", "Business", "Business", "Business", "Business"]


var X = Math.floor(Math.random() * 40 + 1); console.log(X);

var TitleRand1 = TITLE[X]; console.log(TitleRand1);
var TitleRand2 = TITLE[X + 5]; console.log(TitleRand2);
var TitleRand3 = TITLE[X + 10]; console.log(TitleRand3);
var TitleRand4 = TITLE[X + 15]; console.log(TitleRand4);
var TitleRand5 = TITLE[X + 20]; console.log(TitleRand5);

var TXTRand1 = TEXT[X]; console.log(TXTRand1);
var TXTRand2 = TEXT[X + 5]; console.log(TXTRand2);
var TXTRand3 = TEXT[X + 10]; console.log(TXTRand3);
var TXTRand4 = TEXT[X + 15]; console.log(TXTRand4);
var TXTRand5 = TEXT[X + 20]; console.log(TXTRand5);

var IMAGERand1 = IMAGE[X]; console.log(IMAGERand1);
var IMAGERand2 = IMAGE[X + 5]; console.log(IMAGERand2);
var IMAGERand3 = IMAGE[X + 10]; console.log(IMAGERand3);
var IMAGERand4 = IMAGE[X + 15]; console.log(IMAGERand4);
var IMAGERand5 = IMAGE[X + 20]; console.log(IMAGERand5);

var LOCRand1 = LOC[X]; console.log(LOCRand1);
var LOCRand2 = LOC[X + 5]; console.log(LOCRand2);
var LOCRand3 = LOC[X + 10]; console.log(LOCRand3);
var LOCRand4 = LOC[X + 15]; console.log(LOCRand4);
var LOCRand5 = LOC[X + 20]; console.log(LOCRand5);

$(".videotitle1").text(TitleRand1);
$(".videotitle2").text(TitleRand2);
$(".videotitle3").text(TitleRand3);
$(".videotitle4").text(TitleRand4);
$(".videotitle5").text(TitleRand5);

$(".videotext1").text(TXTRand1);
$(".videotext2").text(TXTRand2);
$(".videotext3").text(TXTRand3);
$(".videotext4").text(TXTRand4);
$(".videotext5").text(TXTRand5);

$(".videoimage1").attr("src", IMAGERand1 + ".jpg");
$(".videoimage2").attr("src", IMAGERand2 + ".jpg");
$(".videoimage3").attr("src", IMAGERand3 + ".jpg");
$(".videoimage4").attr("src", IMAGERand4 + ".jpg");
$(".videoimage5").attr("src", IMAGERand5 + ".jpg");


var TS1 = TITLE[X + 1]; console.log(TS1);
var TS2 = TITLE[X + 6]; console.log(TS2);
var TS3 = TITLE[X + 11]; console.log(TS3);
var TS4 = TITLE[X + 16]; console.log(TS4);
var TS5 = TITLE[X + 21]; console.log(TS5);

$(".TS1").text(TS1);
$(".TS2").text(TS2);
$(".TS3").text(TS3);
$(".TS4").text(TS4);
$(".TS5").text(TS5);