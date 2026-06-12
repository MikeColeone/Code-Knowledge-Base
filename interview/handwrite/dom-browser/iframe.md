# 统计标签数量,考虑iframe

```ts
function countTagsInDocument(doc) {
  const tagCount = {};

  function traverse(root) {
    const allElements = root.querySelectorAll('*');
    allElements.forEach(el => {
      const tag = el.tagName.toLowerCase();
      tagCount[tag] = (tagCount[tag] || 0) + 1;

      // 处理 shadow DOM
      if (el.shadowRoot) {
        traverse(el.shadowRoot);
      }

      // 处理 iframe
      if (el.tagName === 'IFRAME') {
        try {
          if (el.contentDocument) {
            traverse(el.contentDocument);
          }
        } catch (e) {
          // 跨域 iframe 无法访问
          console.warn('跨域 iframe 无法访问:', el.src);
        }
      }
    });
  }

  traverse(doc);
  return tagCount;
}

console.table(countTagsInDocument(document));
```
