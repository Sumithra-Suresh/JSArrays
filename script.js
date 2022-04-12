//===========================================================
// Numbers which are divisible by two.
//
//===========================================================
function divisibleBy2(num) {
    return num % 2 === 0;
  }
  
  //===========================================================
  // Returns total of an array
  //
  //===========================================================
  function getTotal(total, num) {
    return total + num;
  }
  
  //===========================================================
  // Function to execute array methods
  //
  //===========================================================
  function executeArrMethod() {
    let arr = document.forms['form']['input'].value;
  
    // convert the string array into number array
    arr = arr.split(',').map(Number);
  
    // Check Input values
    var res = arr.every(function (element) {
      //return typeof element == 'number';
      return !isNaN(element);
    });
  
    if (res) {
      // get the method name to invoke
      let method = document.forms['form']['arrMethod'].value;
  
      switch (method) {
        case 'filter':
          let str1 =
            'filter() - Creates a new array with every element in an array that pass a test <br/><br/>';
          let str2 =
            'Using the filter method on an array to fill a new array with the numbers which are divisible by two.<br/><br/>';
          let inputArr1 = '[' + arr + '].filter() = ';
  
          document.getElementById('outputBox').innerHTML =
            str1 + str2 + inputArr1 + '[' + arr.filter(divisibleBy2) + ']';
  
          break;
  
        case 'reduce':
          let str =
            'reduce() - Reduce the values of an array to a single value (going left-to-right) <br/><br/>';
          let inputArr = '[ ' + arr + ' ].reduce() = ';
  
          document.getElementById('outputBox').innerHTML =
            str + inputArr + arr.reduce(getTotal, 0);
          break;
  
        default:
          break;
      }
    } else {
      document.getElementById('outputBox').innerHTML =
        ' Invalid input. Enter only numbers separated by comma. ';
    }
  
    // Clear input fields and radio button selection
    document.getElementById('input').value = '';
  
    // Leave the previously selected radio btn checked to have one 
    // of the button is selected as default.

    /*let radioBtn = document.getElementsByName('arrMethod');
    for (let i in radioBtn) {
      radioBtn[i].checked = false;
    }*/
  }
  
  //===========================================================
  // Function to clear output box
  //
  //===========================================================
  function clearOutputScreen() {
    document.getElementById('outputBox').innerHTML =
      'Output will be displayed here..';
  }
  