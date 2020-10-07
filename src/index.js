const dictionary = {
  "1" : 'one',
  '2' : 'two',
  '3' : 'three',
  '4' : 'four',
  '5' : 'five',
  '6' : 'six',
  '7' : 'seven',
  '8' : 'eight',
  '9' : 'nine',
  '10' : 'ten',
  '11' : 'eleven',
  '12' : 'twelve',
  '13' : 'thirteen',
  '14' : 'fourteen',
  '15' : 'fifteen',
  '16' : 'sixteen',
  '17' : 'seventeen',
  '18' : 'eighteen',
  '19' : 'nineteen',
  '20' : 'twenty',
  '30' : 'thirty',
  '40' : 'forty',
  '50' : 'fifty',
  '60' : 'sixty',
  '70' : 'seventy',
  '80' : 'eighty',
  '90' : 'ninety',
  '100' : 'hundred'
}

module.exports = function toReadable (number) {
  if (number === 0) return 'zero'

  const hundrCheckRemainder = number % 100;
  const hundrCheckValue = Math.floor(number / 100);
  let hundrCheckString;
  // const hundrCheckString = dictionary[hundrCheckValue] ? dictionary[hundrCheckValue] + ' hundred ' : ''
  if(dictionary[hundrCheckValue]) {
  	hundrCheckString = dictionary[hundrCheckValue] + ' hundred ';
  }
  else	hundrCheckString = '';

  if (hundrCheckRemainder >= 10 && hundrCheckRemainder <= 20) {
        return hundrCheckString + dictionary[hundrCheckRemainder];
  }

  const tenCheckRemainder = hundrCheckRemainder % 10;
  const tenCheckValue = Math.floor(hundrCheckRemainder / 10);
  let tenCheckString;
  if(dictionary[tenCheckValue]) tenCheckString = dictionary[10 * tenCheckValue] + ' ';
  else tenCheckString = '';

  return (hundrCheckString + tenCheckString + (dictionary[tenCheckRemainder] || '')).trim();



}
