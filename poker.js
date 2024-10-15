const evaluatePokerHand = (hand) => {
    return 'High Card'
}

console.log(`High Card: Ace High => ${evaluatePokerHand(['2C', '3H', '4S', '8C', 'AH']) == 'High Card'}`)
console.log(`High Card: King High => ${evaluatePokerHand(['2H', '3D', '5S', '9C', 'KD']) == 'High Card'}`);
console.log(`Pair of Twos => ${evaluatePokerHand(['2H', '2D', '5S', '9C', 'KD']) == 'Pair'}`);
console.log(`Pair of Aces => ${evaluatePokerHand(['AH', 'AD', '5S', '9C', 'KD']) == 'Pair'}`);
console.log(`Two Pair: Twos and Threes => ${evaluatePokerHand(['2H', '2D', '3S', '3C', 'KD']) == 'Two Pair'}`);
console.log(`Two Pair: Aces and Kings => ${evaluatePokerHand(['AH', 'AD', 'KS', 'KC', '2D']) == 'Two Pair'}`);
console.log(`Three of a Kind: Three Twos => ${evaluatePokerHand(['2H', '2D', '2S', '9C', 'KD']) == 'Three of a Kind'}`);
console.log(`Three of a Kind: Three Aces => ${evaluatePokerHand(['AH', 'AD', 'AS', '9C', 'KD']) == 'Three of a Kind'}`);
console.log(`Straight: Ace to Five => ${evaluatePokerHand(['AH', '2D', '3S', '4C', '5D']) == 'Straight'}`);
console.log(`Straight: Ten to Ace => ${evaluatePokerHand(['TH', 'JD', 'QS', 'KC', 'AD']) == 'Straight'}`);
console.log(`Flush: Hearts => ${evaluatePokerHand(['2H', '5H', '7H', 'JH', 'KH']) == 'Flush'}`);
console.log(`Flush: Spades => ${evaluatePokerHand(['2S', '8S', 'AS', 'QS', '3S']) == 'Flush'}`);
console.log(`Full House: Twos full of Threes => ${evaluatePokerHand(['2H', '2D', '2S', '3C', '3D']) == 'Full House'}`);
console.log(`Full House: Aces full of Kings => ${evaluatePokerHand(['AH', 'AD', 'AS', 'KC', 'KD']) == 'Full House'}`);
console.log(`Four of a Kind: Four Twos => ${evaluatePokerHand(['2H', '2D', '2S', '2C', 'KD']) == 'Four of a Kind'}`);
console.log(`Four of a Kind: Four Aces => ${evaluatePokerHand(['AH', 'AD', 'AS', 'AC', 'KD']) == 'Four of a Kind'}`);
console.log(`Straight Flush: Five to Nine of Hearts => ${evaluatePokerHand(['5H', '6H', '7H', '8H', '9H']) == 'Straight Flush'}`);
console.log(`Straight Flush: Ten to Ace of Spades => ${evaluatePokerHand(['TS', 'JS', 'QS', 'KS', 'AS']) == 'Straight Flush'}`);
console.log(`Royal Flush: Hearts => ${evaluatePokerHand(['TH', 'JH', 'QH', 'KH', 'AH']) == 'Royal Flush'}`);
console.log(`Royal Flush: Spades => ${evaluatePokerHand(['TS', 'JS', 'QS', 'KS', 'AS']) == 'Royal Flush'}`);