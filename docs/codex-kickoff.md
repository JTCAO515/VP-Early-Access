# Codex 启动派工单 — VP Early Access v2

> 本文件是本轮唯一的任务权威源。与聊天记录冲突时，以本文件 + 仓库实际状态为准。
> 完成后必须更新 `docs/handoff.json` 与 `HANDOFF.md`。

---

## 0. 项目坐标

| 项 | 值 |
| --- | --- |
| 本地路径 | `/Users/jtcao/VP-Early-Access` |
| 远端仓库 | https://github.com/JTCAO515/VP-Early-Access （public） |
| 默认分支 | `main`（当前只有一个 commit `ed15f50`） |
| 主项目参考 | https://github.com/JTCAO515/VP-V4 （品牌色来源，勿修改该仓库） |
| 提交邮箱 | **必须** `jt.cao@outlook.com`，否则 Vercel 拒绝部署（仓库已配好 local git config，别覆盖） |
| 包管理 | pnpm 9.15.9 / Node 25 |
| 技术栈 | Next.js 16 App Router + React 19 + TypeScript + 手写 CSS（无 Tailwind） |

启动开发：

```bash
pnpm --dir /Users/jtcao/VP-Early-Access dev
```

---

## 1. 强制阅读顺序

动手前按顺序读完，不要跳：

1. `README.md` — 架构与约束总览
2. `lib/copy.ts` — **所有文案的唯一来源**，全部是 `{ en, zh }` 双语对
3. `app/api/waitlist/route.ts` — 报名接口，冻结契约
4. `lib/providers/index.ts` + `lib/providers/feishu.ts` — 存储适配器现状
5. `components/Constellation.tsx` — 当前静态地图，本轮要整体替换
6. `components/EarlyAccessPage.tsx` — 页面装配
7. `docs/handoff.json` — 上一轮交接记录（本轮结束要更新它）

---

## 2. 仓库当前真实状态（已完成的，不要重做）

已经做好并验证通过的部分：

- 双语（EN / 中文）单页，导航栏有语言切换，文案集中在 `lib/copy.ts`
- Hero + 两步式报名表单：第一步只要邮箱，第二步展开三个可跳过的单选题
- 三道题已定稿（`QUESTIONS`）：出行时间 / 从哪知道我们 / 最想先用哪个功能
- Section 02 执行逻辑模拟器（三面板：现有计划 → 出行前检查 → 行程画布/下一步）
- Section 03 移动端：iOS / Android「正在开发中」+ 两个纯 CSS 手机示范图
- 收尾 CTA + 页脚
- `POST /api/waitlist`：蜜罐字段、每 IP 每分钟 5 次限流、邮箱校验、选项白名单
- 响应式：1440×900 与 375×812 均已验证，无 console 报错、无横向溢出
- `pnpm typecheck` 与 `pnpm build` 通过

**本轮不要动这些**，除非下面的任务明确要求。

---

## 3. 本轮任务（操作者的六条要求，逐条执行）

### 任务 1 — 表单后端换成 JotForm，删掉飞书

飞书方案作废。改用 JotForm。

**必须保持的架构原则**：访客浏览器只 POST 到本站自己的 `/api/waitlist`，
**绝不能**把 JotForm API Key 或表单直连暴露到前端，也不要改成 iframe 嵌入
（会破坏页面设计、拿不到提交事件）。JotForm 的调用一律在服务端完成。

要做的：

1. 新建 `lib/providers/jotform.ts`，实现 `saveToJotForm(entry)`。
   提交接口：`POST https://api.jotform.com/form/{FORM_ID}/submissions`，
   鉴权用 `APIKEY` 请求头或 `?apiKey=` 查询参数，body 为
   `submission[{questionId}]=value` 形式的表单编码。
   非 2xx 或返回体 `responseCode !== 200` 时抛错。
2. 在 `lib/providers/index.ts` 注册 `jotform`，把 `feishu` 从枚举里移除。
3. **删除** `lib/providers/feishu.ts` 和 `docs/setup-feishu.md`。
4. `.env.example` 改为：

   ```bash
   WAITLIST_PROVIDER=console          # console | jotform | webhook
   JOTFORM_API_KEY=
   JOTFORM_FORM_ID=
   # JotForm 的题目 ID 是数字，建表后从 API 查出来填这里
   JOTFORM_FIELD_EMAIL=
   JOTFORM_FIELD_TIMING=
   JOTFORM_FIELD_SOURCE=
   JOTFORM_FIELD_FEATURE=
   JOTFORM_FIELD_LANG=
   JOTFORM_FIELD_SUBMITTED_AT=
   ```

5. `console` 仍然是默认 provider，保证零配置能跑。
6. 写 `docs/setup-jotform.md`，小白版中文教程，结构对齐已删除的飞书教程：
   前置条件 / 建表单步骤 / 怎么拿 API Key / 怎么查出每道题的 questionId /
   环境变量怎么填 / 怎么验证 / 怎么回滚 / 常见错误表。
   教程里所有密钥一律写占位符，**不准出现真实 Key**。

**JotForm 表单本身谁来建**：操作者已在 Claude Code 侧配置了 JotForm MCP。
如果你（Codex）没有 JotForm MCP，就**不要**尝试注册账号或猜表单 ID ——
把「建表单 + 提供 6 个环境变量」写进 `operatorActions`，代码用 `console`
provider 交付，等操作者回填。这是硬要求：不要为了跑通而伪造凭证。

表单字段与 `lib/copy.ts` 的 `QUESTIONS` 一一对应，加上 `Email`、`Lang`、
`Submitted At` 三个字段。

### 任务 2 — 海外发布，地图约束解除

产品面向海外发布。上一轮为规避大陆《地图管理条例》而刻意不画国界线的限制**取消**。
可以直接手绘中国地图轮廓，**包含香港、澳门、台湾**。

同步清理：删掉 `README.md` 里关于标准地图/审图号的那一节，
删掉 `components/Constellation.tsx` 里对应的代码注释，
并把 `docs/handoff.json` 里那条 decision 改写为「面向海外发布，绘制完整轮廓」。

### 任务 3 — 地图改成动态可交互（本轮最大工作量）

`components/Constellation.tsx` 整体重写（可以改名为 `components/ChinaMap.tsx`）。

**几何数据**

- 用 **Natural Earth**（public domain，无版权风险）的国界数据，
  取 `CHN` + `TWN` + `HKG` + `MAC`，1:50m 精度。
- **离线转换成 SVG path**：写一个一次性脚本放 `scripts/build-map.mjs`，
  把 GeoJSON 投影（建议 Mercator 或等距圆柱，够用即可）成 viewBox 坐标，
  产出 `lib/map-geometry.ts` 里的常量 path 字符串，提交进仓库。
- **运行时不准引入地图库、不准请求外部瓦片或 CDN**。页面必须自包含。
- 简化路径精度到小数点后 1 位，控制文件体积。

**城市热点（第一批 12 座，就这些，不要增删）**

| 城市 | EN | lat | lon | 代表景点 EN | 代表景点 ZH |
| --- | --- | --- | --- | --- | --- |
| 北京 | Beijing | 39.9042 | 116.4074 | The Great Wall (Mutianyu) | 慕田峪长城 |
| 上海 | Shanghai | 31.2304 | 121.4737 | The Bund | 外滩 |
| 广州 | Guangzhou | 23.1291 | 113.2644 | Canton Tower | 广州塔 |
| 深圳 | Shenzhen | 22.5431 | 114.0579 | Window of the World | 世界之窗 |
| 成都 | Chengdu | 30.5728 | 104.0668 | Giant Panda Breeding Base | 大熊猫繁育研究基地 |
| 重庆 | Chongqing | 29.5630 | 106.5516 | Hongya Cave | 洪崖洞 |
| 昆明 | Kunming | 25.0389 | 102.7183 | Stone Forest | 石林 |
| 张家界 | Zhangjiajie | 29.1274 | 110.4791 | Zhangjiajie National Forest Park | 张家界国家森林公园 |
| 桂林 | Guilin | 25.2736 | 110.2900 | Li River | 漓江 |
| 香港 | Hong Kong | 22.3193 | 114.1694 | Victoria Peak | 太平山顶 |
| 澳门 | Macao | 22.1987 | 113.5439 | Ruins of St. Paul's | 大三巴牌坊 |
| 台北 | Taipei | 25.0330 | 121.5654 | Taipei 101 | 台北 101 |

城市名和景点名都要进 `lib/copy.ts`，双语。

**交互行为**

1. 地图滚动进入视口时开始自动播放，依次聚焦每座城市（建议每站 4 秒）。
2. 聚焦 = 地图 `<g>` 做 transform 缩放 + 平移，把当前城市移到画面固定锚点，
   CSS transition 过渡，不要逐帧 JS 动画。
3. 聚焦时在城市旁展开一个对话框，显示三行：**城市名 / 代表景点 / 今天天气**。
4. 用户点击任意城市点或右侧城市列表 → 立即聚焦该城市，并**暂停**自动播放。
5. 键盘可达：城市列表用真正的 `<button>`，有 `aria-pressed`，Tab 能走到。
6. `prefers-reduced-motion: reduce` 时：不自动播放，不做缩放动画，
   默认展示第一座城市，只保留点击切换。
7. 地图离开视口时停掉定时器，别让它在后台空转。

**天气数据**

- 用 **Open-Meteo**（免费、免 API Key）：
  `https://api.open-meteo.com/v1/forecast?latitude=<12个逗号分隔>&longitude=<12个>&current=temperature_2m,weather_code`
  一次请求拿全部 12 城，返回数组，顺序与入参一致。
- **在 `app/page.tsx`（服务端）取数**，带 `next: { revalidate: 1800 }` 缓存，
  作为 props 传给客户端组件。不要在浏览器里直接 fetch 第三方。
- 拿不到数据时（超时/失败）返回 `null`，对话框**省略天气那一行**，
  其余照常显示。不准编造温度。
- `weather_code` 按 WMO 标准映射成双语文案（晴/多云/阴/小雨/雨/雪/雾/雷暴），
  映射表放 `lib/weather.ts`。

**文案同步**：Section 01 现在写的是 "Eight cities"，改成十二座，
`lib/copy.ts` 里 `destinations.title` 中英文都要改。

### 任务 4 — Vercel 托管

操作者已解决托管问题。删掉 `README.md` 里「Vercel 在大陆访问不稳」那段警告，
以及 `docs/handoff.json` 里对应的 risk 条目。不需要改代码。

### 任务 5 — 发布时间窗定为 this fall

`lib/copy.ts` 的 `ACCESS_WINDOW` 改成：

```ts
export const ACCESS_WINDOW: Record<Lang, string> = {
  en: "Early access opens this fall.",
  zh: "早期访问将于今年秋季开放。",
};
```

同时删掉它上方那段「这是对外承诺所以故意留空」的注释——已经由操作者拍板。

### 任务 6 — 域名与联系方式落地

| 项 | 值 |
| --- | --- |
| 页脚联系邮箱 | `jtcao@go2china.space` |
| 本页部署域名 | `https://earlyaccess.go2china.space` |
| 项目正式域名 | `go2china.space` |

要改的地方：

- `components/EarlyAccessPage.tsx` 页脚 `mailto:` 从 `hello@visepanda.com` 改掉
- `.env.example` 的 `NEXT_PUBLIC_SITE_URL` 默认值
- `app/layout.tsx` 里 `siteUrl` 的 fallback 与 `metadata.openGraph.url`
- 页脚加一条指向 `https://go2china.space` 的链接（文案进 `lib/copy.ts`）

---

## 4. 冻结契约（不准改）

改动这些等于破坏已验收的行为，需要先回来找架构师：

- `POST /api/waitlist` 的出入参：入参 `{ email, timing?, source?, feature?, lang?, company? }`，
  出参 `{ ok: true }` 或 `{ error: "email" | "rate" | "server" }`
- 蜜罐命中返回 `200 { ok: true }`，且**永不落库**
- 不在 `QUESTIONS` 白名单里的选项值一律丢成 `""`，绝不原样落库
- 密钥只走环境变量，任何真实 Key 都不准进仓库、不准进文档、不准进聊天
- 表单仍是两步式：第一步只要邮箱，第二步三道可跳过的单选题
- 所有用户可见文案继续集中在 `lib/copy.ts`，保持 `{ en, zh }` 双语对
- 页面继续零第三方前端脚本、零外部字体请求（字体由 `next/font` 自托管）

---

## 5. 文件权限

**允许修改 / 新建**

```
lib/copy.ts
lib/providers/index.ts
lib/providers/jotform.ts        (新建)
lib/map-geometry.ts             (新建，脚本生成)
lib/weather.ts                  (新建)
components/ChinaMap.tsx         (新建，替代 Constellation.tsx)
components/EarlyAccessPage.tsx
app/page.tsx
app/layout.tsx
app/globals.css
scripts/build-map.mjs           (新建)
.env.example
README.md
HANDOFF.md
docs/handoff.json
docs/setup-jotform.md           (新建)
package.json                    (仅在确有必要时加脚本)
```

**允许删除**

```
lib/providers/feishu.ts
docs/setup-feishu.md
components/Constellation.tsx
```

**禁止修改**

```
app/api/waitlist/route.ts       (契约冻结，除非 provider 注册确实需要，且只改 import)
lib/validate.ts
lib/ratelimit.ts
lib/types.ts
components/WaitlistForm.tsx
components/Simulator.tsx
components/MobileShowcase.tsx
components/icons.tsx            (可以只追加新图标，不准改已有的)
```

另外：`JTCAO515/VP-V4` 仓库一律只读，不准提交任何改动过去。

---

## 6. 验收标准

全部要跑，跑不过就不算完成。未运行的检查必须在交接里明确写出来。

```bash
pnpm --dir /Users/jtcao/VP-Early-Access check
```

（等价于 `pnpm typecheck && pnpm build`，两者都必须过。）

接口回归，dev server 起来后逐条验：

```bash
# 合法提交 -> 200 {"ok":true}
curl -i -X POST http://localhost:3000/api/waitlist -H 'Content-Type: application/json' \
  -d '{"email":"check@example.com","timing":"3-6-months","source":"wechat","feature":"transport","lang":"zh"}'

# 错邮箱 -> 400 {"error":"email"}
curl -i -X POST http://localhost:3000/api/waitlist -H 'Content-Type: application/json' -d '{"email":"nope"}'

# 蜜罐 -> 200 {"ok":true}，且服务端日志里查不到这条
curl -i -X POST http://localhost:3000/api/waitlist -H 'Content-Type: application/json' \
  -d '{"email":"bot@example.com","company":"spam"}'

# 非法选项值 -> 200，且落库的 timing 为空字符串
curl -i -X POST http://localhost:3000/api/waitlist -H 'Content-Type: application/json' \
  -d '{"email":"drop@example.com","timing":"<script>","source":"wechat"}'

# 连打 6 次 -> 第 6 次返回 429
for i in 1 2 3 4 5 6; do curl -s -o /dev/null -w "$i:%{http_code} " -X POST \
  http://localhost:3000/api/waitlist -H 'Content-Type: application/json' \
  -d "{\"email\":\"rl$i@example.com\"}"; done; echo
```

浏览器验收清单（1440×900 与 375×812，中英双语各走一遍）：

- [ ] console 无报错，`document.documentElement.scrollWidth === window.innerWidth`（无横向溢出）
- [ ] 中国轮廓完整，香港、澳门、台湾都在
- [ ] 12 个城市点位置正确，没有压在轮廓外面
- [ ] 自动播放能依次走完 12 城并循环
- [ ] 对话框三行内容正确；天气取不到时该行消失而不是显示占位或报错
- [ ] 点击城市点和城市列表都能聚焦，且自动播放暂停
- [ ] Tab 能走到每个城市按钮，`aria-pressed` 状态正确
- [ ] 开启系统「减少动态效果」后不自动播放、不做缩放动画
- [ ] 页脚邮箱是 `jtcao@go2china.space`，`go2china.space` 链接可点
- [ ] 收尾 CTA 下方显示 "Early access opens this fall." / 「早期访问将于今年秋季开放。」

---

## 7. 完成条件

以下全部为真才算完成：

1. 六条任务逐条落地，第 6 章验收清单全绿。
2. 飞书相关代码和文档已从仓库中消失，`grep -ri feishu .` 除 git 历史外无命中。
3. 运行时不请求任何外部地图/字体/脚本资源（天气是唯一的外部调用，且在服务端）。
4. 仓库里没有任何真实密钥。
5. `docs/handoff.json` 与 `HANDOFF.md` 已更新：改动文件清单、验证结果、
   未运行的检查、剩余 operatorActions、回滚方式、唯一 nextAction。
6. 提交信息用英文，遵循 `feat:` / `fix:` 前缀，作者邮箱 `jt.cao@outlook.com`。
7. 推到 `main` 之外的分支并开 PR，**不要直接推 main**。

---

## 8. 需要操作者决定的事（不要自己拍板）

写进 `operatorActions`，不要为了跑通而绕过：

1. JotForm 表单的建立与 6 个环境变量的填写（含 API Key）。密钥不准出现在仓库或聊天里。
2. `earlyaccess.go2china.space` 的 DNS 解析与 Vercel 域名绑定。
3. 是否需要给报名者发确认邮件（当前实现只落库，不发信）。
4. 页面暂无任何社会证明（注册人数、媒体 logo、用户证言）。**不准编造**，
   等操作者提供真实数据再加。

---

## 9. 唯一下一步

先读完第 1 章列出的七个文件，确认仓库现状与本文件描述一致；
有任何不一致，先报告差异，不要开始改代码。
确认一致后，从**任务 3（动态地图）**开始 —— 它是本轮工作量和风险最大的一块，
其余五条都是小改，放在它之后收尾。
