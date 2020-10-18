module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i <= bracketsConfig.length - 1;) {
        let config = bracketsConfig[i].join('');
        if (str.includes(config)) {
            str = str.replace(config, '');
            i = 0;
        } else {
            i = i + 1;
        }
    }
    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
};
