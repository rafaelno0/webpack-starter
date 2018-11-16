//Arrow function do not have their own "this" value.
// "this" refers to the enclosing context

let getId = (prefix, suffix) => {
  return prefix + 123 + suffix;
};

console.log(getId('ID: ', '!'));

let getId2 = (prefix, suffix) => prefix + 123 + suffix;

console.log(getId2('ID: ', '!'));

let getId3 = _ => 123; //You can change if you want () to _ is a convention

console.log(getId3());
