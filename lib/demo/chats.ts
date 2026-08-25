import type { ChatId, Localized, Turn } from "./types";

export type ChatMeta = {
  id: ChatId;
  title: Localized;
  subtitle: Localized;
  when: Localized;
};

/** Sidebar roster. `when` is fixed demo text, never a live clock. */
export const CHATS: ChatMeta[] = [
  { id: "new", title: { en: "New Chat", zh: "新对话" }, subtitle: { en: "Nothing planned yet", zh: "还没有行程" }, when: { en: "now", zh: "刚刚" } },
  { id: "shanghai", title: { en: "3 days in Shanghai", zh: "上海三日游" }, subtitle: { en: "Trip Canvas · 3 days · confirmed", zh: "Trip Canvas · 3 天 · 已确认" }, when: { en: "2d ago", zh: "2 天前" } },
  { id: "transport", title: { en: "Shanghai to Beijing", zh: "上海到北京" }, subtitle: { en: "Comparison · rail vs air", zh: "对比 · 高铁与航班" }, when: { en: "2d ago", zh: "2 天前" } },
  { id: "hotel", title: { en: "Luxury hotel in Beijing", zh: "北京豪华酒店" }, subtitle: { en: "Comparison · 3 stays", zh: "对比 · 3 家住宿" }, when: { en: "2d ago", zh: "2 天前" } },
  { id: "restaurant", title: { en: "Shanghai restaurants", zh: "上海餐厅" }, subtitle: { en: "Tonight · peanut-free", zh: "今晚 · 无花生" }, when: { en: "1d ago", zh: "1 天前" } },
  { id: "import", title: { en: "Trip guide check", zh: "攻略验证" }, subtitle: { en: "Imported · 1 conflict found", zh: "已导入 · 发现 1 处冲突" }, when: { en: "1d ago", zh: "1 天前" } },
  { id: "xian", title: { en: "2 days in Xi'an", zh: "西安两日" }, subtitle: { en: "Trip Canvas · timed entry", zh: "Trip Canvas · 分时预约" }, when: { en: "1d ago", zh: "1 天前" } },
  { id: "family", title: { en: "Travelling with parents", zh: "带父母同行" }, subtitle: { en: "Pace and access constraints", zh: "节奏与无障碍约束" }, when: { en: "6h ago", zh: "6 小时前" } },
  { id: "arrival", title: { en: "First day on the ground", zh: "落地第一天" }, subtitle: { en: "Network · payment · transfer", zh: "网络 · 支付 · 接驳" }, when: { en: "5h ago", zh: "5 小时前" } },
  { id: "rescue", title: { en: "My train is delayed", zh: "高铁晚点了" }, subtitle: { en: "Recovery · 2 changes proposed", zh: "恢复 · 已提出 2 处改动" }, when: { en: "2h ago", zh: "2 小时前" } },
  { id: "budget", title: { en: "Tighter daily budget", zh: "预算下调" }, subtitle: { en: "Rebalanced · same days", zh: "已重排 · 天数不变" }, when: { en: "1h ago", zh: "1 小时前" } },
];

export const CHAT_CONTEXT: Record<ChatId, Localized> = {
  new: { en: "China", zh: "中国" },
  shanghai: { en: "Shanghai", zh: "上海" },
  transport: { en: "Shanghai → Beijing", zh: "上海 → 北京" },
  hotel: { en: "Beijing", zh: "北京" },
  restaurant: { en: "Shanghai", zh: "上海" },
  import: { en: "Shanghai → Xi'an", zh: "上海 → 西安" },
  xian: { en: "Xi'an", zh: "西安" },
  family: { en: "Shanghai", zh: "上海" },
  arrival: { en: "Shanghai", zh: "上海" },
  rescue: { en: "Nanjing → Shanghai", zh: "南京 → 上海" },
  budget: { en: "Shanghai", zh: "上海" },
};

const RECHECK_NOTE: Localized = { en: "Rules change often; treat this as a starting point, not a ruling.", zh: "规则变动频繁，这里只是起点，不是裁定。" };

export const CONVERSATIONS: Record<ChatId, Turn[]> = {
  new: [
    {
      role: "assistant",
      text: {
        en: "Tell me where you want to go and what matters most. I'll ask a few focused questions, then build a Trip Canvas you can confirm.",
        zh: "告诉我想去哪里，以及这次旅行最重要的需求。我会先问几个关键问题，再生成一份可确认的 Trip Canvas。",
      },
      chips: [
        { en: "3 days in Shanghai", zh: "上海三日游" },
        { en: "Shanghai to Beijing", zh: "上海到北京" },
        { en: "Check a guide I already have", zh: "检查我已有的攻略" },
      ],
    },
  ],

  shanghai: [
    {
      role: "user",
      text: { en: "Plan three relaxed days in Shanghai. I like architecture, local food, and one evening view.", zh: "帮我安排上海三日游，节奏不要太赶。我喜欢建筑、本地美食，也想看一次夜景。" },
    },
    {
      role: "assistant",
      text: { en: "Would you rather spend the days in neighbourhoods or at landmark attractions? I'll keep each day's travel under 45 minutes where I can.", zh: "你更想把时间花在街区，还是地标景点？我会尽量把每天的交通控制在 45 分钟内。" },
      chips: [
        { en: "Mostly neighbourhoods", zh: "多逛街区" },
        { en: "Mostly landmarks", zh: "多看地标" },
        { en: "An even mix", zh: "两者各半" },
      ],
    },
    {
      role: "user",
      text: { en: "Mostly neighbourhoods, mid-range budget, and a river night view on one of the evenings.", zh: "多逛街区，预算中等，其中一晚想看浦江夜景。" },
    },
    {
      role: "assistant",
      text: { en: "Using the daily budget already on your profile, and keeping walking inside your usual range.", zh: "我沿用你画像里的每日预算，并把步行控制在你常走的范围内。" },
      recall: { label: { en: "From your profile", zh: "来自你的画像" }, value: { en: "Daily budget USD 180–260 · walking 7–9k steps", zh: "每日预算 USD 180–260 · 步行 7,000–9,000 步" }, memoryId: "m-budget" },
    },
    {
      role: "assistant",
      text: { en: "Building the Canvas now — three days, one river evening, dinner filtered for peanut.", zh: "正在生成 Canvas——三天行程、一晚江景、晚餐已过滤花生。" },
      generating: true,
    },
    {
      role: "assistant",
      text: { en: "Day 2 came out 2.1 km over your usual walking range, so I've proposed three changes instead of applying them. Open the diff to accept or reject each one.", zh: "Day 2 比你常走的距离多 2.1 km，所以我只提出了三处改动，没有直接应用。打开 Diff 可以逐条接受或拒绝。" },
      confidence: "high",
    },
    {
      role: "user",
      text: { en: "Is Yu Garden ticketed right now?", zh: "豫园现在需要买票吗？" },
    },
    {
      role: "assistant",
      text: { en: "It is ticketed, and a timed reservation window may apply. My last recheck is nine days old, so I've marked the node for recheck rather than treating it as settled.", zh: "需要购票，且可能有预约时段。我上次复核是 9 天前，所以把这个节点标成了「需复核」，没有当成已确认。" },
      confidence: "recheck",
      evidence: [{ kind: "official", label: { en: "Ticketing page", zh: "票务页面" }, checked: { en: "Demo recheck: 9d ago", zh: "Demo 复核：9 天前" } }],
    },
  ],

  transport: [
    { role: "user", text: { en: "Compare rail and flights from Shanghai to Beijing, then find a central hotel.", zh: "比较上海到北京的高铁和航班，再找一家位置方便的北京酒店。" } },
    {
      role: "assistant",
      text: { en: "Four things change the answer: your transport budget, departure time, luggage, and whether you need flexible cancellation. Which matters most?", zh: "有四件事会改变结论：交通预算、出发时间、行李、是否需要灵活取消。哪一个对你最重要？" },
      chips: [
        { en: "Shortest door-to-door time", zh: "门到门时间最短" },
        { en: "Lowest total cost", zh: "总花费最低" },
        { en: "Most flexible to cancel", zh: "取消最灵活" },
      ],
    },
    { role: "user", text: { en: "Shortest door to door, morning departure, one carry-on, flexible if possible.", zh: "门到门最短，上午出发，一件随身行李，尽量可取消。" } },
    {
      role: "assistant",
      text: { en: "Air wins on paper by about 30 minutes, but only if both airport transfers go smoothly. Rail matches the preference already on your profile.", zh: "纸面上航班快约 30 分钟，但前提是两端机场接驳都顺利。高铁则命中你画像里已有的偏好。" },
      recall: { label: { en: "From your profile", zh: "来自你的画像" }, value: { en: "Rail preferred between cities", zh: "城际优先高铁" }, memoryId: "m-transport" },
      confidence: "medium",
    },
    {
      role: "assistant",
      text: { en: "I'm not showing train or flight numbers, and no fare here is live. Everything in the comparison is a demo fixture.", zh: "我不展示车次号和航班号，这里也没有实时票价。对比表里的一切都是 Demo fixture。" },
      confidence: "high",
    },
    { role: "user", text: { en: "Go with rail. What about the hotel?", zh: "那就高铁。酒店呢？" } },
    {
      role: "assistant",
      text: { en: "Wangfujing keeps you within a 12-minute walk of the main sights and has flexible cancellation. I've put it on the Canvas as a proposal, not a booking.", zh: "王府井离主要景点步行 12 分钟，且可灵活取消。我已经把它作为提案放进 Canvas，不是预订。" },
      confidence: "medium",
    },
  ],

  hotel: [
    { role: "user", text: { en: "Find a luxury hotel near the Forbidden City with a quiet room and breakfast.", zh: "找一家靠近故宫的豪华酒店，要安静房型并含早餐。" } },
    {
      role: "assistant",
      text: { en: "Before I shortlist: how many of you are travelling, and do you need airport pickup?", zh: "先确认两件事：一共几个人，需不需要机场接送？" },
      chips: [
        { en: "Two of us, no pickup", zh: "两个人，不需要接送" },
        { en: "Two of us, with pickup", zh: "两个人，需要接送" },
        { en: "Just me", zh: "我一个人" },
      ],
    },
    { role: "user", text: { en: "Two of us, no pickup. Quiet matters more than the view.", zh: "两个人，不需要接送。安静比景观更重要。" } },
    {
      role: "assistant",
      text: { en: "Three options compared on location, room type, breakfast, cancellation, international cards and English service. Wangfujing is the only one that hits both quiet and flexible cancellation.", zh: "已按位置、房型、早餐、取消政策、境外卡与英文服务对比三家。只有王府井同时满足安静和灵活取消。" },
      confidence: "medium",
    },
    {
      role: "assistant",
      text: { en: "The nightly rate sits above the band on your profile. I've flagged it on the node rather than quietly widening your budget.", zh: "房价高于你画像里的区间。我把它标在节点上，而不是悄悄放宽你的预算。" },
      recall: { label: { en: "From your profile", zh: "来自你的画像" }, value: { en: "Daily budget USD 180–260, excluding intercity transport", zh: "每日预算 USD 180–260，不含跨城交通" }, memoryId: "m-budget" },
    },
    { role: "user", text: { en: "None of these feel right.", zh: "这三家都不太合适。" } },
    {
      role: "assistant",
      text: { en: "Loading a second preset set. I've also recorded this as a rejection, so Copilot stops leaning on courtyard-view rooms.", zh: "已切换到第二组备选。这次拒绝也被记下来了，Copilot 之后会减少推荐庭院景观房。" },
      confidence: "high",
    },
  ],

  restaurant: [
    { role: "user", text: { en: "Find a Shanghai dinner near me, about ¥200 per person.", zh: "帮我找附近的上海晚餐，人均 200 元左右。" } },
    {
      role: "assistant",
      text: { en: "Anything you avoid — allergies, spice level, or a cuisine you'd rather skip?", zh: "有没有要避开的——过敏、辣度，或者不想吃的菜系？" },
      chips: [
        { en: "Peanut allergy, no spice limit", zh: "花生过敏，辣度无所谓" },
        { en: "No restrictions", zh: "没有限制" },
        { en: "Vegetarian tonight", zh: "今晚吃素" },
      ],
    },
    { role: "user", text: { en: "Peanut allergy. I don't mind a queue if it's under half an hour.", zh: "花生过敏。排队半小时以内可以接受。" } },
    {
      role: "assistant",
      text: { en: "Peanut is already a hard constraint on your profile, so I filter it everywhere rather than only in this chat.", zh: "花生在你的画像里已经是硬约束，所以我在所有地方都会过滤，不只是这次对话。" },
      recall: { label: { en: "Hard constraint", zh: "硬约束" }, value: { en: "Peanut allergy — cannot be overridden automatically", zh: "花生过敏——不可被自动推翻" }, memoryId: "m-allergy" },
      confidence: "high",
    },
    {
      role: "assistant",
      text: { en: "One local restaurant, 1.2 km away, ¥168 set menu with no peanut in any listed dish. Queue runs 30–45 minutes at peak, so I've put you at 19:00.", zh: "找到一家本帮菜，1.2 公里，¥168 套餐，列出的菜品都不含花生。高峰排队 30–45 分钟，所以安排在 19:00。" },
      confidence: "medium",
      evidence: [{ kind: "platform", label: { en: "Menu listing", zh: "菜单信息" }, checked: { en: "Demo recheck: 4d ago", zh: "Demo 复核：4 天前" } }],
    },
    { role: "user", text: { en: "Can you tell the restaurant about the allergy?", zh: "能帮我跟餐厅说明过敏情况吗？" } },
    {
      role: "assistant",
      text: { en: "I can't contact the restaurant from this demo. What I can do is generate a Chinese ordering card stating the allergy, which you show at the table — and you still confirm with staff before ordering.", zh: "这个 Demo 里我没法联系餐厅。我能做的是生成一张写明过敏的中文点菜卡，你到店出示——点餐前仍然要跟店员再确认一次。" },
      fallback: {
        channel: { en: "Confirm with the restaurant in person or by phone", zh: "到店或致电餐厅确认" },
        nextStep: { en: "Open the translation tool and generate the ordering card", zh: "打开翻译工具，生成点菜卡" },
      },
    },
  ],

  import: [
    { role: "user", text: { en: "I uploaded 'China Trip.pdf' and this Reddit guide: reddit.com/r/travel/…", zh: "我上传了《中国旅行.pdf》，还有这个 Reddit 攻略链接：reddit.com/r/travel/…" } },
    {
      role: "assistant",
      text: { en: "Received both. Parsing dates, cities, places and any order numbers — nothing is uploaded anywhere in this demo.", zh: "两份都收到了。正在解析日期、城市、地点和订单号——这个 Demo 不会把任何内容上传到别处。" },
      generating: true,
    },
    {
      role: "assistant",
      text: { en: "Extracted 14 items with confidence on each. Two look workable as written. One does not.", zh: "抽取到 14 条，每条都带置信度。两条按原样可行，一条不行。" },
      confidence: "medium",
      evidence: [{ kind: "user", label: { en: "China Trip.pdf · pages 1–4", zh: "《中国旅行.pdf》· 第 1–4 页" }, checked: { en: "From your upload", zh: "来自你的上传" } }],
    },
    {
      role: "assistant",
      text: { en: "The problem is 'Shanghai → Xi'an after dinner'. The last departure leaves before your dinner ends, and hotel check-in would land after midnight. I've explained it before changing anything.", zh: "问题出在「晚餐后上海前往西安」。末班车早于你的晚餐结束时间，酒店入住会落在午夜之后。我先解释，再动行程。" },
      confidence: "high",
      chips: [
        { en: "What do you suggest instead?", zh: "那你建议怎么改？" },
        { en: "Keep it, I'll skip dinner", zh: "保留，我不吃晚餐了" },
        { en: "Show me the evidence", zh: "给我看依据" },
      ],
      evidence: [{ kind: "official", label: { en: "Rail official channel", zh: "铁路官方渠道" }, checked: { en: "Demo recheck: 2d ago", zh: "Demo 复核：2 天前" } }],
    },
    { role: "user", text: { en: "What do you suggest instead?", zh: "那你建议怎么改？" } },
    {
      role: "assistant",
      text: { en: "Move the leg to the next morning and keep the dinner. It costs you one hotel night in Shanghai but removes a midnight arrival. It's in the diff — accept or reject it.", zh: "把这段移到次日上午，晚餐保留。代价是上海多住一晚，但避免了午夜抵达。改动在 Diff 里，你可以接受或拒绝。" },
      confidence: "high",
    },
    { role: "user", text: { en: "Was the Reddit guide reliable?", zh: "那个 Reddit 攻略靠谱吗？" } },
    {
      role: "assistant",
      text: { en: "I can't rate the author. I can tell you which of its claims I could match against an official source and which I couldn't — three matched, two are marked recheck, and the timing claim was wrong.", zh: "我没法给作者打分。我能告诉你哪些说法对上了官方来源、哪些没有——三条对上了，两条标为需复核，时间那条是错的。" },
      confidence: "medium",
    },
  ],

  xian: [
    { role: "user", text: { en: "Two days in Xi'an after Beijing. I want the Warriors and the city wall.", zh: "北京之后在西安两天，想去兵马俑和城墙。" } },
    {
      role: "assistant",
      text: { en: "The Warriors use timed entry. The 08:00 slot needs a 06:30 departure — earlier than the start time on your profile. Which do you want to bend?", zh: "兵马俑是分时预约。08:00 场次需要 06:30 出发，早于你画像里的出发时间。你想让哪一边让步？" },
      chips: [
        { en: "Keep my usual start, take a later slot", zh: "保持我的出发时间，选晚一点的场次" },
        { en: "Get up early this once", zh: "这次早起一次" },
        { en: "Drop the Warriors", zh: "不去兵马俑了" },
      ],
      recall: { label: { en: "From your profile", zh: "来自你的画像" }, value: { en: "Departures around 09:00, no early call times", zh: "09:00 左右出发，不安排过早集合" }, memoryId: "m-time" },
    },
    { role: "user", text: { en: "Keep my usual start. Take the afternoon slot.", zh: "保持出发时间，选下午场。" } },
    {
      role: "assistant",
      text: { en: "Moved to the 13:00 slot. Two things to know: passport is required at entry, and afternoon slots sell out first.", zh: "已改到 13:00 场次。两件事需要知道：入场需要护照，下午场更早售罄。" },
      confidence: "recheck",
      evidence: [{ kind: "official", label: { en: "Reservation page", zh: "预约页面" }, checked: { en: "Demo recheck: 2d ago", zh: "Demo 复核：2 天前" } }],
    },
    { role: "user", text: { en: "Anything to watch out for on the wall?", zh: "城墙有什么要注意的？" } },
    {
      role: "assistant",
      text: { en: "Bike rental closes before the wall itself does, so a late-afternoon loop can leave you walking back. I've put the wall in the morning for that reason.", zh: "自行车租借比城墙更早停止，傍晚绕圈可能要走回来。因此我把城墙放在了上午。" },
      confidence: "medium",
    },
    { role: "user", text: { en: "Is there peanut in the food street?", zh: "回民街的吃的会有花生吗？" } },
    {
      role: "assistant",
      text: { en: "Peanut is common in the local sweets there, and I can't verify each stall. I've flagged the lunch node and prepared an allergy card in Chinese for you to show.", zh: "那边的本地甜点常含花生，我无法逐个摊位核实。已经在午餐节点上标注，并准备了一张中文过敏说明卡供你出示。" },
      confidence: "recheck",
      fallback: {
        channel: { en: "Ask each vendor directly with the allergy card", zh: "用过敏说明卡逐个摊位当面确认" },
        nextStep: { en: "Open the translation tool to get the card", zh: "打开翻译工具获取说明卡" },
      },
    },
  ],

  family: [
    { role: "user", text: { en: "My parents are joining for the Shanghai days. They can't walk as far as I do.", zh: "我父母会一起来上海这几天。他们走不了我这么远。" } },
    {
      role: "assistant",
      text: { en: "I'll treat pace and access as constraints rather than preferences. How far is comfortable in one stretch, and does anyone need step-free routes?", zh: "我会把节奏和无障碍当作约束，而不是偏好。连续走多远比较舒服？有没有人需要无台阶路线？" },
      chips: [
        { en: "About 1 km at a time, step-free needed", zh: "一次约 1 公里，需要无台阶" },
        { en: "About 2 km at a time, stairs are fine", zh: "一次约 2 公里，台阶没问题" },
        { en: "Not sure yet", zh: "还不确定" },
      ],
    },
    { role: "user", text: { en: "About 1 km at a time, and step-free where possible.", zh: "一次约 1 公里，尽量无台阶。" } },
    {
      role: "assistant",
      text: { en: "Recorded as hard constraints, not suggestions. That means I won't quietly restore a longer walk later, even if the schedule gets tight.", zh: "已记为硬约束，不是建议。也就是说，即使后面行程变紧，我也不会悄悄把长距离步行加回来。" },
      confidence: "high",
    },
    {
      role: "assistant",
      text: { en: "Day 1 walking drops from 5.6 km to 2.8 km, two seated breaks go in, and the stair-only viewing platform is replaced by a step-free riverside stretch. Two changes are in the diff.", zh: "Day 1 步行从 5.6 km 降到 2.8 km，加入两次落座休息，只有台阶的观景平台换成无台阶滨江段。两处改动在 Diff 里。" },
      confidence: "medium",
    },
    { role: "user", text: { en: "Is the riverside really step-free the whole way?", zh: "滨江那段真的全程无台阶吗？" } },
    {
      role: "assistant",
      text: { en: "I can't confirm the full stretch. The access notice I have is eight days old and covers the main entrances, not every ramp. Treat it as likely, not certain.", zh: "我无法确认全程。手上的通行公告是 8 天前的，只覆盖主要入口，不包含每一段坡道。请当作「很可能」，不是「确定」。" },
      confidence: "recheck",
      fallback: {
        channel: { en: "Riverfront management official channel", zh: "滨江管理方官方渠道" },
        nextStep: { en: "Ask on arrival at the first entrance, then tell me and I'll update the node", zh: "到第一个入口时现场问一下，再告诉我，我来更新节点" },
      },
    },
  ],

  arrival: [
    { role: "user", text: { en: "What do I actually need to do in the first hour after landing?", zh: "落地后第一个小时到底要做什么？" } },
    {
      role: "assistant",
      text: { en: "Four things, in this order: connectivity, payment, a little cash, then the ride into town. Which do you want to prepare before departure?", zh: "四件事，按顺序是：网络、支付、少量现金、进城交通。哪些你想在出发前就准备好？" },
      chips: [
        { en: "All of it, before I fly", zh: "全部，出发前就办" },
        { en: "Just connectivity", zh: "只准备网络" },
        { en: "I'll handle it on arrival", zh: "落地再说" },
      ],
    },
    { role: "user", text: { en: "All of it before I fly. I'd rather not stand around at the airport.", zh: "出发前全部办好，不想在机场耗着。" } },
    {
      role: "assistant",
      text: { en: "eSIM first — activation sometimes needs Wi-Fi at the airport, so do the purchase at home and the activation on landing.", zh: "先办 eSIM——开通有时需要机场 Wi-Fi，所以购买在家做，开通落地做。" },
      confidence: "medium",
      evidence: [{ kind: "official", label: { en: "Carrier activation page", zh: "运营商开通页" }, checked: { en: "Demo recheck: 5d ago", zh: "Demo 复核：5 天前" } }],
    },
    {
      role: "assistant",
      text: { en: "Card binding for mobile payment is the part I'd least trust from memory. Rules change often and vary by card. I've marked it recheck rather than telling you it will work.", zh: "移动支付绑卡是我最不敢凭记忆下结论的部分。规则变动频繁，且因卡而异。我把它标成需复核，而不是告诉你一定能用。" },
      confidence: "recheck",
      fallback: {
        channel: { en: "Your card issuer and the payment provider's own help page", zh: "你的发卡行与支付方官方帮助页" },
        nextStep: { en: "Try the binding before you fly, so a failure costs you nothing", zh: "出发前先试一次绑定，失败也不影响行程" },
      },
    },
    { role: "user", text: { en: "How much cash is 'a little'?", zh: "「少量现金」是多少？" } },
    {
      role: "assistant",
      text: { en: "Enough for two or three small purchases — some stalls and older taxis are cash-only. I'm deliberately not giving a precise figure I can't stand behind.", zh: "够两三次小额消费即可——部分摊位和老式出租车只收现金。我故意不给一个自己站不住的精确数字。" },
      confidence: "medium",
    },
  ],

  rescue: [
    { role: "user", text: { en: "My train is running about 95 minutes late. What breaks?", zh: "我的高铁晚点大约 95 分钟。哪些安排会受影响？" } },
    {
      role: "assistant",
      text: { en: "One thing breaks and one thing shifts. The museum's last entry passes before you arrive. Dinner survives if we move it to 20:00.", zh: "一处作废，一处顺延。美术馆的最后入场时间会早于你抵达。晚餐改到 20:00 就还成立。" },
      confidence: "high",
      evidence: [{ kind: "official", label: { en: "Rail official channel", zh: "铁路官方渠道" }, checked: { en: "Demo recheck: today", zh: "Demo 复核：今天" } }],
    },
    {
      role: "assistant",
      text: { en: "Both are proposals, not edits. Nothing on your Canvas has changed yet.", zh: "两条都是提案，不是修改。你的 Canvas 目前还没有任何变化。" },
      chips: [
        { en: "Can I do the museum tomorrow?", zh: "美术馆能改到明天吗？" },
        { en: "Accept both", zh: "两条都接受" },
        { en: "Is there compensation?", zh: "晚点有补偿吗？" },
      ],
    },
    { role: "user", text: { en: "Can I still make the museum tomorrow instead?", zh: "美术馆能改到明天吗？" } },
    {
      role: "assistant",
      text: { en: "Tomorrow morning is free until 12:40, which fits a two-hour visit. That would push your departure window, so I've left it as a second option rather than stacking both changes.", zh: "明天上午到 12:40 之前是空的，够两小时参观。但这会挤压你的出发时段，所以我把它作为第二方案，没有把两处改动叠在一起。" },
      confidence: "medium",
    },
    { role: "user", text: { en: "Is there compensation for the delay?", zh: "晚点有补偿吗？" } },
    {
      role: "assistant",
      text: { en: "I can't confirm that. Compensation depends on the delay length at arrival and the fare class, and both are settled by the operator, not by me.", zh: "这个我无法确认。补偿取决于到站时的实际延误时长和票种，且由承运方裁定，不是我能定的。" },
      confidence: "recheck",
      fallback: {
        channel: { en: "Rail operator's official channel", zh: "铁路承运方官方渠道" },
        nextStep: { en: "Keep your ticket record until you've checked", zh: "在确认前保留好票据" },
      },
    },
  ],

  budget: [
    { role: "user", text: { en: "I need to bring the daily budget down to about ¥800. Same number of days.", zh: "每日预算要降到 ¥800 左右，天数不变。" } },
    {
      role: "assistant",
      text: { en: "That's about ¥400 a day off the current plan. I can take it out of food, transport, or paid attractions. Which would you rather protect?", zh: "比现在每天少约 ¥400。可以从餐饮、交通或收费景点里省。你更想保住哪一块？" },
      chips: [
        { en: "Protect the food", zh: "保住餐饮" },
        { en: "Protect the attractions", zh: "保住景点" },
        { en: "Spread it evenly", zh: "平均分摊" },
      ],
    },
    { role: "user", text: { en: "Protect the food, but a mid-range dinner is fine.", zh: "保住餐饮，但中档晚餐就行。" } },
    {
      role: "assistant",
      text: { en: "Three changes get you there: a mid-range set dinner instead of fine dining, metro instead of a taxi, and one of the two paid museums cut. Total saving is about ¥450 a day.", zh: "三处改动就能到位：精品晚餐换中档套餐、打车换地铁、两个收费展馆删一个。每天大约省 ¥450。" },
      confidence: "medium",
    },
    {
      role: "assistant",
      text: { en: "The metro swap adds 9 minutes of walking, which still sits inside your usual range. If it didn't, I'd have said so instead of quietly spending your steps.", zh: "换地铁会多走 9 分钟，仍在你常走的范围内。如果超了我会直接说，而不是悄悄花掉你的步数。" },
      recall: { label: { en: "From your profile", zh: "来自你的画像" }, value: { en: "Walking 7–9k steps per day", zh: "每天步行 7,000–9,000 步" }, memoryId: "m-walk" },
    },
    { role: "user", text: { en: "Which museum did you keep?", zh: "你留下了哪个展馆？" } },
    {
      role: "assistant",
      text: { en: "The one you rated higher after your last trip. That rating is in Copilot, and you can change or forget it there.", zh: "上次旅行后你评价更高的那个。这条评价在 Copilot 里，你可以在那里修改或忘记它。" },
      confidence: "high",
      recall: { label: { en: "From your saved places", zh: "来自你的收藏" }, value: { en: "Museums rated above average interest", zh: "博物馆兴趣高于平均" }, memoryId: "m-interest" },
    },
  ],
};

export const CHAT_NOTES = { recheck: RECHECK_NOTE };
