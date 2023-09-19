// code your solution here
function mondayWork(defaultStatement="go to the office"){
    return `This Monday, I will ${defaultStatement}.`;
}

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}


// function wrapAdjective(wrapper){
//     let wrapper1 = "*";
//     let wrapper2 ="||";
// if(wrapper1)
//  return `Your are ${wrapper1}a hard worker${wrapper1}!`;  

// }

// function wrapAdjective(wrapper){

// }
function wrapAdjective(wrapper) {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }