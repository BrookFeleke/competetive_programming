var sortSentence = function(s) {
    let arr = s.split(" ");
    arr = arr.sort((firstWord,secondWord)=> parseInt(firstWord[firstWord.length - 1]) - parseInt(secondWord[secondWord.length - 1]))
    const result = arr.map((word)=>{
        return word.replace(/[0-9]/,"");
    })
    return result.join(" ")
};
