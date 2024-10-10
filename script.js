function calculator(){
  let principal = document.querySelector('.amount');
  let amount = Number(principal.value);
  let years = document.querySelector('.term');
  let term = Number(years.value);
  term = term * 12;
  
  let interest = document.querySelector('.rate');
  let rate = Number(interest.value);
  rate = rate / 100 / 12;

   

  //Monthly repayment formula
//  M = P * (r * (1 + r)**n) / ((1 + r)**n - 1)

 let  monthlyRepayment = amount * (rate * (1 + rate)**term) / ((1 + rate)**term - 1);

 let totalRepayment = monthlyRepayment * term;

 let interestOnly = amount * rate;

 let emi = document.querySelector('.monthly-repay-display');

 let inputElement = document.querySelector('.inputcolumn');


 let repaymentRadio = document.querySelector('.repayment-radio');


 let interestRadio = document.querySelector('.interest-radio'),

 totalRepaymentDisplay = document.querySelector('.total-repay-display');


 totalRepaymentDisplay.textContent =`£${totalRepayment.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
 


 if (repaymentRadio.checked) { 
  
  emi.textContent = `£${monthlyRepayment.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
 
  
 } else if (interestRadio.checked){
  emi.textContent = `£${interestOnly.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
else{emi.textContent = ''} 
  };

function resultDisplayToggle(){
    
let resultBox = document.querySelector('.section-two');

resultBox.classList.add('section-three');

resultBox.innerHTML = `<h3>Your results</h3>
   <p class="section-three-text">
    Your results are shown below based on the information you provided. 
    To adjust the results, edit the form and click “calculate repayments” again.
   </p>
   <section class="result-box">
    <div class="monthly-repay-box">
      <span class="monthly-text">Your monthly repayments</span>
      <span class="monthly-repay-display"></span>
    </div>
  
    <div class="total-repay-box">
      <p>Total you'll repay over the term</p>
      <span class="total-repay-display">
        `
        calculator();
  }
 function resetButton(){
   document.querySelector('.amount').value = '';
   document.querySelector('.term').value = ''
   document.querySelector('.rate').value = '';
   document.querySelector('.interest-radio').checked = false;
   document.querySelector('.repayment-radio').checked = false;
   
   
    let resultBox = document.querySelector('.section-two');
    
    resultBox.classList.remove('section-three');
   
   resultBox.classList.add('section-two');
   resultBox.innerHTML = ` <img src="./assets/images/illustration-empty.svg" alt="">

      <h3>Results shown here</h3>
      <p>Complete the form and click “calculate repayments” to see what 
        your monthly repayments would be.</p>`
};


