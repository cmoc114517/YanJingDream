/**
 * YanJing & Hundred Dream — Internationalization (i18n)
 * Supports: zh-CN (Chinese), en (English)
 * Usage: data-i18n="key" on any element; data-i18n-placeholder="key" for inputs
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     TRANSLATION STRINGS
  ───────────────────────────────────────────── */
  const translations = {
    'zh-CN': {
      /* ── Navigation ── */
      'nav.help':       '帮助',
      'nav.login':      '登录',
      'nav.logout':     '退出',
      'nav.register':   '注册',
      'nav.lang':       'EN',            // 当前语言是中文，按钮显示"切换到英文"

      /* ── Auth Modal ── */
      'auth.brand':             'YanJing And Hundred Dream',
      'auth.register.title':    '创建你的账户',
      'auth.register.subtitle': '加入 YanJing 生态，探索无限可能',
      'auth.login.title':       '登录',
      'auth.login.subtitle':    '欢迎回来，继续你的 YanJing 之旅',
      'auth.field.username':    '用户名',
      'auth.field.email':       '电子邮件',
      'auth.field.password':    '密码',
      'auth.field.code':        '注册码',
      'auth.field.account':     '用户名 或 邮箱',
      'auth.placeholder.username': '3-30 个字符，字母数字下划线',
      'auth.placeholder.email':    'example@mail.com',
      'auth.placeholder.password': '至少 8 个字符',
      'auth.placeholder.code':     '请输入邀请注册码',
      'auth.placeholder.account':  '输入用户名或邮箱地址',
      'auth.placeholder.loginpwd': '输入密码',
      'auth.hint.code':         '注册码为必填项',
      'auth.btn.register':      '立即注册',
      'auth.btn.login':         '登录',
      'auth.btn.loading':       '请稍候…',
      'auth.switch.to_login':   '已有账户？',
      'auth.switch.to_login_link': '登录',
      'auth.switch.to_register':   '还没有账户？',
      'auth.switch.to_register_link': '创建新账户',
      'auth.success.start':     '开始探索',

      /* ── Index Hero ── */
      'index.hero.eyebrow':   '全新发布',
      'index.hero.subtitle':  '为 YanJing 智能而生。重塑想象。',
      'index.hero.btn1':      '进一步了解',
      'index.hero.btn2':      '立即注册',

      /* ── Index Products ── */
      'index.products.label':  '产品',
      'index.products.title':  '探索全系列产品',
      'index.products.desc':   '每一款产品，都是 YanJing And Hundred Dream 对极致的不妥协。',
      'index.product.new':     '全新',
      'index.product.ycall.tagline':   '钛金属，强得很。',
      'index.product.ypad.tagline':    '轻盈。多彩。全能。',
      'index.product.yvision.tagline': '欢迎来到空间计算时代。',
      'index.product.learn':   '进一步了解',
      'index.product.buy':     '购买',

      /* ── Index Features ── */
      'index.feat.label':          '为什么选择我们',
      'index.feat.title':          'YanJing 的不同之处',
      'index.feat.desc':           '从硬件到软件，从设计到体验，每一个细节都经过精心打磨。',
      'index.feat.chip.title':     '自研芯片',
      'index.feat.chip.desc':      'Y1 芯片为所有设备提供澎湃动力，性能与能效的完美平衡，让每一次交互都流畅自如。',
      'index.feat.privacy.title':  '隐私保护',
      'index.feat.privacy.desc':   '隐私是基本人权。我们让每一个产品都从设计之初就内置了强大的隐私保护功能。',
      'index.feat.carbon.title':   '碳中和承诺',
      'index.feat.carbon.desc':    '到 2030 年，全线产品和供应链将实现 100% 碳中和。这是我们对地球的承诺。',
      'index.feat.eco.title':      '无缝生态',
      'index.feat.eco.desc':       'Ycall、YPad 和 YVision Pro 协同工作，带来前所未有的一体化体验。',
      'index.feat.access.title':   '人人可用',
      'index.feat.access.desc':    '辅助功能内置于每一款设备，让每个人都能以自己的方式创造和连接。',
      'index.feat.service.title':  '专业服务',
      'index.feat.service.desc':   'YanJing Care+ 提供全方位保障，优先技术支持让你安心使用每一款产品。',

      /* ── Index Banner ── */
      'index.banner.title': '欢迎来到空间计算时代',
      'index.banner.desc':  '将数字内容无缝融入你的物理空间。做任何事，从此有了无限可能。',
      'index.banner.btn':   '进一步了解',

      /* ── Index Pricing ── */
      'index.pricing.label': 'YanJing Care+',
      'index.pricing.title': '选择最适合你的服务计划',
      'index.pricing.desc':  '每一位用户都值得获得最好的技术支持。',

      /* ── Footer ── */
      'footer.col1.title': '选购了解',
      'footer.col2.title': '账户',
      'footer.col3.title': '关于 YanJing',
      'footer.col4.title': '价值观',
      'footer.col2.create': '创建 YanJing ID',
      'footer.col3.news':    '新闻中心',
      'footer.col3.careers': '工作机会',
      'footer.col3.investors': '投资者关系',
      'footer.col4.access':  '辅助功能',
      'footer.col4.env':     '环境责任',
      'footer.col4.privacy': '隐私保护',
      'footer.col4.supplier':'供应商责任',
      'footer.copyright':    'Copyright © 2025 YanJing And Hundred Dream. 保留所有权利。',
      'footer.privacy':      '隐私政策',
      'footer.terms':        '使用条款',
      'footer.sales':        '销售政策',

      /* ── About ── */
      'about.hero.title': '关于 YanJing',
      'about.hero.desc':  '二十六年专注创新——从 2000 年到今天，我们始终相信科技的力量可以改变每一个人的生活。',

      /* ── Ycall ── */
      'ycall.hero.badge':    '全新发布',
      'ycall.hero.tagline':  '钛金属，强得很。',
      'ycall.hero.price':    '¥7,999 起',
      'ycall.hero.btn.buy':  '购买',
      'ycall.hero.btn.reg':  '立即注册',
      'ycall.feat.label':    '核心亮点',
      'ycall.feat.title':    '为 YanJing 智能而生。',
      'ycall.feat.desc':     '每一处细节，都经过精心打磨。这才是你期待的智能手机。',
      'ycall.specs.label':   '技术规格',
      'ycall.specs.title':   '全面，一览无余。',
      'ycall.specs.desc':    'Ycall 2 Pro 的每一项参数，皆为极致而生。',
      'ycall.buy.label':     '选择你的 Ycall',
      'ycall.buy.title':     '哪一款适合你？',
      'ycall.btn.buy':       '购买',
      'ycall.period.from':   '起售价',
      'ycall.period.rec':    '起售价 · 推荐',

      /* ── YPad ── */
      'ypad.hero.badge':    '全新发布',
      'ypad.hero.tagline':  '轻盈。多彩。全能。',
      'ypad.hero.btn.buy':  '购买',
      'ypad.hero.btn.reg':  '立即注册',

      /* ── YVision ── */
      'yvision.hero.badge':   '全新发布',
      'yvision.hero.tagline': '欢迎来到空间计算时代。',
      'yvision.hero.btn.buy': '购买',
      'yvision.hero.btn.reg': '立即注册',

      /* ── News ── */
      'news.hero.title': '新闻中心',
      'news.hero.desc':  '来自 YanJing 的最新动态与重要公告。',

      /* ── Careers ── */
      'careers.hero.title': '工作机会',
      'careers.hero.desc':  '加入 YanJing，与我们一起打造改变世界的产品。',

      /* ── Investors ── */
      'investors.hero.title': '投资者关系',
      'investors.hero.desc':  '我们致力于为股东、投资者和分析师提供透明、及时的财务信息。',

      /* ── Accessibility ── */
      'access.hero.title': '辅助功能',
      'access.hero.desc':  '科技应当为每个人服务。我们将辅助功能融入每一款产品的设计之中。',

      /* ── Environment ── */
      'env.hero.title': '环境责任',
      'env.hero.desc':  '我们深知企业对环境的影响。这是我们对地球的承诺。',

      /* ── Privacy ── */
      'privacy.hero.title': '隐私保护',
      'privacy.hero.desc':  '隐私是每个人的基本权利。在 YanJing，保护用户隐私不是一项功能，而是我们的根本原则。',

      /* ── Supplier ── */
      'supplier.hero.title': '供应商责任',
      'supplier.hero.desc':  '我们要求整个供应链中的每一个合作伙伴，都达到与 YanJing 相同的标准。',

      /* ── Help / Beta pages ── */
      'help.title':  '帮助与反馈',
      'beta.title':  '内测须知',

      /* ── Language picker modal ── */
      'langpicker.question': '您想使用哪种语言？',
      'langpicker.sub':      'Which language would you like to use?',
      'langpicker.zh':       '中文',
      'langpicker.en':       'English',
    },

    'en': {
      /* ── Navigation ── */
      'nav.help':    'Help',
      'nav.login':   'Sign In',
      'nav.logout':  'Sign Out',
      'nav.register':'Sign Up',
      'nav.lang':    '中文',           // currently English, button switches to Chinese

      /* ── Auth Modal ── */
      'auth.brand':             'YanJing And Hundred Dream',
      'auth.register.title':    'Create Your Account',
      'auth.register.subtitle': 'Join the YanJing ecosystem and discover what\'s possible.',
      'auth.login.title':       'Sign In',
      'auth.login.subtitle':    'Welcome back. Pick up where you left off.',
      'auth.field.username':    'Username',
      'auth.field.email':       'Email',
      'auth.field.password':    'Password',
      'auth.field.code':        'Invite Code',
      'auth.field.account':     'Username or Email',
      'auth.placeholder.username': '3–30 characters, letters, numbers, underscores',
      'auth.placeholder.email':    'example@mail.com',
      'auth.placeholder.password': 'At least 8 characters',
      'auth.placeholder.code':     'Enter your invite code',
      'auth.placeholder.account':  'Enter your username or email',
      'auth.placeholder.loginpwd': 'Enter your password',
      'auth.hint.code':         'Invite code is required',
      'auth.btn.register':      'Create Account',
      'auth.btn.login':         'Sign In',
      'auth.btn.loading':       'Please wait…',
      'auth.switch.to_login':   'Already have an account?',
      'auth.switch.to_login_link': 'Sign in',
      'auth.switch.to_register':   'Don\'t have an account?',
      'auth.switch.to_register_link': 'Create one',
      'auth.success.start':     'Start Exploring',

      /* ── Index Hero ── */
      'index.hero.eyebrow':   'New Arrival',
      'index.hero.subtitle':  'Built for YanJing Intelligence. Reimagined.',
      'index.hero.btn1':      'Learn More',
      'index.hero.btn2':      'Get Started',

      /* ── Index Products ── */
      'index.products.label': 'Products',
      'index.products.title': 'Explore the Full Lineup',
      'index.products.desc':  'Every product is a testament to YanJing And Hundred Dream\'s uncompromising pursuit of excellence.',
      'index.product.new':    'New',
      'index.product.ycall.tagline':   'Titanium tough.',
      'index.product.ypad.tagline':    'Light. Vibrant. Unstoppable.',
      'index.product.yvision.tagline': 'Welcome to spatial computing.',
      'index.product.learn':  'Learn More',
      'index.product.buy':    'Buy',

      /* ── Index Features ── */
      'index.feat.label':          'Why YanJing',
      'index.feat.title':          'What Makes YanJing Different',
      'index.feat.desc':           'From hardware to software, from design to experience — every detail is crafted with intention.',
      'index.feat.chip.title':     'Custom Silicon',
      'index.feat.chip.desc':      'The Y1 chip powers every YanJing device with the perfect balance of performance and efficiency, making every interaction feel effortless.',
      'index.feat.privacy.title':  'Privacy by Design',
      'index.feat.privacy.desc':   'Privacy is a fundamental right. Every YanJing product is built from the ground up with powerful privacy protections baked in.',
      'index.feat.carbon.title':   'Carbon Neutral by 2030',
      'index.feat.carbon.desc':    'Our entire product line and supply chain will be 100% carbon neutral by 2030. This is our promise to the planet.',
      'index.feat.eco.title':      'Seamless Ecosystem',
      'index.feat.eco.desc':       'Ycall, YPad and YVision Pro work together like never before, delivering a unified experience across all your devices.',
      'index.feat.access.title':   'Accessibility for All',
      'index.feat.access.desc':    'Accessibility is built into every device so everyone can create, communicate and connect in their own way.',
      'index.feat.service.title':  'Expert Support',
      'index.feat.service.desc':   'YanJing Care+ gives you comprehensive coverage and priority technical support, so you can use every product with confidence.',

      /* ── Index Banner ── */
      'index.banner.title': 'Welcome to the Era of Spatial Computing',
      'index.banner.desc':  'Seamlessly blend digital content into your physical world. The possibilities are unlimited.',
      'index.banner.btn':   'Learn More',

      /* ── Index Pricing ── */
      'index.pricing.label': 'YanJing Care+',
      'index.pricing.title': 'Pick the Plan That\'s Right for You',
      'index.pricing.desc':  'Every user deserves world-class support.',

      /* ── Footer ── */
      'footer.col1.title': 'Shop & Explore',
      'footer.col2.title': 'Account',
      'footer.col3.title': 'About YanJing',
      'footer.col4.title': 'Values',
      'footer.col2.create': 'Create YanJing ID',
      'footer.col3.news':    'Newsroom',
      'footer.col3.careers': 'Careers',
      'footer.col3.investors':'Investor Relations',
      'footer.col4.access':  'Accessibility',
      'footer.col4.env':     'Environment',
      'footer.col4.privacy': 'Privacy',
      'footer.col4.supplier':'Supplier Responsibility',
      'footer.copyright':    'Copyright © 2025 YanJing And Hundred Dream. All rights reserved.',
      'footer.privacy':      'Privacy Policy',
      'footer.terms':        'Terms of Use',
      'footer.sales':        'Sales Policy',

      /* ── About ── */
      'about.hero.title': 'About YanJing',
      'about.hero.desc':  'Twenty-six years of focused innovation — from 2000 to today, we\'ve always believed that technology has the power to transform every life.',

      /* ── Ycall ── */
      'ycall.hero.badge':    'New',
      'ycall.hero.tagline':  'Titanium tough.',
      'ycall.hero.price':    'From ¥7,999',
      'ycall.hero.btn.buy':  'Buy',
      'ycall.hero.btn.reg':  'Get Started',
      'ycall.feat.label':    'Highlights',
      'ycall.feat.title':    'Built for YanJing Intelligence.',
      'ycall.feat.desc':     'Every detail, meticulously refined. This is the smartphone you\'ve been waiting for.',
      'ycall.specs.label':   'Tech Specs',
      'ycall.specs.title':   'Every spec, at a glance.',
      'ycall.specs.desc':    'The numbers behind Ycall 2 Pro — built for performance.',
      'ycall.buy.label':     'Choose Your Ycall',
      'ycall.buy.title':     'Which one is right for you?',
      'ycall.btn.buy':       'Buy',
      'ycall.period.from':   'Starting price',
      'ycall.period.rec':    'Starting price · Recommended',

      /* ── YPad ── */
      'ypad.hero.badge':    'New',
      'ypad.hero.tagline':  'Light. Vibrant. Unstoppable.',
      'ypad.hero.btn.buy':  'Buy',
      'ypad.hero.btn.reg':  'Get Started',

      /* ── YVision ── */
      'yvision.hero.badge':   'New',
      'yvision.hero.tagline': 'Welcome to spatial computing.',
      'yvision.hero.btn.buy': 'Buy',
      'yvision.hero.btn.reg': 'Get Started',

      /* ── News ── */
      'news.hero.title': 'Newsroom',
      'news.hero.desc':  'The latest updates and announcements from YanJing.',

      /* ── Careers ── */
      'careers.hero.title': 'Careers',
      'careers.hero.desc':  'Join YanJing and help us build products that change the world.',

      /* ── Investors ── */
      'investors.hero.title': 'Investor Relations',
      'investors.hero.desc':  'We\'re committed to providing transparent, timely financial information for our shareholders, investors and analysts.',

      /* ── Accessibility ── */
      'access.hero.title': 'Accessibility',
      'access.hero.desc':  'Technology should work for everyone. We design accessibility into every product from the very start.',

      /* ── Environment ── */
      'env.hero.title': 'Environment',
      'env.hero.desc':  'We understand the impact business has on our planet. Here is our commitment.',

      /* ── Privacy ── */
      'privacy.hero.title': 'Privacy',
      'privacy.hero.desc':  'Privacy is a fundamental human right. At YanJing, protecting your privacy isn\'t a feature — it\'s a core principle.',

      /* ── Supplier ── */
      'supplier.hero.title': 'Supplier Responsibility',
      'supplier.hero.desc':  'We hold every partner in our supply chain to the same high standards we set for ourselves.',

      /* ── Help / Beta pages ── */
      'help.title':  'Help & Feedback',
      'beta.title':  'Beta Program',

      /* ── Language picker modal ── */
      'langpicker.question': '您想使用哪种语言？',
      'langpicker.sub':      'Which language would you like to use?',
      'langpicker.zh':       '中文',
      'langpicker.en':       'English',
    }
  };

  /* ─────────────────────────────────────────────
     CORE ENGINE
  ───────────────────────────────────────────── */

  /** Read saved language, fallback to browser hint, then 'zh-CN' */
  function detectLang() {
    var saved = localStorage.getItem('yanjing_lang');
    if (saved === 'zh-CN' || saved === 'en') return saved;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('zh')) return 'zh-CN';
    if (nav) return 'en';      // any non-Chinese browser lang → English
    return 'zh-CN';
  }

  function t(key) {
    var lang = window.__yanjingLang || detectLang();
    var dict = translations[lang] || translations['zh-CN'];
    return dict[key] !== undefined ? dict[key] : (translations['zh-CN'][key] || key);
  }

  /** Apply translations to every [data-i18n] element in the document */
  function applyTranslations() {
    var lang = window.__yanjingLang;
    // Update <html lang>
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val) el.textContent = val;
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if (val) el.placeholder = val;
    });

    // Title attribute (tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var val = t(key);
      if (val) el.title = val;
    });

    // Page <title>
    var pageTitleKey = document.documentElement.getAttribute('data-page-title');
    if (pageTitleKey) {
      var pt = t(pageTitleKey);
      if (pt) document.title = pt + ' — YanJing And Hundred Dream';
    }
  }

  /** Switch language and re-apply */
  window.switchLang = function (lang) {
    window.__yanjingLang = (lang === 'en') ? 'en' : 'zh-CN';
    localStorage.setItem('yanjing_lang', window.__yanjingLang);
    applyTranslations();
    // Update the toggle button label
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      btn.textContent = t('nav.lang');
    });
  };

  /* ─────────────────────────────────────────────
     LANGUAGE PICKER MODAL (first-visit)
  ───────────────────────────────────────────── */
  function injectLangPickerModal() {
    // Only show if user hasn't chosen yet
    if (localStorage.getItem('yanjing_lang')) return;

    var overlay = document.createElement('div');
    overlay.id = 'lang-picker-overlay';
    overlay.style.cssText = [
      'position:fixed;inset:0;z-index:199999',
      'background:rgba(0,0,0,0.75)',
      'backdrop-filter:blur(20px)',
      '-webkit-backdrop-filter:blur(20px)',
      'display:flex;align-items:center;justify-content:center',
    ].join(';');

    overlay.innerHTML = [
      '<div style="',
        'background:rgba(28,28,30,0.97);',
        'border:1px solid rgba(255,255,255,0.12);',
        'border-radius:28px;',
        'padding:52px 48px 44px;',
        'width:min(460px,90vw);',
        'text-align:center;',
        'box-shadow:0 40px 100px rgba(0,0,0,0.6);',
        'animation:lpFadeIn 0.35s ease both;',
      '">',
        '<div style="font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#6e6e73;margin-bottom:24px;">YanJing And Hundred Dream</div>',
        '<div style="font-size:24px;font-weight:700;color:#f5f5f7;margin-bottom:8px;">您想使用哪种语言？</div>',
        '<div style="font-size:16px;color:#86868b;margin-bottom:40px;">Which language would you like to use?</div>',
        '<div style="display:flex;gap:16px;justify-content:center;">',
          '<button onclick="pickLang(\'zh-CN\')" style="',
            'flex:1;max-width:160px;padding:14px 0;',
            'background:#0071e3;color:#fff;border:none;border-radius:980px;',
            'font-size:17px;font-weight:500;cursor:pointer;',
            'transition:background 0.25s,transform 0.2s;',
          '" onmouseover="this.style.background=\'#0077ED\'" onmouseout="this.style.background=\'#0071e3\'">',
            '中文',
          '</button>',
          '<button onclick="pickLang(\'en\')" style="',
            'flex:1;max-width:160px;padding:14px 0;',
            'background:transparent;color:#f5f5f7;',
            'border:1px solid rgba(255,255,255,0.35);border-radius:980px;',
            'font-size:17px;font-weight:500;cursor:pointer;',
            'transition:background 0.25s,border-color 0.25s;',
          '" onmouseover="this.style.background=\'rgba(255,255,255,0.1)\'" onmouseout="this.style.background=\'transparent\'">',
            'English',
          '</button>',
        '</div>',
      '</div>',
      '<style>',
        '@keyframes lpFadeIn{from{opacity:0;transform:scale(0.93) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}',
      '</style>',
    ].join('');

    document.body.appendChild(overlay);
  }

  window.pickLang = function (lang) {
    // Remove the picker
    var overlay = document.getElementById('lang-picker-overlay');
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.25s';
      setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 280);
    }
    // Save and apply
    switchLang(lang);
  };

  /* ─────────────────────────────────────────────
     LANGUAGE TOGGLE BUTTON (nav bar)
  ───────────────────────────────────────────── */
  function injectLangToggle() {
    document.querySelectorAll('.nav-actions').forEach(function (actions) {
      // Avoid double-inject
      if (actions.querySelector('.lang-toggle-btn')) return;

      var btn = document.createElement('button');
      btn.className = 'lang-toggle-btn';
      btn.setAttribute('data-i18n', 'nav.lang');
      btn.style.cssText = [
        'font-size:12px;color:#f5f5f7;opacity:0.8;',
        'background:none;border:1px solid rgba(255,255,255,0.3);',
        'border-radius:4px;cursor:pointer;',
        'display:flex;align-items:center;height:20px;padding:0 8px;',
        'transition:opacity 0.25s,border-color 0.25s;',
        'font-family:inherit;white-space:nowrap;',
      ].join('');
      btn.textContent = t('nav.lang');
      btn.onmouseover = function () { this.style.opacity = '1'; this.style.borderColor = 'rgba(255,255,255,0.6)'; };
      btn.onmouseout  = function () { this.style.opacity = '0.8'; this.style.borderColor = 'rgba(255,255,255,0.3)'; };
      btn.onclick = function () {
        switchLang(window.__yanjingLang === 'en' ? 'zh-CN' : 'en');
      };

      // Insert before the first child (help link or login button)
      var helpLink = actions.querySelector('a[href*="userhelp"]');
      if (helpLink) {
        actions.insertBefore(btn, helpLink);
      } else {
        actions.insertBefore(btn, actions.firstChild);
      }
    });
  }

  /* ─────────────────────────────────────────────
     BOOTSTRAP
  ───────────────────────────────────────────── */
  function init() {
    window.__yanjingLang = detectLang();
    applyTranslations();
    injectLangToggle();
    // Language picker shows only when no preference saved
    if (!localStorage.getItem('yanjing_lang')) {
      injectLangPickerModal();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
