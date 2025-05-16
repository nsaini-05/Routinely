const year = new Date().getFullYear();
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const months = [
  { monthName: "Jan", numberOfDays: 31 },
  { monthName: "Feb", numberOfDays: isLeapYear(year) ? 29 : 28 },
  { monthName: "Mar", numberOfDays: 31 },
  { monthName: "Apr", numberOfDays: 30 },
  { monthName: "May", numberOfDays: 31 },
  { monthName: "Jun", numberOfDays: 30 },
  { monthName: "Jul", numberOfDays: 31 },
  { monthName: "Aug", numberOfDays: 31 },
  { monthName: "Sep", numberOfDays: 30 },
  { monthName: "Oct", numberOfDays: 31 },
  { monthName: "Nov", numberOfDays: 30 },
  { monthName: "Dec", numberOfDays: 31 },
];
