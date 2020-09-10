function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  let change = payment - cost; // 거스름돈 총액

  function billCounting(amount) {
    const count = (change - (change % amount)) / amount;
    change = change - amount * count;
    return count;
  }

  const fiftyCount = billCounting(50000);
  const tenCount = billCounting(10000);
  const fiveCount = billCounting(5000);
  const oneCount = billCounting(1000);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log("");
calculateChange(500000, 378000);
