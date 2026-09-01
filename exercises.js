// Sport-Fit
// 20 種局部解剖圖示與主要訓練肌群資料庫 (每部位 5 種)
const exerciseDatabase = [
  // --- 手臂 5 種 ---
  {
    id: "arm_1",
    category: "arms",
    categoryName: "手臂",
    title: "啞鈴二頭彎舉 (Biceps Curl)",
    primaryMuscle: "肱二頭肌 (長頭/短頭)",
    desc: "肘關節貼緊身側，前臂屈曲，專注肱二頭肌頂峰收縮。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">手臂局部解剖</text>
      <path d="M 60,30 Q 95,28 120,45 Q 140,60 150,95 Q 130,105 110,85 Q 90,65 60,50 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <ellipse cx="100" cy="48" rx="20" ry="12" fill="#f43f5e" opacity="0.85"/>
      <text x="75" y="52" fill="#fff" font-size="10" font-weight="bold">肱二頭肌</text>
      <rect x="145" y="85" width="16" height="24" rx="4" fill="#94a3b8"/>
    </svg>`
  },
  {
    id: "arm_2",
    category: "arms",
    categoryName: "手臂",
    title: "啞鈴頸後臂屈伸 (Triceps Ext)",
    primaryMuscle: "肱三頭肌 (長頭)",
    desc: "大臂垂直於地面固定在耳側，手肘伸展將啞鈴向上推起。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">手臂後側局部</text>
      <path d="M 70,110 L 70,50 Q 70,30 90,30 L 120,30" stroke="#38bdf8" stroke-width="12" stroke-linecap="round" fill="none"/>
      <rect x="58" y="55" width="16" height="35" rx="8" fill="#f43f5e" opacity="0.85"/>
      <text x="82" y="76" fill="#f43f5e" font-size="10" font-weight="bold">肱三頭肌</text>
      <rect x="115" y="20" width="14" height="20" rx="3" fill="#94a3b8"/>
    </svg>`
  },
  {
    id: "arm_3",
    category: "arms",
    categoryName: "手臂",
    title: "啞鈴錘式彎舉 (Hammer Curl)",
    primaryMuscle: "肱橈肌 & 肱肌",
    desc: "掌心相對握住啞鈴，強化前臂厚度與手臂側面線條。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">手臂側面局部</text>
      <path d="M 50,40 L 90,60 L 140,55" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" fill="none"/>
      <ellipse cx="115" cy="57" rx="18" ry="8" fill="#f43f5e" opacity="0.85"/>
      <text x="95" y="80" fill="#f43f5e" font-size="10" font-weight="bold">肱橈肌(前臂)</text>
      <rect x="140" y="42" width="18" height="24" rx="4" fill="#94a3b8"/>
    </svg>`
  },
  {
    id: "arm_4",
    category: "arms",
    categoryName: "手臂",
    title: "啞鈴俯身臂屈伸 (Triceps Kickback)",
    primaryMuscle: "肱三頭肌 (外側頭/內側頭)",
    desc: "大臂緊貼身體並與地面平行，僅動前臂向後伸直至水平。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">後臂局部發力</text>
      <path d="M 40,65 L 100,65 L 160,65" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" fill="none"/>
      <rect x="70" y="58" width="40" height="14" rx="7" fill="#f43f5e" opacity="0.85"/>
      <text x="75" y="50" fill="#f43f5e" font-size="10" font-weight="bold">三頭肌外側頭</text>
      <rect x="155" y="53" width="16" height="24" rx="4" fill="#94a3b8"/>
    </svg>`
  },
  {
    id: "arm_5",
    category: "arms",
    categoryName: "手臂",
    title: "啞鈴腕彎舉 (Wrist Curl)",
    primaryMuscle: "前臂屈肌群 (Wrist Flexors)",
    desc: "前臂平放於大腿上，手腕向上彎曲啞鈴，增強握力與前臂。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">前臂手腕局部</text>
      <path d="M 30,70 L 120,70 L 145,50" stroke="#38bdf8" stroke-width="12" stroke-linecap="round" fill="none"/>
      <rect x="50" y="64" width="55" height="12" rx="6" fill="#f43f5e" opacity="0.85"/>
      <text x="55" y="94" fill="#f43f5e" font-size="10" font-weight="bold">前臂屈肌群</text>
      <circle cx="150" cy="45" r="10" fill="#94a3b8"/>
    </svg>`
  },

  // --- 肩膀 5 種 ---
  {
    id: "sh_1",
    category: "shoulders",
    categoryName: "肩膀",
    title: "坐姿啞鈴肩推 (Shoulder Press)",
    primaryMuscle: "前三角肌 & 中三角肌",
    desc: "手肘微向內收，自耳旁垂直向上推舉，建立肩膀整體維度。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">肩部局部解剖</text>
      <circle cx="100" cy="45" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <path d="M 70,55 Q 100,75 130,55" stroke="#38bdf8" stroke-width="8" fill="none"/>
      <ellipse cx="65" cy="55" rx="14" ry="10" fill="#f43f5e" opacity="0.85"/>
      <ellipse cx="135" cy="55" rx="14" ry="10" fill="#f43f5e" opacity="0.85"/>
      <text x="75" y="100" fill="#f43f5e" font-size="10" font-weight="bold">前/中三角肌</text>
    </svg>`
  },
  {
    id: "sh_2",
    category: "shoulders",
    categoryName: "肩膀",
    title: "啞鈴側平舉 (Lateral Raise)",
    primaryMuscle: "側三角肌 (Lateral Deltoid)",
    desc: "手肘微屈引導發力，平舉至與肩齊平，雕塑南瓜肩外側線條。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">肩外側局部</text>
      <path d="M 40,70 L 100,50 L 160,70" stroke="#38bdf8" stroke-width="8" stroke-linecap="round" fill="none"/>
      <circle cx="65" cy="62" r="12" fill="#f43f5e" opacity="0.85"/>
      <circle cx="135" cy="62" r="12" fill="#f43f5e" opacity="0.85"/>
      <text x="75" y="105" fill="#f43f5e" font-size="10" font-weight="bold">側三角肌</text>
    </svg>`
  },
  {
    id: "sh_3",
    category: "shoulders",
    categoryName: "肩膀",
    title: "啞鈴前平舉 (Front Raise)",
    primaryMuscle: "前三角肌 (Anterior Deltoid)",
    desc: "雙手持啞鈴向前抬起至視線高度，強化肩膀前方飽滿度。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">肩前側局部</text>
      <path d="M 50,85 L 85,50 L 150,50" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" fill="none"/>
      <ellipse cx="85" cy="50" rx="14" ry="12" fill="#f43f5e" opacity="0.85"/>
      <text x="95" y="80" fill="#f43f5e" font-size="10" font-weight="bold">前三角肌</text>
      <rect x="150" y="38" width="16" height="24" rx="4" fill="#94a3b8"/>
    </svg>`
  },
  {
    id: "sh_4",
    category: "shoulders",
    categoryName: "肩膀",
    title: "俯身啞鈴飛鳥 (Rear Delt Fly)",
    primaryMuscle: "後三角肌 (Posterior Deltoid)",
    desc: "俯身背部平直，手臂向兩側展開，平衡肩部前後肌力。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">肩後側局部</text>
      <path d="M 35,50 Q 100,75 165,50" stroke="#38bdf8" stroke-width="8" fill="none"/>
      <ellipse cx="70" cy="58" rx="14" ry="9" fill="#f43f5e" opacity="0.85"/>
      <ellipse cx="130" cy="58" rx="14" ry="9" fill="#f43f5e" opacity="0.85"/>
      <text x="75" y="100" fill="#f43f5e" font-size="10" font-weight="bold">後三角肌</text>
    </svg>`
  },
  {
    id: "sh_5",
    category: "shoulders",
    categoryName: "肩膀",
    title: "阿諾肩推 (Arnold Press)",
    primaryMuscle: "三角肌全群 (旋轉刺激)",
    desc: "由掌心朝內轉至朝前推起，帶給三角肌全角度連續刺激。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">肩部多角度局部</text>
      <circle cx="100" cy="45" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <path d="M 55,40 Q 100,80 145,40" stroke="#38bdf8" stroke-width="6" fill="none"/>
      <circle cx="65" cy="45" r="12" fill="#f43f5e" opacity="0.85"/>
      <circle cx="135" cy="45" r="12" fill="#f43f5e" opacity="0.85"/>
      <text x="70" y="105" fill="#f43f5e" font-size="10" font-weight="bold">三角肌全區域</text>
    </svg>`
  },

  // --- 腿部 5 種 ---
  {
    id: "leg_1",
    category: "legs",
    categoryName: "腿部",
    title: "啞鈴高腳杯深蹲 (Goblet Squat)",
    primaryMuscle: "股四頭肌 (大腿前側)",
    desc: "雙手捧啞鈴於胸前，下蹲至大腿與地面平行，強化大腿前側。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">大腿前側局部</text>
      <path d="M 60,30 L 100,75 L 140,30" stroke="#38bdf8" stroke-width="12" stroke-linecap="round" fill="none"/>
      <rect x="75" y="40" width="16" height="30" rx="6" fill="#f43f5e" opacity="0.85"/>
      <rect x="110" y="40" width="16" height="30" rx="6" fill="#f43f5e" opacity="0.85"/>
      <text x="75" y="105" fill="#f43f5e" font-size="10" font-weight="bold">股四頭肌</text>
    </svg>`
  },
  {
    id: "leg_2",
    category: "legs",
    categoryName: "腿部",
    title: "啞鈴羅馬尼亞硬舉 (Dumbbell RDL)",
    primaryMuscle: "膕繩肌 (腿後側) & 臀大肌",
    desc: "膝蓋微屈髖關節後推，感受大腿後側強烈拉伸與收縮。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">大腿後側局部</text>
      <path d="M 80,30 L 100,70 L 100,115" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" fill="none"/>
      <rect x="94" y="45" width="14" height="35" rx="6" fill="#f43f5e" opacity="0.85"/>
      <text x="115" y="65" fill="#f43f5e" font-size="10" font-weight="bold">膕繩肌群</text>
    </svg>`
  },
  {
    id: "leg_3",
    category: "legs",
    categoryName: "腿部",
    title: "啞鈴保加利亞分腿蹲 (Split Squat)",
    primaryMuscle: "臀大肌 (Gluteus Maximus)",
    desc: "單腳後放於椅上，重心垂直下沉，針對單側臀肌深層刺激。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">臀部局部解剖</text>
      <path d="M 60,40 Q 90,40 100,70 L 100,110" stroke="#38bdf8" stroke-width="10" fill="none"/>
      <circle cx="85" cy="50" r="18" fill="#f43f5e" opacity="0.85"/>
      <text x="65" y="54" fill="#fff" font-size="10" font-weight="bold">臀大肌</text>
    </svg>`
  },
  {
    id: "leg_4",
    category: "legs",
    categoryName: "腿部",
    title: "啞鈴側弓箭步 (Lateral Lunge)",
    primaryMuscle: "大腿內收肌群 (Adductors)",
    desc: "單腳向側方跨出下蹲，增強大腿內側與髖部橫向穩定性。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">大腿內側局部</text>
      <path d="M 50,110 L 90,45 L 150,110" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" fill="none"/>
      <ellipse cx="108" cy="70" rx="12" ry="20" fill="#f43f5e" opacity="0.85"/>
      <text x="80" y="115" fill="#f43f5e" font-size="10" font-weight="bold">內收肌群</text>
    </svg>`
  },
  {
    id: "leg_5",
    category: "legs",
    categoryName: "腿部",
    title: "啞鈴站姿提踵 (Calf Raise)",
    primaryMuscle: "小腿腓腸肌 & 比目魚肌",
    desc: "雙手負重腳尖著力向上踮起，雕塑緊實小腿線條。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">小腿局部解剖</text>
      <path d="M 100,30 L 100,75 L 115,110" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" fill="none"/>
      <ellipse cx="100" cy="55" rx="14" ry="18" fill="#f43f5e" opacity="0.85"/>
      <text x="120" y="60" fill="#f43f5e" font-size="10" font-weight="bold">腓腸肌</text>
    </svg>`
  },

  // --- 腹部核心 5 種 ---
  {
    id: "core_1",
    category: "core",
    categoryName: "腹部核心",
    title: "啞鈴負重捲腹 (Weighted Crunch)",
    primaryMuscle: "腹直肌上部 (Upper Abs)",
    desc: "負重於胸前，腹肌收縮捲起上背，集中刺激上腹部。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">腹直肌局部解剖</text>
      <rect x="80" y="35" width="40" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <rect x="88" y="42" width="24" height="20" rx="4" fill="#f43f5e" opacity="0.85"/>
      <text x="80" y="112" fill="#f43f5e" font-size="10" font-weight="bold">腹直肌上部</text>
    </svg>`
  },
  {
    id: "core_2",
    category: "core",
    categoryName: "腹部核心",
    title: "啞鈴俄羅斯轉體 (Russian Twist)",
    primaryMuscle: "腹內外斜肌 (Obliques)",
    desc: "雙腳離地懸空，持啞鈴旋轉軀幹，強化人魚線與核心旋轉抗力。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">腹側局部解剖</text>
      <rect x="80" y="35" width="40" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <rect x="74" y="45" width="10" height="40" rx="4" fill="#f43f5e" opacity="0.85"/>
      <rect x="116" y="45" width="10" height="40" rx="4" fill="#f43f5e" opacity="0.85"/>
      <text x="75" y="112" fill="#f43f5e" font-size="10" font-weight="bold">腹內外斜肌</text>
    </svg>`
  },
  {
    id: "core_3",
    category: "core",
    categoryName: "腹部核心",
    title: "啞鈴伐木動作 (Dumbbell Woodchopper)",
    primaryMuscle: "前鋸肌 & 腹斜肌",
    desc: "由高向低或對角線砍下，訓練對角核心傳導與爆發力。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">對角核心局部</text>
      <line x1="60" y1="40" x2="140" y2="90" stroke="#f43f5e" stroke-width="8" stroke-linecap="round"/>
      <circle cx="100" cy="65" r="14" fill="#f43f5e" opacity="0.85"/>
      <text x="70" y="110" fill="#f43f5e" font-size="10" font-weight="bold">對角腹斜肌鏈</text>
    </svg>`
  },
  {
    id: "core_4",
    category: "core",
    categoryName: "腹部核心",
    title: "啞鈴負重側屈 (Side Bend)",
    primaryMuscle: "腰方肌 & 腹斜肌深層",
    desc: "單手持鈴沿大腿側滑下放後挺直，雕塑腰側深層支撐力。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">腰側深層局部</text>
      <path d="M 90,35 Q 80,65 90,95" stroke="#38bdf8" stroke-width="8" fill="none"/>
      <rect x="70" y="55" width="12" height="24" rx="4" fill="#f43f5e" opacity="0.85"/>
      <text x="105" y="70" fill="#f43f5e" font-size="10" font-weight="bold">腰方肌</text>
    </svg>`
  },
  {
    id: "core_5",
    category: "core",
    categoryName: "腹部核心",
    title: "仰臥直腿舉啞鈴 (Leg Raise w/ DB)",
    primaryMuscle: "腹直肌下部 & 髂腰肌",
    desc: "雙手握啞鈴固定於頭頂上方，直腿抬起下壓，打擊下腹贅肉。",
    svg: `<svg viewBox="0 0 200 130">
      <text x="10" y="20" fill="#94a3b8" font-size="11">腹直肌下部局部</text>
      <rect x="80" y="35" width="40" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <rect x="88" y="68" width="24" height="22" rx="4" fill="#f43f5e" opacity="0.85"/>
      <text x="80" y="112" fill="#f43f5e" font-size="10" font-weight="bold">腹直肌下部</text>
    </svg>`
  }
];
