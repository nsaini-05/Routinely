const year = new Date().getFullYear();
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const months = [
  { monthId: 1, monthName: "Jan", numberOfDays: 31 },
  { monthId: 2, monthName: "Feb", numberOfDays: isLeapYear(year) ? 29 : 28 },
  { monthId: 3, monthName: "Mar", numberOfDays: 31 },
  { monthId: 4, monthName: "Apr", numberOfDays: 30 },
  { monthId: 5, monthName: "May", numberOfDays: 31 },
  { monthId: 6, monthName: "Jun", numberOfDays: 30 },
  { monthId: 7, monthName: "Jul", numberOfDays: 31 },
  { monthId: 8, monthName: "Aug", numberOfDays: 31 },
  { monthId: 9, monthName: "Sep", numberOfDays: 30 },
  { monthId: 10, monthName: "Oct", numberOfDays: 31 },
  { monthId: 11, monthName: "Nov", numberOfDays: 30 },
  { monthId: 12, monthName: "Dec", numberOfDays: 31 },
];
