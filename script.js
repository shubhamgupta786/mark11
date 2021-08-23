const dob=document.querySelector("#dob");
const luckynumber =document.querySelector("#lucky_no");
const check=document.querySelector("#submit");
const output=document.querySelector('#output-box');
check.addEventListener('click', checkbirthdaylucky);


function checkbirthdaylucky (){
const x=dob.value;
//const lucky=luckynumber.value;
const sum=calculatesum(x);
if(x&&sum)
 compare(sum,luckynumber.value);
else output.innerText= "Please Enter a valid value...";
}




function compare(sum,number){
if(sum%number===0)output.innerText="Hurray! Your Birthday is lucky";
else output.innerText="Sorry! not Lucky..";


}
function calculatesum (x){
x=x.replaceAll("-","");
let sum=0;
for(let i=0;i<x.length;i++)
{
//sum=sum+Number(x.charAt(i));
sum+=Number(x[i]);
}
return sum;
}


