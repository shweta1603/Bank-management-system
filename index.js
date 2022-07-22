       ///// QUESTION /////
// Take input  of bank balance of 5 account holder as input
// if balance > 2L -> add interest of 10% an deduct 0.2% maintainance Charge.
// if balance > 1L -> add interest of 5% an deduct 0.05% maintainance Charge.
// if balance <= 1L -> add interest of 3% an deduct.

// Log/Alert the updated array of balances.

      ///// SOLUTION //////
// let bankBalance1= Number(prompt('Enter the first bank balance')) //using propmt method take input from each indivisually
//method2- take array of input.
// let bankBalances= [249389, 34561, 3462, 242442, 100001]

//take array of input from user using prompt method. promt gives String
//let bankBalances = prompt("Enter all bank balances sepfrated by a',' ").split(',')

// let bankBalance1= document.getElementById('bank-balance-1').value


// function calculateInterest() {
//     let bankBalance1= Number(document.getElementById('bank-balance-1').value)
//     let bankBalance2= Number(document.getElementById('bank-balance-2').value)
//     let bankBalance3= Number(document.getElementById('bank-balance-3').value)

//     let updatedBankBalance1= document.getElementById('updated-bank-balance-1')
//     let updatedBankBalance2= document.getElementById('updated-bank-balance-2')
//     let updatedBankBalance3= document.getElementById('updated-bank-balance-3')

//     let bankBalances = [bankBalance1, bankBalance2, bankBalance3]
//     for(let i=0; i<bankBalances.length; i++){
//       if(bankBalances[i] > 200000){
//         bankBalances[i] = Number(bankBalances[i]) // converting string to number using Number(string)

//        bankBalances[i] =bankBalances[i] + bankBalances[i] * 0.1  //with interest
//        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002   //with maaintainance charge
//        }
//       else  if(bankBalances[i] > 100000){
//         bankBalances[i] =bankBalances[i] + bankBalances[i] * 0.05
//         bankBalances[i] =bankBalances[i] - bankBalances[i] * 0.0005
//       }
//       else{   //for <= 1L
//         bankBalances[i] =bankBalances[i] + bankBalances[i] * 0.03
//       }
//     }
//     updatedBankBalance1.value= bankBalances[0]
//     updatedBankBalance2.value= bankBalances[1]
//     updatedBankBalance3.value= bankBalances[2]

// }


function calculateInterest() {
    let inputBalanceNodes = document.getElementsByClassName('input-balance')  //it is collection/array of DOM nodes(i.e element)
    let displayUpdatedBalances= document.getElementsByClassName("display-updated-balance");
    let temp;
    for(let i=0;i<inputBalanceNodes.length;i++){
        temp = Number(inputBalanceNodes[i].value);   
                 if(temp > 200000){
                   temp = temp + temp * 0.1  //with interest
                   temp = temp - temp * 0.002   //with maaintainance charge
                   }
                  else  if(temp > 100000){
                    temp = temp + temp * 0.05
                    temp = temp - temp * 0.0005
                  }
                  else{   //for <= 1L
                    temp = temp + temp * 0.03
                  }
                  displayUpdatedBalances[i].value = temp
                }
    }
    
    function addRow(){
        
    }

