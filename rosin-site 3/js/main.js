// ============================================================
//  main.js — nav toggle, config injection, form handling
//  Reads values from js/config.js (SITE_CONFIG). Do not edit
//  this file for normal setup — edit config.js instead.
// ============================================================
(function () {
  var cfg = window.SITE_CONFIG || {};

  // ---- Inject config-driven values across the page ----
  function setText(sel, val) {
    document.querySelectorAll(sel).forEach(function (el) { if (val) el.textContent = val; });
  }
  function setHref(sel, val) {
    document.querySelectorAll(sel).forEach(function (el) { if (val) el.setAttribute("href", val); });
  }

  // Company name (logo text + footer)
  setText("[data-company]", cfg.companyName);

  // Footer + contact email
  setText("[data-email]", cfg.email);
  setHref("[data-email-link]", "mailto:" + (cfg.email || ""));

  // WhatsApp (float button + contact)
  var waNumber = (cfg.whatsapp || "").replace(/[^0-9]/g, "");
  var waUrl = "https://wa.me/" + waNumber;
  setHref("[data-whatsapp]", waUrl);
  setText("[data-whatsapp-text]", "+" + waNumber);

  // Address
  setText("[data-address]", cfg.address);

  // Year
  setText("[data-year]", String(new Date().getFullYear()));

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  // ---- Inquiry form ----
  var form = document.getElementById("inquiry-form");
  if (form) {
    // Point form at the configured endpoint
    if (cfg.formEndpoint) form.setAttribute("action", cfg.formEndpoint);

    var msg = document.getElementById("form-msg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic required validation
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      if (!name.value.trim() || !email.value.trim()) {
        showMsg("error", "Please fill in your name and email.");
        return;
      }
      if (!cfg.formEndpoint || cfg.formEndpoint.indexOf("YOUR_ID") !== -1) {
        showMsg("error", "Form is not configured yet. Set formEndpoint in js/config.js.");
        return;
      }

      var btn = form.querySelector('[type="submit"]');
      var original = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (res.ok) {
            showMsg("success", "Thank you — we'll reply within 24 hours.");
            form.reset();
          } else {
            showMsg("error", "Something went wrong. Please email us directly at " + (cfg.email || "") + ".");
          }
        })
        .catch(function () {
          showMsg("error", "Network error. Please email us directly at " + (cfg.email || "") + ".");
        })
        .finally(function () {
          btn.textContent = original;
          btn.disabled = false;
        });
    });

    function showMsg(type, text) {
      if (!msg) return;
      msg.className = "form-msg " + type;
      msg.textContent = text;
      msg.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // ============================================================
  //  渲染随内容变化的部分。等 data-loader.js 加载完 JSON 后调用。
  //  (若没有 data-loader,则用 content.js 里的全局变量直接渲染。)
  // ============================================================
  function renderContent() {

  // ============================================================
  //  Auto-render product spec tables
  //  A page just needs: <div data-spec-table="gumRosin"></div>
  // ============================================================
  document.querySelectorAll("[data-spec-table]").forEach(function (host) {
    var key = host.getAttribute("data-spec-table");
    var rows = (window.PRODUCTS || {})[key];
    if (!rows) return;
    var html = '<table class="spec-table"><tr><th>Item</th><th>Specification</th></tr>';
    rows.forEach(function (r) {
      var isFill = /\[.*\]/.test(r.value); // values still in [ ... ] show in amber
      html += "<tr><td>" + esc(r.label) + "</td><td" + (isFill ? ' class="fillable"' : "") + ">" + esc(r.value) + "</td></tr>";
    });
    html += "</table>";
    host.innerHTML = html;
  });

  // ============================================================
  //  Blog: render list on blog.html, render single post on post.html
  // ============================================================
  var blog = window.BLOG || [];

  // --- Blog index list ---
  var listHost = document.getElementById("blog-list");
  if (listHost) {
    if (!blog.length) {
      listHost.innerHTML = "<p>No articles yet.</p>";
    } else {
      var lh = '<div class="grid grid-3">';
      blog.forEach(function (post) {
        lh +=
          '<a class="card" style="text-decoration:none" href="post.html?p=' + encodeURIComponent(post.slug) + '">' +
          '<div class="card-body">' +
          '<p class="eyebrow" style="margin-bottom:8px">' + esc(post.date || "") + "</p>" +
          "<h3>" + esc(post.title) + "</h3>" +
          "<p>" + esc(post.summary || "") + "</p>" +
          '<span class="card-link">Read more &rarr;</span>' +
          "</div></a>";
      });
      lh += "</div>";
      listHost.innerHTML = lh;
    }
  }

  // --- Single post ---
  var postHost = document.getElementById("blog-post");
  if (postHost) {
    var slug = new URLSearchParams(window.location.search).get("p");
    var post = blog.filter(function (x) { return x.slug === slug; })[0];
    if (!post) {
      postHost.innerHTML = '<h1>Article not found</h1><p><a class="card-link" href="blog.html">&larr; Back to all articles</a></p>';
    } else {
      document.title = post.title + " | Blog";
      var ph = "<h1>" + esc(post.title) + "</h1>";
      ph += '<p class="eyebrow" style="margin:8px 0 28px">' + esc(post.date || "") + "</p>";
      (post.body || []).forEach(function (para) {
        if (para.indexOf("## ") === 0) ph += "<h2 style='margin-top:28px'>" + esc(para.slice(3)) + "</h2>";
        else ph += "<p>" + esc(para) + "</p>";
      });
      ph += '<p style="margin-top:32px"><a class="btn btn-primary" href="contact.html">Get a Quote</a> &nbsp; <a class="card-link" href="blog.html">&larr; All articles</a></p>';
      postHost.innerHTML = ph;
    }
  }

  // small helper: escape HTML so content stays safe & literal
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ============================================================
  //  Media: fill images / video from MEDIA.
  //  Empty values are ignored, so placeholders stay as-is.
  // ============================================================
  var media = window.MEDIA || {};

  // Replace a placeholder box [data-media="key"] with an <img> if a path is set
  function fillImage(key) {
    var path = media[key];
    if (!path) return;
    document.querySelectorAll('[data-media="' + key + '"]').forEach(function (el) {
      el.innerHTML = '<img src="' + esc(path) + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block">';
    });
  }
  fillImage("gumRosinImage");
  fillImage("steelDrumsImage");
  fillImage("gumRosinHero");
  fillImage("steelDrumsHero");

  // Photo galleries: [data-gallery="factoryPhotos"] etc.
  document.querySelectorAll("[data-gallery]").forEach(function (host) {
    var arr = media[host.getAttribute("data-gallery")] || [];
    var real = arr.filter(function (p) { return p && p.trim(); });
    if (!real.length) return; // keep placeholder boxes if nothing filled
    host.innerHTML = real
      .map(function (p) {
        return '<div class="ph" style="padding:0;border:0;overflow:hidden"><img src="' + esc(p) + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"></div>';
      })
      .join("");
  });

  // Promo video region: [data-video] — shows only if MEDIA.promoVideo is set
  document.querySelectorAll("[data-video]").forEach(function (host) {
    var v = media.promoVideo;
    if (!v || !v.trim()) { host.style.display = "none"; return; }
    var isFile = /\.(mp4|webm|ogg)(\?|$)/i.test(v);
    if (isFile) {
      host.querySelector("[data-video-slot]").innerHTML =
        '<video controls style="width:100%;border-radius:8px;display:block"><source src="' + esc(v) + '"></video>';
    } else {
      // treat as an embed URL (e.g. YouTube embed link)
      host.querySelector("[data-video-slot]").innerHTML =
        '<div style="position:relative;padding-top:56.25%;border-radius:8px;overflow:hidden">' +
        '<iframe src="' + esc(v) + '" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allowfullscreen></iframe></div>';
    }
  });

  } // end renderContent

  // small helper: escape HTML so content stays safe & literal
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // 何时渲染:
  // · 如果用了 data-loader.js(线上正常情况),等它加载完 JSON 触发 content-ready
  // · 如果没有 data-loader(直接双击打开 html 预览),content.js 已提供全局变量,直接渲染
  if (window.__USE_DATA_LOADER__) {
    document.addEventListener("content-ready", renderContent);
  } else {
    renderContent();
  }
})();
