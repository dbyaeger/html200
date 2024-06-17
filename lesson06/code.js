let balance = 0;
function choices() {
    return prompt(`Welcome to your bank! Please make a selection:
    \tB to see your balance
    \tW to make a withdrawal
    \tD to make a deposit
    \tQ to exit`);
}
function getBalance() {
    alert(`Your balance is: $` + balance);
}
function withdrawal() {
    let withdrawalAmount;
    withdrawalAmount = Number(prompt('Amount you would like to withdrawal in dollars: '));
    if (Number.isNaN(withdrawalAmount)) {
        alert('Invalid entry.');
        withdrawalAmount = 0;
    }
    balance = balance - withdrawalAmount;
}

function deposit() {
    let depositAmount;
    depositAmount = Number(prompt('Amount you would like to deposit in dollars: '));
    if (Number.isNaN(depositAmount)) {
        alert('Invalid entry.');
        depositAmount = 0;
    }
    balance = balance + depositAmount;
}

function menu() {
    let choice;
    while (choice != 'Q') {
        choice = String(choices()).toUpperCase();
        if (choice == 'B') getBalance();
        else if (choice == 'W') withdrawal();
        else if (choice == 'D') deposit();
        else continue;
    }
}

