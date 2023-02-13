
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount= getInputFieldValueById('deposit-field');
    if(isNaN(newDepositAmount)== true)
    {
        alert('Please provide a valid number');
        return;
    }

    const previousDepositTotal= getTextElementValueById('deposit-total');
    
    const previousBalanceTotal= getTextElementValueById('balance-total');

    const newDepositTotal= previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    const newBalanceTotal= previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});
