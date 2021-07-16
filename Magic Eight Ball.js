let raceNumber = Math.floor(Math.random() * 1000);
//Variable for early registration;
const earlyRegistration = true;

const runnerAge = 18;
//Condition to check if runner is an aldult and registered early
if (runnerAge > 18 && earlyRegistration != false){
  //raceNumber = 1000;
}
if(runnerAge > 18 && earlyRegistration ){
  console.log(`Race number ${raceNumber } You will race at 9:30am`);
} else if(runnerAge > 18 && !earlyRegistration ){
  console.log('Late adults run at 11:00 am')
}else{

  console.log(`Artleth number ${raceNumber} you will race at 12:30pm`);
}

