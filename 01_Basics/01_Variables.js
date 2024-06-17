const accountId = 144553
let accountEmail = "msmsnavsood@gmail.com"
var accountPassword = "12345"
accountCity = "Shimla" //this is possible but not recommended
let accountState;

// accountID = 2 //not allowed

accountEmail = "puru.sood@gmail.com"
accountPassword = '22112211'
accountCity = 'Delhi'

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])
