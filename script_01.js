
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:

output(getSentence1(["Ich","bin","Max"],"S"));
function getSentence1(arr) {
    const GAP   = " ";
    const PUNCT = ".";
    let str = "";

   for (let i = 0; i < arr.length; i++) {
       if (i < arr.length - 1) 
        {
            str += arr[i] + GAP;
        } else {
            str += arr[i] + PUNCT;
        }
    }
    return str;
}


output(getSentence2(["Bist","du","Max"],"Q"));
function getSentence2(arr) {
    const GAP   = " ";
    const Questionmark= "?";
    let str = "";

   for (let i = 0; i < arr.length; i++) {
       if (i < arr.length - 1) 
        {
            str += arr[i] + GAP;
        } else {
            str += arr[i] + Questionmark;
        }
    }
    return str;
}

output(getSentence3(["Ich","bin"],"E"));
function getSentence3(arr) {
    const GAP   = " ";
    const Exclamationmark= "!";
    let str = "";

   for (let i = 0; i < arr.length; i++) {
       if (i < arr.length - 1) 
        {
            str += arr[i] + GAP;
        } else {
            str += arr[i] + Exclamationmark;
        }
    }
    return str;
}


output(getSentence4(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));
function getSentence4(arr) {
    const GAP   = " ";
    const Questionmark= "?";
    let str = "";

   for (let i = 0; i < arr.length; i++) {
       if (i < arr.length - 1) 
        {
            str += arr[i] + GAP;
        } else {
            str += arr[i] + Questionmark;
        }
    }
    return str;
}

function output(outputStr) {
    console.log(outputStr);
}