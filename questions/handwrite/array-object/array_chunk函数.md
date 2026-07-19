将一个数组分割成多个数组，其中每个数组的单元数目由 length 决定。最后一个数组的单元数目可能会少于 length 个。示例:const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];chunk(a, 4);结果：[['a', 'b', 'c', 'd'],['e', 'f', 'g', 'h']]

**答案**

const chunk = (array, size) => {  const result = [];  if (size < 1) {    throw new Error('size is less than 1');  }  array.forEach((item, index) => {    if (index % size === 0) {      result.push([]);    }    result[result.length - 1].push(item);  });  console.log(result);  return result;}
