const words = ['abccba', 'absdf', 'absdbba', 'aasdfdsaa']

function isPalindrome (str) {
    return str == [...str].reverse().join('');
  }

  function checkString(){
      words.forEach(item=>{
        console.log(isPalindrome(item) ? `${item } is palindrome`: `${item} is not palindrome`)
      });
  }

  checkString()
