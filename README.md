# 🏢 NexFlow Ops — Enterprise HRMS & Operations Task Management Suite

> **Architect & Technical Project Manager:** Vivek Debnath  
> **Target Production Domain:** High-Throughput E-Commerce, Warehousing, and Supply Chain Operations (Allo Innoware / NexG Digital Systems)  
> **Tech Stack:** Modern JavaScript (ES6+), Reactive State Engine, Tailwind CSS, Glassmorphism UI, Responsive Kanban Board, Biometric Attendance Simulator.

---

## 📌 Executive Overview

**NexFlow Ops** is a unified operational command center combining **Human Resource Management (HRMS)** with an **Automated Kanban Task Orchestration System**. Engineered specifically for high-velocity supply chain, inventory, and fulfillment operations where SLA cutoffs (e.g., `15:30 IST`, `16:00 IST`) dictate dispatch success.

The platform closes the gap between people management and daily operational execution by tying employee rosters, attendance shifts, and leave coverage directly into recurring task boards, SLA escalation triggers, and manager audit logs.

---

## 🌟 Core Modules & Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                   NexFlow Operations Command Center                    │
├───────────────────────────────────┬────────────────────────────────────┤
│           👥 HRMS Hub             │       📋 Task Kanban Desk          │
│ • Employee Directory & Roles      │ • 5-Stage Visual Workflow          │
│ • Real-time Shift & Attendance    │ • P0/P1/P2 SLA Priority Tiers      │
│ • Biometric Punch Clock Simulator │ • Hard Cutoff Timers (16:00 IST)   │
│ • Leave Request & Approval Queue  │ • Proof & Verification Audit Links │
├───────────────────────────────────┴────────────────────────────────────┤
│                  📊 Analytics & SLA Control Tower                      │
│ • On-Time Delivery Rate (%)       │ • Real-time System Audit Trail     │
│ • Floor Workforce Active Count    │ • Department SLA Breakdown         │
└────────────────────────────────────────────────────────────────────────┘
```

### 1. 📋 Operations Task Kanban Desk
* **5-Stage Pipeline:** `Backlog` ➔ `To Do` ➔ `In Progress` ➔ `Review` ➔ `Completed (SLA Met)`.
* **SLA Cutoffs & Priority Routing:** Strict cutoff flags (`16:00 IST`, `15:30 IST`) with priority tags (`P0 Critical`, `P1 High`, `P2 Normal`).
* **Verification Proof Linking:** Directly links warehouse GRN logs, courier manifests (Shiprocket/Delhivery), and audit spreadsheets to task cards.
* **Instant Filtering:** Real-time filter by Assignee (`Rohan Sharma`, `Priya Patel`, `Ankit Verma`, `Sneha Kulkarni`, `Vikram Malhotra`) and Department (`Supply Chain`, `Logistics`, `Operations`, `Customer Ops`).

### 2. 👥 HRMS Employee Directory
* Complete employee profiles with roles, department, official emails, direct contact numbers, and active task loads.
* Visual status tags: `Active`, `On Leave`, `In Field`.
* Interactive onboarding modal to add new team members with automatic ID sequencing (`EMP-106+`).

### 3. ⏱️ Attendance & Shift Roster
* Biometric clock-in / clock-out simulation with real-time Indian Standard Time (IST) timestamps.
* Shift monitoring (`09:30 AM - 06:30 PM`, `08:30 AM - 05:30 PM`).
* Work-mode tracking: `Office - HQ`, `Warehouse Unit 4`, `Hybrid / Remote`.

### 4. 🌴 Leave Approvals & Absence Coverage
* Leave request queue with immediate single-click `Approve` / `Reject` actions.
* Real-time leave balance tracking (Casual, Sick, Earned).
* Automatically updates workforce floor availability so managers avoid assigning SLA-critical tasks to staff on leave.

### 5. 📊 Executive SLA Analytics & Live Audit Trail
* Dynamic KPI cards tracking: Overall SLA Adherence Rate (`96%`), Completed Daily Tasks (`1/5`), Active Headcount (`4/5`), and In-Flight Tasks.
* Departmental SLA benchmarking across Supply Chain, Logistics, Warehouse QA, and Customer Ops.
* Real-time audit stream capturing every task transition, attendance punch, and leave authorization.

---

## 🚀 Quick Start / Local Deployment

No heavy dependencies or build pipelines required. Runs instantly in any modern browser:

```bash
# Clone the repository
git clone https://github.com/Asccvivek/hrms-task-management-suite.git
cd hrms-task-management-suite

# Serve locally via Python
python3 -m http.server 8088

# Open in browser
open http://localhost:8088
```

---

## 👤 Architect Profile

* **Name:** Vivek Debnath
* **GitHub:** [@Asccvivek](https://github.com/Asccvivek)
* **Specialization:** Technical Project Management, Digital Systems Architecture, E-Commerce Operations, Google Apps Script & Cloud Automation.
