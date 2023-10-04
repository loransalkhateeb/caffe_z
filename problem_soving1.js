// const arr=[10,20,30,40,50];
// const value=prompt("Enter the value:");

// function ar(value,arr){
//     for(let i=0;i<=arr.length;i++){
//         if(value==arr[i]){
//             console.log(i);
//             break;
//         }
//         else if(value!=arr[i]){
//             console.log(-1);
//         }
//     }
   
// }



// ar(value,arr);

// function number(arr2){
//     for(let i=0;i<100;i++){
//         if(arr2[i]==i+1){
//           continue; 
//         }
//         else{
//            return  i+1
//         }
//     }
// }
// let ar = [];
// for (let i = 0; i < 99; i++){
//     ar[i] = i + 1;
// }
// console.log(number(ar));




// const array=[];
//  const base=2;
//  for(let i=1;i<=5;i++){
//      let num=prompt("Please enter the number");
//      array.push(base**num);
//  }
//  console.log(array)

// const array2=[];
// array.forEach(element => {
//     array2.push(element);
// });
// console.log(array2)


// const array3=[];
// array.map(element => {
//     array3.push(element);
// });

// console.log(array3)



// const array4=[];
// for(let i=0;i<=5;i++){
//     let element=prompt("Enter the element:")
//     array4.push(element)
// }

// function print(array4){
//     array4.map(element=>{
//         if(isNaN(element)){
//             console.log("N/A");
//         }
//         else if(element%2!=0){
//             console.log("odd");
//         }
//         else if(element%2==0){
//             console.log("even");
//         }
//     })
// }
// print(array4)


// let f = "fizz";
// let b = "buzz";
// for (let num = 1; num <=10 ; num++) {
//     if (num% 3 === 0 && num % 5 ===0){
//     console.log(num + f + b);
//     }
//     else if (num % 5 === 0){
//     console.log(num+b);
//     }
//     else if (num % 3 === 0){
//     console.log(num+f);
// }
//     else {
//     console.log(num);
//   }
// }    


const array6=[];
function avg(array6){
    let sum=0;
        let av=0.0;
    for(let i=0;i<=5;i++){
        let ele=prompt("Enter the element:");
        array6.push(ele);
        sum+=array6[i];
        av=sum/5;
    }
    console.log(av)
}
avg(array6)


