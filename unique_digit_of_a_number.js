function intergerDivideBy10(number, subtrahend) {
  return (number - subtrahend) / 10;  
};

function repeatedDigitCount(number) {
  let repeatedDigit = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    let remainNumber = intergerDivideBy10(number, lastDigit);

    while (remainNumber > 0) {
      let rem = remainNumber % 10;

      if (lastDigit === rem) {
        repeatedDigit = repeatedDigit + 1;
      }
      remainNumber = intergerDivideBy10(remainNumber, rem);
    }
    number = intergerDivideBy10(number, lastDigit);
  }
  return repeatedDigit;
};

function isUnique(number) {
  const repeatedDigit = repeatedDigitCount(number);
  const trueStatement = "True : all unique";
  const falseStatement = "False : " + repeatedDigit + " repeats";
  return repeatedDigit === 0 ? trueStatement : falseStatement;
};

function formatIsUniqueResult(number) {
  return number + " // " + isUnique(number);
};

function main() {
  const number = 1335;
  console.log(formatIsUniqueResult(number));
};

main();