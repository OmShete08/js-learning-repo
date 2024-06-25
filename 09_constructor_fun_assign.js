function Bank(bankName,location,ifscCode,branchCode) {   
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
     
}
const yesBank = new Bank("Yes Bank", "Kolhapur", "YES000099", 8899);
console.log(`Yes Bank Details: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode} `);

const sbiBank = new Bank("SBI Bank", "Katraj", "SBI000079", 112);
console.log(`SBI Bank Details: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode} `);

const mahBank = new Bank("MAH Bank", "Ajara", "MAH000049", 8569);
console.log(`MAH Bank Details: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode} `);

const axisBank = new Bank("Axis Bank", "Kolhapur", "ACIS000049", 7849);
console.log(`Axis Bank Details: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode} `);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log('-------------------------------------------------------------------------------------------');
console.log(`SBi Bank Open time ${sbiBank.openTime}  and it's close time ${sbiBank.closeTime}`);
console.log('------------------------------------------------------------------------------------------------------------------');
console.log(`Bank Name is ${axisBank.bankName} and close time ${axisBank.closeTime}`);
console.log('------------------------------------------------------------------------------------------------------------------');
console.log(`Bank Name is ${yesBank.bankName}, Branch code is ${yesBank.branchCode} and open time is ${yesBank.openTime

}`);
