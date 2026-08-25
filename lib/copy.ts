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
    title: { en: "China, perfectly connected.", zh: "让中国旅行，一路走得通。" },
    lede: {
      en: "VisePanda maps the journeys that matter — so your trip flows effortlessly from city to city.",
      zh: "VisePanda 只规划真正重要的连接——让行程在城市之间自然流动。",
    },
    note: {
      en: "iOS and Android apps are in development. Early access members get the first invites.",
      zh: "iOS 与 Android 应用正在开发中，早期访问成员优先收到邀请。",
    },
  },
  form: {
    heading: { en: "Get early access", zh: "申请早期访问" },
    emailLabel: { en: "Email address", zh: "邮箱地址" },
    emailPlaceholder: { en: "you@example.com", zh: "you@example.com" },
    continue: { en: "Request access", zh: "申请访问" },
    questionsHeading: { en: "Three quick questions", zh: "三个小问题" },
    questionsLede: {
      en: "Optional, but it decides what we build first and when you get invited.",
      zh: "可跳过。它决定我们先做什么，以及你什么时候拿到邀请。",
    },
    submit: { en: "Join the waitlist", zh: "加入等待名单" },
    skip: { en: "Skip and join", zh: "跳过并加入" },
    back: { en: "Back", zh: "返回" },
    sending: { en: "Sending…", zh: "提交中…" },
    privacy: {
      en: "No spam. One email when your access opens — nothing else.",
      zh: "不发垃圾邮件。仅在开放访问时发一封通知邮件。",
    },
    successTitle: { en: "You're on the list.", zh: "已加入名单。" },
    successBody: {
      en: "We'll email you the moment your access opens. iOS and Android builds are in development, and early access members are invited first.",
      zh: "开放访问时我们会第一时间邮件通知你。iOS 与 Android 版本正在开发中，早期访问成员优先受邀。",
    },
    errors: {
      email: { en: "Enter a valid email address.", zh: "请输入有效的邮箱地址。" },
      rate: { en: "Too many attempts. Try again in a minute.", zh: "提交过于频繁，请一分钟后再试。" },
      server: { en: "Something went wrong. Please try again.", zh: "提交失败，请稍后重试。" },
    },
  },
  destinations: {
    eyebrow: { en: "Destination overview", zh: "目的地总览" },
    title: { en: "Twelve cities. One continuous plan.", zh: "十二座城市，一条连贯的行程。" },
    lede: {
      en: "Every leg is checked against real transport, opening hours and pacing before it reaches your itinerary.",
      zh: "每一段行程都会先对照真实的交通、开放时间与节奏做验证，再进入你的行程表。",
    },
  },
  simulator: {
    eyebrow: { en: "Execution-logic simulator", zh: "执行逻辑模拟器" },
    title: { en: "Make the plan work before you leave.", zh: "让行程在出发前走通。" },
    lede: {
      en: "Start from the plan you already have. VisePanda validates it, fixes what breaks, and turns it into something you can execute.",
      zh: "从你的想法出发，VisePanda 帮你验证、优化并生成可执行的旅行计划。",
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
    eyebrow: { en: "Mobile app availability", zh: "移动端进度" },
    title: { en: "Your trip, in your pocket.", zh: "把行程装进口袋。" },
    lede: {
      en: "The VisePanda app brings your Trip Canvas to life — day plans, real-time updates, and the next best step, wherever you are.",
      zh: "VisePanda App 让行程画布真正跑起来——每日计划、实时更新，以及此刻该做的下一步。",
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
    title: { en: "Be there for the first invites.", zh: "成为第一批拿到邀请的人。" },
    lede: {
      en: "Early access members shape what ships first — and get in before anyone else.",
      zh: "早期访问成员决定我们先做什么，也最早拿到使用权限。",
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
    sectionTitle: { en: "Try a VisePanda workspace that actually responds.", zh: "打开一个真正能操作的 VisePanda。" },
    sectionLede: { en: "Switch conversations, Canvas, Copilot and Explore to see how different travel jobs are handled.", zh: "切换聊天、Canvas、Copilot 与 Explore，查看不同旅行任务如何被理解和执行。" },
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
  eyebrow: { en: "Where VisePanda fits", zh: "VisePanda 的位置" },
  title: { en: "Planning is not the same as making a trip work.", zh: "能规划，不等于能把旅程走通。" },
  lede: {
    en: "OTAs, general AI and travel AI each solve part of the journey. VisePanda is built around the execution gaps international travellers meet inside China.",
    zh: "传统 OTA、通用 AI 与旅游 AI 各自解决旅程的一部分。VisePanda 专注国际旅行者在中国真正遇到的执行断点。",
  },
  dimension: { en: "Capability", zh: "能力" },
  scopeNote: { en: "Category-level positioning, not a ranking of named providers.", zh: "这是品类层面的定位对照，不是对具体品牌的排名。" },
  limitationTitle: { en: "Where VisePanda is not yet the strongest", zh: "VisePanda 目前并非最强的地方" },
  limitationBody: {
    en: "OTAs still lead in hotel and ticket inventory, live prices and instant transactions. VisePanda does not imitate that inventory: it prepares official-channel handoffs today and keeps a clear path for future channel integrations and partnerships.",
    zh: "传统 OTA 在酒店与票务库存、实时价格和即时交易上仍然更强。VisePanda 不伪造库存：当前先把官方渠道跳转做清楚，并保留后续渠道接入与合作扩展能力。",
  },
} as const;

export const COMPETITOR_COMPARISON = {
  columns: [
    { id: "ota", title: { en: "Traditional OTA", zh: "传统 OTA" }, note: { en: "Inventory and transactions", zh: "库存与交易" } },
    { id: "general", title: { en: "General AI", zh: "通用 AI" }, note: { en: "Flexible conversation", zh: "灵活对话" } },
    { id: "travel", title: { en: "Travel AI", zh: "旅游 AI" }, note: { en: "Inspiration and itineraries", zh: "灵感与行程" } },
    { id: "visepanda", title: { en: "VisePanda", zh: "VisePanda" }, note: { en: "China trip execution", zh: "中国旅行执行" } },
  ],
  rows: [
    {
      label: { en: "Primary strength", zh: "核心优势" },
      values: [
        { en: "Bookable supply and price comparison", zh: "可预订库存与价格比较" },
        { en: "Broad knowledge and open-ended answers", zh: "广泛知识与开放问答" },
        { en: "Destination discovery and itinerary creation", zh: "目的地发现与行程生成" },
        { en: "From conversation to an executable China trip", zh: "从对话到可执行的中国行程" },
      ],
    },
    {
      label: { en: "Trip structure", zh: "行程结构" },
      values: [
        { en: "Bookings live in separate order flows", zh: "订单分散在不同预订流程" },
        { en: "Usually delivered as text", zh: "通常以文本回答交付" },
        { en: "Visual itinerary builder", zh: "可视化行程生成" },
        { en: "Chatbot and Trip Canvas share one confirmed state", zh: "Chatbot 与 Trip Canvas 共用一份已确认状态" },
      ],
    },
    {
      label: { en: "China-local execution", zh: "中国本地执行" },
      values: [
        { en: "Strong for listed hotels, tickets and transport", zh: "已上架酒店、票务和交通较强" },
        { en: "Generic guidance; execution varies", zh: "提供通用建议，执行深度不稳定" },
        { en: "Planning depth varies by destination", zh: "不同目的地的执行深度不一" },
        { en: "Language, payment, transport, rules and recovery in one flow", zh: "语言、支付、交通、规则与恢复路径在同一流程" },
      ],
    },
    {
      label: { en: "Long-term traveller memory", zh: "长期旅行者画像" },
      values: [
        { en: "Account history and saved preferences", zh: "账户历史与已保存偏好" },
        { en: "Conversation memory can be inconsistent", zh: "对话记忆可能不稳定" },
        { en: "Trip-level preference filters", zh: "单次行程偏好筛选" },
        { en: "Source-visible memory the traveller can confirm, edit or forget", zh: "可查看来源、可确认、修改或忘记的长期画像" },
      ],
    },
    {
      label: { en: "Sources and rechecks", zh: "来源与复核" },
      values: [
        { en: "Strongest inside owned inventory", zh: "自有库存范围内最强" },
        { en: "Sources are not consistently exposed", zh: "来源并非始终可见" },
        { en: "Depends on the provider and destination", zh: "取决于产品和目的地" },
        { en: "Operational claims carry a source, confidence and recheck time", zh: "执行结论带来源、置信度与复核时间" },
      ],
    },
    {
      label: { en: "Inventory and transactions", zh: "库存与交易" },
      values: [
        { en: "Strongest — live supply and checkout", zh: "最强——实时库存与交易闭环" },
        { en: "No owned travel inventory", zh: "没有自有旅行库存" },
        { en: "Varies with booking partners", zh: "取决于预订合作渠道" },
        { en: "Currently lighter than OTAs; official handoffs and integration-ready channels", zh: "目前弱于 OTA；提供官方跳转并支持后续渠道接入" },
      ],
    },
    {
      label: { en: "When the plan breaks", zh: "计划出问题时" },
      values: [
        { en: "Customer service focuses on the booking", zh: "客服主要处理订单问题" },
        { en: "Can suggest options without changing a trip state", zh: "可以给建议，但不一定改写行程状态" },
        { en: "May regenerate the itinerary", zh: "可能重新生成行程" },
        { en: "Today recovery paths propose a Canvas diff before anything changes", zh: "Today 恢复路径先生成 Canvas Diff，再由用户确认" },
      ],
    },
  ],
} as const;
