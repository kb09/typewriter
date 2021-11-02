const sentence = "hello there from lighthouse labs";
const seperateWords = sentence
let counter = 0;
for (const char of seperateWords){
  setTimeout(function(){
    process.stdout.write(char)
  }, counter)
  counter += 150
};
