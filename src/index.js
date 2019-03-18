module.exports = function check(str, bracketsConfig) {
    let open = [];
    close = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }
    let stack = [];
    for (let s = 0; s < str.length; s++) {
        if (open[close.indexOf(str[s])] === stack[stack.length - 1] && stack.length > 0) {
            stack.pop();
        }
        else {
            stack.push(str[s]);
        }
    }
    return (stack.length > 0) ? false : true;
}
