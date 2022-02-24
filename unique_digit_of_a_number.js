function intDivBy10(number, subtrahend) {
  return (number - subtrahend) / 10;  
};

function repeatedDigitInSingleScan(remainNumber, lastDigit) {
  let repeatedDigit = 0;
  while (remainNumber > 0) {
    let rem = remainNumber % 10;
    if (lastDigit === rem) {
      repeatedDigit = repeatedDigit + 1;
    }
    remainNumber = intDivBy10(remainNumber, rem);
  }
  return repeatedDigit;
};

function totalRepeatedDigitCount(number) {
  let totalRepeatedDigit = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    let remainNumber = intDivBy10(number, lastDigit);
    let repeatedDigit = repeatedDigitInSingleScan(remainNumber, lastDigit);
    totalRepeatedDigit = totalRepeatedDigit + repeatedDigit;
    number = intDivBy10(number, lastDigit);
  }
  return totalRepeatedDigit;
};

function uniqueOrNotStatement(number) {
  const totalRepeatedDigit = totalRepeatedDigitCount(number);
  const trueStatement = "True : all unique";
  const falseStatement = "False : " + totalRepeatedDigit + " repeats";
  return totalRepeatedDigit === 0 ? trueStatement : falseStatement;
};

function formatUniqueOrNotResult(number) {
  return number + " // " + uniqueOrNotStatement(number);
};

function main() {
  const number = 12556677;
  console.log(formatUniqueOrNotResult(number));
};

main();