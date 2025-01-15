const pupils = ["non", "banan", "mashina", "asal", "olma", "aziza", "gul"];
let oBor = [];
let oharfYoq = [];


for (const pupil of pupils) {
if(pupil.includes("n")){
    oBor.push(pupil);
    
}
else{
  oharfYoq.push(pupil);

}
}
console.log(oBor,oharfYoq);

