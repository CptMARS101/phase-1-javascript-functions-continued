// code your solution here
function saturdayFun(activity) {
    let fun = activity || "roller-skate"
    return `This Saturday, I want to ${fun}!`
}
saturdayFun("bathe my dog");

function mondayWork(task) {
    let activity = task || "go to the office";
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home");

function wrapAdjective(flair) {
    let wrap = flair || "*";
  return function(adjective = "special") {
return `You are ${wrap}${adjective}${wrap}!`
}
}