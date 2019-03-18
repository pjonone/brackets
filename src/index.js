module.exports = function check(str, bracketsConfig) {
    let open = [];
    close = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }

let stack = [];
for (let s = 0; s < str.length; s++) {

    if (open.includes(str.charAt(s)) === true) { // проверяю есть ли в открытых элемент из строки, если есть пушу в стек
        stack.push(str.charAt(s));
    }
    if (close.includes(str.charAt(s)) === true) { // проверяю есть ли в закрытых, если есть то
        if (open[close.indexOf(str.charAt(s))] === stack[stack.length - 1]) { // беру номер позиции закрытого элемента и сравниванию позицию в открытом под этим номером с последним пушем если оно === то делаем поп
            stack.pop();
        }
    }

}

    if (stack.length === 0) { return true;}
     else {return false;}


}
