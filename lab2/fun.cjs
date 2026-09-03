const f1 = () => {
  console.log("F1");
};
const f2 = () => {
  console.log("F2");
};
const f3 = () => {
  console.log("F3");
};

function main() {
  console.log("main😊💕");
  setTimeout(f1, 0);
  setImmediate(f2);
  f3();
  console.log("end✈️");
}
main();
//a function not exexuted immediately but it must be executed after a while it had some stage
at 