function saturdayFun (b){
    b = (typeof b !== 'undefined') ?  b : "roller-skate"
    return `This Saturday, I want to ${b}!`

}


    const mondayWork = function(b) {
        b = (typeof b !== 'undefined') ?  b : "go to the office"
          return `This Monday, I will ${b}.`

    }

    function wrapAdjective(work = "*") {
        return function (part1 = "tight") {
            return `You are ${work}${part1}${work}!`; 
        }
            
    }
  