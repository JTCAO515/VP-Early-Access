# 把报名数据接到飞书多维表格（小白版教程）

这份教程带你把页面上的报名表单接到 **飞书多维表格**。全程免费，大陆和海外都能打开。

做完之后：有人在页面上留邮箱 → 飞书表格里自动多一行。

**开始之前先明确一点**：本教程里所有 `xxx` 都是占位符，真实的 App Secret 属于密钥，
只填进部署平台的环境变量，**不要**贴进聊天、不要提交进仓库、不要写进任何笔记。

---

## 前置条件

- 一个飞书账号（[feishu.cn](https://feishu.cn) 注册，个人版即可）。
- 如果你的团队用的是国际版 Lark，把本教程里的 `feishu.cn` 换成 `larksuite.com`，
  `open.feishu.cn` 换成 `open.larksuite.com`，其余步骤完全一样。

---

## 第一步：建一张多维表格

1. 打开飞书，左侧点 **云文档** → 右上角 **新建** → **多维表格**。
2. 表格重命名为 `VisePanda Early Access`。
3. 把默认的几列改成下面这 8 列。**列名必须一模一样**（区分大小写和空格），
   **字段类型全部选「多行文本」**：

   | 列名 | 类型 | 存什么 |
   | --- | --- | --- |
   | `Email` | 多行文本 | 报名邮箱 |
   | `Timing` | 多行文本 | 计划出行时间 |
   | `Source` | 多行文本 | 从哪里知道我们 |
   | `Feature` | 多行文本 | 最想要的功能 |
   | `Lang` | 多行文本 | 用户当时看的是中文还是英文页面 |
   | `Referrer` | 多行文本 | 来源页面 |
   | `User Agent` | 多行文本 | 浏览器信息 |
   | `Submitted At` | 多行文本 | 提交时间（ISO 格式字符串） |

   > 「Submitted At」故意用文本而不是日期类型：日期类型要求传毫秒时间戳，
   > 文本能原样存住时区信息，出问题时更好排查。

4. 多余的默认列可以删掉。

### 记下两个 ID

看浏览器地址栏，它长这样：

```
https://xxx.feishu.cn/base/BASCNxxxxxxxxxxxxxxxx?table=tblXXXXXXXXXXXX&view=vewYYYYYYYY
```

- `base/` 后面那一段（`BASCN...`）就是 **`FEISHU_BITABLE_APP_TOKEN`**。
- `table=` 后面那一段（`tbl...`）就是 **`FEISHU_BITABLE_TABLE_ID`**。

把这两个先记在草稿里。

---

## 第二步：建一个飞书应用，拿到 App ID 和 App Secret

1. 打开 [open.feishu.cn](https://open.feishu.cn)，用同一个飞书账号登录。
2. 顶部 **开发者后台** → **创建企业自建应用**。
3. 名称填 `VisePanda Waitlist`，随便传个图标，创建。
4. 进入应用 → 左侧 **凭证与基础信息**，能看到：
   - **App ID** → 对应 `FEISHU_APP_ID`
   - **App Secret** → 对应 `FEISHU_APP_SECRET`（点「查看」才显示，**这是密钥**）

---

## 第三步：给应用开权限

1. 左侧 **权限管理** → 搜索 `bitable`。
2. 勾上 **`bitable:app`**（多维表格读写）。如果找不到这一条，
   勾 **`bitable:app:readonly`** 之外的那个可写权限即可。
3. 左侧 **版本管理与发布** → **创建版本** → 填个版本号（比如 `1.0.0`）→ **申请发布**。
   个人版飞书通常会立刻通过；企业版可能需要管理员点一下同意。

> 没发布版本的话，权限不会生效，写入会报 `99991672 permission denied`。

---

## 第四步：把应用加进这张表格（最容易漏的一步）

1. 回到你的多维表格。
2. 右上角 **⋯（更多）** → **添加文档应用** → 搜索 `VisePanda Waitlist` → 添加，
   权限选 **可编辑**。

> 漏了这一步，前面权限全对也写不进去，报错是「表格不存在或无权限」。

---

## 第五步：填环境变量

本地测试时，把值填进项目根目录的 `.env.local`：

```bash
WAITLIST_PROVIDER=feishu
FEISHU_DOMAIN=open.feishu.cn
FEISHU_APP_ID=cli_xxxxxxxxxxxxxxxx
FEISHU_APP_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FEISHU_BITABLE_APP_TOKEN=BASCNxxxxxxxxxxxxxxxx
FEISHU_BITABLE_TABLE_ID=tblXXXXXXXXXXXX
```

正式部署时，把同样这 6 个变量填进部署平台的环境变量面板
（Vercel: Settings → Environment Variables；Cloudflare Pages: 设置 → 环境变量）。

`.env.local` 已经在 `.gitignore` 里，不会被提交。**不要**把 App Secret 提交进仓库。

---

## 第六步：验证

```bash
pnpm dev
```

另开一个终端：

```bash
curl -i -X POST http://localhost:3000/api/waitlist -H 'Content-Type: application/json' -d '{"email":"check@example.com","timing":"3-6-months","source":"wechat","feature":"transport","lang":"zh"}'
```

**预期结果**：

- 终端返回 `HTTP/1.1 200 OK` 和 `{"ok":true}`。
- 飞书表格里多出一行，Email 是 `check@example.com`。

然后去页面上真填一次表单，确认表格里也能收到。测完把这两行测试数据删掉。

---

## 回滚

任何一步出问题，都可以立刻退回安全状态：把环境变量改成

```bash
WAITLIST_PROVIDER=console
```

重新部署。页面照常工作，报名记录会写进服务器日志，不会丢，也不会写进飞书。
等飞书配好了再改回 `feishu`。

---

## 常见错误

| 现象 | 原因 | 怎么修 |
| --- | --- | --- |
| `code=99991663` / `99991661` | tenant_access_token 过期或不对 | 代码会自动重新取一次；持续报错就核对 App ID / App Secret 有没有填错或多了空格 |
| `code=99991672` 权限不足 | 权限没勾，或者版本没发布 | 回第三步，勾 `bitable:app` 并发布版本 |
| 提示表格不存在 / 无权限 | 应用没被加进这张表格 | 回第四步，把应用添加为表格协作者 |
| `FieldNameNotFound` | 列名对不上 | 回第一步，列名必须和表格里完全一致，注意 `User Agent` 中间有一个空格 |
| 接口一直返回 429 | 触发了每分钟 5 次的限流 | 等一分钟再试，这是页面自带的防刷 |
| 国际版 Lark 一直连不上 | 域名用错了 | 把 `FEISHU_DOMAIN` 改成 `open.larksuite.com` |
