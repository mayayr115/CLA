const evaluatePokerHand = (hand) => {    
    const freq = {}
    const suitFreq = {}
    const straightCheck = []
    const cardMap = {'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14}
    // TODO(charles): ace could also be a 1 
    for (card of hand) {
        freq[card[0]] = (freq[card[0]] || 0) + 1
        if (card[0] in cardMap) {
            if (card[0] == 'A') {
                straightCheck.push(1)    
            }
            straightCheck.push(cardMap[card[0]])
        } else {
            straightCheck.push(Number(card[0]))
        }

        
        suitFreq[card[1]] = (suitFreq[card[1]] || 0) + 1
        
    }
    
    straightCheck.sort((a, b) => a - b )
    console.log(straightCheck)

    // TODO(charles): T affects the frequency count
    for (const i in freq) {
        if (freq[i] == 2) {
            return 'Pair'        
        } else if (freq[i] == 3) {
            return 'Three of a Kind'
        } else if (freq[i] == 4) {
            return 'Four of a Kind'
        }
    }
    for (const i in suitFreq) {
        if (suitFreq[i] == 5) {
            return 'Flush'
        }
    }

    return 'High Card'
}

// console.log(`High Card: Ace High => ${evaluatePokerHand(['2C', '3H', '4S', '8C', 'AH']) == 'High Card'}`)
// console.log(`High Card: King High => ${evaluatePokerHand(['2H', '3D', '5S', '9C', 'KD']) == 'High Card'}`);
// console.log(`Pair of Twos => ${evaluatePokerHand(['2H', '2D', '5S', '9C', 'KD']) == 'Pair'}`);
// console.log(`Pair of Aces => ${evaluatePokerHand(['AH', 'AD', '5S', '9C', 'KD']) == 'Pair'}`);
// console.log(`Two Pair: Twos and Threes => ${evaluatePokerHand(['2H', '2D', '3S', '3C', 'KD']) == 'Two Pair'}`);
// console.log(`Two Pair: Aces and Kings => ${evaluatePokerHand(['AH', 'AD', 'KS', 'KC', '2D']) == 'Two Pair'}`);
// console.log(`Three of a Kind: Three Twos => ${evaluatePokerHand(['2H', '2D', '2S', '9C', 'KD']) == 'Three of a Kind'}`);
// console.log(`Three of a Kind: Three Aces => ${evaluatePokerHand(['AH', 'AD', 'AS', '9C', 'KD']) == 'Three of a Kind'}`);
console.log(`Straight: Ace to Five => ${evaluatePokerHand(['2D', '3S', '4C', '5D', 'AH']) == 'Straight'}`);
console.log(`Straight: Ten to Ace => ${evaluatePokerHand(['TH', 'JD', 'QS', 'KC', 'AD']) == 'Straight'}`);
// console.log(`Flush: Hearts => ${evaluatePokerHand(['2H', '5H', '7H', 'JH', 'KH']) == 'Flush'}`);
// console.log(`Flush: Spades => ${evaluatePokerHand(['2S', '8S', 'AS', 'QS', '3S']) == 'Flush'}`);
// console.log(`Full House: Twos full of Threes => ${evaluatePokerHand(['2H', '2D', '2S', '3C', '3D']) == 'Full House'}`);
// console.log(`Full House: Aces full of Kings => ${evaluatePokerHand(['AH', 'AD', 'AS', 'KC', 'KD']) == 'Full House'}`);
// console.log(`Four of a Kind: Four Twos => ${evaluatePokerHand(['2H', '2D', '2S', '2C', 'KD']) == 'Four of a Kind'}`);
// console.log(`Four of a Kind: Four Aces => ${evaluatePokerHand(['AH', 'AD', 'AS', 'AC', 'KD']) == 'Four of a Kind'}`);
// console.log(`Straight Flush: Five to Nine of Hearts => ${evaluatePokerHand(['5H', '6H', '7H', '8H', '9H']) == 'Straight Flush'}`);
// console.log(`Straight Flush: Ten to Ace of Spades => ${evaluatePokerHand(['TS', 'JS', 'QS', 'KS', 'AS']) == 'Straight Flush'}`);
// console.log(`Royal Flush: Hearts => ${evaluatePokerHand(['TH', 'JH', 'QH', 'KH', 'AH']) == 'Royal Flush'}`);
// console.log(`Royal Flush: Spades => ${evaluatePokerHand(['TS', 'JS', 'QS', 'KS', 'AS']) == 'Royal Flush'}`);