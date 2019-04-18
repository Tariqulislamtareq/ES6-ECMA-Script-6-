const calculateAttendence = (numberOfclassesPerWeek, numOfWeeksPerSem, totalAttClasses)=>{
  const totalClasses = numberOfclassesPerWeek * numOfWeeksPerSem;
  
  return totalAttClasses / totalClasses;
};
console.log("*******Attendence Prediction Calculator*******");
const percentage = calculateAttendence(30, 14, 400) * 100;
console.log(Math.floor(percentage) + " %");
if(percentage >= 90){
  console.log("Congratulation You Have Good Attendence Label");
}else if(percetage >= 75){
  console.log("You Are Allowed To Seat In The Exam");
}else if(percentage < 75){
  console.log("Sorry Better Luck For Next Semester");
}
