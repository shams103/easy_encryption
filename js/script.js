var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")

var showCipherA = document.querySelector('#showCipherA');
var showCipherB = document.querySelector('#showCipherB');
var showCipherC = document.querySelector('#showCipherC');

function Text1() {
  flip1 = "rotateY(180deg)";
  flip2 = "rotateY(0deg)";
  Encrypt = "Ecrypt";
  Decrypt = "Decrypt";

  showCipherA.classList.add('cipherA');

  if (card1.style.transform == flip1) {
    card1.style.transform = flip2;
    document.querySelector('#btn1').textContent = Decrypt;
    document.getElementById('TranDec').value = "";
  }

  else {
    card1.style.transform = flip1;
    document.querySelector('#btn1').textContent = Encrypt;
    document.getElementById('TranEnc').value = "";
  }


}

function Text2() {
  flip1 = "rotateY(180deg)";
  flip2 = "rotateY(0deg)";
  Encrypt = "Ecrypt";
  Decrypt = "Decrypt";

  showCipherB.classList.add('cipherB');

  if (card2.style.transform == flip1) {
    card2.style.transform = flip2;
    document.querySelector('#btn2').textContent = Decrypt;
    document.getElementById('CaeserDec').value = "";
  }

  else {
    card2.style.transform = flip1;
    document.querySelector('#btn2').textContent = Encrypt;
    document.getElementById('CaeserEnc').value = "";
  }


}

function Text3() {
  flip1 = "rotateY(180deg)";
  flip2 = "rotateY(0deg)";
  Encrypt = "Ecrypt";
  Decrypt = "Decrypt";

  showCipherC.classList.add('cipherC');

  if (card3.style.transform == flip1) {
    card3.style.transform = flip2;
    document.querySelector('#btn3').textContent = Decrypt;
  }

  else {
    card3.style.transform = flip1;
    document.querySelector('#btn3').textContent = Encrypt;
  }


}



// =======================CAESER CIPHER Encryption=========================


function Csce() {

  var str = document.getElementById('CaeserEnc').value;

  if( str === "")
   {
     alert("Please enter plain text first...")
   }

   else
   {

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + 3) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + 3) % 26) + 97);
      }
    }
    // Append
    output += c;
  }

  showCipherB.innerHTML = `<h3>${output}</h3><button class ="bbtn" onclick="copied(7)"><i class="fa-solid fa-clipboard"></button>`;
  showCipherB.classList.remove('cipherB');
}
};


function copied(zeta) {

  if (zeta == 1) {
    showCipherA.classList.add('cipherA');
    var output = myTranse();
    document.getElementById('TranEnc').value = "";
  }

  else if (zeta == 2) {
    showCipherA.classList.add('cipherA');
    var output = myTransd();
    document.getElementById('TranDec').value = "";
  }

  else if (zeta == 7) {
    showCipherB.classList.add('cipherB');
    var output = myCscrEnc();
    document.getElementById('CaeserEnc').value = "";
  }
  else if (zeta == 8) {
    showCipherB.classList.add('cipherB');
    var output = myCscrDec();
    document.getElementById('CaeserDec').value = "";
  }
  navigator.clipboard.writeText(output).then(() => {
    alert("Copied to clipboard successfully !!")
  });

}


function myCscrEnc() {
  var str = document.getElementById('CaeserEnc').value;
  var output = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + 3) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + 3) % 26) + 97);
      }
    }
    // Append
    output += c;
  }
  return output;
}

// =================================================================================

// =======================CAESER CIPHER Decryption==================================

function Cscd() {
  var str = document.getElementById('CaeserDec').value;

  if(str === "")
   {
     alert("Please enter cipher text first...")
   }

   else
   {

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 - 3) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 - 3) % 26) + 97);
      }
    }
    // Append
    output += c;
  }

  showCipherB.innerHTML = `<h3>${output}</h3><button class ="bbtn" onclick="copied(8)"><i class="fa-solid fa-clipboard"></button>`;
  showCipherB.classList.remove('cipherB');
}
};


function myCscrDec() {
  var str = document.getElementById('CaeserDec').value;
  var output = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 - 3) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 - 3) % 26) + 97);
      }
    }
    // Append
    output += c;
  }
  return output;
}

// ====================================================================================================



// ==================================Transposition Cipher Encryption===================================
function Transe() {
  var text = document.getElementById('TranEnc').value;

  if( text === "")
   {alert('Please enter plain text first...'); }

  else
  {

  var key = (window.prompt("Enter the Key\nKey must be in letters only and no letter should repeat\nKey is must for Encryption", "")).toUpperCase();

  if (key === null || key === "") {
    alert("Key is must for Encryption");
  }

  else {
    // declare all characters
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    var lentext = text.length;
    var lenkey = key.length;
    var row = (Math.ceil(lentext / lenkey));

    var grid = Array(row).fill(' ').map(() => new Array(lenkey).fill(' '));
    var z = 0;
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < lenkey; y++) {
        if (lentext == z) {
          // at random alpha for trailing null grid
          grid[x][y] = "@";
          z--;
        }
        else {
          grid[x][y] = text.charAt(z);
        }
        z++;
      }
    }

      var valueKey = [];

    for (var i = 0; i < key.length; i++) {
      var crt = key[i];

      if (crt.match(/[a-z]/i)) {
        valueKey.push((key.charCodeAt(i)) % 65);
      }

    }

    var enc = "";
    for (let x = 0; x < 26; x++) {
      for (let y = 0; y < lenkey; y++) {
        if (x == valueKey[y]) {
          for (let a = 0; a < row; a++) {
            if (grid[a][y] === " ") {
              enc += "&";
            }
            else { enc += grid[a][y]; }
          }
        }
      }
    }

 
    showCipherA.innerHTML = `<h3>${enc}</h3><button class ="bbtn" onclick="copied(1)"><i class="fa-solid fa-clipboard"></button>`;
    showCipherA.classList.remove('cipherA');

  }
}

}



function myTranse()
{
  var text = document.getElementById('TranEnc').value;

     // declare all characters
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    var key = (window.prompt("Re-enter your Key to copy", "")).toUpperCase();

    if (key === null || key === "") {
      alert("Re-entering the Key is must for Copying");
    }

    else
    {
    var lentext = text.length;
    var lenkey = key.length;
    var row = (Math.ceil(lentext / lenkey));

    var grid = Array(row).fill(' ').map(() => new Array(lenkey).fill(' '));
    var z = 0;
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < lenkey; y++) {
        if (lentext == z) {
          // at random alpha for trailing null grid
          grid[x][y] = "@";
          z--;
        }
        else {
          grid[x][y] = text.charAt(z);
        }
        z++;
      }
    }

    console.log(grid);

    var valueKey = [];

    for (var i = 0; i < key.length; i++) {
      var crt = key[i];

      if (crt.match(/[a-z]/i)) {
        valueKey.push((key.charCodeAt(i)) % 65);
      }

    }

    var enc = "";
    for (let x = 0; x < 26; x++) {
      for (let y = 0; y < lenkey; y++) {
        if (x == valueKey[y]) {
          for (let a = 0; a < row; a++) {
            if (grid[a][y] === " ") {
              enc += "&";
            }
            else { enc += grid[a][y]; }
          }
        }
      }
    }

    }
  return enc;
}


//  =====================================================================================================

// ==================================Transposition Cipher Decryption=====================================

function Transd() {
  var text = document.getElementById('TranDec').value;

  if(text === "")
  { alert('Please enter cipher text first...') ;}

  else
  {

  var key = (window.prompt("Enter the correct Key\nCorrect Key is must for absolute Decryption", "")).toUpperCase();

  if (key === null || key === "") {
    alert("Correct Key is must for absolute Decryption");
  }

  else {
    // declare all characters
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    var lentext = text.length;
    var lenkey = key.length;
    var row = (Math.ceil(lentext / lenkey));

    var valueKey = [];

    for (var i = 0; i < key.length; i++) {
      var crt = key[i];

      if (crt.match(/[a-z]/i)) {
        valueKey.push((key.charCodeAt(i)) % 65);
      }

    }


    var get = [];
    get.push(text.match(new RegExp('.{1,' + row + '}', 'g')));
    console.log(get[0]);
 
    var grid = Array(row).fill(' ').map(() => new Array(lenkey).fill(' '));

    var dwq = (lentext/row);
    
    for (let i = 0; i < dwq; i++) {
      var ppo;
      var min = Math.min.apply(Math, valueKey);

      for (let z = 0; z < row; z++) {
          
           ppo = valueKey.indexOf(min);
           grid[z][ppo] = get[0][i].charAt(z);  
       
      }
   
      valueKey.splice(ppo, 1, 98);
  
      console.log(valueKey);
    }


    var dec = "";
    for (let x = 0; x < row; x++)
    {
      for (let y = 0; y < lenkey; y++) {
   
        if(grid[x][y] === "&" || grid[x][y] === "@")
         { dec += " " }
        else        
          {dec = dec + grid[x][y];}
      }

    }

    showCipherA.innerHTML = `<h3>${dec}</h3><button class ="bbtn" onclick="copied(2)"><i class="fa-solid fa-clipboard"></button>`;
    showCipherA.classList.remove('cipherA');

  }
  }
}




function myTransd() {
  var text = document.getElementById('TranDec').value;

  var key = (window.prompt("Re-enter your Key to copy", "")).toUpperCase();

  if (key === null || key === "") {
    alert("Re-entering the Key is must for Copying");
  }

  else {
    // declare all characters
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    var lentext = text.length;
    var lenkey = key.length;
    var row = (Math.ceil(lentext / lenkey));

    var valueKey = [];

    for (var i = 0; i < key.length; i++) {
      var crt = key[i];

      if (crt.match(/[a-z]/i)) {
        valueKey.push((key.charCodeAt(i)) % 65);
      }

    }


    var get = [];
    get.push(text.match(new RegExp('.{1,' + row + '}', 'g')));
    console.log(get[0]);
 
    var grid = Array(row).fill(' ').map(() => new Array(lenkey).fill(' '));

    var dwq = (lentext/row);
    
    for (let i = 0; i < dwq; i++) {
      var ppo;
      var min = Math.min.apply(Math, valueKey);

      for (let z = 0; z < row; z++) {
          
           ppo = valueKey.indexOf(min);
           grid[z][ppo] = get[0][i].charAt(z);  
       
      }
   
      valueKey.splice(ppo, 1, 98);

    }


    var dec = "";
    for (let x = 0; x < row; x++)
    {
      for (let y = 0; y < lenkey; y++) {
   
        if(grid[x][y] === "&" || grid[x][y] === "@")
         { dec += " " }
        else        
          {dec = dec + grid[x][y];}
      }
    }
  }

  return dec;

}









