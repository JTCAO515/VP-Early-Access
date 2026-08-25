export type Lang = "en" | "zh";
type Localized = Record<Lang, string>;

export const ACCESS_WINDOW: Record<Lang, string> = {
  en: "Early access opens this fall.",
  zh: "早期访问将于今年秋季开放。",
};

export const CITIES = [
  "Beijing",
  "Xi'an",
  "Chengdu",
  "Shanghai",
  "Guilin",
  "Hong Kong",
  "Macao",
  "Taipei",
] as const;

export const MAP_CITIES = [
  { id: "beijing", lat: 39.9042, lon: 116.4074, name: { en: "Beijing", zh: "北京" }, place: { en: "The Great Wall (Mutianyu)", zh: "慕田峪长城" } }, { id: "tianjin", lat: 39.3434, lon: 117.3616, name: { en: "Tianjin", zh: "天津" }, place: { en: "Ancient Culture Street", zh: "古文化街" } }, { id: "shijiazhuang", lat: 38.0428, lon: 114.5149, name: { en: "Shijiazhuang", zh: "石家庄" }, place: { en: "Zhengding Ancient City", zh: "正定古城" } }, { id: "taiyuan", lat: 37.8706, lon: 112.5489, name: { en: "Taiyuan", zh: "太原" }, place: { en: "Jinci Temple", zh: "晋祠" } }, { id: "datong", lat: 40.0768, lon: 113.3001, name: { en: "Datong", zh: "大同" }, place: { en: "Yungang Grottoes", zh: "云冈石窟" } }, { id: "hohhot", lat: 40.8426, lon: 111.7492, name: { en: "Hohhot", zh: "呼和浩特" }, place: { en: "Dazhao Temple", zh: "大召寺" } },
  { id: "shenyang", lat: 41.8057, lon: 123.4315, name: { en: "Shenyang", zh: "沈阳" }, place: { en: "Mukden Palace", zh: "沈阳故宫" } }, { id: "changchun", lat: 43.8171, lon: 125.3235, name: { en: "Changchun", zh: "长春" }, place: { en: "Puppet Emperor's Palace", zh: "伪满皇宫博物院" } }, { id: "harbin", lat: 45.8038, lon: 126.535, name: { en: "Harbin", zh: "哈尔滨" }, place: { en: "Saint Sophia Cathedral", zh: "圣索菲亚教堂" } },
  { id: "shanghai", lat: 31.2304, lon: 121.4737, name: { en: "Shanghai", zh: "上海" }, place: { en: "The Bund", zh: "外滩" } }, { id: "suzhou", lat: 31.2989, lon: 120.5853, name: { en: "Suzhou", zh: "苏州" }, place: { en: "Humble Administrator's Garden", zh: "拙政园" } }, { id: "nanjing", lat: 32.0603, lon: 118.7969, name: { en: "Nanjing", zh: "南京" }, place: { en: "Sun Yat-sen Mausoleum", zh: "中山陵" } }, { id: "hangzhou", lat: 30.2741, lon: 120.1551, name: { en: "Hangzhou", zh: "杭州" }, place: { en: "West Lake", zh: "西湖" } }, { id: "hefei", lat: 31.8206, lon: 117.2272, name: { en: "Hefei", zh: "合肥" }, place: { en: "Lord Bao Park", zh: "包公园" } }, { id: "huangshan", lat: 29.7147, lon: 118.3376, name: { en: "Huangshan", zh: "黄山" }, place: { en: "Yellow Mountain", zh: "黄山风景区" } }, { id: "fuzhou", lat: 26.0745, lon: 119.2965, name: { en: "Fuzhou", zh: "福州" }, place: { en: "Three Lanes and Seven Alleys", zh: "三坊七巷" } }, { id: "xiamen", lat: 24.4798, lon: 118.0894, name: { en: "Xiamen", zh: "厦门" }, place: { en: "Gulangyu Island", zh: "鼓浪屿" } }, { id: "nanchang", lat: 28.682, lon: 115.8579, name: { en: "Nanchang", zh: "南昌" }, place: { en: "Tengwang Pavilion", zh: "滕王阁" } }, { id: "jingdezhen", lat: 29.2688, lon: 117.1784, name: { en: "Jingdezhen", zh: "景德镇" }, place: { en: "Ancient Kiln Folk Customs Expo Area", zh: "古窑民俗博览区" } }, { id: "jinan", lat: 36.6512, lon: 117.1201, name: { en: "Jinan", zh: "济南" }, place: { en: "Baotu Spring", zh: "趵突泉" } }, { id: "qingdao", lat: 36.0671, lon: 120.3826, name: { en: "Qingdao", zh: "青岛" }, place: { en: "Zhanqiao Pier", zh: "栈桥" } }, { id: "zhengzhou", lat: 34.7466, lon: 113.6254, name: { en: "Zhengzhou", zh: "郑州" }, place: { en: "Yellow River Scenic Area", zh: "黄河风景名胜区" } }, { id: "luoyang", lat: 34.6197, lon: 112.454, name: { en: "Luoyang", zh: "洛阳" }, place: { en: "Longmen Grottoes", zh: "龙门石窟" } }, { id: "wuhan", lat: 30.5928, lon: 114.3055, name: { en: "Wuhan", zh: "武汉" }, place: { en: "Yellow Crane Tower", zh: "黄鹤楼" } }, { id: "changsha", lat: 28.2282, lon: 112.9388, name: { en: "Changsha", zh: "长沙" }, place: { en: "Yuelu Mountain", zh: "岳麓山" } },
  { id: "guangzhou", lat: 23.1291, lon: 113.2644, name: { en: "Guangzhou", zh: "广州" }, place: { en: "Canton Tower", zh: "广州塔" } },
  { id: "shenzhen", lat: 22.5431, lon: 114.0579, name: { en: "Shenzhen", zh: "深圳" }, place: { en: "Window of the World", zh: "世界之窗" } },
  { id: "chengdu", lat: 30.5728, lon: 104.0668, name: { en: "Chengdu", zh: "成都" }, place: { en: "Giant Panda Breeding Base", zh: "大熊猫繁育研究基地" } },
  { id: "jiuzhaigou", lat: 33.26, lon: 103.918, name: { en: "Jiuzhaigou", zh: "九寨沟" }, place: { en: "Five Flower Lake", zh: "五花海" } },
  { id: "chongqing", lat: 29.563, lon: 106.5516, name: { en: "Chongqing", zh: "重庆" }, place: { en: "Hongya Cave", zh: "洪崖洞" } },
  { id: "kunming", lat: 25.0389, lon: 102.7183, name: { en: "Kunming", zh: "昆明" }, place: { en: "Stone Forest", zh: "石林" } },
  { id: "dali", lat: 25.6065, lon: 100.2676, name: { en: "Dali", zh: "大理" }, place: { en: "Three Pagodas", zh: "崇圣寺三塔" } },
  { id: "lijiang", lat: 26.8721, lon: 100.233, name: { en: "Lijiang", zh: "丽江" }, place: { en: "Old Town of Lijiang", zh: "丽江古城" } },
  { id: "zhangjiajie", lat: 29.1274, lon: 110.4791, name: { en: "Zhangjiajie", zh: "张家界" }, place: { en: "Zhangjiajie National Forest Park", zh: "张家界国家森林公园" } },
  { id: "guilin", lat: 25.2736, lon: 110.29, name: { en: "Guilin", zh: "桂林" }, place: { en: "Li River", zh: "漓江" } },
  { id: "hong-kong", lat: 22.3193, lon: 114.1694, name: { en: "Hong Kong", zh: "香港" }, place: { en: "Victoria Peak", zh: "太平山顶" } },
  { id: "macao", lat: 22.1987, lon: 113.5439, name: { en: "Macao", zh: "澳门" }, place: { en: "Ruins of St. Paul's", zh: "大三巴牌坊" } },
  { id: "taipei", lat: 25.033, lon: 121.5654, name: { en: "Taipei", zh: "台北" }, place: { en: "Taipei 101", zh: "台北 101" } },
  { id: "haikou", lat: 20.044, lon: 110.1999, name: { en: "Haikou", zh: "海口" }, place: { en: "Qilou Old Street", zh: "骑楼老街" } }, { id: "sanya", lat: 18.2528, lon: 109.5119, name: { en: "Sanya", zh: "三亚" }, place: { en: "Tianya Haijiao", zh: "天涯海角" } }, { id: "nanning", lat: 22.817, lon: 108.3665, name: { en: "Nanning", zh: "南宁" }, place: { en: "Qingxiu Mountain", zh: "青秀山" } }, { id: "guiyang", lat: 26.647, lon: 106.6302, name: { en: "Guiyang", zh: "贵阳" }, place: { en: "Qingyan Ancient Town", zh: "青岩古镇" } }, { id: "xian", lat: 34.3416, lon: 108.9398, name: { en: "Xi'an", zh: "西安" }, place: { en: "Terracotta Warriors", zh: "兵马俑" } }, { id: "lanzhou", lat: 36.0611, lon: 103.8343, name: { en: "Lanzhou", zh: "兰州" }, place: { en: "Yellow River Mother", zh: "黄河母亲" } }, { id: "dunhuang", lat: 40.1421, lon: 94.6619, name: { en: "Dunhuang", zh: "敦煌" }, place: { en: "Mogao Caves", zh: "莫高窟" } }, { id: "xining", lat: 36.6171, lon: 101.7782, name: { en: "Xining", zh: "西宁" }, place: { en: "Kumbum Monastery", zh: "塔尔寺" } }, { id: "yinchuan", lat: 38.4872, lon: 106.2309, name: { en: "Yinchuan", zh: "银川" }, place: { en: "Western Xia Tombs", zh: "西夏王陵" } }, { id: "kashgar", lat: 39.4704, lon: 75.9898, name: { en: "Kashgar", zh: "喀什" }, place: { en: "Id Kah Mosque", zh: "艾提尕尔清真寺" } }, { id: "urumqi", lat: 43.8256, lon: 87.6168, name: { en: "Urumqi", zh: "乌鲁木齐" }, place: { en: "Grand Bazaar", zh: "国际大巴扎" } }, { id: "lhasa", lat: 29.652, lon: 91.1721, name: { en: "Lhasa", zh: "拉萨" }, place: { en: "Potala Palace", zh: "布达拉宫" } },
] as const;

/** Normalised 0-1 coordinates for the city constellation, x right / y down. */
export const CITY_POINTS: Record<string, { x: number; y: number }> = {
  Beijing: { x: 0.72, y: 0.24 },
  "Xi'an": { x: 0.55, y: 0.45 },
  Chengdu: { x: 0.38, y: 0.56 },
  Shanghai: { x: 0.82, y: 0.5 },
  Guilin: { x: 0.52, y: 0.72 },
  "Hong Kong": { x: 0.68, y: 0.83 },
  Macao: { x: 0.61, y: 0.87 },
  Taipei: { x: 0.86, y: 0.7 },
};

/** Arcs drawn between cities, as index pairs into CITIES. */
export const CITY_LINKS: Array<[string, string]> = [
  ["Beijing", "Xi'an"],
  ["Beijing", "Shanghai"],
  ["Xi'an", "Chengdu"],
  ["Xi'an", "Shanghai"],
  ["Chengdu", "Guilin"],
  ["Shanghai", "Taipei"],
  ["Guilin", "Hong Kong"],
  ["Hong Kong", "Macao"],
  ["Hong Kong", "Taipei"],
];

export type Question = {
  id: "timing" | "source" | "feature";
  label: Record<Lang, string>;
  options: Array<{ value: string; label: Record<Lang, string> }>;
};

export const QUESTIONS: Question[] = [
  {
    id: "timing",
    label: {
      en: "When are you planning to travel to China?",
      zh: "你计划什么时候来中国旅行？",
    },
    options: [
      { value: "within-3-months", label: { en: "Within 3 months", zh: "3 个月内" } },
      { value: "3-6-months", label: { en: "3–6 months", zh: "3–6 个月" } },
      { value: "6-12-months", label: { en: "6–12 months", zh: "6–12 个月" } },
      { value: "just-exploring", label: { en: "Just exploring", zh: "还在看" } },
    ],
  },
  {
    id: "source",
    label: {
      en: "Where did you hear about VisePanda?",
      zh: "你从哪里知道 VisePanda？",
    },
    options: [
      { value: "xiaohongshu", label: { en: "Xiaohongshu", zh: "小红书" } },
      { value: "wechat", label: { en: "WeChat", zh: "微信" } },
      { value: "x-twitter", label: { en: "X (Twitter)", zh: "X (Twitter)" } },
      { value: "youtube-instagram", label: { en: "YouTube · Instagram", zh: "YouTube · Instagram" } },
      { value: "friend", label: { en: "A friend", zh: "朋友推荐" } },
      { value: "search-other", label: { en: "Search · Other", zh: "搜索 · 其他" } },
    ],
  },
  {
    id: "feature",
    label: {
      en: "Which part should we ship to you first?",
      zh: "最想先用哪个功能？",
    },
    options: [
      { value: "route-feasibility", label: { en: "Route feasibility checks", zh: "路线可行性验证" } },
      { value: "transport", label: { en: "Transport & rail connections", zh: "交通与高铁衔接" } },
      { value: "bookings", label: { en: "Bookings & ticket reminders", zh: "预订与门票提醒" } },
      { value: "daily-checklist", label: { en: "Daily execution checklist", zh: "每日执行清单" } },
      { value: "live-updates", label: { en: "Live on-trip updates", zh: "行程中实时更新" } },
    ],
  },
];

export const PLAN_ROWS = [
  { day: 1, plan: "Beijing – Arrive, Forbidden City, Wangfujing", next: { en: "Book Forbidden City", zh: "预订故宫门票" } },
  { day: 2, plan: "Beijing – Great Wall (Mutianyu), Summer Palace", next: { en: "Reserve round-trip transfer", zh: "预订往返接送" } },
  { day: 3, plan: "Xi'an – Terracotta Warriors, City Wall", next: { en: "Book high-speed train", zh: "预订高铁车票" } },
  { day: 4, plan: "Chengdu – Panda Base, Jinli Ancient Street", next: { en: "Reserve Panda Base slot", zh: "预约熊猫基地时段" } },
  { day: 5, plan: "Guilin – Li River Cruise", next: { en: "Choose cruise option", zh: "选择游船方案" } },
  { day: 6, plan: "Shanghai – The Bund, Yu Garden", next: { en: "Book Yu Garden ticket", zh: "预订豫园门票" } },
  { day: 7, plan: "Hong Kong – Victoria Peak, Tsim Sha Tsui", next: { en: "Check Peak tram time", zh: "确认山顶缆车时间" } },
];

export type CheckStatus = "good" | "adjust" | "attention";

export const CHECKS: Array<{ id: string; label: Record<Lang, string>; status: CheckStatus }> = [
  { id: "route", label: { en: "Route Feasibility", zh: "路线可行性" }, status: "good" },
  { id: "transport", label: { en: "Transport Connections", zh: "交通衔接" }, status: "good" },
  { id: "time", label: { en: "Time Allocation", zh: "时间分配" }, status: "adjust" },
  { id: "hours", label: { en: "Opening Hours", zh: "开放时间" }, status: "good" },
  { id: "bookings", label: { en: "Bookings & Tickets", zh: "预订与门票" }, status: "attention" },
  { id: "pacing", label: { en: "Pacing & Logistics", zh: "节奏与动线" }, status: "good" },
  { id: "risks", label: { en: "Risks & Contingencies", zh: "风险与备选" }, status: "good" },
];

export const STATUS_LABEL: Record<CheckStatus, Record<Lang, string>> = {
  good: { en: "Good", zh: "良好" },
  adjust: { en: "Adjust", zh: "需调整" },
  attention: { en: "Attention", zh: "需关注" },
};

export const DAY3_TIMELINE = [
  { time: "08:30", title: { en: "Hotel to Xi'an North Railway Station", zh: "酒店前往西安北站" }, meta: { en: "Transport · 40 min", zh: "交通 · 40 分钟" } },
  { time: "09:27", title: { en: "Xi'an North → Xi'an", zh: "西安北 → 西安" }, meta: { en: "High-speed Train G192 · 34 min", zh: "高铁 G192 · 34 分钟" } },
  { time: "10:05", title: { en: "Terracotta Warriors", zh: "兵马俑" }, meta: { en: "2.5–3 hrs", zh: "2.5–3 小时" } },
  { time: "13:00", title: { en: "Lunch Near the Museum", zh: "博物馆附近午餐" }, meta: { en: "1 hr", zh: "1 小时" } },
  { time: "14:30", title: { en: "Xi'an City Wall", zh: "西安城墙" }, meta: { en: "1.5–2 hrs", zh: "1.5–2 小时" } },
];

export const COPY = {
  brand: "VisePanda",
  nav: {
    badge: { en: "Early Access", zh: "早期访问" },
    cta: { en: "Join early access", zh: "申请早期访问" },
    langToggle: { en: "中文", zh: "EN" },
  },
  hero: {
    title: { en: "Plan China without the loose ends.", zh: "中国旅行，别卡在衔接上。" },
    lede: {
      en: "VisePanda keeps your route, daily plan and practical details together, so you know what comes next in every city.",
      zh: "VisePanda 把路线、每天的安排和沿途要处理的事放在一起。到了下一座城市，你仍然知道接下来该做什么。",
    },
    note: {
      en: "We're building VisePanda for iOS and Android. Early Access members will be invited first.",
      zh: "VisePanda 的 iOS 与 Android 版本正在开发，早期访问用户会优先收到邀请。",
    },
  },
  form: {
    heading: { en: "Get early access", zh: "申请早期访问" },
    emailLabel: { en: "Email address", zh: "邮箱地址" },
    emailPlaceholder: { en: "you@example.com", zh: "you@example.com" },
    continue: { en: "Request access", zh: "申请访问" },
    questionsHeading: { en: "Three quick questions", zh: "三个小问题" },
    questionsLede: {
      en: "You can skip these. Your answers help us decide what to work on first and who to invite.",
      zh: "可以跳过。你的回答会帮助我们决定先完善哪些功能，以及邀请哪些用户。",
    },
    submit: { en: "Join the waitlist", zh: "加入等待名单" },
    skip: { en: "Skip and join", zh: "跳过并加入" },
    back: { en: "Back", zh: "返回" },
    sending: { en: "Sending…", zh: "提交中…" },
    privacy: {
      en: "No spam. We'll send one email when your access is ready.",
      zh: "不发垃圾邮件。开放访问时，我们只发一封通知邮件。",
    },
    successTitle: { en: "You're on the list.", zh: "已加入名单。" },
    successBody: {
      en: "We'll email you when your access is ready. The iOS and Android apps are still in development, and Early Access members will be invited first.",
      zh: "开放访问时，我们会发邮件通知你。iOS 与 Android 版本仍在开发，早期访问用户会优先收到邀请。",
    },
    errors: {
      email: { en: "Enter a valid email address.", zh: "请输入有效的邮箱地址。" },
      rate: { en: "Too many attempts. Try again in a minute.", zh: "提交过于频繁，请一分钟后再试。" },
      server: { en: "Something went wrong. Please try again.", zh: "提交失败，请稍后重试。" },
    },
  },
  destinations: {
    eyebrow: { en: "Across China", zh: "目的地" },
    title: { en: "Keep 50 cities in one plan.", zh: "50 座城市，放进同一份行程。" },
    lede: {
      en: "Each stop is checked for transport, opening hours and a workable pace before it reaches your itinerary.",
      zh: "地点加进行程前，会先检查交通、开放时间和当天的节奏是否合适。",
    },
  },
  simulator: {
    eyebrow: { en: "Check the plan", zh: "行程检查" },
    title: { en: "Check the plan before you leave.", zh: "出发前，先把行程查一遍。" },
    lede: {
      en: "Bring the plan you already have. VisePanda points out conflicts and shows the proposed changes in Trip Canvas for you to review.",
      zh: "把现有行程交给 VisePanda。它会找出冲突，再把修改建议放进 Trip Canvas，由你确认。",
    },
    panelPlan: { en: "Your Existing Plan", zh: "你现有的计划" },
    panelChecks: { en: "Preparation Checks", zh: "出行前检查" },
    panelCanvas: { en: "Trip Canvas / Next Action", zh: "行程画布 / 下一步" },
    colDay: { en: "Day", zh: "第几天" },
    colPlan: { en: "Plan", zh: "计划" },
    colNext: { en: "Next Action", zh: "下一步" },
    addRow: { en: "Add destination / activity", zh: "添加目的地 / 活动" },
    footer: { en: "All checks complete. Your trip is ready to go.", zh: "检查已全部完成，行程可以出发。" },
  },
  mobile: {
    eyebrow: { en: "VisePanda on mobile", zh: "移动端" },
    title: { en: "Your day plan, on your phone.", zh: "每天的行程，手机上随时看。" },
    lede: {
      en: "While you travel, the app keeps today's plan, updates as they happen and the next step close at hand.",
      zh: "旅行途中，今天怎么走、行程有什么新变化、下一步做什么，都能在手机上及时看到。",
    },
    ios: { en: "iOS App", zh: "iOS 应用" },
    android: { en: "Android App", zh: "Android 应用" },
    status: { en: "In development", zh: "正在开发中" },
    tripCanvas: { en: "Trip Canvas", zh: "行程画布" },
    today: { en: "Today", zh: "今天" },
    day3: { en: "Day 3", zh: "第 3 天" },
    date: { en: "May 24, Sat", zh: "5 月 24 日 周六" },
    dateLong: { en: "Sat, May 24", zh: "周六，5 月 24 日" },
    city: { en: "Xi'an", zh: "西安" },
    nextStep: { en: "Next Step", zh: "下一步" },
    whatsAhead: { en: "What's Ahead", zh: "接下来" },
  },
  closing: {
    title: { en: "Get the first Early Access invite.", zh: "第一批邀请开放时，我们会通知你。" },
    lede: {
      en: "Join the list and we'll email you when invitations open. Your answers also help us decide what to work on first.",
      zh: "留下邮箱。邀请开放时我们会通知你，你填写的需求也会影响我们先完善哪些功能。",
    },
  },
  footer: {
    rights: { en: "All rights reserved.", zh: "保留所有权利。" },
    contact: { en: "Contact", zh: "联系我们" },
    mainSite: { en: "VisePanda", zh: "访问 VisePanda" },
  },
} as const;

export const PRODUCT_DEMO = {
  address: "www.go2china.space/visepanda",
  nav: {
    ask: { en: "Ask VisePanda", zh: "Ask VisePanda" },
    copilot: { en: "Copilot", zh: "Copilot" },
    explore: { en: "Explore", zh: "Explore" },
    user: { en: "User", zh: "用户" },
  } satisfies Record<string, Localized>,
  ui: {
    sectionTitle: { en: "Open the demo and click around.", zh: "打开 Demo，自己点一点。" },
    sectionLede: { en: "Try a chat, review a Canvas change, look up a place or open a tool. Every screen is a prepared demo state.", zh: "换一段对话、确认一次 Canvas 改动、查一个地点，或者打开工具。里面都是准备好的演示状态。" },
    chats: { en: "Chats", zh: "对话" },
  } satisfies Record<string, Localized>,
  userProfile: {
    id: "VP-US-1048",
    name: "Michael Turner",
    email: "michael.turner@example.com",
    location: "Seattle, United States",
    language: "English",
    currency: "USD",
    timeZone: "Pacific Time",
  },
} as const;

export const COMPARISON_COPY = {
  eyebrow: { en: "How the categories differ", zh: "四类产品怎么分工" },
  title: { en: "Each travel product is good at a different part of the trip.", zh: "四类旅行产品，各有长处。" },
  lede: {
    en: "OTAs are strong at bookings. General AI handles open questions. Travel AI is built for itinerary planning. VisePanda focuses on the practical gaps international travellers run into inside China.",
    zh: "传统 OTA 擅长预订，通用 AI 擅长开放问答，旅游 AI 更专注行程规划。VisePanda 处理的是国际旅行者到了中国以后，经常卡住的那些具体问题。",
  },
  dimension: { en: "Capability", zh: "能力" },
  scopeNote: { en: "This compares product categories, not specific brands.", zh: "这里只比较产品类型，不评价具体品牌。" },
  limitationTitle: { en: "Where OTAs are still stronger", zh: "OTA 仍然更强的地方" },
  limitationBody: {
    en: "OTAs still have far more hotel and ticket inventory, live prices and instant checkout. VisePanda does not try to copy that supply. Today it sends travellers to official channels. The product is also designed to support future channel integrations and partnerships.",
    zh: "传统 OTA 的酒店和票务库存更多，也能提供实时价格和即时交易。VisePanda 目前不做这类库存，而是把官方渠道入口整理清楚。产品也为后续渠道接入和合作留好了接口。",
  },
} as const;

export const COMPETITOR_COMPARISON = {
  columns: [
    { id: "ota", title: { en: "Traditional OTA", zh: "传统 OTA" }, note: { en: "Inventory and transactions", zh: "库存与交易" } },
    { id: "general", title: { en: "General AI", zh: "通用 AI" }, note: { en: "Open questions", zh: "开放问答" } },
    { id: "travel", title: { en: "Travel AI", zh: "旅游 AI" }, note: { en: "Discovery and planning", zh: "发现与规划" } },
    { id: "visepanda", title: { en: "VisePanda", zh: "VisePanda" }, note: { en: "Travel inside China", zh: "中国境内旅行" } },
  ],
  rows: [
    {
      label: { en: "Primary strength", zh: "核心优势" },
      values: [
        { en: "Bookable supply and price comparison", zh: "可预订库存与价格比较" },
        { en: "Broad knowledge and open-ended answers", zh: "广泛知识与开放问答" },
        { en: "Destination discovery and itinerary creation", zh: "目的地发现与行程生成" },
        { en: "Turns a conversation into a trip you can follow", zh: "把对话变成一份能照着走的行程" },
      ],
    },
    {
      label: { en: "Trip structure", zh: "行程结构" },
      values: [
        { en: "Bookings sit in separate order flows", zh: "不同预订各走一套订单流程" },
        { en: "Usually gives a text answer", zh: "通常给出一段文本回答" },
        { en: "Builds a visual itinerary", zh: "生成可视化行程" },
        { en: "Chatbot and Trip Canvas share one confirmed state", zh: "Chatbot 与 Trip Canvas 共用一份已确认状态" },
      ],
    },
    {
      label: { en: "China-local execution", zh: "中国本地执行" },
      values: [
        { en: "Strong for hotels, tickets and transport in its inventory", zh: "擅长处理库存内的酒店、票务和交通" },
        { en: "Gives general advice, but execution varies", zh: "能给通用建议，具体执行能力不稳定" },
        { en: "Depth depends on the destination", zh: "不同目的地的支持深度不同" },
        { en: "Keeps language, payment, transport, rules and recovery in one trip", zh: "把语言、支付、交通、规则和应变都放在同一份行程里" },
      ],
    },
    {
      label: { en: "Long-term traveller memory", zh: "长期旅行者画像" },
      values: [
        { en: "Travel history and saved preferences", zh: "旅行历史和已保存偏好" },
        { en: "Conversation memory can be inconsistent", zh: "对话记忆可能不稳定" },
        { en: "Preference filters for the current trip", zh: "围绕当前行程筛选偏好" },
        { en: "Shows where each memory came from, then lets you confirm, edit or forget it", zh: "每条记忆都能查看来源，也能确认、修改或忘记" },
      ],
    },
    {
      label: { en: "Sources and rechecks", zh: "来源与复核" },
      values: [
        { en: "Strong inside its own inventory", zh: "自有库存内的信息最完整" },
        { en: "Does not always show its sources", zh: "不一定展示信息来源" },
        { en: "Depends on the product and destination", zh: "取决于具体产品和目的地" },
        { en: "Shows a source, confidence and recheck time for practical claims", zh: "涉及实际执行的信息，会标出来源、置信度和复核时间" },
      ],
    },
    {
      label: { en: "Inventory and transactions", zh: "库存与交易" },
      values: [
        { en: "The strongest option for live inventory and checkout", zh: "实时库存和交易能力最强" },
        { en: "No owned travel inventory", zh: "没有自有旅行库存" },
        { en: "Depends on its booking partners", zh: "取决于接入的预订渠道" },
        { en: "Has less inventory than an OTA. Sends users to official channels and can add channel integrations later", zh: "库存少于 OTA。目前提供官方渠道入口，也支持后续接入更多渠道" },
      ],
    },
    {
      label: { en: "When the plan breaks", zh: "计划出问题时" },
      values: [
        { en: "Customer service usually focuses on the booking", zh: "客服通常围绕订单处理问题" },
        { en: "Can suggest options, but may not update the trip itself", zh: "可以给建议，但不一定会更新行程" },
        { en: "May rebuild the itinerary", zh: "可能重新生成整份行程" },
        { en: "Today suggests a recovery plan, then shows a Canvas diff for approval", zh: "Today 先给出应变方案，再把 Canvas 改动交给用户确认" },
      ],
    },
  ],
} as const;
