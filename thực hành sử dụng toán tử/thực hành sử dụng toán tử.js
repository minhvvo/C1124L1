let inputWidth;
let inputHeight;
inputWidth=prompt(message:"Enter the width");
inputHeight=prompt(message:"Enter the height");
console.log(typeof inputWidth);
console.log(typeof inputHeight);
let width: number =parseInt(inputWidth);
let height:number=parseInt(inputHeight);
let area:number=width*height;
document.write("The area is:"+area);
