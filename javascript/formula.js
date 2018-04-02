const theNuggets = 2.17905
const theRTs = 3600;
let theWorth = theNuggets / theRTs;
const rtWorth = .000605;
new ClipboardJS('.btn');
let cost = localStorage.getItem('cost');
let want = localStorage.getItem('want');
let handleName = localStorage.getItem('handle');
let option = localStorage.getItem('choice');
previousRoll= localStorage.getItem('prevRoll');
let roll = 0;
let tweetsNeeded= addCommas(theFormula());
let happy =
[
  "It's a wonderful day \@" + handleName + ". I just want to thank you for everything." +
  " If I get " + tweetsNeeded + " RTs would you give me " + want + "? Again thanks coolest \@"
  + handleName + " ever.",

  "@" + handleName + " If you're happy and you know it clap your hands.(2x)." +
  " If you're happy and you know it and you really want to show it, exchange " + tweetsNeeded +
  " RTs for " + want + " 👏👏."
];

let sad =
[
  "\😭\😭\😭. Oh @" + handleName + " I am so sad. " +   " If I get " + tweetsNeeded +
  " RTs would you give me " + want + " to cure my sadness?",

  "Rain, rain, go away, come again another day. If you don't, I'll need @" + handleName +
  " to accept " + tweetsNeeded + " RTs for a " + want + "."
];

let neutral =
[
  ("Hello \@" + handleName + ". Based off my calculations, " + tweetsNeeded + " RTs are required to get "
  + want + ". Do we have a deal?")

];

let angry =
[
  "\@" + handleName + ". I'll only say this once. GIVE ME " +  want.toUpperCase() + " FOR " + tweetsNeeded
  + " RTs!!! 🤬🤬🤬."
];

let loving =
[
  "\@" +handleName + " I confess, I'm in love with " + want + "😍. If I get " + tweetsNeeded
  + " RTs will you ever so graciously fill my heart with what I desire?",

  "Roses are red, violets are blue. Will " + tweetsNeeded + " RTs for " + want + " @" + handleName +
  " be enough to woo you?😘",

  "You are the loveliest @" + handleName + " on this platform. If I had " + want + " I think you'd be even lovelier."
  + " Let's make this a reality with your bodacious wallet when I get " + tweetsNeeded + " RTs."

];

let x_x =
[
  "X_X " + tweetsNeeded + " RTs. " + "\@" + handleName + ". "  + want[0].toUpperCase() + want.substring(1) + " X_X.",
  "X_X " + tweetsNeeded + " RTs. " +  want[0].toUpperCase() + want.substring(1) + ". \@" + handleName + " X_X.",
  "X_X" + " \@" + handleName + ". " +  want[0].toUpperCase() + want.substring(1) + ". " +  tweetsNeeded + " RTs" + " X_X.",
  "X_X" + " \@" + handleName + ". " + tweetsNeeded + "RTs. "  + want[0].toUpperCase() + want.substring(1) + " X_X.",
  "X_X " + want[0].toUpperCase() + want.substring(1) + "." +  " \@" + handleName + ". " + tweetsNeeded + " RTs" + " X_X.",
    "X_X " + want[0].toUpperCase() + want.substring(1) + ". " + tweetsNeeded + " RTs" + ". \@" + handleName + " X_X."
];

console.log(previousRoll);



switch(option)
{
  case 'option1':
  $('.btm-btnr').show();
  tweet = happy[rollDice(happy.length)];
    break;
  case 'option2':
  $('.btm-btnr').show();
  tweet = sad[rollDice(sad.length)];
    break;
  case 'option3':
  $('.btm-btnr').hide();
  tweet = neutral[rollDice(neutral.length)];
    break;
  case 'option4':
  $('.btm-btnr').hide();
  tweet = angry[rollDice(angry.length)];
    break;
  case 'option5':
  $('.btm-btnr').show();
  tweet = loving[rollDice(loving.length)];
    break;
  case 'option6':
  $('.btm-btnr').show();
  tweet = x_x[rollDice(x_x.length)];
    break;
  default:
  tweet = neutral[rollDice(0)];
}


$('#theTweet').text(tweet);

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function theFormula()
{
    let rtNeeded = -1;
    rtNeeded = cost / rtWorth;
    return Math.round(rtNeeded);
};

function addCommas(x)
{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function rollDice(numOfSayings)
{
  if(numOfSayings > 1)
  {
      do
      {
          roll = Math.floor(Math.random() * numOfSayings);
      } while (previousRoll == roll);
  }
  localStorage.setItem('prevRoll', roll);
  return roll;
};
