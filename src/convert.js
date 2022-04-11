export function convertToRomanNum(num) {
  var emp = [];
  var result;
  const to4Thousand = (num) => {
    switch (true) {
      case num == 0:
        break;
      case num >= 1 && num < 4:
        result = emp.push('I') + to4Thousand(num - 1);
        break;
      case num == 4:
        result = emp.push('IV');
        break;
      case num >= 5 && num < 9:
        result = emp.push('V') + to4Thousand(num - 5);
        break;
      case num == 9:
        result = emp.push('IX');
        break;
      case num >= 10 && num < 40:
        result = emp.push('X') + to4Thousand(num - 10);
        break;
      case num >= 40 && num < 50:
        result = emp.push('XL') + to4Thousand(num - 40);
        break;
      case num >= 50 && num < 90:
        result = emp.push('L') + to4Thousand(num - 50);
        break;
      case num >= 90 && num < 100:
        result = emp.push('XC') + to4Thousand(num - 90);
        break;
      case num >= 100 && num < 400:
        result = emp.push('C') + to4Thousand(num - 100);
        break;
      case num >= 400 && num < 500:
        result = emp.push('CD') + to4Thousand(num - 400);
        break;
      case num >= 500 && num < 900:
        result = emp.push('D') + to4Thousand(num - 500);
        break;
      case num >= 900 && num < 1000:
        result = emp.push('CM') + to4Thousand(num - 900);
        break;
      case num >= 1000 && num < 4000:
        result = emp.push('M') + to4Thousand(num - 1000);
        break;
      default:
        break;
    }
  };
  switch (true) {
    case num == 0:
      emp.push(`The Number Zero Does Not Have Its Own Roman Numeral`);
      break;
    case num >= 4000:
      return (
        <h5>
          Roman Numerial becomes ambiguous above 4000. &#128533; (Try 1-3999
          instead! &#128578;)
        </h5>
      );
      break;
    default:
      to4Thousand(num);
      break;
  }
  return emp.join('');
}

/*End of Function that Converts Arabic Numbers to Numerial*/

/*Function for Converting to Roman NUmerials to Digits*/
export function convertFromRoman(text) {
  var lettersArray = text.toUpperCase().split('');
  const numerialLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
    numerialNumbers = [1, 5, 10, 50, 100, 500, 1000];
  var Arr = [],
    nwArr = [],
    result;
  if (!text) {
    return '';
  }
  for (let i = 0; i <= lettersArray.length - 1; i++) {
    Arr.push(numerialNumbers[numerialLetters.indexOf(lettersArray[i])]);
  }
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] === Arr[i + 1] || Arr[i] === Arr[i - 1]) {
      nwArr.push(Arr[i]);
    } else if (Arr[i] < Arr[i + 1]) {
      if (Arr[i + 1] > Arr[i]) {
        nwArr.push(-Arr[i]);
      } else if (Arr[i - 1] === undefined) {
        nwArr.push(Arr[i]);
      } else if (Arr[i] < Arr[i - 1]) {
        nwArr.push(-Arr[i]);
      }
    } else if (i === lettersArray.length - 1 && Arr[i] < Arr[i - 1]) {
      nwArr.push(Arr[i]);
    } else if (Arr[i] > Arr[i + 1] || Arr[i] > Arr[i - 1]) {
      nwArr.push(Arr[i]);
    }
  }
  if (lettersArray.length === 1) {
    result = numerialNumbers[numerialLetters.indexOf(lettersArray[0])];
  } else {
    result = nwArr.reduce((prev, curr) => prev + curr);
  }
  //Checking if the Roman Numerial is Correct
  if (convertToRomanNum(result) === text.toUpperCase()) {
    return result;
  } else {
    return 'Invalid Romain Numerial!';
  }
}

export function converter(y) {
  //   var y = document.getElementById('rnum').value;
  if (isNaN(y) === false) {
    convertToRomanNum(y);
  } else {
    convertFromRoman(y);
  }
}
