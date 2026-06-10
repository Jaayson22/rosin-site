// ============================================================
//   content.js  —  ⚠️ 现在这个文件只用于"本地双击预览"的后备显示。
//
//   你的网站内容已经改由可视化后台管理(访问 你的域名/admin/),
//   实际内容存在 content/ 文件夹的 JSON 文件里,由 data-loader.js 加载。
//
//   · 想改内容 → 用后台 /admin/,或直接改 content/ 里的 JSON
//   · 这个文件平时不用动;它只是在你本地双击 html 预览、
//     浏览器读不到 JSON 时,提供一份后备内容以免页面空白。
// ============================================================


// ============================================================
//   第〇部分:图片和视频
//   ------------------------------------------------------------
//   用法:把图片/视频文件放进 assets 文件夹,然后在下面填文件名。
//   · 留空 "" = 网页自动显示占位设计(不会出错、不会难看)
//   · 填了文件名 = 网页自动显示你的图片/视频
//
//   例:把工厂照片 factory.jpg 放进 assets 文件夹后,
//       把 gumRosinImage 改成 "assets/factory.jpg" 即可。
//
//   视频两种填法:
//   · 自己的视频文件:放进 assets,填 "assets/demo.mp4"
//   · YouTube 链接:填那条 https://www.youtube.com/embed/视频ID 形式的网址
//     (在 YouTube 视频页点"分享"→"嵌入",复制 src 里的那段网址)
// ============================================================
const MEDIA = {

  // ---- 首页两张产品卡片的图 ----
  gumRosinImage:   "",   // 例: "assets/gum-rosin.jpg"
  steelDrumsImage: "",   // 例: "assets/steel-drum.jpg"

  // ---- 产品页顶部大图(可留空)----
  gumRosinHero:    "",
  steelDrumsHero:  "",

  // ---- 宣传视频(首页会显示。留空则不显示视频区)----
  promoVideo:      "",   // 自有视频: "assets/promo.mp4"  或  YouTube嵌入网址

  // ---- About 页"工厂与发货"图片(想放几张就填几个,留空的不显示)----
  factoryPhotos: [
    "",   // 例: "assets/factory-1.jpg"
    "",   // 例: "assets/loading.jpg"
    "",   // 例: "assets/tradeshow.jpg"
  ],

  // ---- Quality 页证书/COA 扫描件(留空不显示)----
  certPhotos: [
    "",   // 例: "assets/coa-sample.jpg"
    "",
    "",
  ],

};


// ============================================================
//   第一部分:产品规格表
//   ------------------------------------------------------------
//   想改某个参数 → 改对应那行的第二个引号内容
//   想加一行参数 → 复制任意一行 { label:"...", value:"..." }
//   想删一行     → 删掉那一整行(连同末尾逗号)
// ============================================================
const PRODUCTS = {

  // ---------- 松香 Gum Rosin ----------
  gumRosin: [
    { label: "Product",          value: "Gum Rosin" },
    { label: "Grades available", value: "WW / WG / X (specify on inquiry)" },
    { label: "Softening Point",  value: "[ 填写,如 ≥76°C ]" },
    { label: "Acid Value",       value: "[ 填写 ]" },
    { label: "Color (Gardner)",  value: "[ 填写 ]" },
    { label: "Moisture",         value: "[ 填写 ]" },
    { label: "Packaging",        value: "25kg bag / 225kg or 250kg steel drum" },
    { label: "MOQ",              value: "[ 填写,如 1 x 20'FCL ]" },
    { label: "Lead Time",        value: "[ 填写,如 15–20 days ]" },
    { label: "Port of Loading",  value: "[ 填写 ]" },
    { label: "Payment Terms",    value: "T/T, L/C at sight" },
  ],

  // ---------- 钢桶 Steel Drums ----------
  steelDrums: [
    { label: "Format",         value: "Knock-down (flat-pack) steel drum" },
    { label: "Capacity",       value: "250 kg" },
    { label: "Lid / Base",     value: "570 mm diameter, 0.4 mm thickness" },
    { label: "Body sheet",     value: "1000 × 1815 mm, 0.35 mm thickness" },
    { label: "Material",       value: "Cold-rolled steel (specify grade on inquiry)" },
    { label: "Custom options", value: "Size, thickness, coating, printing" },
    { label: "MOQ",            value: "[ 填写 ]" },
    { label: "Lead Time",      value: "[ 填写 ]" },
    { label: "Payment Terms",  value: "T/T, L/C at sight" },
  ],

  // 想再加一个新产品?照下面格式复制一份(改名字),
  // 然后告诉建站的人帮你加一个对应页面,或用 AI 按 BUILD_SPEC 重新生成。
  // newProduct: [
  //   { label: "Product", value: "你的新产品" },
  //   { label: "...",     value: "..." },
  // ],

};


// ============================================================
//   第二部分:博客文章
//   ------------------------------------------------------------
//   想加一篇新文章 → 复制下面一整段 { ... },放进 BLOG 列表里,改内容
//   想改一篇       → 直接改对应那段的文字
//   想删一篇       → 删掉那一整段 { ... }(连同末尾逗号)
//
//   每篇文章的字段说明:
//     slug    = 网址用的英文短名(只用小写字母和连字符,不能重复)
//     title   = 文章标题
//     date    = 日期(随便写,如 "2026-06")
//     summary = 列表页显示的一句话摘要
//     body    = 正文。每个段落用一对引号包起来,是一个数组项。
//               想分段就多写几项,用逗号隔开。
//               想要小标题,在那段开头加 "## " 两个井号+空格。
// ============================================================
const BLOG = [

  {
    slug: "how-to-choose-gum-rosin-grade",
    title: "How to Choose the Right Gum Rosin Grade for Your Application",
    date: "2026-06",
    summary: "Picking the wrong grade wastes money. A practical guide to matching gum rosin grade to your application.",
    body: [
      "Gum rosin is a versatile natural resin, but not every grade fits every application. Choosing the wrong grade can mean wasted cost, inconsistent results, or production problems down the line. Here is a practical guide to picking the right one.",
      "## What the grades actually mean",
      "Gum rosin is commonly classified by color, using the Gardner or USDA scale. Lighter grades such as WW (Water White) and WG (Window Glass) are the most refined and command higher prices. Darker grades like N, M, K, and X are less refined and more economical. The grade you need depends almost entirely on what you are making.",
      "## Matching grade to application",
      "For clear adhesives, light-colored coatings, and printing inks, lighter grades (WW / WG) are usually required, because color clarity matters in the final product. For rubber compounding, paper sizing, and applications where color is not visible in the end use, darker and more economical grades often perform just as well at lower cost.",
      "## Key specifications to check",
      "Beyond color, pay attention to softening point, acid value, and moisture content. A higher softening point can be important for heat-resistant applications, while acid value affects reactivity in adhesive and resin systems. Always ask your supplier for a Certificate of Analysis (COA) so you can verify these values before committing to a large order.",
      "## The bottom line",
      "Tell your supplier what you are making and how the rosin will be used. A good supplier will recommend the most cost-effective grade that still meets your performance needs — you do not always need the most expensive grade. If you are unsure, request a sample and test it in your own process before placing a full order.",
    ],
  },

  {
    slug: "why-knock-down-steel-drums-cut-shipping-costs",
    title: "Why Knock-Down Steel Drums Cut Your Shipping Costs",
    date: "2026-06",
    summary: "Traditional drums ship air. Here is how flat-pack knock-down drums lower freight cost and save warehouse space.",
    body: [
      "If you import rosin, chemicals, or other bulk materials, packaging is a hidden cost that adds up fast. Traditional pre-assembled steel drums take up a lot of container space — and you are essentially paying to ship air. Knock-down (flat-pack) steel drums solve this problem.",
      "## What is a knock-down steel drum?",
      "A knock-down drum ships flat, in separate components — body sheet, lid, and base — and is assembled on-site when needed. The drum is just as sturdy as a conventional one once assembled, but takes up a fraction of the space in transit.",
      "## The cost advantage",
      "Because flat-packed components stack tightly, you can fit far more units into a single container compared to pre-assembled drums. For importers buying in volume, this can mean a meaningful reduction in freight cost per drum. Lower shipping cost goes straight to your margin.",
      "## Easy assembly, no special tools",
      "Modern knock-down drums are designed for quick assembly without specialized equipment. Your team can put them together on-site as packaging is needed, which also reduces your warehouse storage footprint.",
      "## Custom sizing for your product",
      "Drum dimensions and steel thickness can be tailored to your product's weight and handling requirements. A 250kg format is common for rosin, but specifications can be adjusted to suit your needs.",
      "## The bottom line",
      "If freight cost and storage space matter to your operation — and for most importers they do — knock-down steel drums are worth evaluating. Pair them with your raw material order from a single supplier and you simplify procurement at the same time.",
    ],
  },

  {
    slug: "5-things-to-check-before-importing-gum-rosin-from-china",
    title: "5 Things to Check Before Importing Gum Rosin from China",
    date: "2026-06",
    summary: "A short due-diligence checklist to protect yourself and ensure a smooth shipment when sourcing gum rosin.",
    body: [
      "China is one of the largest sources of gum rosin worldwide, but the quality and reliability of suppliers varies. Before you place an order, here are five things worth checking to protect yourself and ensure a smooth shipment.",
      "## 1. Ask for a Certificate of Analysis (COA)",
      "A reliable supplier provides a COA with every batch, showing softening point, acid value, color, and moisture. If a supplier hesitates to share specifications, treat that as a warning sign.",
      "## 2. Confirm the grade and request a sample",
      "Make sure the grade quoted matches what you actually need. Whenever possible, test a sample in your own process before committing to a full container.",
      "## 3. Clarify packaging and quantity terms",
      "Confirm packaging (bags or drums), MOQ, and how the goods will be loaded. Knowing this upfront avoids surprises at the port.",
      "## 4. Check export documentation and payment terms",
      "A capable supplier handles the Proforma Invoice, Packing List, Commercial Invoice, and Bill of Lading, and can work with T/T or L/C. Clear documentation keeps customs clearance smooth on your end.",
      "## 5. Evaluate communication and responsiveness",
      "How quickly and clearly a supplier answers your questions before the sale is a strong predictor of how they will handle problems after it. A supplier who replies promptly and gives straight answers is worth more than one who is simply cheapest.",
      "## The bottom line",
      "A little due diligence upfront saves a lot of trouble later. Work with a supplier who is transparent about specifications, responsive in communication, and experienced with export documentation.",
    ],
  },

];


// 让网站能读到这些内容(不要改这两行)
if (typeof window !== "undefined") { window.PRODUCTS = PRODUCTS; window.BLOG = BLOG; window.MEDIA = MEDIA; }
