// 代码实现
Array.prototype.map2 = function(f) {
  return this.reduce(function(result, x, index, arr) {
    result.push(f(x, index));
    return result;
  }, []);
}

// 测试代码
var res = [1, 3, 5, 7].map2(function(item, idx){
  return item * 2;
});
console.log(res);
