# css 实现一个自适应搜索框，输入框部分宽度自适应，搜索按钮宽度固定

```html
方案一：
html:
```html


    search
```

css:

```css
.search-bar {
    display: flex;
}
.search-bar input {
    flex: 1;
}
.search-bar button {
    width: 100px;
}
```

方案二：
html:

```html
    search
```

css:

```css
.search-bar input {
    width: calc(100% - 100px)
}
.search-bar button {
    width: 100px;
}
```

方案三：
html:

```html
  search
```

css:

```css
.search-bar .ipt-wrap {
    margin-right: 100px;
}
.search-bar input {
    width: 100%;
}
// 也可以用绝对定位
.search-bar button {
    width: 100px;
    float: right;
}
```

方案四：
html:

```html
  search
```

css:

```css
.search-bar .ipt-wrap {
    position: absolute;
    left: 0;
    right: 100px;
}
.search-bar input {
    width: 100%;
}
// 也可以用绝对定位
.search-bar button {
    width: 100px;
    float: right;
}
```

```
