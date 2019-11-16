
// require function


require.cache = Object.create(null)

function require(name) {
    if(!(name in require.cache))
    {
        let code = readFile(name)
        let module = {exports: {}}
        require.cache[name] = module;
        let wrapper = Function("require, export, module",code);
        wrapper(require,modue.exports,module);
    }
    return require.cache[name].exports
}

const ordinal = require("ordinal")
console.log(ordinal)

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return date.getFullYear();
    if (tag == "dddd") return days[date.getDay()];
  });
};

// export default formatDate