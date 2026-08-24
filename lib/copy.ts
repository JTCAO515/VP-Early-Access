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
  { id: "beijing", lat: 39.9042, lon: 116.4074, name: { en: "Beijing", zh: "北京" }, place: { en: "The Great Wall (Mutianyu)", zh: "慕田峪长城" } }, { id: "tianjin", lat: 39.3434, lon: 117.3616, name: { en: "Tianjin", zh: "天津" }, place: { en: "Ancient Culture Street", zh: "古文化街" } }, { id: "shijiazhuang", lat: 38.0428, lon: 114.5149, name: { en: "Shijiazhuang", zh: "石家庄" }, place: { en: "Zhengding Ancient City", zh: "正定古城" } }, { id: "taiyuan", lat: 37.8706, lon: 112.5489, name: { en: "Taiyuan", zh: "太原" }, place: { en: "Jinci Temple", zh: "晋祠" } }, { id: "hohhot", lat: 40.8426, lon: 111.7492, name: { en: "Hohhot", zh: "呼和浩特" }, place: { en: "Dazhao Temple", zh: "大召寺" } },
  { id: "shenyang", lat: 41.8057, lon: 123.4315, name: { en: "Shenyang", zh: "沈阳" }, place: { en: "Mukden Palace", zh: "沈阳故宫" } }, { id: "changchun", lat: 43.8171, lon: 125.3235, name: { en: "Changchun", zh: "长春" }, place: { en: "Puppet Emperor's Palace", zh: "伪满皇宫博物院" } }, { id: "harbin", lat: 45.8038, lon: 126.535, name: { en: "Harbin", zh: "哈尔滨" }, place: { en: "Saint Sophia Cathedral", zh: "圣索菲亚教堂" } },
  { id: "shanghai", lat: 31.2304, lon: 121.4737, name: { en: "Shanghai", zh: "上海" }, place: { en: "The Bund", zh: "外滩" } }, { id: "nanjing", lat: 32.0603, lon: 118.7969, name: { en: "Nanjing", zh: "南京" }, place: { en: "Sun Yat-sen Mausoleum", zh: "中山陵" } }, { id: "hangzhou", lat: 30.2741, lon: 120.1551, name: { en: "Hangzhou", zh: "杭州" }, place: { en: "West Lake", zh: "西湖" } }, { id: "hefei", lat: 31.8206, lon: 117.2272, name: { en: "Hefei", zh: "合肥" }, place: { en: "Lord Bao Park", zh: "包公园" } }, { id: "fuzhou", lat: 26.0745, lon: 119.2965, name: { en: "Fuzhou", zh: "福州" }, place: { en: "Three Lanes and Seven Alleys", zh: "三坊七巷" } }, { id: "nanchang", lat: 28.682, lon: 115.8579, name: { en: "Nanchang", zh: "南昌" }, place: { en: "Tengwang Pavilion", zh: "滕王阁" } }, { id: "jinan", lat: 36.6512, lon: 117.1201, name: { en: "Jinan", zh: "济南" }, place: { en: "Baotu Spring", zh: "趵突泉" } }, { id: "zhengzhou", lat: 34.7466, lon: 113.6254, name: { en: "Zhengzhou", zh: "郑州" }, place: { en: "Yellow River Scenic Area", zh: "黄河风景名胜区" } }, { id: "wuhan", lat: 30.5928, lon: 114.3055, name: { en: "Wuhan", zh: "武汉" }, place: { en: "Yellow Crane Tower", zh: "黄鹤楼" } }, { id: "changsha", lat: 28.2282, lon: 112.9388, name: { en: "Changsha", zh: "长沙" }, place: { en: "Yuelu Mountain", zh: "岳麓山" } },
  { id: "guangzhou", lat: 23.1291, lon: 113.2644, name: { en: "Guangzhou", zh: "广州" }, place: { en: "Canton Tower", zh: "广州塔" } },
  { id: "shenzhen", lat: 22.5431, lon: 114.0579, name: { en: "Shenzhen", zh: "深圳" }, place: { en: "Window of the World", zh: "世界之窗" } },
  { id: "chengdu", lat: 30.5728, lon: 104.0668, name: { en: "Chengdu", zh: "成都" }, place: { en: "Giant Panda Breeding Base", zh: "大熊猫繁育研究基地" } },
  { id: "chongqing", lat: 29.563, lon: 106.5516, name: { en: "Chongqing", zh: "重庆" }, place: { en: "Hongya Cave", zh: "洪崖洞" } },
  { id: "kunming", lat: 25.0389, lon: 102.7183, name: { en: "Kunming", zh: "昆明" }, place: { en: "Stone Forest", zh: "石林" } },
  { id: "zhangjiajie", lat: 29.1274, lon: 110.4791, name: { en: "Zhangjiajie", zh: "张家界" }, place: { en: "Zhangjiajie National Forest Park", zh: "张家界国家森林公园" } },
  { id: "guilin", lat: 25.2736, lon: 110.29, name: { en: "Guilin", zh: "桂林" }, place: { en: "Li River", zh: "漓江" } },
  { id: "hong-kong", lat: 22.3193, lon: 114.1694, name: { en: "Hong Kong", zh: "香港" }, place: { en: "Victoria Peak", zh: "太平山顶" } },
  { id: "macao", lat: 22.1987, lon: 113.5439, name: { en: "Macao", zh: "澳门" }, place: { en: "Ruins of St. Paul's", zh: "大三巴牌坊" } },
  { id: "taipei", lat: 25.033, lon: 121.5654, name: { en: "Taipei", zh: "台北" }, place: { en: "Taipei 101", zh: "台北 101" } },
  { id: "haikou", lat: 20.044, lon: 110.1999, name: { en: "Haikou", zh: "海口" }, place: { en: "Qilou Old Street", zh: "骑楼老街" } }, { id: "nanning", lat: 22.817, lon: 108.3665, name: { en: "Nanning", zh: "南宁" }, place: { en: "Qingxiu Mountain", zh: "青秀山" } }, { id: "guiyang", lat: 26.647, lon: 106.6302, name: { en: "Guiyang", zh: "贵阳" }, place: { en: "Qingyan Ancient Town", zh: "青岩古镇" } }, { id: "xian", lat: 34.3416, lon: 108.9398, name: { en: "Xi'an", zh: "西安" }, place: { en: "Terracotta Warriors", zh: "兵马俑" } }, { id: "lanzhou", lat: 36.0611, lon: 103.8343, name: { en: "Lanzhou", zh: "兰州" }, place: { en: "Yellow River Mother", zh: "黄河母亲" } }, { id: "xining", lat: 36.6171, lon: 101.7782, name: { en: "Xining", zh: "西宁" }, place: { en: "Kumbum Monastery", zh: "塔尔寺" } }, { id: "yinchuan", lat: 38.4872, lon: 106.2309, name: { en: "Yinchuan", zh: "银川" }, place: { en: "Western Xia Tombs", zh: "西夏王陵" } }, { id: "urumqi", lat: 43.8256, lon: 87.6168, name: { en: "Urumqi", zh: "乌鲁木齐" }, place: { en: "Grand Bazaar", zh: "国际大巴扎" } }, { id: "lhasa", lat: 29.652, lon: 91.1721, name: { en: "Lhasa", zh: "拉萨" }, place: { en: "Potala Palace", zh: "布达拉宫" } },
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
    tripCanvas: { en: "Trip Canvas", zh: "Trip Canvas" },
    timeline: { en: "Timeline", zh: "时间线" },
    map: { en: "Map", zh: "地图" },
    bookings: { en: "Bookings", zh: "预订" },
    adjusted: { en: "Adjusted to pace and budget", zh: "按节奏与预算调整" },
    open: { en: "Open", zh: "跳转" },
    viewDishes: { en: "View dishes", zh: "查看菜品" },
    mapSequence: { en: "3 areas arranged in sequence", zh: "顺路安排 3 个区域" },
    generating: { en: "Generating Trip Canvas", zh: "正在生成 Trip Canvas" },
    handoffPrefix: { en: "Handoff preview: ", zh: "已展示跳转：" },
    askTitle: { en: "Ask VisePanda", zh: "Ask VisePanda" },
    askLocation: { en: "Shanghai · China", zh: "上海 · 中国" },
    you: { en: "You", zh: "你" },
    shanghaiFollowup: { en: "More neighbourhoods, mid-range budget, and a river night view.", zh: "多逛街区，预算中等，晚上想看浦江夜景。" },
    composer: { en: "Continue with your preferences…", zh: "继续描述你的需求…" },
    messageSent: { en: "Message sent", zh: "消息已发送" },
    dishLabel: { en: "Recommended dishes", zh: "推荐菜品" },
    dishTitle: { en: "Braised pork · Scallion noodles", zh: "红烧肉 · 葱油拌面" },
    dishBody: { en: "Sweet-savoury; contains pork, soy, and wheat. Set menu around ¥168.", zh: "咸甜浓郁；含猪肉、酱油和小麦。团购套餐约 ¥168。" },
    dishAction: { en: "Open group deal", zh: "团购套餐跳转" },
    copilotTitle: { en: "A trip profile that learns over time", zh: "越聊越懂你的旅行方式" },
    longTermMemory: { en: "Long-term memory", zh: "长期记忆" },
    travelIntensity: { en: "Travel intensity", zh: "旅行强度" },
    dailyBudget: { en: "Daily budget", zh: "每日预算" },
    preferences: { en: "Preferences", zh: "偏好" },
    preferenceValue: { en: "Architecture · Local food · Boutique stays", zh: "建筑 · 本地美食 · 精品酒店" },
    knownConstraints: { en: "Known constraints", zh: "已知限制" },
    constraintValue: { en: "Less walking · Peanut allergy", zh: "少走路 · 不吃花生" },
    adaptiveSuggestion: { en: "Adaptive suggestion", zh: "自动适配建议" },
    adaptiveBody: { en: "Reduce Day 2 walking by 2.4 km and switch dinner to a peanut-free menu.", zh: "将上海 Day 2 的步行减少 2.4 km，并把晚餐切换为无花生菜单。" },
    reviewCanvas: { en: "Review Canvas change", zh: "查看 Canvas 变化" },
    exploreTitle: { en: "Discover places and handle the journey.", zh: "发现地点，也处理旅途中的事。" },
    places: { en: "Places", zh: "地点" },
    tools: { en: "Tools", zh: "工具" },
    soon: { en: "Soon", zh: "建设中" },
    attractions: { en: "Attractions", zh: "景点" },
    restaurants: { en: "Restaurants", zh: "餐厅" },
    hotels: { en: "Hotels", zh: "酒店" },
    citySoonTitle: { en: "Explore content for this city is being prepared", zh: "这个城市的 Explore 内容正在整理" },
    citySoonBody: { en: "Shanghai currently has the complete category and POI flow.", zh: "当前上海已开放完整分类和 POI 详情。" },
    start: { en: "Start", zh: "开始" },
    demoOpened: { en: " opened", zh: " 已打开" },
    demoFixture: { en: "Traveler brief", zh: "旅行简报" },
    price: { en: "Price", zh: "价格" },
    foreignPayment: { en: "Foreign payment", zh: "外币/境外卡" },
    languageService: { en: "Language service", zh: "外语服务" },
    addCanvas: { en: "Add to Trip Canvas", zh: "加入 Trip Canvas" },
    addedCanvas: { en: "Added to Trip Canvas", zh: "已加入 Trip Canvas" },
    editProfile: { en: "Edit profile", zh: "编辑画像" },
    cancel: { en: "Cancel", zh: "取消" },
    account: { en: "Account", zh: "账户" },
    travelProfile: { en: "Travel Profile", zh: "旅行画像" },
    memory: { en: "VisePanda Memory", zh: "VisePanda 记忆" },
    privacy: { en: "Privacy & Data", zh: "隐私与数据" },
    accountSettings: { en: "Account & settings", zh: "账户与设置" },
    language: { en: "Language", zh: "语言" },
    currency: { en: "Currency", zh: "货币" },
    timeZone: { en: "Time zone", zh: "时区" },
    memoryJudgement: { en: "VisePanda memory judgement", zh: "VisePanda 的记忆判断" },
    memorySummary: { en: "Comfortable pace, budget-aware, architecture and local food", zh: "舒适节奏、预算敏感、偏好建筑与本地饮食" },
    walking: { en: "Walking", zh: "步行强度" },
    hotelPreference: { en: "4-star · quiet · breakfast", zh: "四星 · 安静 · 早餐" },
    knownConstraint: { en: "Known constraint", zh: "已知限制" },
    allergy: { en: "Peanut allergy", zh: "花生过敏" },
    memorySource: { en: "Source: 18 chats, 3 confirmed Canvas changes, and 4 saved places.", zh: "来源：18 次对话、3 次 Canvas 确认和 4 个收藏地点。" },
    saveProfile: { en: "Save and preview impact", zh: "保存并预览影响" },
    profileSaved: { en: "Profile updated. Future suggestions will use the new budget and walking intensity.", zh: "画像已更新，后续建议将使用新的预算与步行强度。" },
  } satisfies Record<string, Localized>,
  bookings: {
    rail: { label: { en: "Rail", zh: "高铁" }, title: { en: "Shanghai → Beijing", zh: "上海 → 北京" }, action: { en: "Official channel", zh: "官方渠道" }, feedback: { en: "Rail handoff previewed", zh: "已展示铁路官方跳转" } },
    hotel: { label: { en: "Hotel", zh: "酒店" }, title: { en: "Wangfujing · Beijing", zh: "北京 · 王府井" }, action: { en: "View hotel", zh: "查看酒店" }, feedback: { en: "Hotel handoff previewed", zh: "已展示酒店预订跳转" } },
    ticket: { label: { en: "Ticket", zh: "门票" }, title: { en: "Yu Garden entry", zh: "豫园预约" }, action: { en: "Ticket channel", zh: "门票渠道" }, feedback: { en: "Ticket handoff previewed", zh: "已展示门票跳转" } },
  },
  userProfile: {
    id: "VP-US-1048",
    name: "Michael Turner",
    email: "michael.turner@example.com",
    location: "Seattle, United States",
    language: "English",
    currency: "USD",
    timeZone: "Pacific Time",
  },
  chats: [
    { id: "new", title: { en: "New Chat", zh: "新对话" } },
    { id: "shanghai", title: { en: "3 days in Shanghai", zh: "上海三日游" } },
    { id: "transport", title: { en: "Shanghai to Beijing", zh: "上海到北京" } },
    { id: "hotel", title: { en: "Luxury hotel in Beijing", zh: "北京豪华酒店" } },
    { id: "restaurant", title: { en: "Shanghai restaurants", zh: "上海餐厅" } },
    { id: "import", title: { en: "Trip guide check", zh: "攻略验证" } },
  ],
  scenarios: {
    new: {
      canvasTitle: { en: "Start a new trip", zh: "开始一个新行程" },
      user: { en: "Tell me where you want to go and what matters most.", zh: "告诉我想去哪里，以及这次旅行最重要的需求。" },
      assistant: { en: "I’ll ask a few focused questions, then build a visible Trip Canvas for your confirmation.", zh: "我会先问几个关键问题，再生成一份可确认的 Trip Canvas。" },
      rows: [{ time: "—", title: { en: "No trip yet", zh: "还没有行程" }, meta: { en: "Your plan will appear here", zh: "你的计划会显示在这里" } }],
    },
    shanghai: {
      canvasTitle: { en: "Shanghai · 3 days", zh: "上海 · 3 天" },
      user: { en: "Plan three relaxed days in Shanghai. I like architecture, local food, and one evening view.", zh: "帮我安排上海三日游，节奏不要太赶。我喜欢建筑、本地美食，也想看一次夜景。" },
      assistant: { en: "Would you rather spend more time in neighbourhoods or landmark attractions? I’ll keep daily travel under 45 minutes where possible.", zh: "你更想多逛街区，还是多看地标？我会尽量把每天交通控制在 45 分钟内。" },
      rows: [
        { time: "D1", title: { en: "The Bund → Yu Garden", zh: "外滩 → 豫园" }, meta: { en: "Metro · Local lunch · Night view", zh: "地铁 · 本帮午餐 · 夜景" } },
        { time: "D2", title: { en: "Wukang Road → French Concession", zh: "武康路 → 法租界" }, meta: { en: "Walk · Café · Architecture", zh: "步行 · 咖啡 · 建筑" } },
        { time: "D3", title: { en: "West Bund → Xintiandi", zh: "西岸 → 新天地" }, meta: { en: "Taxi · Museum · Dinner", zh: "打车 · 美术馆 · 晚餐" } },
      ],
    },
    transport: {
      canvasTitle: { en: "Shanghai → Beijing", zh: "上海 → 北京" },
      user: { en: "Compare flights and high-speed rail, then find a central hotel in Beijing.", zh: "比较上海到北京的机票和高铁，再找一家位置方便的北京酒店。" },
      assistant: { en: "What is your total transport budget, preferred departure time, and hotel style?", zh: "你的交通预算、希望出发的时间，以及酒店偏好是什么？" },
      rows: [
        { time: "Rail", title: { en: "G12 · 4h 24m", zh: "G12 · 4 小时 24 分" }, meta: { en: "Shanghai Hongqiao → Beijing South · ¥662", zh: "上海虹桥 → 北京南 · ¥662" } },
        { time: "Flight", title: { en: "SHA → PEK · 2h 15m", zh: "虹桥 → 首都 · 2 小时 15 分" }, meta: { en: "From ¥780 · airport transfer extra", zh: "¥780 起 · 另计机场交通" } },
        { time: "Hotel", title: { en: "Wangfujing · 5-star options", zh: "王府井 · 五星酒店" }, meta: { en: "Compare room and cancellation", zh: "对比房型与取消政策" } },
      ],
    },
    hotel: {
      canvasTitle: { en: "Beijing luxury stay", zh: "北京豪华住宿" },
      user: { en: "Find a luxury hotel near the Forbidden City with a quiet room and breakfast.", zh: "找一家靠近故宫的豪华酒店，要安静房型并含早餐。" },
      assistant: { en: "I’ll compare location, room type, breakfast, cancellation, and transfer time.", zh: "我会比较位置、房型、早餐、取消政策和交通时间。" },
      rows: [
        { time: "1", title: { en: "Wangfujing · Courtyard view", zh: "王府井 · 庭院景观" }, meta: { en: "Breakfast · Flexible cancellation", zh: "含早餐 · 灵活取消" } },
        { time: "2", title: { en: "Qianmen · Heritage suite", zh: "前门 · 传统套房" }, meta: { en: "Private transfer available", zh: "可安排专车接送" } },
      ],
    },
    restaurant: {
      canvasTitle: { en: "Restaurant match", zh: "餐厅匹配" },
      user: { en: "Find a Shanghai dinner near me, about ¥200 per person.", zh: "帮我找附近的上海晚餐，人均 200 元左右。" },
      assistant: { en: "Any allergies, dietary restrictions, or flavours you avoid?", zh: "有没有忌口、过敏，或者不喜欢的口味？" },
      rows: [
        { time: "19:00", title: { en: "Local Shanghai cuisine", zh: "上海本帮菜" }, meta: { en: "1.2 km · ¥168 set menu", zh: "1.2 公里 · ¥168 团购套餐" } },
        { time: "Dish", title: { en: "Braised pork · Scallion noodles", zh: "红烧肉 · 葱油拌面" }, meta: { en: "Sweet-savoury · pork, soy, wheat", zh: "咸甜口 · 猪肉、酱油、小麦" } },
      ],
    },
    import: {
      canvasTitle: { en: "Imported guide review", zh: "导入攻略检查" },
      user: { en: "I uploaded ‘China Trip.pdf’ and this Reddit guide: reddit.com/r/travel/…", zh: "我上传了《中国旅行.pdf》，还有这个 Reddit 攻略链接：reddit.com/r/travel/…" },
      assistant: { en: "I found two workable stops and one timing conflict. I’ve explained the issue before applying changes.", zh: "我找到两个合理节点和一个时间冲突，并在修改前说明了原因。" },
      rows: [
        { time: "✓", title: { en: "The Bund morning walk", zh: "外滩晨间步行" }, meta: { en: "Fits location and pace", zh: "地点与节奏合理" } },
        { time: "✓", title: { en: "Yu Garden afternoon", zh: "下午游览豫园" }, meta: { en: "Reservation window available", zh: "预约时间可行" } },
        { time: "!", title: { en: "Shanghai → Xi’an after dinner", zh: "晚餐后上海前往西安" }, meta: { en: "Conflict: last train departs earlier", zh: "不合理：末班高铁时间更早" } },
      ],
    },
  },
  explore: [
    { id: "translate", title: { en: "Translation", zh: "翻译" }, body: { en: "TTS, STT, image recognition, and direction cards", zh: "TTS、STT、图片识别与问路卡" }, step: { en: "Capture a Chinese menu", zh: "拍摄中文菜单" } },
    { id: "ride", title: { en: "Ride hailing", zh: "的士叫车" }, body: { en: "Simulated Didi SDK handoff inside the app", zh: "VisePanda App 内模拟滴滴 SDK 叫车" }, step: { en: "Confirm pickup point", zh: "确认上车点" } },
    { id: "visa", title: { en: "Visa & regulations", zh: "签证与法规" }, body: { en: "Verify rules against official channels", zh: "通过官方渠道验证签证和法规" }, step: { en: "Choose passport and stay", zh: "选择护照与停留时间" } },
    { id: "network", title: { en: "Network & SIM", zh: "网络与电话卡" }, body: { en: "Connectivity preparation and support", zh: "网络、电话卡与连接准备" }, step: { en: "Check eSIM and local number", zh: "检查 eSIM 与本地号码" } },
  ],
} as const;

export const EXPLORE_CITIES = [
  { id: "shanghai", name: { en: "Shanghai", zh: "上海" }, ready: true },
  { id: "beijing", name: { en: "Beijing", zh: "北京" }, ready: false },
  { id: "guangzhou", name: { en: "Guangzhou", zh: "广州" }, ready: false },
  { id: "shenzhen", name: { en: "Shenzhen", zh: "深圳" }, ready: false },
] as const;

export const SHANGHAI_POIS = [
  { id: "bund", category: "attractions", name: { en: "The Bund", zh: "外滩" }, area: { en: "Huangpu riverfront", zh: "黄浦江滨水区" }, price: { en: "Public space", zh: "公共空间" }, review: { en: "Strongest at sunrise or after the skyline lights come on.", zh: "日出前后或天际线亮灯后的体验更完整。" }, payment: { en: "No admission payment", zh: "无需门票支付" }, language: { en: "Use the bilingual address card", zh: "可使用中英文地址卡" } },
  { id: "yuyuan", category: "attractions", name: { en: "Yu Garden", zh: "豫园" }, area: { en: "Old City · Huangpu", zh: "黄浦老城厢" }, price: { en: "Ticketed attraction", zh: "需购票景点" }, review: { en: "Reserve enough time for the garden and surrounding lanes.", zh: "建议为园林和周边街巷一起预留时间。" }, payment: { en: "International-card support: recheck", zh: "境外卡支持：出发前复核" }, language: { en: "Foreign-language service: recheck", zh: "外语服务：出发前复核" } },
  { id: "shanghai-museum", category: "attractions", name: { en: "Shanghai Museum East", zh: "上海博物馆东馆" }, area: { en: "Pudong", zh: "浦东新区" }, price: { en: "Reservation may be required", zh: "可能需要预约" }, review: { en: "Select galleries before arrival to keep the visit focused.", zh: "提前选择重点展厅，参观节奏更清楚。" }, payment: { en: "Admission status: recheck", zh: "入场规则：出发前复核" }, language: { en: "Bilingual exhibit support: recheck", zh: "双语展览支持：出发前复核" } },
  { id: "nanxiang", category: "restaurants", name: { en: "Nanxiang Mantou Dian", zh: "南翔馒头店" }, area: { en: "Yu Garden area", zh: "豫园区域" }, price: { en: "¥¥", zh: "¥¥" }, review: { en: "Known for xiaolongbao; queues can shape the schedule.", zh: "以小笼包闻名，排队时间会影响行程。" }, payment: { en: "International cards: confirm on site", zh: "境外卡：到店确认" }, language: { en: "English service: confirm on site", zh: "外语服务：到店确认" } },
  { id: "laozhengxing", category: "restaurants", name: { en: "Lao Zheng Xing", zh: "老正兴" }, area: { en: "Huangpu", zh: "黄浦区" }, price: { en: "¥¥¥", zh: "¥¥¥" }, review: { en: "Classic Shanghai flavours; ask about allergens before ordering.", zh: "本帮口味突出，点餐前应确认过敏原。" }, payment: { en: "International cards: confirm on site", zh: "境外卡：到店确认" }, language: { en: "English menu: confirm on site", zh: "英文菜单：到店确认" } },
  { id: "fu1088", category: "restaurants", name: { en: "Fu 1088", zh: "福 1088" }, area: { en: "Jing'an", zh: "静安区" }, price: { en: "¥¥¥¥", zh: "¥¥¥¥" }, review: { en: "Suited to a slower dinner; reservation timing matters.", zh: "适合节奏较慢的晚餐，预约时间很重要。" }, payment: { en: "International cards: confirm when booking", zh: "境外卡：预订时确认" }, language: { en: "English service: confirm when booking", zh: "外语服务：预订时确认" } },
  { id: "peace-hotel", category: "hotels", name: { en: "Fairmont Peace Hotel", zh: "上海和平饭店" }, area: { en: "The Bund", zh: "外滩" }, price: { en: "Luxury", zh: "豪华" }, review: { en: "Convenient for Bund walks; compare room views.", zh: "适合外滩步行，建议比较不同景观房型。" }, payment: { en: "International cards: confirm before booking", zh: "境外卡：预订前确认" }, language: { en: "Foreign-language service: confirm", zh: "外语服务：预订前确认" } },
  { id: "edition", category: "hotels", name: { en: "The Shanghai EDITION", zh: "上海艾迪逊酒店" }, area: { en: "Nanjing East Road", zh: "南京东路" }, price: { en: "Luxury", zh: "豪华" }, review: { en: "Central nightlife location; compare noise and view preferences.", zh: "夜生活位置便利，应比较噪音和景观偏好。" }, payment: { en: "International cards: confirm before booking", zh: "境外卡：预订前确认" }, language: { en: "Foreign-language service: confirm", zh: "外语服务：预订前确认" } },
  { id: "capella", category: "hotels", name: { en: "Capella Shanghai, Jian Ye Li", zh: "上海建业里嘉佩乐酒店" }, area: { en: "Former French Concession", zh: "衡复风貌区" }, price: { en: "Luxury", zh: "豪华" }, review: { en: "Residential atmosphere; allow extra transfer time at peak hours.", zh: "街区氛围突出，高峰时段应增加交通余量。" }, payment: { en: "International cards: confirm before booking", zh: "境外卡：预订前确认" }, language: { en: "Foreign-language service: confirm", zh: "外语服务：预订前确认" } },
] as const;
