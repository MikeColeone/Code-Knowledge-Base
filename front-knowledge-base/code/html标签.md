**追问**

1、考察api熟练度。

2、考察对网页内容结果的理解。

3、考察对边界情况的理解，是否有动态内容，是否有iframe标签等。

**题目描述**

写一段代码，可以用任何api，快速统计出当前网页上用了多少种html标签？

**答案**

1、不考虑iframe和动态更新情况

[...new Set([...document.querySelectorAll('*')].map(node=>node.tagName))].length

2、考虑到iframe并做了父子页面去重
