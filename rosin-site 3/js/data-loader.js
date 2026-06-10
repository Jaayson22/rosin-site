// ============================================================
//  data-loader.js
//  从 content/ 下的 JSON 文件加载内容(这些文件由后台 /admin/ 维护),
//  组装成网站渲染需要的 PRODUCTS / BLOG / MEDIA,然后通知页面渲染。
//
//  说明:你不用手动改这个文件,也不用手动改 JSON —— 用后台编辑即可。
//  (如果你愿意,也可以直接用文本编辑器改 content/*.json。)
// ============================================================
(function () {
  // 把后台 markdown 正文(用空行分段、## 开头是小标题)转成段落数组,
  // 兼容网站原有的 body 渲染逻辑。
  function bodyToParagraphs(md) {
    if (!md) return [];
    return String(md)
      .split(/\n{2,}/)            // 空行分段
      .map(function (s) { return s.replace(/\r/g, "").trim(); })
      .filter(function (s) { return s.length; });
  }

  function getJSON(url) {
    return fetch(url, { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error(url); return r.json(); })
      .catch(function () { return null; }); // 某个文件缺失不致命
  }

  // 把相对路径修正:页面在根目录,content 也在根目录
  var paths = {
    home: "content/home.json",
    gum: "content/product-gum-rosin.json",
    drums: "content/product-steel-drums.json",
    about: "content/about.json",
    quality: "content/quality.json",
    blog: "content/blog.json",
  };

  Promise.all([
    getJSON(paths.home),
    getJSON(paths.gum),
    getJSON(paths.drums),
    getJSON(paths.about),
    getJSON(paths.quality),
    getJSON(paths.blog),
  ]).then(function (res) {
    var home = res[0] || {};
    var gum = res[1] || {};
    var drums = res[2] || {};
    var about = res[3] || {};
    var quality = res[4] || {};
    var blog = res[5] || {};

    // ---- MEDIA ----
    window.MEDIA = {
      gumRosinImage: home.gumRosinImage || "",
      steelDrumsImage: home.steelDrumsImage || "",
      promoVideo: home.promoVideo || "",
      gumRosinHero: gum.hero || "",
      steelDrumsHero: drums.hero || "",
      factoryPhotos: (about.factoryPhotos || []).map(pickImage),
      certPhotos: (quality.certPhotos || []).map(pickImage),
    };

    // ---- PRODUCTS ----
    window.PRODUCTS = {
      gumRosin: gum.specs || [],
      steelDrums: drums.specs || [],
    };

    // ---- BLOG ----
    window.BLOG = (blog.posts || []).map(function (p) {
      return {
        slug: p.slug,
        title: p.title,
        date: p.date,
        summary: p.summary,
        body: bodyToParagraphs(p.body),
      };
    });

    // 数据就绪,通知 main.js 渲染
    document.dispatchEvent(new Event("content-ready"));
  });

  // list-of-image 在后台可能存成 "xxx.jpg" 或 { image: "xxx.jpg" }
  function pickImage(item) {
    if (!item) return "";
    if (typeof item === "string") return item;
    return item.image || "";
  }
})();
