(function task1() {
    function isDigit(char) {
        return !isNaN(parseFloat(char));
    }

    function containsDigits(string) {
        for (var i = 0; i < string.length; i++) {
            if (isDigit(string[i])) {
                return true;
            }
        }
        return false;
    }

    function reverseString(string) {
        return string.split("").reverse().join("");
    }

    function camelCaseEachLetter(string) {
        var resultString = "";
        for (var i = 0; i < string.length; i++) {
            if (i % 2) {
                resultString += string.charAt(i).toLowerCase();
            }
            else {
                resultString += string.charAt(i).toUpperCase();
            }
        }
        return resultString;
    }

    var username = prompt("Input your username:", "anonymous");

    if (username === null) {
        return;
    }
    
    var resultString = containsDigits(username) ?
        camelCaseEachLetter(username) : reverseString(username);
        
    alert(resultString);
})();