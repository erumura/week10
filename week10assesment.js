function spinalCase(str) {
    var outputString, 
              newstr,
              pattern1 = new RegExp(/[_\s]/, 'g'),
              pattern2 = new RegExp(/(?=[A-Z])/, 'g'),
              stringTest1 = pattern1.test(str),
              stringTest2 = pattern2.test(str);

         if(stringTest1)  {
                outputString = str.replace(pattern1, '-');
                newstr = outputString.toLowerCase();
          } else if(stringTest2) {
               str.split(/(?=[A-Z])/).join(' ');
                outputString = str.replace(pattern2, '-');
                newstr = outputString.toLowerCase();
          } else if (stringTest1 && stringTest2){
                outputString = str.replace(pattern1, '-');
                outputString = str.replace(pattern2, '-');
                newstr = outputString.toLowerCase();
          }

  return newstr;

}
console.log(spinalCase('AllThe-small things'));

function spinalCase(str) {
    const regex =new RegExp(/(([A-Z]|[a-z])[a-z]+)/,'g');
    str=str.match(regex);
    return str.join('-').toLowerCase();
  }
  
  console.log(spinalCase('AllThe-small things'));

  
   function spinalCase(str) {
      var outputString, 
                newstr,
                pattern1 = new RegExp(/[_\s]/, 'g'),
                pattern2 = new RegExp(/(?=[A-Z])/, 'g'),
                stringTest1 = pattern1.test(str),
                stringTest2 = pattern2.test(str);
  
           if(stringTest1)  {
                  outputString = str.replace(pattern1, '-');
                  newstr = outputString.toLowerCase();
            } else if(stringTest2) {
                 str.split(/(?=[A-Z])/).join(' ');
                  outputString = str.replace(pattern2, '-');
                  newstr = outputString.toLowerCase();
            } else if (stringTest1 && stringTest2){
                  outputString = str.replace(pattern1, '-');
                  outputString = str.replace(pattern2, '-');
                  newstr = outputString.toLowerCase();
            }
  
    return newstr;
  
  }
  console.log(spinalCase('This Is Spinal Tap'));