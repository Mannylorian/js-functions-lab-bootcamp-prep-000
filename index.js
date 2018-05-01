// write your code below!
let name='you';
let holiday='Fruhlingsfest';
let days=21;

function happyHolidays(){
  return "Happy holidays!";
}
happyHolidays();

function happyHolidaysTo(name){
  return "`Happy holidays, ${name}!`";
}
happyHolidaysTo();

function happyHolidayTo(name){
  return "`Happy ${holiday}, ${name}!`";
}
happyHolidayTo();

function holidayCountdown(days){
  return "`It's ${days} days until ${holiday}!`"
}
holidayCountdown();
