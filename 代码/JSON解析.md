# 输入一段JSON字符串，解析后输出一个js对象，不能使用JSON.parse, eval, new Function


- input:  json('{"abc": {"d": "d"}, "b": ["c","x"], "e": "-123.123"}');
- output: 一个js对象


```js
function json(text) {
  let at = 0;
  let ch = '';
  ch = next();
  function value() {
    switch (ch) {
      case '{':
        return object();
        break;
      case '[':
        return array();
        break;
      case '"':
        return string();
        break;
      case '-':
        return number();
        break;
      default:
        return ch >= '0' && ch <= '9' ? number() : error();
    }
  }
  function error() {
    return '出了什么bug';
  }
  function next() {
    ch = text.charAt(at);
    at += 1;
    while (ch && ch <= ' ') {
      // 跳过空格
      next();
    }
    return ch;
  }
  function string() {
    let string = '';
    // 跳过双引号
    next('"');
    while (ch) {
      if (ch === '"') {
        // 跳过双引号
        next();
        return string;
      } else {
        string += ch;
      }
      next();
    }
  }
  function object() {
    let key = '';
    let object = {};
    // 跳过{
    next('{');
    while (ch) {
      key = string();
      // 跳过冒号
      next(':');
      object[key] = value();
      if (ch === '}') {
        // 跳过}
        next('}');
        return object;
      }
      next();
    }
  }
  function array() {
    let array = [];
    // 跳过[
    next('[');
    while (ch) {
      array.push(value());
      if (ch === ']') {
        // 跳过]
        next(']');
        return array;
      }
      next();
    }
  }
  function number() {
    let number, string = '';
    if (ch === '-') {
      string = '-';
      // 跳过-
      next('-');
    }
    while (ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }
    if (ch === '.') {
      string += '.';
      // 跳过., 获取小数后的部分
      while (next() && ch >= '0' && ch <= '9') {
        string += ch;
      }
    }
    number = +string;
    return number;
  }
  return value();
```
