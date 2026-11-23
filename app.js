/**
 * NexFlow Ops — Enterprise HRMS & Task Orchestration Suite
 * Lead Architect & Technical Project Manager: Vivek Debnath
 */

// Initial Seed Data for HRMS and Tasks
const DEFAULT_EMPLOYEES = [
  {
    id: "EMP-101",
    name: "Rohan Sharma",
    role: "Supply Chain Operations Lead",
    department: "Supply Chain",
    email: "rohan.sharma@alloinnoware.com",
    phone: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    status: "Active",
    workMode: "Office - HQ",
    shift: "09:30 AM - 06:30 PM",
    todayPunch: "09:28 AM",
    attendanceStatus: "Present",
    leaveBalance: { casual: 8, sick: 5, earned: 14 },
    tasksCount: 3
  },
  {
    id: "EMP-102",
    name: "Priya Patel",
    role: "E-Commerce Logistics Manager",
    department: "Logistics",
    email: "priya.patel@alloinnoware.com",
    phone: "+91 98765 43211",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    status: "Active",
    workMode: "Hybrid / Remote",
    shift: "10:00 AM - 07:00 PM",
    todayPunch: "09:55 AM",
    attendanceStatus: "Present",
    leaveBalance: { casual: 6, sick: 4, earned: 12 },
    tasksCount: 2
  },
  {
    id: "EMP-103",
    name: "Ankit Verma",
    role: "Warehouse Operations Supervisor",
    department: "Operations",
    email: "ankit.verma@alloinnoware.com",
    phone: "+91 98765 43212",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    status: "Active",
    workMode: "Warehouse Unit 4",
    shift: "08:30 AM - 05:30 PM",
    todayPunch: "08:25 AM",
    attendanceStatus: "Present",
    leaveBalance: { casual: 10, sick: 6, earned: 15 },
    tasksCount: 4
  },
  {
    id: "EMP-104",
    name: "Sneha Kulkarni",
    role: "Customer Success & Fulfillment Specialist",
    department: "Customer Ops",
    email: "sneha.kulkarni@alloinnoware.com",
    phone: "+91 98765 43213",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    status: "On Leave",
    workMode: "Remote",
    shift: "09:30 AM - 06:30 PM",
    todayPunch: "--",
    attendanceStatus: "On Leave",
    leaveBalance: { casual: 5, sick: 3, earned: 10 },
    tasksCount: 1
  },
  {
    id: "EMP-105",
    name: "Vikram Malhotra",
    role: "Quality Assurance & Compliance Lead",
    department: "Operations",
    email: "vikram.m@alloinnoware.com",
    phone: "+91 98765 43214",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    status: "Active",
    workMode: "Office - HQ",
    shift: "09:30 AM - 06:30 PM",
    todayPunch: "09:31 AM",
    attendanceStatus: "Present",
    leaveBalance: { casual: 7, sick: 6, earned: 16 },
    tasksCount: 2
  }
];

const DEFAULT_TASKS = [
  {
    id: "ALLO-OPS-101",
    title: "Daily Warehouse Inbound Dispatch Reconciliation",
    description: "Reconcile daily inward supplier GRNs against ERP inventory master before the 16:00 cutoff.",
    assignee: "Rohan Sharma",
    department: "Supply Chain",
    priority: "P0",
    cutoffTime: "16:00 IST",
    dueDate: "Today",
    status: "inprogress",
    progress: 75,
    proofAttached: true,
    proofUrl: "https://drive.google.com/inbound-grn-reconciliation-log",
    frequency: "Daily"
  },
  {
    id: "ALLO-OPS-102",
    title: "Amazon & Flipkart E-Commerce Order Batching",
    description: "Sync unfulfilled sales orders across marketplace APIs, generate shipping labels & dispatch slips.",
    assignee: "Priya Patel",
    department: "Logistics",
    priority: "P1",
    cutoffTime: "15:30 IST",
    dueDate: "Today",
    status: "review",
    progress: 90,
    proofAttached: true,
    proofUrl: "https://shiprocket.in/manifest-batch-449",
    frequency: "Daily"
  },
  {
    id: "ALLO-OPS-103",
    title: "Physical Cycle Count & Stock Variance Audit",
    description: "Perform physical scan on 50 high-velocity SKU bins and log discrepancy variance % in master sheet.",
    assignee: "Ankit Verma",
    department: "Operations",
    priority: "P1",
    cutoffTime: "17:00 IST",
    dueDate: "Today",
    status: "todo",
    progress: 20,
    proofAttached: false,
    proofUrl: "",
    frequency: "Daily"
  },
  {
    id: "ALLO-OPS-104",
    title: "Customer Escalation & NDR (Non-Delivery) Resolution",
    description: "Contact customers with failed first-attempt courier deliveries to confirm reattempt addresses.",
    assignee: "Sneha Kulkarni",
    department: "Customer Ops",
    priority: "P2",
    cutoffTime: "18:00 IST",
    dueDate: "Today",
    status: "backlog",
    progress: 0,
    proofAttached: false,
    proofUrl: "",
    frequency: "Daily"
  },
  {
    id: "ALLO-OPS-105",
    title: "Safety Audit & Cold Storage Temperature Logs",
    description: "Review automated IoT data loggers and sign off HACCP quality compliance checklist.",
    assignee: "Vikram Malhotra",
    department: "Operations",
    priority: "P1",
    cutoffTime: "16:30 IST",
    dueDate: "Today",
    status: "completed",
    progress: 100,
    proofAttached: true,
    proofUrl: "https://drive.google.com/compliance-q3-check",
    frequency: "Daily"
  }
];

const DEFAULT_LEAVES = [
  {
    id: "LV-201",
    employeeName: "Sneha Kulkarni",
    department: "Customer Ops",
    type: "Casual Leave",
    dates: "23 Nov 2026 - 24 Nov 2026 (2 Days)",
    reason: "Personal family commitment in Pune.",
    status: "Approved",
    appliedOn: "21 Nov 2026"
  },
  {
    id: "LV-202",
    employeeName: "Ankit Verma",
    department: "Operations",
    type: "Sick Leave",
    dates: "28 Nov 2026 (1 Day)",
    reason: "Medical consultation & dental checkup.",
    status: "Pending",
    appliedOn: "Today 10:15 AM"
  }
];

const DEFAULT_ACTIVITIES = [
  { time: "16:45 IST", user: "Vivek Debnath", action: "Approved Daily Dispatch Reconciliation SOP update for Supply Chain team." },
  { time: "15:20 IST", user: "Rohan Sharma", action: "Updated task ALLO-OPS-101 to In Progress (75% completed)." },
  { time: "14:10 IST", user: "Priya Patel", action: "Submitted proof for ALLO-OPS-102 (Amazon marketplace batching)." },
  { time: "10:15 IST", user: "Ankit Verma", action: "Requested 1 day Sick Leave for 28 Nov 2026." },
  { time: "09:31 IST", user: "System", action: "Automatic biometric attendance sync completed: 4/5 Employees present." }
];

// App State
let employees = JSON.parse(localStorage.getItem('nexflow_employees')) || DEFAULT_EMPLOYEES;
let tasks = JSON.parse(localStorage.getItem('nexflow_tasks')) || DEFAULT_TASKS;
let leaves = JSON.parse(localStorage.getItem('nexflow_leaves')) || DEFAULT_LEAVES;
let activities = JSON.parse(localStorage.getItem('nexflow_activities')) || DEFAULT_ACTIVITIES;

function saveState() {
  localStorage.setItem('nexflow_employees', JSON.stringify(employees));
  localStorage.setItem('nexflow_tasks', JSON.stringify(tasks));
  localStorage.setItem('nexflow_leaves', JSON.stringify(leaves));
  localStorage.setItem('nexflow_activities', JSON.stringify(activities));
  renderAll();
}

// Navigation Tabs
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-indigo-600', 'text-white');
        t.classList.add('text-slate-400', 'hover:text-slate-200');
      });
      tab.classList.add('bg-indigo-600', 'text-white');
      tab.classList.remove('text-slate-400', 'hover:text-slate-200');

      const target = tab.getAttribute('data-target');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });
}

// Render Kanban Board
function renderKanban() {
  const filterAssignee = document.getElementById('filter-assignee')?.value || 'all';
  const filterDept = document.getElementById('filter-dept')?.value || 'all';
  const searchQuery = (document.getElementById('search-tasks')?.value || '').toLowerCase();

  const cols = {
    backlog: document.getElementById('col-backlog'),
    todo: document.getElementById('col-todo'),
    inprogress: document.getElementById('col-inprogress'),
    review: document.getElementById('col-review'),
    completed: document.getElementById('col-completed')
  };

  // Reset columns
  Object.values(cols).forEach(col => {
    if (col) col.innerHTML = '';
  });

  const filteredTasks = tasks.filter(t => {
    const matchAssignee = filterAssignee === 'all' || t.assignee === filterAssignee;
    const matchDept = filterDept === 'all' || t.department === filterDept;
    const matchSearch = t.title.toLowerCase().includes(searchQuery) || t.id.toLowerCase().includes(searchQuery);
    return matchAssignee && matchDept && matchSearch;
  });

  filteredTasks.forEach(task => {
    const col = cols[task.status];
    if (!col) return;

    const pClass = task.priority === 'P0' ? 'badge-p0' : task.priority === 'P1' ? 'badge-p1' : 'badge-p2';
    const card = document.createElement('div');
    card.className = "glass-card p-4 rounded-xl cursor-pointer select-none space-y-3 relative group";
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-mono font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50">${task.id}</span>
        <div class="flex items-center space-x-1.5">
          <span class="text-xs px-2 py-0.5 rounded font-semibold ${pClass}">${task.priority}</span>
          <span class="text-xs text-slate-400 flex items-center gap-1 font-mono">
            <svg class="w-3.5 h-3.5 text-amber-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${task.cutoffTime}
          </span>
        </div>
      </div>

      <h4 class="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors leading-snug">${escapeHtml(task.title)}</h4>
      
      <p class="text-xs text-slate-400 line-clamp-2">${escapeHtml(task.description)}</p>

      <!-- Progress bar -->
      <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
        <div class="bg-indigo-500 h-1.5 rounded-full" style="width: ${task.progress}%"></div>
      </div>

      <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div class="flex items-center space-x-2">
          <div class="w-6 h-6 rounded-full bg-indigo-800 flex items-center justify-center font-bold text-white text-[10px]">
            ${task.assignee.split(' ').map(n=>n[0]).join('')}
          </div>
          <span class="font-medium text-slate-300 text-xs">${task.assignee}</span>
        </div>
        <div class="flex items-center space-x-1.5">
          ${task.proofAttached ? '<span class="text-emerald-400 font-medium flex items-center gap-0.5" title="Proof Verified"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>' : ''}
          <button onclick="advanceTask('${task.id}', event)" class="p-1 hover:bg-indigo-900/60 rounded text-slate-300 hover:text-white transition" title="Advance Stage">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        openTaskDetail(task.id);
      }
    });

    col.appendChild(card);
  });

  // Update counts on column headers
  ['backlog', 'todo', 'inprogress', 'review', 'completed'].forEach(st => {
    const badge = document.getElementById(`count-${st}`);
    if (badge) {
      badge.textContent = filteredTasks.filter(t => t.status === st).length;
    }
  });

  updateKpis();
}

function advanceTask(taskId, e) {
  if (e) e.stopPropagation();
  const stages = ['backlog', 'todo', 'inprogress', 'review', 'completed'];
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  const currentIdx = stages.indexOf(task.status);
  if (currentIdx < stages.length - 1) {
    task.status = stages[currentIdx + 1];
    if (task.status === 'completed') {
      task.progress = 100;
    } else if (task.status === 'review') {
      task.progress = 90;
    } else if (task.status === 'inprogress') {
      task.progress = 50;
    }
    activities.unshift({
      time: getCurrentTimeIST(),
      user: task.assignee,
      action: `Moved ${task.id} to ${task.status.toUpperCase()}`
    });
    saveState();
  }
}

// Render HRMS Directory
function renderEmployees() {
  const container = document.getElementById('employee-directory-grid');
  if (!container) return;

  container.innerHTML = '';
  employees.forEach(emp => {
    const card = document.createElement('div');
    card.className = "glass-card p-5 rounded-2xl space-y-4 hover:border-indigo-500/50 transition relative overflow-hidden";
    const statusBg = emp.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30';

    card.innerHTML = `
      <div class="flex items-start justify-between">
        <div class="flex items-center space-x-3.5">
          <img src="${emp.avatar}" alt="${emp.name}" class="w-13 h-13 rounded-full object-cover ring-2 ring-indigo-500/30 shadow-md">
          <div>
            <h3 class="font-bold text-slate-100 text-base leading-tight">${escapeHtml(emp.name)}</h3>
            <p class="text-xs text-indigo-400 font-medium">${escapeHtml(emp.role)}</p>
            <p class="text-[11px] text-slate-400 mt-0.5">${escapeHtml(emp.department)} · <span class="font-mono text-slate-400">${emp.id}</span></p>
          </div>
        </div>
        <span class="text-xs px-2.5 py-0.5 rounded-full border font-medium ${statusBg}">${emp.status}</span>
      </div>

      <div class="grid grid-cols-2 gap-2 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
        <div>
          <span class="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Attendance Today</span>
          <span class="font-medium ${emp.attendanceStatus === 'Present' ? 'text-emerald-400' : 'text-amber-400'} flex items-center gap-1 mt-0.5">
            <span class="w-2 h-2 rounded-full ${emp.attendanceStatus === 'Present' ? 'bg-emerald-400' : 'bg-amber-400'}"></span>
            ${emp.attendanceStatus} (${emp.todayPunch})
          </span>
        </div>
        <div>
          <span class="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Work Mode</span>
          <span class="font-medium text-slate-300 mt-0.5 block">${emp.workMode}</span>
        </div>
        <div class="mt-1">
          <span class="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Active Tasks</span>
          <span class="font-medium text-indigo-300 mt-0.5 block">${tasks.filter(t => t.assignee === emp.name && t.status !== 'completed').length} Tasks Assigned</span>
        </div>
        <div class="mt-1">
          <span class="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Leave Balance</span>
          <span class="font-medium text-slate-300 mt-0.5 block">${emp.leaveBalance.casual + emp.leaveBalance.sick + emp.leaveBalance.earned} Days Total</span>
        </div>
      </div>

      <div class="pt-1 flex items-center justify-between text-xs text-slate-400">
        <a href="mailto:${emp.email}" class="hover:text-indigo-400 flex items-center gap-1 truncate max-w-[160px]">
          <svg class="w-3.5 h-3.5 inline text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          ${emp.email}
        </a>
        <button onclick="quickClockToggle('${emp.id}')" class="px-2.5 py-1 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white rounded-lg text-xs font-medium transition flex items-center gap-1">
          Punch Toggle
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Attendance Table
function renderAttendance() {
  const tbody = document.getElementById('attendance-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  employees.forEach(emp => {
    const tr = document.createElement('tr');
    tr.className = "border-b border-slate-800/80 hover:bg-slate-800/30 transition text-sm";
    tr.innerHTML = `
      <td class="py-3 px-4 flex items-center space-x-3">
        <img src="${emp.avatar}" class="w-8 h-8 rounded-full object-cover">
        <div>
          <span class="font-semibold text-slate-100 block">${escapeHtml(emp.name)}</span>
          <span class="text-xs text-slate-500 font-mono">${emp.id}</span>
        </div>
      </td>
      <td class="py-3 px-4 text-slate-300">${emp.department}</td>
      <td class="py-3 px-4 text-slate-400 font-mono text-xs">${emp.shift}</td>
      <td class="py-3 px-4 text-slate-300 font-mono text-xs">${emp.todayPunch}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded-full text-xs font-semibold ${emp.attendanceStatus === 'Present' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}">
          ${emp.attendanceStatus}
        </span>
      </td>
      <td class="py-3 px-4 text-slate-300">${emp.workMode}</td>
      <td class="py-3 px-4">
        <button onclick="quickClockToggle('${emp.id}')" class="text-xs px-3 py-1 bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-md transition font-medium border border-indigo-500/30">
          Manual Override
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function quickClockToggle(empId) {
  const emp = employees.find(e => e.id === empId);
  if (!emp) return;

  if (emp.attendanceStatus === 'Present') {
    emp.attendanceStatus = 'Clocked Out';
    emp.todayPunch = getCurrentTimeIST() + ' (Out)';
  } else {
    emp.attendanceStatus = 'Present';
    emp.todayPunch = getCurrentTimeIST() + ' (In)';
    emp.status = 'Active';
  }

  activities.unshift({
    time: getCurrentTimeIST(),
    user: emp.name,
    action: `Updated attendance to ${emp.attendanceStatus} at ${emp.todayPunch}`
  });

  saveState();
}

// Leave Requests Table
function renderLeaves() {
  const container = document.getElementById('leaves-container');
  if (!container) return;

  container.innerHTML = '';
  leaves.forEach(lv => {
    const card = document.createElement('div');
    card.className = "glass-card p-4 rounded-xl flex items-center justify-between border border-slate-800";
    card.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-slate-200 text-sm">${escapeHtml(lv.employeeName)}</span>
          <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-indigo-300">${lv.department}</span>
          <span class="text-xs font-semibold px-2 py-0.5 rounded ${lv.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' : lv.status === 'Rejected' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'}">${lv.status}</span>
        </div>
        <p class="text-xs text-slate-400 font-medium">${lv.type} · ${lv.dates}</p>
        <p class="text-xs text-slate-500 italic">"${escapeHtml(lv.reason)}"</p>
      </div>
      <div class="flex items-center space-x-2">
        ${lv.status === 'Pending' ? `
          <button onclick="updateLeave('${lv.id}', 'Approved')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition">Approve</button>
          <button onclick="updateLeave('${lv.id}', 'Rejected')" class="px-3 py-1.5 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white rounded-lg text-xs font-medium transition border border-rose-500/30">Reject</button>
        ` : `
          <span class="text-xs text-slate-500">Processed</span>
        `}
      </div>
    `;
    container.appendChild(card);
  });
}

function updateLeave(leaveId, newStatus) {
  const lv = leaves.find(l => l.id === leaveId);
  if (!lv) return;
  lv.status = newStatus;
  activities.unshift({
    time: getCurrentTimeIST(),
    user: "Vivek Debnath (PM / HR Admin)",
    action: `${newStatus} leave request for ${lv.employeeName} (${lv.dates})`
  });
  saveState();
}

// Activity Log & KPI Cards
function updateKpis() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const activeEmps = employees.filter(e => e.attendanceStatus === 'Present').length;
  const inProgress = tasks.filter(t => t.status === 'inprogress' || t.status === 'review').length;

  const rate = total > 0 ? Math.round((completed / total) * 100) : 100;

  document.getElementById('metric-sla-rate').textContent = `${rate}%`;
  document.getElementById('metric-tasks-count').textContent = `${completed} / ${total}`;
  document.getElementById('metric-headcount').textContent = `${activeEmps} / ${employees.length} Active`;
  document.getElementById('metric-in-flight').textContent = `${inProgress} Tasks`;

  // Render recent activity feed
  const actContainer = document.getElementById('recent-activity-list');
  if (actContainer) {
    actContainer.innerHTML = '';
    activities.slice(0, 6).forEach(act => {
      const item = document.createElement('div');
      item.className = "flex items-start space-x-3 text-xs";
      item.innerHTML = `
        <span class="font-mono text-indigo-400 font-bold whitespace-nowrap">${act.time}</span>
        <div class="text-slate-300">
          <span class="font-semibold text-slate-100">${escapeHtml(act.user)}</span>: ${escapeHtml(act.action)}
        </div>
      `;
      actContainer.appendChild(item);
    });
  }
}

// Create New Task Modal Logic
function openNewTaskModal() {
  const modal = document.getElementById('new-task-modal');
  if (modal) modal.classList.remove('hidden');

  // Populate Assignee Select
  const sel = document.getElementById('task-assignee-select');
  if (sel) {
    sel.innerHTML = employees.map(e => `<option value="${e.name}">${e.name} (${e.department})</option>`).join('');
  }
}

function closeNewTaskModal() {
  const modal = document.getElementById('new-task-modal');
  if (modal) modal.classList.add('hidden');
}

function handleCreateTaskSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('task-title-input').value.trim();
  const desc = document.getElementById('task-desc-input').value.trim();
  const assignee = document.getElementById('task-assignee-select').value;
  const priority = document.getElementById('task-priority-select').value;
  const cutoff = document.getElementById('task-cutoff-select').value;
  const dept = employees.find(emp => emp.name === assignee)?.department || "Operations";

  if (!title) return;

  const nextId = "ALLO-OPS-" + (100 + tasks.length + 1);

  const newTask = {
    id: nextId,
    title: title,
    description: desc || "Standard Operational Task assigned via Portal.",
    assignee: assignee,
    department: dept,
    priority: priority,
    cutoffTime: cutoff,
    dueDate: "Today",
    status: "todo",
    progress: 0,
    proofAttached: false,
    proofUrl: "",
    frequency: "Daily"
  };

  tasks.push(newTask);
  activities.unshift({
    time: getCurrentTimeIST(),
    user: "Vivek Debnath",
    action: `Created & assigned new task ${newTask.id} to ${assignee}`
  });

  saveState();
  closeNewTaskModal();
}

// Add New Employee Modal Logic
function openNewEmployeeModal() {
  const modal = document.getElementById('new-employee-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeNewEmployeeModal() {
  const modal = document.getElementById('new-employee-modal');
  if (modal) modal.classList.add('hidden');
}

function handleCreateEmployeeSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('emp-name-input').value.trim();
  const role = document.getElementById('emp-role-input').value.trim();
  const dept = document.getElementById('emp-dept-select').value;
  const email = document.getElementById('emp-email-input').value.trim();
  const phone = document.getElementById('emp-phone-input').value.trim();

  if (!name || !role) return;

  const nextId = "EMP-" + (100 + employees.length + 1);

  const newEmp = {
    id: nextId,
    name: name,
    role: role,
    department: dept,
    email: email || `${name.toLowerCase().replace(' ', '.')}@alloinnoware.com`,
    phone: phone || "+91 98000 00000",
    avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`,
    status: "Active",
    workMode: "Office - HQ",
    shift: "09:30 AM - 06:30 PM",
    todayPunch: getCurrentTimeIST(),
    attendanceStatus: "Present",
    leaveBalance: { casual: 10, sick: 7, earned: 15 },
    tasksCount: 0
  };

  employees.push(newEmp);
  activities.unshift({
    time: getCurrentTimeIST(),
    user: "Vivek Debnath",
    action: `Onboarded new employee ${newEmp.name} (${newEmp.id}) into ${dept}`
  });

  saveState();
  closeNewEmployeeModal();
}

// Task Details Modal
function openTaskDetail(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  const modal = document.getElementById('task-detail-modal');
  if (!modal) return;

  document.getElementById('detail-task-id').textContent = task.id;
  document.getElementById('detail-task-title').textContent = task.title;
  document.getElementById('detail-task-desc').textContent = task.description;
  document.getElementById('detail-task-assignee').textContent = task.assignee;
  document.getElementById('detail-task-dept').textContent = task.department;
  document.getElementById('detail-task-priority').textContent = task.priority;
  document.getElementById('detail-task-cutoff').textContent = task.cutoffTime;
  document.getElementById('detail-task-status').textContent = task.status.toUpperCase();
  document.getElementById('detail-task-progress').style.width = `${task.progress}%`;
  document.getElementById('detail-task-progress-txt').textContent = `${task.progress}% Completed`;

  const proofSection = document.getElementById('detail-task-proof');
  if (task.proofAttached && task.proofUrl) {
    proofSection.innerHTML = `<a href="${task.proofUrl}" target="_blank" class="text-xs text-indigo-400 hover:underline flex items-center gap-1 font-mono">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
      ${task.proofUrl}
    </a>`;
  } else {
    proofSection.innerHTML = `<span class="text-xs text-slate-500 italic">No external proof link attached yet.</span>`;
  }

  modal.classList.remove('hidden');
}

function closeTaskDetailModal() {
  const modal = document.getElementById('task-detail-modal');
  if (modal) modal.classList.add('hidden');
}

// Helpers
function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

function getCurrentTimeIST() {
  const d = new Date();
  return d.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }) + " IST";
}

function renderAll() {
  renderKanban();
  renderEmployees();
  renderAttendance();
  renderLeaves();
  updateKpis();
}

// Live Time Header Clock
function updateClock() {
  const clockEl = document.getElementById('live-clock-badge');
  if (clockEl) {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }) + ' IST';
  }
}

// Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderAll();
  updateClock();
  setInterval(updateClock, 1000);

  // Filter Listeners
  document.getElementById('filter-assignee')?.addEventListener('change', renderKanban);
  document.getElementById('filter-dept')?.addEventListener('change', renderKanban);
  document.getElementById('search-tasks')?.addEventListener('input', renderKanban);
});
