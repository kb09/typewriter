const sentence = "animation logic";
const seperateWords = sentence
let counter = 0;
for (const char of seperateWords){
  setTimeout(function(){
    process.stdout.write(char)
  }, counter)
  counter += 150
};

process.stdout.write("/n")
