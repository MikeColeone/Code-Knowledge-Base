# Code Knowledge Base

这是一个从前端知识库升级出来的 AI 全栈知识仓库。

仓库现在按领域分层组织，顶层保留 `frontend` 和 `backend`，同时把 `ai` 提升为独立主干，再用 `architecture`、`labs`、`projects` 承接横切能力、实验验证和完整案例。

## 目录导航

- [`navigation/`](./navigation/)：仓库路线图、学习索引、专题导航
- [`frontend/`](./frontend/README.md)：前端基础、框架、渲染、工程化、低代码与交互
- [`backend/`](./backend/README.md)：Node.js、接口、数据、缓存、认证与服务能力
- [`ai/`](./ai/README.md)：Prompt、RAG、Agent、Workflow、MCP、Eval 等 AI 工程主题
- [`architecture/`](./architecture/README.md)：工程化、系统设计、性能、安全、可观测性、部署
- [`product/`](./product/README.md)：需求拆解、场景设计、AI 产品模式、案例复盘
- [`interview/`](./interview/README.md)：手写题、场景题、系统设计、项目表达
- [`labs/`](./labs/README.md)：单点实验、最小可运行 demo
- [`projects/`](./projects/README.md)：完整项目和端到端案例
- [`templates/`](./templates/)：统一文档模板

## 当前重构结果

这次重构已经完成了主目录迁移：

- 原 `front-knowledge-base/00-roadmap` 已迁到 `navigation/`
- 原 `01-foundation`、`02-framework` 已迁到 `frontend/`
- 原 `03-engineering/nodejs` 已迁到 `backend/runtime/nodejs`
- 原 `03-engineering/git`、`04-architecture/micro-frontend` 已迁到 `architecture/`
- 原 `05-interview` 已迁到 `interview/`
- 原 `06-code-lab` 已迁到 `labs/`

AI 目录和产品目录目前已经建立骨架，后续适合把新的 Agent、RAG、MCP、AI Coding 相关内容直接沉淀进去，而不是再单独放一个平行仓。

## 推荐阅读顺序

1. 先看 [`navigation/`](./navigation/) 了解路线和索引
2. 再看 [`frontend/`](./frontend/README.md) 和 [`backend/`](./backend/README.md) 补齐基础
3. 然后进入 [`ai/`](./ai/README.md) 建立 AI 工程主干认知
4. 最后结合 [`architecture/`](./architecture/README.md)、[`labs/`](./labs/README.md)、[`projects/`](./projects/README.md) 做系统化串联

## 相关文档

- [`AI-fullstack-目录规划.md`](./AI-fullstack-%E7%9B%AE%E5%BD%95%E8%A7%84%E5%88%92.md)：本次重构的设计说明和迁移原则

## 使用方式

```bash
git clone <repository-url>
cd code-knowledge-base
```

如果你要看可运行代码，优先从 `labs/` 和 `interview/handwrite/` 进入。
