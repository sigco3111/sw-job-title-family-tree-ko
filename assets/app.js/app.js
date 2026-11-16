/* 소프트웨어 직무 계보 — 인터랙티브 계보도
   데이터: data/core.js, data/jobs-1.js, data/jobs-2.js */
(function () {
  "use strict";

  var G = window.GENEALOGY;
  if (!G) return;

  var NODE_W = 168, NODE_H = 52, RAIL = 86, LANE = 196, ROW_H = 66;
  var PAD_TOP = 40, PAD_BOTTOM = 20;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LANDMARKS = {
    programmer: 1, software_eng: 1, sysadmin: 1, network_eng: 1, sre: 1,
    devops: 1, platform_eng: 1, data_scientist: 1, ai_engineer: 1, fde: 1
  };

  var jobs = G.jobs.slice();
  var byId = {};
  jobs.forEach(function (j) { byId[j.id] = j; });

  var famOrder = G.families.map(function (f) { return f.id; });
  var famMap = {};
  G.families.forEach(function (f) { famMap[f.id] = f; });

  function hexToRgb(h) {
    h = h.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function rgba(hex, a) {
    var c = hexToRgb(hex);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  }

  /* 시대 구간: 5년 단위(초기 두 칸은 10년) */
  function bucketOf(year) {
    if (year < 1950) return 1940;
    if (year < 1955) return 1950;
    var b = Math.floor(year / 5) * 5;
    if (b < 1955) b = 1955;
    if (b > 2025) b = 2025;
    return b;
  }

  var eras = G.eras.slice();
  jobs.forEach(function (j) { j.era = bucketOf(j.year); });

  /* 그래프 색인 */
  var children = {};
  var ancestorsCache = {};
  jobs.forEach(function (j) { children[j.id] = []; });
  jobs.forEach(function (j) {
    (j.parents || []).forEach(function (p) {
      if (!byId[p[0]]) return;
      children[p[0]].push(j.id);
    });
  });
  function collectAncestors(id) {
    if (ancestorsCache[id]) return ancestorsCache[id];
    var seen = {}, stack = [id], out = [];
    while (stack.length) {
      var cur = stack.pop();
      (byId[cur].parents || []).forEach(function (p) {
        if (byId[p[0]] && !seen[p[0]]) { seen[p[0]] = 1; out.push(p[0]); stack.push(p[0]); }
      });
    }
    ancestorsCache[id] = out;
    return out;
  }
  function collectDescendants(id) {
    var seen = {}, stack = [id], out = [];
    while (stack.length) {
      var cur = stack.pop();
      (children[cur] || []).forEach(function (c) {
        if (!seen[c]) { seen[c] = 1; out.push(c); stack.push(c); }
      });
    }
    return out;
  }

  /* 레이아웃: 세로 = 시대, 가로 = 7개 계열 레인 */
  var layout = {};
  var bands = [];
  var totalW = RAIL + famOrder.length * LANE;
  var yCursor = 0;

  eras.forEach(function (era) {
    var inEra = jobs.filter(function (j) { return j.era === era.bucket; });
    var perFam = {};
    famOrder.forEach(function (f) { perFam[f] = []; });
    inEra.forEach(function (j) {
      if (!perFam[j.fam]) perFam[j.fam] = [];
      perFam[j.fam].push(j);
    });
    var maxSlots = 1;
    famOrder.forEach(function (f) {
      perFam[f].sort(function (a, b) { return a.year - b.year || a.ko.localeCompare(b.ko); });
      maxSlots = Math.max(maxSlots, perFam[f].length);
    });
    var bandH = PAD_TOP + maxSlots * ROW_H + PAD_BOTTOM;
    bands.push({ bucket: era.bucket, label: era.label, note: era.note, top: yCursor, height: bandH });

    famOrder.forEach(function (f, fi) {
      perFam[f].forEach(function (j, i) {
        layout[j.id] = {
          x: RAIL + fi * LANE + (LANE - NODE_W) / 2,
          y: yCursor + PAD_TOP + i * ROW_H,
          w: NODE_W,
          h: NODE_H
        };
      });
    });
    yCursor += bandH;
  });
  var totalH = Math.max(yCursor, 400);

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var nodesEl = $("#nodes");
  var edgesEl = $("#edges");
  var gutterEl = $("#erasGutter");
  var canvasEl = $("#canvas");
  var stageEl = $("#stage");
  var panelEl = $("#panel");
  var panelBody = $("#panelBody");
  var scrimEl = $("#scrim");

  canvasEl.style.width = totalW + "px";
  canvasEl.style.height = totalH + "px";
  edgesEl.setAttribute("viewBox", "0 0 " + totalW + " " + totalH);
  edgesEl.setAttribute("preserveAspectRatio", "none");
  edgesEl.style.width = totalW + "px";
  edgesEl.style.height = totalH + "px";

  bands.forEach(function (b) {
    var d = document.createElement("div");
    d.className = "era-mark";
    d.style.top = b.top + "px";
    d.style.height = b.height + "px";
    d.innerHTML = "<b>" + b.label + "</b><em>" + b.note + "</em>";
    gutterEl.appendChild(d);
  });

  var nodeEls = {};
  var frag = document.createDocumentFragment();
  jobs.forEach(function (j) {
    var p = layout[j.id];
    var f = famMap[j.fam];
    var el = document.createElement("button");
    el.type = "button";
    el.className = "node" + (LANDMARKS[j.id] ? " landmark" : "");
    el.style.left = p.x + "px";
    el.style.top = p.y + "px";
    el.style.setProperty("--c", f.color[1]);
    el.style.setProperty("--c1", f.color[0]);
    el.style.setProperty("--c2", f.color[1]);
    el.dataset.id = j.id;
    el.setAttribute("aria-label", j.ko + " (" + j.en + ", " + j.year + "년경) — 상세 보기");
    el.innerHTML =
      '<span class="ko">' + j.ko + "</span>" +
      '<span class="en">' + j.en + "</span>" +
      '<span class="yr">' + j.year + "</span>";
    nodeEls[j.id] = el;
    frag.appendChild(el);
  });
  nodesEl.appendChild(frag);

  /* 엣지 */
  var SVG_NS = "http://www.w3.org/2000/svg";
  var defs = document.createElementNS(SVG_NS, "defs");
  G.families.forEach(function (f) {
    var m = document.createElementNS(SVG_NS, "marker");
    m.setAttribute("id", "arrow-" + f.id);
    m.setAttribute("viewBox", "0 0 10 8");
    m.setAttribute("refX", "8.4");
    m.setAttribute("refY", "4");
    m.setAttribute("markerWidth", "7");
    m.setAttribute("markerHeight", "6");
    m.setAttribute("orient", "auto-start-reverse");
    var p = document.createElementNS(SVG_NS, "path");
    p.setAttribute("d", "M0,0 L9,4 L0,8 z");
    p.setAttribute("fill", rgba(f.color[1], 0.95));
    m.appendChild(p);
    defs.appendChild(m);
  });
  edgesEl.appendChild(defs);

  var edgeEls = [];
  function curvePath(a, b) {
    var sx = a.x + a.w / 2, sy = a.y + a.h, tx = b.x + b.w / 2, ty = b.y - 2;
    var c = Math.max(16, Math.abs(ty - sy) * 0.42);
    if (Math.abs(tx - sx) < 1.5) return "M" + sx + "," + sy + " L" + tx + "," + ty;
    return "M" + sx + "," + sy + " C" + sx + "," + (sy + c) + " " + tx + "," + (ty - c) + " " + tx + "," + ty;
  }
  jobs.forEach(function (j) {
    (j.parents || []).forEach(function (pr) {
      var pid = pr[0], type = pr[1] || "solid";
      if (!layout[pid] || !layout[j.id]) return;
      var f = famMap[j.fam];
      var path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", curvePath(layout[pid], layout[j.id]));
      path.setAttribute("class", "edge" + (type === "solid" ? "" : " dashed"));
      path.setAttribute("stroke", rgba(f.color[1], type === "solid" ? 0.55 : 0.4));
      path.setAttribute("stroke-width", type === "solid" ? "1.6" : "1.3");
      path.setAttribute("marker-end", "url(#arrow-" + j.fam + ")");
      path.dataset.child = j.id;
      path.dataset.parent = pid;
      edgesEl.appendChild(path);
      edgeEls.push(path);
    });
  });
  /* 양방향: 위로 돌아가는 화살표 하나 더 */
  jobs.forEach(function (j) {
    (j.parents || []).forEach(function (pr) {
      if (pr[1] !== "both") return;
      var pid = pr[0];
      if (!layout[pid] || !layout[j.id]) return;
      var a = layout[j.id], b = layout[pid];
      var sx = a.x + a.w / 2, sy = a.y, tx = b.x + b.w / 2, ty = b.y + b.h + 2;
      var c = Math.max(16, Math.abs(ty - sy) * 0.42);
      var d = "M" + sx + "," + sy + " C" + sx + "," + (sy - c) + " " + tx + "," + (ty + c) + " " + tx + "," + ty;
      var f = famMap[byId[pid].fam];
      var path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("class", "edge dashed back");
      path.setAttribute("stroke", rgba(f.color[1], 0.3));
      path.setAttribute("stroke-width", "1.2");
      path.setAttribute("marker-end", "url(#arrow-" + byId[pid].fam + ")");
      path.dataset.child = pid;
      path.dataset.parent = j.id;
      edgesEl.appendChild(path);
      edgeEls.push(path);
    });
  });

  /* 계열 필터 */
  var chipsEl = $("#familyChips");
  var activeFam = null;
  var allChip = document.createElement("button");
  allChip.type = "button";
  allChip.className = "chip";
  allChip.dataset.fam = "";
  allChip.setAttribute("aria-pressed", "true");
  allChip.innerHTML = '<i style="--c:#e9edf7"></i>전체 계열';
  chipsEl.appendChild(allChip);

  G.families.forEach(function (f) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.dataset.fam = f.id;
    b.setAttribute("aria-pressed", "false");
    b.style.setProperty("--c", f.color[1]);
    b.style.setProperty("--c1", f.color[0]);
    b.style.setProperty("--c2", f.color[1]);
    var count = jobs.filter(function (j) { return j.fam === f.id; }).length;
    b.innerHTML = "<i></i>" + f.ko + ' <span style="opacity:.6">' + count + "</span>";
    b.title = f.en;
    chipsEl.appendChild(b);
  });

  chipsEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    setFamily(btn.dataset.fam || null);
  });

  function setFamily(fam) {
    activeFam = fam;
    Array.prototype.forEach.call(chipsEl.children, function (c) {
      c.setAttribute("aria-pressed", String((c.dataset.fam || null) === fam));
    });
    applyFilters();
    var h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (fam) {
      if (h !== fam) history.replaceState(null, "", "#" + fam);
    } else if (famMap[h]) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  $("#legend").innerHTML =
    '<span><i class="swatch"></i>실선 · 직계 파생</span>' +
    '<span><i class="swatch dashed"></i>점선 · 영향·경력 이동</span>' +
    '<span><i class="swatch both"></i>양방향 · 함께 발전</span>';

  /* 시대 점프 */
  var eraBar = $("#eraBar");
  bands.forEach(function (b) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "era-btn";
    btn.textContent = b.label;
    btn.title = b.note;
    btn.addEventListener("click", function () { scrollToY(b.top - 8); });
    eraBar.appendChild(btn);
  });

  function scrollToY(y) {
    stageEl.scrollTo({ top: y * zoom, behavior: reduceMotion ? "auto" : "smooth" });
  }

  /* 줌 */
  var zoom = 1;
  function applyZoom() {
    canvasEl.style.transform = "scale(" + zoom + ")";
    canvasEl.style.marginRight = totalW * (zoom - 1) + "px";
    canvasEl.style.marginBottom = totalH * (zoom - 1) + "px";
  }
  function setZoom(z) {
    zoom = Math.min(1.8, Math.max(0.4, Math.round(z * 100) / 100));
    applyZoom();
  }
  $("#zoomIn").addEventListener("click", function () { setZoom(zoom + 0.12); });
  $("#zoomOut").addEventListener("click", function () { setZoom(zoom - 0.12); });
  $("#zoomFit").addEventListener("click", function () {
    setZoom((stageEl.clientWidth - 26) / totalW);
    stageEl.scrollTo({ left: 0, top: stageEl.scrollTop });
  });

  function initWithZoom() {
    if (window.innerWidth < 760) {
      zoom = Math.min(1, Math.max(0.44, (window.innerWidth - 34) / totalW));
    } else if (stageEl.clientWidth > 0 && stageEl.clientWidth < totalW + 20) {
      zoom = Math.max(0.62, (stageEl.clientWidth - 24) / totalW);
    }
    applyZoom();
  }
  initWithZoom();

  /* 필터 · 검색 */
  var query = "";
  var resultHint = $("#resultHint");

  function normalize(s) {
    return s.toLowerCase().replace(/\s+/g, "").replace(/[-·/()]/g, "");
  }
  function matchesQuery(j, q) {
    if (!q) return false;
    var hay = normalize(j.ko + " " + j.en + " " + j.id + " " + j.fam + " " + (famMap[j.fam] ? famMap[j.fam].ko : ""));
    var parts = q.split(/\s+/).filter(Boolean).map(normalize);
    return parts.every(function (p) { return hay.indexOf(p) !== -1; });
  }

  function applyFilters() {
    var hits = 0;
    jobs.forEach(function (j) {
      var el = nodeEls[j.id];
      var famOk = !activeFam || j.fam === activeFam;
      var qOk = !query || matchesQuery(j, query);
      if (qOk && query) hits++;
      el.classList.toggle("is-dim", !(famOk && qOk));
      el.classList.toggle("is-match", !!query && qOk);
    });
    edgeEls.forEach(function (p) {
      var c = byId[p.dataset.child], pr = byId[p.dataset.parent];
      if (!c || !pr) return;
      var vis = (!activeFam || (c.fam === activeFam && pr.fam === activeFam)) &&
        (!query || matchesQuery(c, query));
      p.style.opacity = vis ? "1" : "0.07";
    });
    if (query) {
      resultHint.textContent = hits ? hits + "개 직무와 일치" : "일치하는 직무가 없습니다";
    } else if (activeFam) {
      resultHint.textContent = famMap[activeFam].ko + " 계열만 표시 중 (직무 " +
        jobs.filter(function (j) { return j.fam === activeFam; }).length + "개)";
    } else {
      resultHint.textContent = "직무 " + jobs.length + "개 · 계열 " + G.families.length + "개";
    }
  }

  var searchInput = $("#search");
  var clearBtn = $("#searchClear");
  var t;
  searchInput.addEventListener("input", function () {
    clearTimeout(t);
    var v = searchInput.value.trim();
    clearBtn.hidden = !v;
    t = setTimeout(function () { query = v; applyFilters(); }, 120);
  });
  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    query = "";
    clearBtn.hidden = true;
    applyFilters();
    searchInput.focus();
  });

  /* 형광 하이라이트: 조상·후손 */
  function clearHighlight() {
    Object.keys(nodeEls).forEach(function (k) {
      nodeEls[k].classList.remove("is-active", "is-anc");
    });
    edgeEls.forEach(function (p) { p.style.strokeWidth = ""; });
    applyFilters();
  }
  function highlight(id) {
    if (!id || !byId[id]) { clearHighlight(); return; }
    var rel = {};
    rel[id] = 1;
    collectAncestors(id).forEach(function (a) { rel[a] = 1; });
    collectDescendants(id).forEach(function (d) { rel[d] = 1; });
    Object.keys(nodeEls).forEach(function (k) {
      var el = nodeEls[k];
      el.classList.toggle("is-active", k === id);
      el.classList.toggle("is-anc", k !== id && !!rel[k]);
      el.classList.toggle("is-dim", !rel[k]);
    });
    edgeEls.forEach(function (p) {
      var on = rel[p.dataset.child] && rel[p.dataset.parent];
      p.style.opacity = on ? "0.95" : "0.06";
      p.style.strokeWidth = on ? "2.1" : "";
    });
  }

  nodesEl.addEventListener("pointerover", function (e) {
    var n = e.target.closest(".node");
    if (n) highlight(n.dataset.id);
  });
  nodesEl.addEventListener("pointerout", function (e) {
    var n = e.target.closest(".node");
    if (n && !n.contains(e.relatedTarget)) clearHighlight();
  });
  nodesEl.addEventListener("focusin", function (e) {
    var n = e.target.closest(".node");
    if (n) highlight(n.dataset.id);
  });
  nodesEl.addEventListener("focusout", function () { clearHighlight(); });

  /* 상세 패널 */
  var activeId = null;
  var lastFocused = null;

  function relButtons(list) {
    if (!list.length) return '<p class="empty">기록된 연결이 없습니다.</p>';
    return '<div class="rel">' + list.map(function (r) {
      var j = byId[r[0]];
      if (!j) return "";
      var tag = r[1] === "solid" ? "파생" : r[1] === "both" ? "양방향" : "영향";
      return '<button class="rel-btn" type="button" data-goto="' + j.id + '">' + j.ko +
        ' <span class="k">' + tag + " · " + j.year + "</span></button>";
    }).join("") + "</div>";
  }

  function openPanel(id, opts) {
    var j = byId[id];
    if (!j) return;
    var f = famMap[j.fam];
    activeId = id;
    lastFocused = document.activeElement;
    var parentList = (j.parents || []).slice();
    var descList = (children[id] || []).map(function (c) {
      var edge = (byId[c].parents || []).filter(function (p) { return p[0] === id; })[0];
      return [c, edge ? edge[1] : "solid"];
    });
    var yearText = j.year === 1940 ? "1940년대 이전·초" : j.year + "년경";

    panelBody.innerHTML =
      '<span class="panel-fam" style="--c:' + f.color[1] + '">' + f.ko + "</span>" +
      '<h3 id="panelTitle">' + j.ko + "</h3>" +
      '<p class="en-name">' + j.en + "</p>" +
      '<div class="year-line"><b>' + j.year + "년</b><span>" + j.note + " · 추정치(c.)</span></div>" +
      '<p class="desc">' + j.desc + "</p>" +
      "<h4>부모 · 영향 (" + (j.parents || []).length + ")</h4>" + relButtons(j.parents || []) +
      "<h4>파생 · 후손 (" + (children[id] || []).length + ")</h4>" + relButtons(descList) +
      '<div class="link-row"><button class="copy" type="button" data-copy="' + j.id + '">링크 복사</button>' +
      '<button class="copy" type="button" data-famjump="' + j.fam + '">같은 계열만 보기</button></div>';

    panelEl.classList.add("open");
    panelEl.setAttribute("aria-hidden", "false");
    scrimEl.hidden = false;
    if (history && location.hash !== "#" + j.id) history.replaceState(null, "", "#" + j.id);
    highlight(id);
  }

  function closePanel(restoreFocus) {
    panelEl.classList.remove("open");
    panelEl.setAttribute("aria-hidden", "true");
    scrimEl.hidden = true;
    activeId = null;
    clearHighlight();
    var h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (byId[h]) history.replaceState(null, "", location.pathname + location.search);
    if (restoreFocus && lastFocused && lastFocused.isConnected) lastFocused.focus({ preventScroll: true });
  }

  nodesEl.addEventListener("click", function (e) {
    var n = e.target.closest(".node");
    if (n) openPanel(n.dataset.id);
  });

  panelBody.addEventListener("click", function (e) {
    var g = e.target.closest("[data-goto]");
    if (g) {
      var id = g.getAttribute("data-goto");
      openPanel(id);
      scrollToNode(id);
      if (nodeEls[id]) nodeEls[id].focus({ preventScroll: true });
      return;
    }
    var c = e.target.closest("[data-copy]");
    if (c) {
      var url = location.origin + location.pathname + "#" + c.getAttribute("data-copy");
      var done = function () {
        c.textContent = "복사됨!";
        setTimeout(function () { c.textContent = "링크 복사"; }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () {});
      else window.prompt("이 주소를 복사하세요", url);
      return;
    }
    var fj = e.target.closest("[data-famjump]");
    if (fj) {
      closePanel(false);
      setFamily(fj.getAttribute("data-famjump"));
    }
  });

  $("#panelClose").addEventListener("click", function () { closePanel(true); });
  scrimEl.addEventListener("click", function () { closePanel(true); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (panelEl.classList.contains("open")) { e.preventDefault(); closePanel(true); }
      else if (searchInput.value) {
        searchInput.value = ""; query = ""; clearBtn.hidden = true; applyFilters();
      }
    }
  });

  function scrollToNode(id) {
    var p = layout[id];
    if (!p) return;
    stageEl.scrollTo({
      top: Math.max(0, p.y * zoom - stageEl.clientHeight / 2 + (p.h * zoom) / 2),
      left: Math.max(0, p.x * zoom - stageEl.clientWidth / 2 + (p.w * zoom) / 2),
      behavior: reduceMotion ? "auto" : "smooth"
    });
  }

  /* 방향키 탐색 */
  nodesEl.addEventListener("keydown", function (e) {
    var n = e.target.closest(".node");
    if (!n) return;
    var key = e.key;
    if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Home", "End"].indexOf(key) === -1) return;
    e.preventDefault();
    if (key === "Home") { nodeEls[jobs[0].id].focus({ preventScroll: true }); scrollToNode(jobs[0].id); return; }
    if (key === "End") {
      var last = jobs[jobs.length - 1].id;
      nodeEls[last].focus({ preventScroll: true }); scrollToNode(last); return;
    }
    var id = n.dataset.id, p = layout[id];
    var best = null, bestScore = Infinity;
    jobs.forEach(function (j) {
      if (j.id === id) return;
      var q = layout[j.id];
      var dx = q.x + q.w / 2 - (p.x + p.w / 2);
      var dy = q.y - p.y;
      var sc = Infinity;
      if (key === "ArrowDown" && dy > 10) sc = dy + Math.abs(dx) * 1.6;
      else if (key === "ArrowUp" && dy < -10) sc = -dy + Math.abs(dx) * 1.6;
      else if (key === "ArrowRight" && dx > 10) sc = dx * 1.4 + Math.abs(dy) * 2.2;
      else if (key === "ArrowLeft" && dx < -10) sc = -dx * 1.4 + Math.abs(dy) * 2.2;
      if (sc < bestScore) { bestScore = sc; best = j.id; }
    });
    if (best && nodeEls[best]) {
      nodeEls[best].focus({ preventScroll: true });
      scrollToNode(best);
    }
  });

  /* 해시 딥링크 */
  function handleHash() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!h) return;
    if (byId[h]) {
      openPanel(h);
      scrollToNode(h);
      if (nodeEls[h]) nodeEls[h].focus({ preventScroll: true });
    } else if (famMap[h]) {
      setFamily(h);
    }
  }
  window.addEventListener("hashchange", handleHash);

  /* 이야기 카드 */
  var storyJump = {
    "coding-to-programmer": "programmer",
    "webmaster-split": "fullstack",
    "prompt-engineer": "prompt_eng",
    "scrum-master": "scrum_master",
    "systems-engineer-two-faces": "systems_eng",
    "fde-ibm": "fde",
    "devops-sre-platform": "platform_eng"
  };
  var grid = $("#storyGrid");
  G.stories.forEach(function (s) {
    var f = famMap[s.fam] || G.families[0];
    var card = document.createElement("article");
    card.className = "story";
    card.style.setProperty("--c", f.color[1]);
    card.innerHTML =
      '<div class="st-top"><span class="st-era">' + s.era + '</span><span class="st-fam">' + f.ko + "</span></div>" +
      "<h3>" + s.title + "</h3><p>" + s.body + "</p>" +
      (storyJump[s.id] ? '<button class="st-jump" type="button" data-story="' + storyJump[s.id] + '">계보도에서 보기 →</button>' : "");
    grid.appendChild(card);
  });
  grid.addEventListener("click", function (e) {
    var b = e.target.closest("[data-story]");
    if (!b) return;
    location.hash = b.getAttribute("data-story");
    handleHash();
    $("#chart").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });

  /* 히어로 카운터 */
  var counters = document.querySelectorAll("[data-count]");
  if (reduceMotion) {
    Array.prototype.forEach.call(counters, function (c) { c.textContent = c.dataset.count; });
  } else {
    Array.prototype.forEach.call(counters, function (c) {
      var target = Number(c.dataset.count), start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min(1, (ts - start) / 900);
        c.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  applyFilters();
  if (location.hash) handleHash();

  window.addEventListener("resize", function () { clearHighlight(); });

  window.__lineage = { jobs: jobs, layout: layout, bands: bands, totalW: totalW, totalH: totalH };
})();
