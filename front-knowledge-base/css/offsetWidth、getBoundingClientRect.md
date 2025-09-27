1. 区别

* offsetWidth/offsetHeight返回值包含content + padding + border
* clientWidth/clientHeight返回值只包含content + padding，如果有滚动条，也不包含滚动条
* scrollWidth/scrollHeight返回值包含content + padding + 溢出内容的尺寸

2. 通过 `getBoundingClientRect`函数，计算元素的坐标与窗口尺寸的关系
