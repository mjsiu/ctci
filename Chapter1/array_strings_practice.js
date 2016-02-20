// 1.1

// Time: O(n)
// Space: O(1)
function isUnique(str) {
  var seen_letters = [];

  for (var i = 0; i < str.length; i++) {
    if (seen_letters.indexOf(str[i]) !== -1) {
      return false;
    } else {
      seen_letters.push(str[i]);
    }
  }
  return true;
}

// Time O(n^2)
// Space: O(1)
function isUnique2(str) {
  for (var i = 0; i<str.length; i++) {
    for (var j = i+1; j<str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}

// 1.2
// Time: O(n + m)
function checkPerm (str1, str2) {
  var str1_hash = {};

  for (var i = 0; i < str1.length; i++) {
    if (str1_hash[str1[i]]) {
      str1_hash[str1[i]] += 1;
    } else {
      str1_hash[str1[i]] = 1;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    if (str1_hash[str2[j]] === 0 || str1_hash[str2[j]] === undefined) {
      return false;
    } else {
      str1_hash[str2[j]] -= 1;
    }
  }
  return true;
}

// 1.3

function replaceSpaces(str, trueLength) {
  return str.slice(0,trueLength).split(" ").join("%20");
}

/* 1.4
1. Find all of the permutations, put them into a set
2. Go through each word in set, see if it's a palindrome with helper function
*/
function permute(input) {
    var permArr = [],
        usedChars = [];
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    })();
}

function palindrome(string) {
  var palindrome = '';

  for (var i = string.length-1; i >= 0; i--) {
    palindrome += string[i];
  }
  return string === palindrome;
}

function permuteChecker(array) {
  var permutations = permute(array);

  for (var i = 0; i < permutations.length; i++) {
    if (permutations.includes?(palindrome(permutations[i]))) {
      return true;
    }
  }
  return false;
}

// 1.5

function stringEdits(str1, str2) {
  var str1_hash = {},
      str2_hash = {},
      differences = 0;

  for (var i = 0; i < str1.length; i++) {
    if (str1_hash[str1[i]]) {
      str1_hash[str1[i]] += 1;
    } else {
      str1_hash[str1[i]] = 1;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    if (str1_hash[str2[j]]) {
      str1_hash[str2[j]] -= 1;
    }
  }

  for (var key in str1_hash) {
    differences += str1_hash[key];
  }

  if (-1 <= differences && differences <= 1){
    return true;
  }
  return false;
}

// 1.6

function compressedString(string) {
  var stringLowerCase = string.toLowerCase(),
      stringHash = {},
      result = '';

      for (var i = 0; i < stringLowerCase.length; i++) {
        if (stringHash[stringLowerCase[i]]) {
          stringHash[stringLowerCase[i]] += 1;
        } else {
          stringHash[stringLowerCase[i]] = 1;
        }
      }

      for (var prop in stringHash) {
        result += prop;
        result += stringHash[prop];
      }
    if (result.length > string.length){
      return string;
    }
    return result;
}


// 1.7
