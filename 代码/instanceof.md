* 某些情况下，用户对象可能会覆盖 `__proto__` 属性：

  <pre class="overflow-visible!" data-start="575" data-end="661"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>const</span><span> o = { </span><span>__proto__</span><span>: </span><span>null</span><span> }; 
  </span><span>console</span><span>.</span><span>log</span><span>(o.</span><span>__proto__</span><span>); </span><span>// undefined</span><span>
  </span></span></code></div></div></pre>

  这样直接访问 `o.__proto__` 就会失效。
* 但 `Object.getPrototypeOf(o)` 永远能正确拿到 `[[Prototype]]` 内部槽。

```js
function customInstanceof(obj, constructor) {
    // 取出 obj 的原型
    let proto = Object.getPrototypeOf(obj);

    // 沿着原型链往上查找
    while (proto !== null) {
        // 一旦匹配到 constructor.prototype，就返回 true
        if (proto === constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    // 如果查到原型链顶层(null)都没匹配到，返回 false
    return false;
}

```
