# AI 全栈目录规划

## 1. 这次调整后的原则

你这次补充的约束是对的：

- 顶层结构仍然保留大家熟悉的前后端分层
- AI 不能只是附录，必须进入主干
- 目录名不需要 `00-01-02` 这种前缀序号

所以新的方案不是彻底抛弃前后端，也不是简单把仓库改名成 AI，而是做一个综合版：

**顶层按领域分层，内部按能力链路组织。**

这样兼顾 3 件事：

1. 目录直觉上好理解
2. 不会割裂你已有的前端内容
3. AI 能自然嵌进现有知识体系

## 2. 建议的目标目录

```text
code-knowledge-base/
  navigation/               # 仓库导航、路线图、专题索引
  frontend/                 # 前端体系
  backend/                  # 后端与数据体系
  ai/                       # AI 工程主干
  architecture/             # 架构、工程化、DevOps、稳定性、安全
  product/                  # 产品、业务场景、需求拆解、案例复盘
  interview/                # 面试题、项目表达、系统设计
  labs/                     # 单点实验、最小可运行 demo
  projects/                 # 完整项目、端到端案例
  templates/                # 文档模板
  README.md
```

## 3. 为什么这样更合适

### 保留前后端分层

这仍然符合现实开发协作，也方便你查找历史内容：

- `frontend` 放浏览器、框架、交互、渲染、低代码 UI
- `backend` 放 Node、API、数据库、缓存、认证、搜索

这样你过去积累的大量前端内容可以平滑迁移，不会因为“AI 全栈”这个目标把原来的认知入口全部打散。

### AI 独立成主干

AI 不适合塞进 `frontend` 或 `backend` 的某个子目录里。

因为 AI 工程本身就是一层能力：

- Prompt
- Context
- RAG
- Agent
- Workflow
- Tool Calling
- MCP
- Eval
- Guardrails

它会同时和前端、后端、架构、产品发生连接，所以单独成为 `ai/` 更稳。

### 架构和工程能力单独抽离

`architecture/` 负责横切问题，而不是业务领域：

- 工程化
- 测试
- 性能
- 安全
- 可观测性
- 部署
- Docker / Kubernetes
- 分布式与复杂架构

这比把它们混在前端或后端下面更清晰。

## 4. 每个一级目录怎么放

### `navigation/`

只放导航，不放大段正文：

- 仓库总览
- 学习路线
- AI 全栈能力地图
- 从前端到 AI 全栈的迁移路线
- 专题索引

### `frontend/`

建议内部还是按你熟悉的前端能力拆：

```text
frontend/
  foundation/              # HTML / CSS / JS / TS / Browser
  framework/               # React / Vue
  rendering/               # 渲染机制、性能、SSR/CSR
  engineering/             # 构建、包管理、脚手架、前端工程体系
  low-code/                # 低代码、可视化编辑器、组件协议
  interaction/             # 表单、编辑器、画布、交互设计
```

这里的关键点是：

- 前端依然是一个完整领域
- 但不再等于整个仓库
- 低代码和交互类内容可以更自然地挂进去

### `backend/`

建议内部按服务与数据链路拆：

```text
backend/
  runtime/                 # Node.js、服务运行时基础
  api/                     # REST、RPC、接口设计
  auth/                    # 登录、权限、鉴权
  database/                # MySQL、索引、事务、建模
  cache/                   # Redis、缓存策略
  queue/                   # 消息队列、异步任务
  storage/                 # 文件存储、对象存储
  search/                  # 搜索、召回、索引
```

如果以后你做 AI 应用，很多能力会在这里和 `ai/` 交叉，比如：

- RAG 依赖 `search/`
- 会话记忆依赖 `database/` 和 `cache/`
- Agent 任务调度依赖 `queue/`

### `ai/`

这是整个新结构的重点：

```text
ai/
  llm-basics/
  prompt-engineering/
  context-engineering/
  rag/
  agent/
  workflow/
  tool-calling/
  mcp/
  eval/
  guardrails/
  ai-coding/
```

这个目录不按“理论 / 实践”分，而按 AI 工程真实能力拆，更适合长期积累。

### `architecture/`

建议放横切能力：

```text
architecture/
  system-design/
  performance/
  security/
  observability/
  testing/
  ci-cd/
  docker/
  kubernetes/
  distributed/
```

原先 `03-engineering` 和 `04-architecture` 的不少内容，未来都应该沉到这里。

### `product/`

这个目录是很多技术仓库容易缺的，但对 AI 全栈很重要：

```text
product/
  requirement-analysis/
  scenario-design/
  ai-product-patterns/
  prompt-to-feature/
  case-study/
```

因为 AI 项目不是只会接模型接口就够了，还要会：

- 识别场景
- 拆需求
- 设计交互
- 定义效果评估方式

### `interview/`

如果你还保留求职导向，建议单独放：

```text
interview/
  frontend/
  backend/
  ai/
  system-design/
  project-story/
```

这样不会再让面试目录反向主导整个仓库结构。

### `labs/`

放单点实验，不追求完整交付：

- 一个 Prompt demo
- 一个 RAG demo
- 一个 Agent demo
- 一个 React AI Chat demo
- 一个 Node + LLM API demo

这层用来替代你现在的 `06-code-lab`，但范围更广。

### `projects/`

放完整项目案例：

- `ai-chat-app`
- `rag-qa-system`
- `ai-form-builder`
- `low-code-with-ai`
- `agent-workflow-demo`

每个项目建议自带：

- `README.md`
- `docs/`
- `src/` 或 `apps/`
- `server/`（如果有）
- `eval/`（AI 项目建议保留）

## 5. 当前目录到目标目录的映射

建议按下面方式迁移：

```text
front-knowledge-base/00-roadmap
  -> navigation/

front-knowledge-base/01-foundation/js
front-knowledge-base/01-foundation/ts
front-knowledge-base/01-foundation/html
front-knowledge-base/01-foundation/css
front-knowledge-base/01-foundation/browser
  -> frontend/foundation/

front-knowledge-base/02-framework/react
front-knowledge-base/02-framework/vue
  -> frontend/framework/

front-knowledge-base/03-engineering/webpack
  -> frontend/engineering/ 或 architecture/ci-cd/

front-knowledge-base/03-engineering/nodejs
  -> backend/runtime/

front-knowledge-base/03-engineering/git
  -> architecture/ci-cd/ 或 architecture/testing/

front-knowledge-base/04-architecture/micro-frontend
  -> architecture/distributed/ 或 frontend/engineering/

front-knowledge-base/05-interview
  -> interview/

front-knowledge-base/06-code-lab
  -> labs/

way-to-AGI
  -> ai/ + product/ + projects/
```

## 6. 最现实的迁移方式

不建议一次性重命名所有目录。建议分 3 步。

### 第一步：先立新骨架

先创建这些目录：

- `navigation`
- `frontend`
- `backend`
- `ai`
- `architecture`
- `product`
- `interview`
- `labs`
- `projects`

这一步先不大规模移动内容。

### 第二步：迁最清晰的部分

优先迁这些：

- `front-knowledge-base/00-roadmap` -> `navigation`
- `front-knowledge-base/06-code-lab` -> `labs`
- `way-to-AGI` -> `ai`
- `front-knowledge-base/05-interview` -> `interview`

因为这些边界最清楚，迁起来代价最低。

### 第三步：再拆前后端和架构

最后再处理最容易纠缠的部分：

- `01-foundation`
- `02-framework`
- `03-engineering`
- `04-architecture`

这一步需要边迁边补各目录 `README.md`，不然以后会迷路。

## 7. 命名建议

你已经明确“不需要前缀序号”，那就统一成自然英文目录名：

- 一级目录：`frontend`、`backend`、`ai`
- 二级目录：英文 kebab-case
- 文档文件名：语义化命名

建议减少这类模糊名称：

- `note.md`
- `code.md`
- `misc.md`
- `temp.md`

建议替换成：

- `event-loop.md`
- `react-rendering-model.md`
- `rag-retrieval-pipeline.md`
- `agent-tool-calling-patterns.md`

## 8. 最终判断

综合你的想法后，我认为最稳的结构不是“全按 AI 重做”，而是：

- 顶层继续保留 `frontend` 和 `backend`
- 新增 `ai` 作为主干能力层
- 用 `architecture` 承接横切工程问题
- 用 `labs` 和 `projects` 把实验与完整项目拆开

这样做的结果是：

- 你原有前端积累不会废掉
- 后端能力会自然补齐
- AI 会从“附加主题”变成“核心主干”
- 整个仓库会更像真实 AI 全栈知识工作台

## 9. 下一步最值得直接做的事

现在最值得继续落地的是 3 件事：

1. 先创建新的一级目录骨架
2. 把根 `README.md` 改成新的总导航
3. 先迁 `way-to-AGI`、`06-code-lab`、`05-interview`

这 3 步做完，仓库的定位就会先变正确，后面再慢慢细拆 `frontend` 和 `backend`。
