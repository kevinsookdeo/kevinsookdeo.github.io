//Fake News Network Javascript
/*
Notes:
- Variables with TitleGen contain the stories for that respective section.
- Variables with TXTGen contain a caption, or brief description, for the story. 
- Variables with "x" will be a random number generator that will deermine which stories get selected.
- Variables with TitleRand are selecting the final stories to be placed on the webpage.
- Variables with TXTRand are selecting the final captions to be placed on the webpage.
- Variables with IMAGERand are selecting the final images to be placed on the webpage.
- Variables with HrefRand are selecting the final corresponding story links to be placed on the webpage.
*/
//US News Section
var USTitleGen = ["Osaka Flu Spreads to Millions of People", "Colleges Starting to Offer 'Finger-Licking Stimulation' Classes Online", "Fisherman Drowns After Falling Out of Plane", "5-Year Old to Receive Honorary Degree", "No Charges Filed After Couple Fornicates in Street", "Smart Board Apologizes to Students for Stabbing Teacher", "Yellow Water Becomes New Trend", "New Mexico Votes to Seperate Into Five States", "Recall on Pork Products After Pigs Found to be Starving", "Recall on 50,000 Vehicles After Failing to go Above 75mph", "Mom Credits Pot for Helping Son Become a Pilot"];
var USIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var USx = Math.floor(Math.random() * 6 + 1); console.log(USx);

var USTitleRand1 = USTitleGen[USx]; console.log(USTitleRand1);
var USTitleRand2 = USTitleGen[USx + 1]; console.log(USTitleRand2);
var USTitleRand3 = USTitleGen[USx + 2]; console.log(USTitleRand3);
var USTitleRand4 = USTitleGen[USx - 1]; console.log(USTitleRand4);
var USTitleRand5 = USTitleGen[USx + 3]; console.log(USTitleRand5);
var USTitleRand6 = USTitleGen[USx + 4]; console.log(USTitleRand6);
var USIMAGERand1 = USIMAGE[USx]; console.log(USIMAGERand1);
var USIMAGERand2 = USIMAGE[USx + 1]; console.log(USIMAGERand2);
var USIMAGERand3 = USIMAGE[USx + 2]; console.log(USIMAGERand3);
var USIMAGERand4 = USIMAGE[USx - 1]; console.log(USIMAGERand4);
var USIMAGERand5 = USIMAGE[USx + 3]; console.log(USIMAGERand5);
var USIMAGERand6 = USIMAGE[USx + 4]; console.log(USIMAGERand6);
var USHrefRand1 = [USx + 1]; console.log(USHrefRand1);
var USHrefRand2 = [USx + 2]; console.log(USHrefRand2);
var USHrefRand3 = [USx + 3]; console.log(USHrefRand3);
var USHrefRand4 = [USx]; console.log(USHrefRand4);
var USHrefRand5 = [USx + 4]; console.log(USHrefRand5);
var USHrefRand6 = [USx + 5]; console.log(USHrefRand6);

//World News Section
var WorldTitleGen = ["UN to Vote on Bill That Destroys the Planet", "Security Experts Believe Niger Will Declare War on Nigeria", "Canadian Minister Shocked to Find Out There are Multiple Religions", "5-Year Old to Become President of Flin Flon", "Public Fornication now Legal in Switzerland", "European Union Bans Several Letters From the Alphabet", "Yellow Water: Trending in America, Worries Elsewhere", "France welcomes the Triple Double Baconator as the National Dish", "Pigs and Ducks Outnumber People in the Marshall Islands", "National Speed Limit Increases to 100mph in America", "Indian Pilots are the Happiest People in the World"];
var WorldIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var Worldx = Math.floor(Math.random() * 6 + 1); console.log(Worldx);

var WorldTitleRand1 = WorldTitleGen[Worldx]; console.log(WorldTitleRand1);
var WorldTitleRand2 = WorldTitleGen[Worldx + 1]; console.log(WorldTitleRand2);
var WorldTitleRand3 = WorldTitleGen[Worldx + 2]; console.log(WorldTitleRand3);
var WorldTitleRand4 = WorldTitleGen[Worldx - 1]; console.log(WorldTitleRand4);
var WorldTitleRand5 = WorldTitleGen[Worldx + 3]; console.log(WorldTitleRand5);
var WorldTitleRand6 = WorldTitleGen[Worldx + 4]; console.log(WorldTitleRand6);
var WorldIMAGERand1 = WorldIMAGE[Worldx]; console.log(WorldIMAGERand1);
var WorldIMAGERand2 = WorldIMAGE[Worldx + 1]; console.log(WorldIMAGERand2);
var WorldIMAGERand3 = WorldIMAGE[Worldx + 2]; console.log(WorldIMAGERand3);
var WorldIMAGERand4 = WorldIMAGE[Worldx - 1]; console.log(WorldIMAGERand4);
var WorldIMAGERand5 = WorldIMAGE[Worldx + 3]; console.log(WorldIMAGERand5);
var WorldIMAGERand6 = WorldIMAGE[Worldx + 4]; console.log(WorldIMAGERand6);
var WorldHrefRand1 = [Worldx + 1]; console.log(WorldHrefRand1);
var WorldHrefRand2 = [Worldx + 2]; console.log(WorldHrefRand2);
var WorldHrefRand3 = [Worldx + 3]; console.log(WorldHrefRand3);
var WorldHrefRand4 = [Worldx]; console.log(WorldHrefRand4);
var WorldHrefRand5 = [Worldx + 4]; console.log(WorldHrefRand5);
var WorldHrefRand6 = [Worldx + 5]; console.log(WorldHrefRand6);

//Politics Section
var PoliticsTitleGen = ["American Presidential Elections now Take Place Every 10 Years", "Famous Frenchman Calls Trump a 'F*cking Genius'", "All Congressional Seats up for Re-election this November", "Supreme Court Rules that its Existence is Unconstitutional", "DeVos Gets America's Schools to be the Best in the World", "Trump Declares Twitter is a Violation of the First Amendment", "Bush runs for third term as president", "Obama and Family move to Japan", "CDC rules recall on all vegan products to be the best decision ever made", "CDC rules that meat has more nutritional benefits then vegetables", "Schwarzenegger to Move to Idaho to Become Potato Farmer"];
var PoliticsIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var Politicsx = Math.floor(Math.random() * 6 + 1); console.log(Politicsx);

var PoliticsTitleRand1 = PoliticsTitleGen[Politicsx]; console.log(PoliticsTitleRand1);
var PoliticsTitleRand2 = PoliticsTitleGen[Politicsx + 1]; console.log(PoliticsTitleRand2);
var PoliticsTitleRand3 = PoliticsTitleGen[Politicsx + 2]; console.log(PoliticsTitleRand3);
var PoliticsTitleRand4 = PoliticsTitleGen[Politicsx - 1]; console.log(PoliticsTitleRand4);
var PoliticsTitleRand5 = PoliticsTitleGen[Politicsx + 3]; console.log(PoliticsTitleRand5);
var PoliticsTitleRand6 = PoliticsTitleGen[Politicsx + 4]; console.log(PoliticsTitleRand6);
var PoliticsIMAGERand1 = PoliticsIMAGE[Politicsx]; console.log(PoliticsIMAGERand1);
var PoliticsIMAGERand2 = PoliticsIMAGE[Politicsx + 1]; console.log(PoliticsIMAGERand2);
var PoliticsIMAGERand3 = PoliticsIMAGE[Politicsx + 2]; console.log(PoliticsIMAGERand3);
var PoliticsIMAGERand4 = PoliticsIMAGE[Politicsx - 1]; console.log(PoliticsIMAGERand4);
var PoliticsIMAGERand5 = PoliticsIMAGE[Politicsx + 3]; console.log(PoliticsIMAGERand5);
var PoliticsIMAGERand6 = PoliticsIMAGE[Politicsx + 4]; console.log(PoliticsIMAGERand6);
var PoliticsHrefRand1 = [Politicsx + 1]; console.log(PoliticsHrefRand1);
var PoliticsHrefRand2 = [Politicsx + 2]; console.log(PoliticsHrefRand2);
var PoliticsHrefRand3 = [Politicsx + 3]; console.log(PoliticsHrefRand3);
var PoliticsHrefRand4 = [Politicsx]; console.log(PoliticsHrefRand4);
var PoliticsHrefRand5 = [Politicsx + 4]; console.log(PoliticsHrefRand5);
var PoliticsHrefRand6 = [Politicsx + 5]; console.log(PoliticsHrefRand6);

//Entertainment Section
var EntertainmentTitleGen = ["Hollywood to Move to Portland, Oregon", "Silent Movies are now the Trending Thing in Theaters", "99% of Celebrity Marriages Last for Life", "Spotify to merge with Netflix", "Perry Dishes on Lambert", "Instagram Users Believe the Kardashians are Bullies", "Instagram Stars now Eligible for a Star on the Walk of Fame", "All Television Shows to be Replaced with 24/7 News Coverage", "Celebrity Wigs go Missing", "Recall on 50,000 Movies After Failing to Excite Viewers", "Study Shows that Usage of Online Streaming Services Rapidly Decreasing"];
var EntertainmentIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var Entertainmentx = Math.floor(Math.random() * 6 + 1); console.log(Entertainmentx);

var EntertainmentTitleRand1 = EntertainmentTitleGen[Entertainmentx]; console.log(EntertainmentTitleRand1);
var EntertainmentTitleRand2 = EntertainmentTitleGen[Entertainmentx + 1]; console.log(EntertainmentTitleRand2);
var EntertainmentTitleRand3 = EntertainmentTitleGen[Entertainmentx + 2]; console.log(EntertainmentTitleRand3);
var EntertainmentTitleRand4 = EntertainmentTitleGen[Entertainmentx - 1]; console.log(EntertainmentTitleRand4);
var EntertainmentTitleRand5 = EntertainmentTitleGen[Entertainmentx + 3]; console.log(EntertainmentTitleRand5);
var EntertainmentTitleRand6 = EntertainmentTitleGen[Entertainmentx + 4]; console.log(EntertainmentTitleRand6);
var EntertainmentIMAGERand1 = EntertainmentIMAGE[Entertainmentx]; console.log(EntertainmentIMAGERand1);
var EntertainmentIMAGERand2 = EntertainmentIMAGE[Entertainmentx + 1]; console.log(EntertainmentIMAGERand2);
var EntertainmentIMAGERand3 = EntertainmentIMAGE[Entertainmentx + 2]; console.log(EntertainmentIMAGERand3);
var EntertainmentIMAGERand4 = EntertainmentIMAGE[Entertainmentx - 1]; console.log(EntertainmentIMAGERand4);
var EntertainmentIMAGERand5 = EntertainmentIMAGE[Entertainmentx + 3]; console.log(EntertainmentIMAGERand5);
var EntertainmentIMAGERand6 = EntertainmentIMAGE[Entertainmentx + 4]; console.log(EntertainmentIMAGERand6);
var EntertainmentHrefRand1 = [Entertainmentx + 1]; console.log(EntertainmentHrefRand1);
var EntertainmentHrefRand2 = [Entertainmentx + 2]; console.log(EntertainmentHrefRand2);
var EntertainmentHrefRand3 = [Entertainmentx + 3]; console.log(EntertainmentHrefRand3);
var EntertainmentHrefRand4 = [Entertainmentx]; console.log(EntertainmentHrefRand4);
var EntertainmentHrefRand5 = [Entertainmentx + 4]; console.log(EntertainmentHrefRand5);
var EntertainmentHrefRand6 = [Entertainmentx + 5]; console.log(EntertainmentHrefRand6);

//Lifestyle Section
var LifestyleTitleGen = ["Bacon Linked to Longevity", "Living in Houses at an all Time Low", "Photography Usage at an all Time Low", "Smart Phones now Able to Cook Your Meal", "Drones are the new Airplanes", "Broccoli Linked to Obesity", "Popcorn - the Latest Superfood", "Eating on Plates is no Longer a Thing", "Cockroaches to go on Strike", "Divorce at an all Time low", "The Average Family now has 12.3 Children"];
var LifestyleIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var Lifestylex = Math.floor(Math.random() * 6 + 1); console.log(Lifestylex);

var LifestyleTitleRand1 = LifestyleTitleGen[Lifestylex]; console.log(LifestyleTitleRand1);
var LifestyleTitleRand2 = LifestyleTitleGen[Lifestylex + 1]; console.log(LifestyleTitleRand2);
var LifestyleTitleRand3 = LifestyleTitleGen[Lifestylex + 2]; console.log(LifestyleTitleRand3);
var LifestyleTitleRand4 = LifestyleTitleGen[Lifestylex - 1]; console.log(LifestyleTitleRand4);
var LifestyleTitleRand5 = LifestyleTitleGen[Lifestylex + 3]; console.log(LifestyleTitleRand5);
var LifestyleTitleRand6 = LifestyleTitleGen[Lifestylex + 4]; console.log(LifestyleTitleRand6);
var LifestyleIMAGERand1 = LifestyleIMAGE[Lifestylex]; console.log(LifestyleIMAGERand1);
var LifestyleIMAGERand2 = LifestyleIMAGE[Lifestylex + 1]; console.log(LifestyleIMAGERand2);
var LifestyleIMAGERand3 = LifestyleIMAGE[Lifestylex + 2]; console.log(LifestyleIMAGERand3);
var LifestyleIMAGERand4 = LifestyleIMAGE[Lifestylex - 1]; console.log(LifestyleIMAGERand4);
var LifestyleIMAGERand5 = LifestyleIMAGE[Lifestylex + 3]; console.log(LifestyleIMAGERand5);
var LifestyleIMAGERand6 = LifestyleIMAGE[Lifestylex + 4]; console.log(LifestyleIMAGERand6);
var LifestyleHrefRand1 = [Lifestylex + 1]; console.log(LifestyleHrefRand1);
var LifestyleHrefRand2 = [Lifestylex + 2]; console.log(LifestyleHrefRand2);
var LifestyleHrefRand3 = [Lifestylex + 3]; console.log(LifestyleHrefRand3);
var LifestyleHrefRand4 = [Lifestylex]; console.log(LifestyleHrefRand4);
var LifestyleHrefRand5 = [Lifestylex + 4]; console.log(LifestyleHrefRand5);
var LifestyleHrefRand6 = [Lifestylex + 5]; console.log(LifestyleHrefRand6);

//Business Section
var BusinessTitleGen = ["Oil Prices hit an all Time low", "Markets Drop 50% After FNN Goes off air for Twelve Minutes", "Boeing to Abandon Airplanes", "Airbus to Produce Double Decker Buses", "CRT Technology Returning", "Mom and Pop Businesses Purchases Walmart", "Toy Stores in High Demand", "Adult Film Industry Revenue at an all Time low", "All Lumber Stores go Bankrupt", "Jeopardy has a Staggering Surplus of Money", "Universal Studios to Merge with Five Airlines"];
var BusinessIMAGE = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var Businessx = Math.floor(Math.random() * 6 + 1); console.log(Businessx);

var BusinessTitleRand1 = BusinessTitleGen[Businessx]; console.log(BusinessTitleRand1);
var BusinessTitleRand2 = BusinessTitleGen[Businessx + 1]; console.log(BusinessTitleRand2);
var BusinessTitleRand3 = BusinessTitleGen[Businessx + 2]; console.log(BusinessTitleRand3);
var BusinessTitleRand4 = BusinessTitleGen[Businessx - 1]; console.log(BusinessTitleRand4);
var BusinessTitleRand5 = BusinessTitleGen[Businessx + 3]; console.log(BusinessTitleRand5);
var BusinessTitleRand6 = BusinessTitleGen[Businessx + 4]; console.log(BusinessTitleRand6);
var BusinessIMAGERand1 = BusinessIMAGE[Businessx]; console.log(BusinessIMAGERand1);
var BusinessIMAGERand2 = BusinessIMAGE[Businessx + 1]; console.log(BusinessIMAGERand2);
var BusinessIMAGERand3 = BusinessIMAGE[Businessx + 2]; console.log(BusinessIMAGERand3);
var BusinessIMAGERand4 = BusinessIMAGE[Businessx - 1]; console.log(BusinessIMAGERand4);
var BusinessIMAGERand5 = BusinessIMAGE[Businessx + 3]; console.log(BusinessIMAGERand5);
var BusinessIMAGERand6 = BusinessIMAGE[Businessx + 4]; console.log(BusinessIMAGERand6);
var BusinessHrefRand1 = [Businessx + 1]; console.log(BusinessHrefRand1);
var BusinessHrefRand2 = [Businessx + 2]; console.log(BusinessHrefRand2);
var BusinessHrefRand3 = [Businessx + 3]; console.log(BusinessHrefRand3);
var BusinessHrefRand4 = [Businessx]; console.log(BusinessHrefRand4);
var BusinessHrefRand5 = [Businessx + 4]; console.log(BusinessHrefRand5);
var BusinessHrefRand6 = [Businessx + 5]; console.log(BusinessHrefRand6);

//Top Stories on FNN
var Top1 = [BusinessTitleRand1, BusinessTitleRand2, BusinessTitleRand3, BusinessTitleRand4, BusinessTitleRand5, BusinessTitleRand6, LifestyleTitleRand1, LifestyleTitleRand2, LifestyleTitleRand3, LifestyleTitleRand4, LifestyleTitleRand5, LifestyleTitleRand6, EntertainmentTitleRand1, EntertainmentTitleRand2, EntertainmentTitleRand3, EntertainmentTitleRand4, EntertainmentTitleRand5, EntertainmentTitleRand6, PoliticsTitleRand1, PoliticsTitleRand2, PoliticsTitleRand3, PoliticsTitleRand4, PoliticsTitleRand5, PoliticsTitleRand6, WorldTitleRand1, WorldTitleRand2, WorldTitleRand3, WorldTitleRand4, WorldTitleRand5, WorldTitleRand6, USTitleRand1, USTitleRand2, USTitleRand3, USTitleRand4, USTitleRand5, USTitleRand6];
var Top2 = [BusinessTitleRand1, BusinessTitleRand2, BusinessTitleRand3, BusinessTitleRand4, BusinessTitleRand5, BusinessTitleRand6, LifestyleTitleRand1, LifestyleTitleRand2, LifestyleTitleRand3, LifestyleTitleRand4, LifestyleTitleRand5, LifestyleTitleRand6, EntertainmentTitleRand1, EntertainmentTitleRand2, EntertainmentTitleRand3, EntertainmentTitleRand4, EntertainmentTitleRand5, EntertainmentTitleRand6, PoliticsTitleRand1, PoliticsTitleRand2, PoliticsTitleRand3, PoliticsTitleRand4, PoliticsTitleRand5, PoliticsTitleRand6, WorldTitleRand1, WorldTitleRand2, WorldTitleRand3, WorldTitleRand4, WorldTitleRand5, WorldTitleRand6, USTitleRand1, USTitleRand2, USTitleRand3, USTitleRand4, USTitleRand5, USTitleRand6];
var Top3 = [BusinessTitleRand1, BusinessTitleRand2, BusinessTitleRand3, BusinessTitleRand4, BusinessTitleRand5, BusinessTitleRand6, LifestyleTitleRand1, LifestyleTitleRand2, LifestyleTitleRand3, LifestyleTitleRand4, LifestyleTitleRand5, LifestyleTitleRand6, EntertainmentTitleRand1, EntertainmentTitleRand2, EntertainmentTitleRand3, EntertainmentTitleRand4, EntertainmentTitleRand5, EntertainmentTitleRand6, PoliticsTitleRand1, PoliticsTitleRand2, PoliticsTitleRand3, PoliticsTitleRand4, PoliticsTitleRand5, PoliticsTitleRand6, WorldTitleRand1, WorldTitleRand2, WorldTitleRand3, WorldTitleRand4, WorldTitleRand5, WorldTitleRand6, USTitleRand1, USTitleRand2, USTitleRand3, USTitleRand4, USTitleRand5, USTitleRand6];
var Top4 = [BusinessTitleRand1, BusinessTitleRand2, BusinessTitleRand3, BusinessTitleRand4, BusinessTitleRand5, BusinessTitleRand6, LifestyleTitleRand1, LifestyleTitleRand2, LifestyleTitleRand3, LifestyleTitleRand4, LifestyleTitleRand5, LifestyleTitleRand6, EntertainmentTitleRand1, EntertainmentTitleRand2, EntertainmentTitleRand3, EntertainmentTitleRand4, EntertainmentTitleRand5, EntertainmentTitleRand6, PoliticsTitleRand1, PoliticsTitleRand2, PoliticsTitleRand3, PoliticsTitleRand4, PoliticsTitleRand5, PoliticsTitleRand6, WorldTitleRand1, WorldTitleRand2, WorldTitleRand3, WorldTitleRand4, WorldTitleRand5, WorldTitleRand6, USTitleRand1, USTitleRand2, USTitleRand3, USTitleRand4, USTitleRand5, USTitleRand6];
var Top5 = [BusinessTitleRand1, BusinessTitleRand2, BusinessTitleRand3, BusinessTitleRand4, BusinessTitleRand5, BusinessTitleRand6, LifestyleTitleRand1, LifestyleTitleRand2, LifestyleTitleRand3, LifestyleTitleRand4, LifestyleTitleRand5, LifestyleTitleRand6, EntertainmentTitleRand1, EntertainmentTitleRand2, EntertainmentTitleRand3, EntertainmentTitleRand4, EntertainmentTitleRand5, EntertainmentTitleRand6, PoliticsTitleRand1, PoliticsTitleRand2, PoliticsTitleRand3, PoliticsTitleRand4, PoliticsTitleRand5, PoliticsTitleRand6, WorldTitleRand1, WorldTitleRand2, WorldTitleRand3, WorldTitleRand4, WorldTitleRand5, WorldTitleRand6, USTitleRand1, USTitleRand2, USTitleRand3, USTitleRand4, USTitleRand5, USTitleRand6];
var TopImg = [BusinessIMAGERand1, BusinessIMAGERand2, BusinessIMAGERand3, BusinessIMAGERand4, BusinessIMAGERand5, BusinessIMAGERand6, LifestyleIMAGERand1, LifestyleIMAGERand2, LifestyleIMAGERand3, LifestyleIMAGERand4, LifestyleIMAGERand5, LifestyleIMAGERand6, EntertainmentIMAGERand1, EntertainmentIMAGERand2, EntertainmentIMAGERand3, EntertainmentIMAGERand4, EntertainmentIMAGERand5, EntertainmentIMAGERand6, PoliticsIMAGERand1, PoliticsIMAGERand2, PoliticsIMAGERand3, PoliticsIMAGERand4, PoliticsIMAGERand5, PoliticsIMAGERand6, WorldIMAGERand1, WorldIMAGERand2, WorldIMAGERand3, WorldIMAGERand4, WorldIMAGERand5, WorldIMAGERand6, USIMAGERand1, USIMAGERand2, USIMAGERand3, USIMAGERand4, USIMAGERand5, USIMAGERand6];
var TopImgLoc = ["Business", "Business", "Business", "Business", "Business", "Business", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "WorldNews", "USNews", "USNews", "USNews", "USNews", "USNews", "USNews"];
var TopCategory = ["Business", "Business", "Business", "Business", "Business", "Business", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Lifestyle", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Politics", "Politics", "Politics", "Politics", "Politics", "Politics", "World", "World", "World", "World", "World", "World", "US", "US", "US", "US", "US", "US"];
var TopNum = [BusinessHrefRand1, BusinessHrefRand2, BusinessHrefRand3, BusinessHrefRand4, BusinessHrefRand5, BusinessHrefRand6, LifestyleHrefRand1, LifestyleHrefRand2, LifestyleHrefRand3, LifestyleHrefRand4, LifestyleHrefRand5, LifestyleHrefRand6, EntertainmentHrefRand1, EntertainmentHrefRand2, EntertainmentHrefRand3, EntertainmentHrefRand4, EntertainmentHrefRand5, EntertainmentHrefRand6, PoliticsHrefRand1, PoliticsHrefRand2, PoliticsHrefRand3, PoliticsHrefRand4, PoliticsHrefRand5, PoliticsHrefRand6, WorldHrefRand1, WorldHrefRand2, WorldHrefRand3, WorldHrefRand4, WorldHrefRand5, WorldHrefRand6, USHrefRand1, USHrefRand2, USHrefRand3, USHrefRand4, USHrefRand5, USHrefRand6];
var Topx = Math.floor(Math.random() * 31 + 1); console.log(Topx);

var TS1 = Top1[Topx + 1]; console.log(TS1);
var TS2 = Top1[Topx + 2]; console.log(TS2);
var TS3 = Top1[Topx + 3]; console.log(TS3);
var TS4 = Top1[Topx - 1]; console.log(TS4);
var TS5 = Top1[Topx + 4]; console.log(TS5);
var TopImg1 = TopImg[Topx + 1]; console.log(TopImg1);
var TopImg2 = TopImg[Topx + 2]; console.log(TopImg2);
var TopImg3 = TopImg[Topx + 3]; console.log(TopImg3);
var TopImg4 = TopImg[Topx - 1]; console.log(TopImg4);
var TopImg5 = TopImg[Topx + 4]; console.log(TopImg5);
var TopImgLoc1 = TopImgLoc[Topx + 1]; console.log(TopImgLoc1);
var TopImgLoc2 = TopImgLoc[Topx + 2]; console.log(TopImgLoc2);
var TopImgLoc3 = TopImgLoc[Topx + 3]; console.log(TopImgLoc3);
var TopImgLoc4 = TopImgLoc[Topx - 1]; console.log(TopImgLoc4);
var TopImgLoc5 = TopImgLoc[Topx + 4]; console.log(TopImgLoc5);
var TopCategory1 = TopCategory[Topx + 1]; console.log(TopCategory1);
var TopCategory2 = TopCategory[Topx + 2]; console.log(TopCategory2);
var TopCategory3 = TopCategory[Topx + 3]; console.log(TopCategory3);
var TopCategory4 = TopCategory[Topx - 1]; console.log(TopCategory4);
var TopCategory5 = TopCategory[Topx + 4]; console.log(TopCategory5);
var TS1href = TopNum[Topx + 1]; console.log(TS1href);
var TS2href = TopNum[Topx + 2]; console.log(TS2href);
var TS3href = TopNum[Topx + 3]; console.log(TS3href);
var TS4href = TopNum[Topx - 1]; console.log(TS4href);
var TS5href = TopNum[Topx + 4]; console.log(TS5href);

$(".Interest1").text(TS1);
$(".Interest2").text(TS2);
$(".Interest3").text(TS3);
$(".Interest4").text(TS4);
$(".Interest5").text(TS5);
$("#InterestN1").attr("src", "../img/NewsPics/" + TopImgLoc1 + "/ts/" + TopImg1 + ".jpg");
$("#InterestN2").attr("src", "../img/NewsPics/" + TopImgLoc2 + "/ts/" + TopImg2 + ".jpg");
$("#InterestN3").attr("src", "../img/NewsPics/" + TopImgLoc3 + "/ts/" + TopImg3 + ".jpg");
$("#InterestN4").attr("src", "../img/NewsPics/" + TopImgLoc4 + "/ts/" + TopImg4 + ".jpg");
$("#InterestN5").attr("src", "../img/NewsPics/" + TopImgLoc5 + "/ts/" + TopImg5 + ".jpg");
$(".InterestHref1").attr("href", TopCategory1 + "NArticle.html#" + TS1href);
$(".InterestHref2").attr("href", TopCategory2 + "NArticle.html#" + TS2href);
$(".InterestHref3").attr("href", TopCategory3 + "NArticle.html#" + TS3href);
$(".InterestHref4").attr("href", TopCategory4 + "NArticle.html#" + TS4href);
$(".InterestHref5").attr("href", TopCategory5 + "NArticle.html#" + TS5href);