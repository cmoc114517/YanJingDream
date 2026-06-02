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
      'footer.col2.store':    'YanJing Store 账户',
      'footer.col2.cloud':    'YanJing Cloud',
      'footer.col3.about':    '公司介绍',
      'footer.legal':         '法律信息',
      'footer.rights':        'Copyright © 2026 YanJing And Hundred Dream Inc. 保留所有权利。',
      'footer.disclaimer.line1': '* 以上价格为起售价。实际零售价格可能因配置不同而有所差异。YanJing And Hundred Dream 保留所有权利。',
      'footer.disclaimer.line2': '数据准确性以购买时页面显示为准。产品供应状况随时可能变化。',


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

      /* ── Ycall 特色功能 ── */
      'ycall.feat.titanium.title':   '钛金属设计',
      'ycall.feat.titanium.desc':    '航空级钛金属边框，轻盈坚固。5 级钛金属，强度远超不锈钢，重量却大幅减轻。',
      'ycall.feat.chip.title':       'A18 Pro 芯片',
      'ycall.feat.chip.desc':        '新一代 3nm 制程芯片，CPU 速度提升 30%，GPU 渲染性能翻倍。为 AI 而生。',
      'ycall.feat.camera.title':     '48MP 三摄系统',
      'ycall.feat.camera.desc':      '4800 万像素主摄 + 超广角 + 5 倍长焦。专业级摄影，尽在掌握。',
      'ycall.feat.battery.title':    '超长续航',
      'ycall.feat.battery.desc':     '4422mAh 大电池，配合 A18 Pro 超低功耗，视频播放最长可达 29 小时。',
      'ycall.feat.display.title':    'ProMotion 120Hz',
      'ycall.feat.display.desc':     '6.3 英寸自适应刷新率屏幕。1-120Hz 智能切换，流畅与省电兼得。',
      'ycall.feat.ai.title':         'YanJing 智能',
      'ycall.feat.ai.desc':          '深度集成的 AI 助手，理解你的意图，预判你的需求，智慧无处不在。',

      /* ── Ycall 技术规格 ── */
      'ycall.spec.chip':        '芯片',
      'ycall.spec.chip_val':    'A18 Pro (3nm)',
      'ycall.spec.display':     '显示屏',
      'ycall.spec.display_val': '6.3" ProMotion OLED',
      'ycall.spec.resolution':  '分辨率',
      'ycall.spec.res_val':     '2622 × 1206 像素',
      'ycall.spec.refresh':     '刷新率',
      'ycall.spec.refresh_val': '1-120Hz 自适应',
      'ycall.spec.main_cam':    '主摄像头',
      'ycall.spec.main_cam_val':'48MP，f/1.78 光圈',
      'ycall.spec.tele':        '长焦',
      'ycall.spec.tele_val':    '12MP，5 倍光学变焦',
      'ycall.spec.ultrawide':   '超广角',
      'ycall.spec.ultra_val':   '12MP，120° 视场角',
      'ycall.spec.battery':     '电池',
      'ycall.spec.battery_val': '4422mAh',
      'ycall.spec.charging':    '充电',
      'ycall.spec.charge_val':  'USB-C，MagSafe 25W',
      'ycall.spec.storage':     '存储',
      'ycall.spec.storage_val': '256GB / 512GB / 1TB',
      'ycall.spec.material':    '材质',
      'ycall.spec.material_val':'5 级钛金属框架',
      'ycall.spec.water':       '防水',
      'ycall.spec.water_val':   'IP68（6 米/30 分钟）',

      /* ── Ycall 价格特性 ── */
      'ycall.price.base.f1':     '6.1" Super Retina XDR',
      'ycall.price.base.f2':     'A18 芯片',
      'ycall.price.base.f3':     '双摄系统 48MP',
      'ycall.price.base.f4':     'USB-C 接口',
      'ycall.price.base.f5':     '灵动岛交互',
      'ycall.price.pro.f1':      '6.3" ProMotion 120Hz',
      'ycall.price.pro.f2':      'A18 Pro 芯片',
      'ycall.price.pro.f3':      '三摄系统 48MP',
      'ycall.price.pro.f4':      '钛金属设计',
      'ycall.price.pro.f5':      'YanJing 智能加持',
      'ycall.price.max.f1':      '6.9" ProMotion 120Hz',
      'ycall.price.max.f2':      'A18 Pro 芯片',
      'ycall.price.max.f3':      '三摄系统 48MP 5x',
      'ycall.price.max.f4':      '钛金属设计',
      'ycall.price.max.f5':      '最长电池续航',


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

      /* ── Help / Feedback page (userhelp_iwillsee.html) ── */
      'help.pagetag':        'HELP & FEEDBACK',
      'help.title':          '帮助与反馈',
      'help.subtitle':       '感谢您帮助我们改进 YanJing And Hundred Dream',
      'help.card1.heading':  '如何反馈问题',
      'help.step1':          '记录下您发现的问题或漏洞的具体表现，截图更佳',
      'help.step2':          '写清问题来源：哪个页面、什么操作触发、出现了什么异常',
      'help.step3':          '通过下方联系方式发送给我们，我们将尽快处理',
      'help.card2.heading':  '联系作者',
      'help.contact.type.qq': 'QQ 邮箱',
      'help.note':           '※ 反馈时请写清来因，以便我们快速定位问题，谢谢！',
      'help.btn.home':       '返回主页',
      'help.btn.beta':       '查看内测须知',

      /* ── Beta / Test page (usertestandhelp.html) ── */
      'beta.pagetag':        'BETA NOTICE',
      'beta.title':          '内测说明',
      'beta.card.title':     '致各位访客',
      'beta.text1':          '由于我们目前处于网站内测阶段，网页中可能出现各种漏洞或功能异常，还请各位用户理解与原谅。',
      'beta.text2.pre':      '如您在使用过程中发现任何问题、漏洞或异常，请点击主页中的',
      'beta.text2.btn':      '「帮助」',
      'beta.text2.post':     '按钮进行反馈，或直接联系我们的作者：',
      'beta.contact.type.qq': 'QQ',
      'beta.note':           '※ 反馈时请写清来因，以便我们尽快定位并修复问题，谢谢您的支持！',
      'beta.countdown.label': '页面将在 {n} 秒后允许返回主页',
      'beta.countdown.done':  '您现在可以返回主页了',
      'beta.btn.home':       '返回主页',

      /* ── Beta welcome modal (ycall.html etc.) ── */
      'beta.welcome.tag':     'Beta · 内测公告',
      'beta.welcome.title':   '欢迎进入内测',
      'beta.welcome.body':    '尊敬的用户，欢迎您进入我们的网站进行内测。不管是无意打开或是作者邀请，请您停下手指，进入我们的网站进行测试，谢谢。',
      'beta.welcome.confirm': '确认',

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
      'footer.col2.store':    'YanJing Store Account',
      'footer.col2.cloud':    'YanJing Cloud',
      'footer.col3.about':    'About Us',
      'footer.legal':         'Legal',
      'footer.rights':        'Copyright © 2026 YanJing And Hundred Dream Inc. All rights reserved.',
      'footer.disclaimer.line1': '* Prices are starting prices. Actual retail prices may vary by configuration. YanJing And Hundred Dream reserves all rights.',
      'footer.disclaimer.line2': 'Prices displayed at time of purchase are final. Product availability is subject to change at any time.',


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

      /* ── Ycall Features ── */
      'ycall.feat.titanium.title':   'Titanium Design',
      'ycall.feat.titanium.desc':    'Aerospace-grade titanium frame — incredibly light, remarkably strong. Grade 5 titanium far exceeds stainless steel in strength while weighing significantly less.',
      'ycall.feat.chip.title':       'A18 Pro Chip',
      'ycall.feat.chip.desc':        'Next-generation 3nm chip. CPU up to 30% faster, GPU rendering performance doubled. Purpose-built for AI.',
      'ycall.feat.camera.title':     '48MP Triple Camera',
      'ycall.feat.camera.desc':      '48MP main + ultra-wide + 5x telephoto. Pro-level photography, right in your pocket.',
      'ycall.feat.battery.title':    'All-Day Battery',
      'ycall.feat.battery.desc':     '4422mAh battery paired with the A18 Pro\'s ultra-low power draw — up to 29 hours of video playback.',
      'ycall.feat.display.title':    'ProMotion 120Hz',
      'ycall.feat.display.desc':     '6.3-inch adaptive refresh rate display. 1–120Hz intelligent switching for smoothness and efficiency.',
      'ycall.feat.ai.title':         'YanJing Intelligence',
      'ycall.feat.ai.desc':          'Deeply integrated AI assistant. Understands your intent, anticipates your needs — intelligence everywhere.',

      /* ── Ycall Specs ── */
      'ycall.spec.chip':        'Chip',
      'ycall.spec.chip_val':    'A18 Pro (3nm)',
      'ycall.spec.display':     'Display',
      'ycall.spec.display_val': '6.3" ProMotion OLED',
      'ycall.spec.resolution':  'Resolution',
      'ycall.spec.res_val':     '2622 × 1206 pixels',
      'ycall.spec.refresh':     'Refresh Rate',
      'ycall.spec.refresh_val': '1–120Hz Adaptive',
      'ycall.spec.main_cam':    'Main Camera',
      'ycall.spec.main_cam_val':'48MP, f/1.78 aperture',
      'ycall.spec.tele':        'Telephoto',
      'ycall.spec.tele_val':    '12MP, 5× Optical Zoom',
      'ycall.spec.ultrawide':   'Ultra Wide',
      'ycall.spec.ultra_val':   '12MP, 120° FOV',
      'ycall.spec.battery':     'Battery',
      'ycall.spec.battery_val': '4422mAh',
      'ycall.spec.charging':    'Charging',
      'ycall.spec.charge_val':  'USB-C, MagSafe 25W',
      'ycall.spec.storage':     'Storage',
      'ycall.spec.storage_val': '256GB / 512GB / 1TB',
      'ycall.spec.material':    'Material',
      'ycall.spec.material_val':'Grade 5 Titanium Frame',
      'ycall.spec.water':       'Water Resistance',
      'ycall.spec.water_val':   'IP68 (6m / 30min)',

      /* ── Ycall Pricing Features ── */
      'ycall.price.base.f1':     '6.1" Super Retina XDR',
      'ycall.price.base.f2':     'A18 Chip',
      'ycall.price.base.f3':     '48MP Dual Camera',
      'ycall.price.base.f4':     'USB-C Port',
      'ycall.price.base.f5':     'Dynamic Island',
      'ycall.price.pro.f1':      '6.3" ProMotion 120Hz',
      'ycall.price.pro.f2':      'A18 Pro Chip',
      'ycall.price.pro.f3':      '48MP Triple Camera',
      'ycall.price.pro.f4':      'Titanium Design',
      'ycall.price.pro.f5':      'YanJing Intelligence',
      'ycall.price.max.f1':      '6.9" ProMotion 120Hz',
      'ycall.price.max.f2':      'A18 Pro Chip',
      'ycall.price.max.f3':      '48MP Triple 5×',
      'ycall.price.max.f4':      'Titanium Design',
      'ycall.price.max.f5':      'Longest Battery Life',


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

      /* ── Help / Feedback page (userhelp_iwillsee.html) ── */
      'help.pagetag':        'HELP & FEEDBACK',
      'help.title':          'Help & Feedback',
      'help.subtitle':       'Thank you for helping us improve YanJing And Hundred Dream',
      'help.card1.heading':  'How to Report an Issue',
      'help.step1':          'Document the issue or bug with as much detail as possible — screenshots are even better',
      'help.step2':          'Note where it happened: which page, what you did, and what went wrong',
      'help.step3':          'Send it to us via the contact methods below and we\'ll look into it right away',
      'help.card2.heading':  'Contact the Author',
      'help.contact.type.qq': 'QQ Mail',
      'help.note':           '※ Please describe the issue clearly so we can locate and fix it quickly. Thank you!',
      'help.btn.home':       'Back to Home',
      'help.btn.beta':       'View Beta Notice',

      /* ── Beta / Test page (usertestandhelp.html) ── */
      'beta.pagetag':        'BETA NOTICE',
      'beta.title':          'Beta Program',
      'beta.card.title':     'A NOTE TO OUR VISITORS',
      'beta.text1':          'Our website is currently in beta. You may encounter bugs or unexpected behavior — we appreciate your patience and understanding.',
      'beta.text2.pre':      'If you spot any issues, please click the',
      'beta.text2.btn':      '"Help"',
      'beta.text2.post':     'button on the home page to send us feedback, or reach out directly:',
      'beta.contact.type.qq': 'QQ Mail',
      'beta.note':           '※ Please include as much context as possible so we can track down the problem quickly. Thank you for your support!',
      'beta.countdown.label': 'You can return to the home page in {n} seconds',
      'beta.countdown.done':  'You can now go back to the home page',
      'beta.btn.home':       'Back to Home',

      /* ── Beta welcome modal (ycall.html etc.) ── */
      'beta.welcome.tag':     'Beta · Preview',
      'beta.welcome.title':   'Welcome to the Beta',
      'beta.welcome.body':    'Dear visitor, welcome to our beta site. Whether you stumbled upon it or were invited by the author, we invite you to explore and test our website. Thank you.',
      'beta.welcome.confirm': 'Got It',

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

    // Text content — only update leaf nodes (no child elements) to avoid stomping sub-elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (!val) return;
      // If the element has child *elements* (not just text nodes), skip to avoid losing them.
      // Child-element check: any node with nodeType === 1
      var hasChildEl = false;
      for (var i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeType === 1) { hasChildEl = true; break; }
      }
      if (!hasChildEl) {
        el.textContent = val;
      }
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
