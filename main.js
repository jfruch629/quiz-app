let rami = 88;
let natoya = 92;
let bill = 68;
let susie =100
let sasha = 82;
let mohammed = 98;
let jennifer = 94;
let ken = 92;
let justReactAverage = ((rami + natoya + bill + susie) / 4);
let weAreRubyAverage = ((sasha + mohammed + jennifer + ken) / 4);
let cohortAverage = ((justReactAverage + weAreRubyAverage) / 2);

averagesMessage = "Eight out of Nine passed the quiz. Here are the averages:" +
                  "<br><br>*&nbsp;Mentor Group - Just React: " + Math.round(justReactAverage) +
                  "<br>*&nbsp;Mentor Group - We Are Ruby: " + Math.round(weAreRubyAverage) +
                  "<br>*&nbsp;Entire Cohort: " + Math.round(cohortAverage);
mainDiv = document.getElementById("main");
mainDiv.innerHTML = averagesMessage;
