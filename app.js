// Sport-Fit
// 全域狀態變數
let activeCategory = 'all';
let selectedIds = exerciseDatabase.map(e => e.id); // 預設全選 20 種
let workoutQueue = [];
let currentSet = 1;
let currentIdx = 0;
let isWorking = true;
let isRunning = false;
let timerInterval = null;
let timeLeft = 30;

// 音效控制 (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playBeep(freq = 600, duration = 0.15) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  osc.stop(audioCtx.currentTime + duration);
}

// 分頁切換功能
function switchMainTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');

  if (tabId === 'tab-workout') {
    initWorkoutQueue();
  }
}

// 渲染訓練肌群說明清單
function renderExerciseGrid() {
  const grid = document.getElementById('exerciseGrid');
  grid.innerHTML = '';

  exerciseDatabase.forEach(ex => {
    if (activeCategory !== 'all' && ex.category !== activeCategory) return;

    const isChecked = selectedIds.includes(ex.id);
    const card = document.createElement('div');
    card.className = `exercise-card ${isChecked ? 'selected' : ''}`;
    card.id = `card-${ex.id}`;

    card.innerHTML = `
      <div class="card-top">
        <span class="category-badge">${ex.categoryName}</span>
        <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; cursor:pointer;">
          <span>選擇加入</span>
          <input type="checkbox" class="select-checkbox" ${isChecked ? 'checked' : ''} onchange="toggleExerciseSelect('${ex.id}', this.checked)">
        </label>
      </div>
      <div class="anatomy-svg-box">${ex.svg}</div>
      <div class="exercise-title">${ex.title}</div>
      <div class="target-muscle-box">
        <div class="target-muscle-title">主要受力肌群</div>
        <div class="target-muscle-name">${ex.primaryMuscle}</div>
      </div>
      <div class="instruction">${ex.desc}</div>
    `;
    grid.appendChild(card);
  });

  document.getElementById('selectedCountBadge').innerText = `${selectedIds.length} 已選`;
}

function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderExerciseGrid();
}

function toggleExerciseSelect(id, checked) {
  if (checked) {
    if (!selectedIds.includes(id)) selectedIds.push(id);
  } else {
    selectedIds = selectedIds.filter(i => i !== id);
  }
  renderExerciseGrid();
  if (document.getElementById('tab-workout').classList.contains('active')) {
    initWorkoutQueue();
  }
}

function selectAll(flag) {
  if (flag) {
    selectedIds = exerciseDatabase.map(e => e.id);
  } else {
    selectedIds = [];
  }
  renderExerciseGrid();
  if (document.getElementById('tab-workout').classList.contains('active')) {
    initWorkoutQueue();
  }
}

// 間歇訓練控制邏輯
function initWorkoutQueue() {
  workoutQueue = exerciseDatabase.filter(e => selectedIds.includes(e.id));
  if (!isRunning) {
    currentIdx = 0;
    currentSet = 1;
    isWorking = true;
    timeLeft = parseInt(document.getElementById('workTime').value) || 30;
    updateFocusCard();
    updateTimerDisplay();
  }
}

function updateFocusCard() {
  const card = document.getElementById('focusCard');
  const badge = document.getElementById('focusBadge');
  const svgBox = document.getElementById('focusSvgContainer');
  const title = document.getElementById('focusTitle');
  const muscle = document.getElementById('focusMuscle');
  const desc = document.getElementById('focusDesc');

  if (workoutQueue.length === 0) {
    badge.className = 'focus-badge focus-badge-work';
    badge.innerText = '未選取動作';
    svgBox.innerHTML = '';
    title.innerText = '尚未選擇任何動作';
    muscle.innerText = '主要受力肌群：--';
    desc.innerText = '請回到第一個分頁「訓練肌群說明」勾選動作！';
    card.classList.remove('resting');
    return;
  }

  if (isWorking) {
    const curEx = workoutQueue[currentIdx];
    card.classList.remove('resting');
    badge.className = 'focus-badge focus-badge-work';
    badge.innerText = `🔥 正在進行動作 (${currentIdx + 1}/${workoutQueue.length})`;
    svgBox.innerHTML = curEx.svg;
    title.innerText = curEx.title;
    muscle.innerText = `主要受力肌群：${curEx.primaryMuscle}`;
    desc.innerText = curEx.desc;
  } else {
    // 休息時間：提前換上下一組動作預告
    const nextIdx = (currentIdx + 1 < workoutQueue.length) ? currentIdx + 1 : 0;
    const nextEx = workoutQueue[nextIdx];
    
    card.classList.add('resting');
    badge.className = 'focus-badge focus-badge-rest';
    badge.innerText = `☕ 休息中 — 下一組動作預告 (${nextIdx + 1}/${workoutQueue.length})`;
    svgBox.innerHTML = nextEx.svg;
    title.innerText = `下一動作：${nextEx.title}`;
    muscle.innerText = `即將訓練：${nextEx.primaryMuscle}`;
    desc.innerText = `請調整呼吸做好準備：${nextEx.desc}`;
  }
}

function updateTimerDisplay() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  document.getElementById('timerClock').innerText = `${min}:${sec}`;

  const pill = document.getElementById('statusPill');
  const info = document.getElementById('progressInfo');
  const totalSets = document.getElementById('setCount').value;

  if (!isRunning && timeLeft === parseInt(document.getElementById('workTime').value)) {
    pill.className = 'status-pill status-idle';
    pill.innerText = '準備開始';
    info.innerText = `已排入 ${workoutQueue.length} 個訓練動作 (共 ${totalSets} 輪)`;
    return;
  }

  if (isWorking) {
    pill.className = 'status-pill status-work';
    pill.innerText = `訓練階段 (第 ${currentSet}/${totalSets} 輪)`;
    info.innerText = `動作 ${currentIdx + 1} / ${workoutQueue.length}：${workoutQueue[currentIdx] ? workoutQueue[currentIdx].title : ''}`;
  } else {
    pill.className = 'status-pill status-rest';
    pill.innerText = `休息階段 (第 ${currentSet}/${totalSets} 輪)`;
    info.innerText = `喘口氣，即將進入下一組！`;
  }
}

function toggleTimer() {
  if (workoutQueue.length === 0) {
    alert('請先在第一頁勾選至少一個動作！');
    return;
  }

  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById('startBtn').innerText = '繼續訓練';
  } else {
    isRunning = true;
    document.getElementById('startBtn').innerText = '暫停';
    timerInterval = setInterval(timerTick, 1000);
  }
  updateTimerDisplay();
}

function timerTick() {
  if (timeLeft > 0) {
    if (timeLeft <= 3) playBeep(520, 0.1);
    timeLeft--;
    updateTimerDisplay();
  } else {
    playBeep(880, 0.35);
    const workSec = parseInt(document.getElementById('workTime').value) || 30;
    const restSec = parseInt(document.getElementById('restTime').value) || 15;
    const maxSets = parseInt(document.getElementById('setCount').value) || 3;

    if (isWorking) {
      if (restSec > 0) {
        isWorking = false;
        timeLeft = restSec;
      } else {
        advanceToNextExercise(maxSets, workSec);
      }
    } else {
      advanceToNextExercise(maxSets, workSec);
    }
    updateFocusCard();
    updateTimerDisplay();
  }
}

function advanceToNextExercise(maxSets, workSec) {
  isWorking = true;
  currentIdx++;
  if (currentIdx >= workoutQueue.length) {
    currentIdx = 0;
    currentSet++;
  }

  if (currentSet > maxSets) {
    clearInterval(timerInterval);
    isRunning = false;
    alert('🎉 恭喜！您已完美完成整套間歇肌力訓練！');
    resetTimer();
    return;
  }
  timeLeft = workSec;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  currentSet = 1;
  currentIdx = 0;
  isWorking = true;
  initWorkoutQueue();
  document.getElementById('startBtn').innerText = '開始訓練';
  updateFocusCard();
  updateTimerDisplay();
}

// 頁面初始化
renderExerciseGrid();
initWorkoutQueue();
