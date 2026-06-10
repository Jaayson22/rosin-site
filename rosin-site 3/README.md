# Rosin Source Website

A static, mobile-responsive B2B website for a gum rosin & knock-down steel drum supplier.
No build step. Pure HTML/CSS/JS. Works on any static host.

> 📌 **想用可视化后台改内容(上传图片、改文字、加博客)?**
> 请看 **《后台使用指南.md》** —— 那是日常更新内容的推荐方式,网页点点点即可,不碰代码。
> 本 README 主要讲技术细节和直接改文件的方式,两者都可用。

---

## 1. Quick start (5 minutes)

1. **Edit `js/config.js`** — this is the ONLY file you normally need to change:
   ```js
   const SITE_CONFIG = {
     companyName: "Your Company",
     email: "sales@yourdomain.com",
     whatsapp: "8613800000000",   // country code + number, digits only
     address: "Your city, China",
     formEndpoint: "https://formspree.io/f/YOUR_ID",
     domain: "https://yourdomain.com",
   };
   ```
2. **Edit products & blog** — see Section 7 below. You only ever edit ONE file:
   `js/content.js`. No HTML needed.
3. **Add real photos** — in `about.html` and `quality.html`, replace the dashed
   placeholder boxes with real factory / loading / COA images. Put image files in `assets/`.
4. **Test locally** — just open `index.html` in your browser.

---

## 2. Set up the inquiry form (so you actually receive emails)

The form needs a free "form backend" (no server required). Pick one:

- **Web3Forms** (free, simple): sign up at web3forms.com, get an Access Key, and set
  `formEndpoint: "https://api.web3forms.com/submit"` — then add a hidden input
  `<input type="hidden" name="access_key" value="YOUR_KEY">` inside the form in `contact.html`.
- **Formspree** (free tier): sign up at formspree.io, create a form, copy the endpoint
  (looks like `https://formspree.io/f/abcd1234`) into `formEndpoint`. Done.

Submit a test inquiry to confirm the email arrives.

---

## 3. Deploy (pick one host — all free for this site)

**Easiest — Netlify drag & drop:**
1. Go to https://app.netlify.com/drop
2. Drag the whole `rosin-site` folder onto the page.
3. It goes live instantly at a `something.netlify.app` URL.

**Or — Cloudflare Pages / Vercel / GitHub Pages:**
- Push the folder to a GitHub repo, then connect it in the host's dashboard.
- No build command needed; output/publish directory is the project root.

---

## 4. Connect YOUR OWN domain  ← the important part

After deploying (example uses Netlify; Cloudflare/Vercel are nearly identical):

1. **Buy a domain** at Namecheap, GoDaddy, or Cloudflare (e.g. `yourdomain.com`).
2. In your host dashboard: **Domain settings → Add a custom domain →** enter `yourdomain.com`.
   The host will show you the DNS records it needs.
3. **At your domain registrar, add DNS records:**
   - **Apex domain** (`yourdomain.com`): add the record the host gives you — usually an
     `A` record to their IP, or an `ALIAS`/`ANAME`/`CNAME-flattening` record to their target.
   - **www** (`www.yourdomain.com`): add a `CNAME` record pointing to the host's target
     (e.g. `your-site.netlify.app`).
4. **Wait for DNS to propagate** (a few minutes to a few hours).
5. The host **auto-issues a free HTTPS (SSL) certificate** — your site is now secure with the padlock.
6. **Update the domain in your files:** set `domain` in `js/config.js`, and replace
   `yourdomain.com` in `robots.txt` and `sitemap.xml` with your real domain. Redeploy.

> Tip: if you bought the domain on Cloudflare and also host on Cloudflare Pages,
> the DNS is wired up automatically — least hassle.

---

## 5. Get a business email on your domain

Use `sales@yourdomain.com` (not Gmail) for credibility in outreach.
- Many registrars sell email hosting, or use **Google Workspace** / **Zoho Mail** (free tier).
- Set it up, then put that address in `js/config.js`.

---

## 6. After launch — get found & get inquiries

1. Submit your site to **Google Search Console** (search.google.com/search-console),
   verify ownership, and submit `sitemap.xml`.
2. Add a `blog/` folder with the SEO articles from your supplement document
   (gum rosin grades, knock-down drums, importing from China) for organic traffic.
3. Put your website link in: email signature, WhatsApp, LinkedIn, Alibaba store, business cards.
4. Use the site as trust-backing in cold emails: "You can see our specs at yourdomain.com".

---

## File structure

```
rosin-site/
├── index.html          Home
├── gum-rosin.html      Gum Rosin product (fill specs)
├── steel-drums.html    Steel Drums product (fill specs)
├── about.html          About (add photos)
├── quality.html        Quality (add COA scans)
├── contact.html        Inquiry form
├── robots.txt          SEO (update domain)
├── sitemap.xml         SEO (update domain)
├── css/style.css       All styling
├── js/config.js        ← YOU EDIT THIS
├── js/main.js          Nav, config injection, form handling
└── assets/             Put your images here
```

---

## Regenerating with an AI tool

If you want to rebuild or restyle the whole site later, give the `BUILD_SPEC.md`
file to Codex / Claude Code / Cursor with the instruction:
"Read BUILD_SPEC.md and regenerate the complete website as specified."
Edit the spec first to change content or design.

---

## 7. 改产品 / 加博客 —— 只动 `js/content.js` 一个文件

打开 `js/content.js`(用记事本、VS Code 都行)。里面分两块,改完保存、刷新网页即可。

### A. 改产品规格

找到 `PRODUCTS` 那一块。每个产品是一串 `{ label: "...", value: "..." }` 行。

- **改某个参数**:把那行 `value:` 后面引号里的内容换成你的真实数据。
  例:`{ label: "MOQ", value: "[ 填写 ]" }` → `{ label: "MOQ", value: "1 x 20'FCL" }`
- **加一行参数**:复制任意一行,粘到下面,改文字。别忘了行尾的逗号 `,`。
- **删一行**:把那一整行删掉。

> 提示:只要 value 里还留着方括号 `[ ]`,网页上就会显示成琥珀色斜体,提醒你"这里还没填"。

### B. 改 / 加博客文章

找到 `BLOG` 那一块。每篇文章是一整段 `{ ... }`。

**加一篇新文章**:复制任意一整段(从 `{` 到 `},`),粘在 `BLOG = [` 后面,然后改 5 个字段:

```js
{
  slug: "my-new-article",                 // 网址用的英文短名,只用小写字母和连字符,不能和别的重复
  title: "你的文章标题",                    // 标题
  date: "2026-07",                         // 日期,随便写
  summary: "列表页显示的一句话摘要。",        // 摘要
  body: [
    "第一段正文。",
    "## 这是一个小标题",                     // 开头加 "## " 就是小标题
    "小标题下的段落。",
    "想分几段就写几行,每行用引号包起来、用逗号隔开。",
  ],
},
```

保存后,文章会**自动出现在 `blog.html` 列表里**,点进去会用 `post.html` 显示——
你完全不用新建任何 HTML 页面。

**改一篇**:直接改那段的文字。
**删一篇**:把那一整段 `{ ... },` 删掉。

### 三条小规则(避免出错)
1. 每段文字两边都要有英文引号 `"..."`。
2. 每一项末尾要有英文逗号 `,`。
3. 引号、逗号、括号都要用**英文半角**,不要用中文的 `，` `（）`。

> 如果不小心改坏了(网页空白),多半是漏了引号或逗号。对照上面的格式检查一下,
> 或者把 `content.js` 恢复成原来的样子重来。建议改之前先复制一份备份。

---

## 8. 加产品图片 / 宣传视频 —— 同样只动 `js/content.js`

图片视频都集中在 `content.js` 最上面的 `MEDIA` 区。**留空就显示占位设计,填了就显示你的图/视频**,不会出错。

### 加图片(3 步)
1. 把图片文件放进 `assets` 文件夹(例:`gum-rosin.jpg`)。
2. 打开 `js/content.js`,在 `MEDIA` 里把对应那行填上路径:
   `gumRosinImage: "assets/gum-rosin.jpg",`
3. 保存,刷新网页。图片自动显示。

各字段对应位置:
- `gumRosinImage` / `steelDrumsImage` → 首页两张产品卡片图
- `gumRosinHero` / `steelDrumsHero` → 产品页顶部大图(可不填)
- `factoryPhotos` → About 页"工厂与发货"画廊(填几张显示几张)
- `certPhotos` → Quality 页证书/COA 扫描件

> 画廊里每张是数组里的一个 `"assets/xxx.jpg",`。想多放几张就多加几行,留空的不显示。

### 加宣传视频(2 种方式)
打开 `content.js`,填 `promoVideo` 这一行,首页会自动出现视频区(留空则不显示)。
- **自己的视频文件**:把 `.mp4` 放进 `assets`,填 `promoVideo: "assets/promo.mp4",`
- **YouTube 视频**:在视频页点"分享 → 嵌入",复制 `src="..."` 里那段
  `https://www.youtube.com/embed/xxxx` 网址,填进去即可。

### 图片小建议
- 格式用 `.jpg`(照片)或 `.png`,单张控制在 300KB 以内,网页才快。
- 横图比竖图好看(卡片和画廊是横向的)。
- **真实的工厂、产品、装柜照片最有说服力**,远胜网上找的通用图。
- 没有图也能先上线 —— 占位设计干净不难看,等有了真实素材再随时补。
