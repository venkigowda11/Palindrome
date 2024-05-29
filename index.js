document.getElementById("button").addEventListener("click", function () {
  const input = document.getElementById("input").value;
  const result = document.getElementById("result");
  if (isPalindrome(input)) {
    result.textContent = "Palindrome";
  } else {
    result.textContent = "Not a palindrome";
  }
});

let last = input.length - 1;

function isPalindrome(str) {
  let cleanedStr = str.toLowerCase();
  let last = cleanedStr.length - 1;

  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[last]) {
      return false;
    }
    last--;
  }

  return true;
}
