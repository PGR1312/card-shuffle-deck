var suits=['HEART','DIAMONDS','CLIUB','HEART'];
var values=['2','3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE'];
var deck=[];

for(i=0;i<suits.length;i++)
{
    for(j=0;j<values.length;j++)
    {
        var card={Value:values[j],Suit:suits[i]};
        deck.push(card)
    }
}
//console.log(deck);

for(i=0;i<deck.length;i++)
{
    var s=Math.floor(Math.random()*52);
    var temp=deck[i];
    deck[i]=deck[s];
    deck[s]=temp;
}
//console.log(deck);

for(i=0;i<13;i++)
{
    console.log(`${deck[i].Value} ${deck[i].Suit}`);
}