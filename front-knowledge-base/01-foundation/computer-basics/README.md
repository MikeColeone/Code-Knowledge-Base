# 计算机通用技能

这个模块用于补齐前端面试里经常会被追问的计算机基础，包括网络、操作系统、数据结构与算法、数据库四个方向。

## 模块结构

- [network](./network/)：TCP/IP、HTTP/HTTPS、DNS、CDN、代理与缓存。
- [operating-system](./operating-system/)：进程线程、内存管理、用户态内核态、死锁与 IPC。
- [data-structure](./data-structure/)：复杂度、数组链表、栈队列堆、哈希表。
- [database](./database/)：索引、事务、隔离级别、锁与查询思路。
- [frontend-perspective](./frontend-perspective/)：把网络、浏览器、操作系统基础放回前端语境里理解。

## 推荐学习顺序

1. 先看 `network/`，这是前端面试里最常被追问的一组基础。
2. 再看 `operating-system/`，重点掌握线程、内存和系统调用边界。
3. 然后看 `data-structure/`，保证能回答常见结构选型和复杂度问题。
4. 最后看 `database/`，理解索引和事务背后的原理与性能影响。
5. 面试前再过一遍 `frontend-perspective/`，练习把底层概念翻译成前端表达。

## 题目索引

### 网络

- [HTTP 和 HTTPS 的区别](./network/http-vs-https.md)
- [TCP 和 UDP 的区别](./network/tcp-vs-udp.md)
- [TCP 三次握手和四次挥手](./network/tcp-three-way-handshake-and-four-way-wave.md)
- [DNS 解析过程](./network/dns-resolution-process.md)
- [CDN 和反向代理的区别](./network/cdn-and-reverse-proxy.md)

### 操作系统

- [进程和线程的区别](./operating-system/process-vs-thread.md)
- [进程间通信有哪些方式](./operating-system/process-communication.md)
- [用户态和内核态的区别](./operating-system/user-mode-vs-kernel-mode.md)
- [操作系统内存管理](./operating-system/memory-management.md)
- [死锁是什么，如何避免](./operating-system/deadlock.md)

### 数据结构

- [时间复杂度和空间复杂度](./data-structure/time-complexity.md)
- [数组和链表的区别](./data-structure/array-vs-linked-list.md)
- [栈、队列、堆分别适合什么场景](./data-structure/stack-queue-and-heap.md)
- [哈希表原理和冲突处理](./data-structure/hash-table.md)

### 数据库

- [数据库索引原理](./database/database-index.md)
- [事务和隔离级别](./database/transaction-and-isolation.md)

### 前端视角追问

- [前端视角追问专题](./frontend-perspective/README.md)
- [浏览器进程和线程模型](./frontend-perspective/browser-process-and-thread-model.md)
- [浏览器缓存链路](./frontend-perspective/browser-cache-chain.md)
- [从浏览器到操作系统视角理解 Event Loop](./frontend-perspective/event-loop-from-browser-and-os-perspective.md)
- [一次网络请求在浏览器和操作系统里发生了什么](./frontend-perspective/network-request-from-browser-to-os.md)
