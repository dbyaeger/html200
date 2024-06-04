const suits = ['Clubs','Diamonds','Hearts','Spades'];
const pips = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
for (i=0; i<suits.length;i++) {
  for (j=0; j<pips.length;j++){
    console.log(pips[j] + ' of ' + suits[i])
  }
};