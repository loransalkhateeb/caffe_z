const info=[];
const name = prompt("Please enter your name:");
var gender=Gender();
var gender = prompt("Please enter your gender (male or female):").toLowerCase();

const drinkType = prompt("Do you want a hot or cold drink? (hot/cold):");

const drinkName = prompt("Please enter the name of your drink:");

info.push([name,gender,drinkType,drinkName]);
for(let i=0;i<=info.length;i++){
    const [User_Name,User_Gender,User_Drink_Type,User_Drink_Name]=info[i];
    console.log(`name:${User_Name},User_Gender:${User_Gender},User_Drink_Type:${User_Drink_Type},
    User_Drink_Name:${User_Drink_Name}
    `);
}


function Gender(){
    let gender=null;
while(gender!=="male" && gender!=="female"){
   gender=  prompt("Please enter your gender (male or female):")
}
return gender;
}


