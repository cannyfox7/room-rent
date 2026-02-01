// // ============================================
// // AZAD BHAWAN TENANT PORTAL - MAIN JAVASCRIPT
// // ============================================

// // ============ INDEX.HTML FUNCTIONS ============
// // Redirect to room details page

// const ADMIN_PASSWORD = "qawsedrf";
// let isAdminMode = false;

// function openAdminModal() {
//     document.getElementById('adminModal').style.display = 'flex';
// }

// function closeAdminModal() {
//     document.getElementById('adminModal').style.display = 'none';
//     document.getElementById('adminPassword').value = '';
// }

// function adminLogin() {
//     const password = document.getElementById('adminPassword').value;
//     if (password === ADMIN_PASSWORD) {
//         isAdminMode = true;
//         document.getElementById('adminModal').style.display = 'none';
//         document.getElementById('adminPanel').style.display = 'block';
//         loadAdminData();
//     } else {
//         alert('❌ Wrong Password!');
//         document.getElementById('adminPassword').style.borderColor = '#ae2012';
//     }
// }

// function closeAdminPanel() {
//     isAdminMode = false;
//     document.getElementById('adminPanel').style.display = 'none';
// }

// function saveRoomData() {
//     const roomNum = document.getElementById('adminRoomNum').value;
//     const tenant = document.getElementById('adminTenant').value;
//     const contact = document.getElementById('adminContact').value;
//     const email = document.getElementById('adminEmail').value;
//     const due = parseInt(document.getElementById('adminDue').value) || 0;

//     roomData[roomNum] = {
//         tenant, contact, email, due
//     };
    
//     alert(`✅ Room ${roomNum} updated successfully!`);
//     loadAdminData();
// }

// function loadAdminData() {
//     const roomSelect = document.getElementById('adminRoomNum');
//     roomSelect.innerHTML = '';
    
//     Object.keys(roomData).forEach(roomNum => {
//         const option = document.createElement('option');
//         option.value = roomNum;
//         option.textContent = `Room ${roomNum}`;
//         roomSelect.appendChild(option);
//     });
    
//     updateAdminForm();
// }

// function updateAdminForm() {
//     const roomNum = document.getElementById('adminRoomNum').value;
//     const data = roomData[roomNum];
    
//     if (data) {
//         document.getElementById('adminTenant').value = data.tenant;
//         document.getElementById('adminContact').value = data.contact;
//         document.getElementById('adminEmail').value = data.email;
//         document.getElementById('adminDue').value = data.due;
//     }
// }











// function openRoom(room) {
//     window.location.href = `room-details.html?room=${room}`;
// }

// // Smooth scrolling for navigation links
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('a[href^="#"]');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });
// });

// // ============ ROOM-DETAILS.HTML FUNCTIONS ============
// // Room tenant data
// const roomData = {
//     '101': { 
//         tenant: 'Rahul Sharma', 
//         contact: '+91 98765 43210', 
//         email: 'rahul@tenant.com', 
//         due: 0 
//     },
//     '102': { 
//         tenant: 'Priya Singh', 
//         contact: '+91 87654 32109', 
//         email: 'priya@tenant.com', 
//         due: 15000 
//     },
//     '103': { 
//         tenant: 'Amit Kumar', 
//         contact: '+91 76543 21098', 
//         email: 'amit@tenant.com', 
//         due: 0 
//     },
//     '104': { 
//         tenant: 'Neha Patel', 
//         contact: '+91 65432 10987', 
//         email: 'neha@tenant.com', 
//         due: 17000 
//     },
//     '201': { 
//         tenant: 'Vikram Singh', 
//         contact: '+91 54321 09876', 
//         email: 'vikram@tenant.com', 
//         due: 0 
//     },
//     '202': { 
//         tenant: 'Anjali Rao', 
//         contact: '+91 43210 98765', 
//         email: 'anjali@tenant.com', 
//         due: 12000 
//     },
//     '203': { 
//         tenant: 'Suresh Kumar', 
//         contact: '+91 32109 87654', 
//         email: 'suresh@tenant.com', 
//         due: 0 
//     }
// };

// // Payment history for each room
// const paymentHistory = {
//     '101': [
//         { month: 'Jan 2026', date: '2026-01-15', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Dec 2025', date: '2025-12-10', mode: 'Bank Transfer', amount: 12000, status: 'paid' },
//         { month: 'Nov 2025', date: '2025-11-20', mode: 'Cash', amount: 12000, status: 'paid' },
//         { month: 'Oct 2025', date: '2025-10-18', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Sep 2025', date: '2025-09-12', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Aug 2025', date: '2025-08-25', mode: 'Bank Transfer', amount: 12000, status: 'paid' }
//     ],
//     '102': [
//         { month: 'Jan 2026', date: '2026-01-28', mode: 'UPI', amount: 12000, status: 'pending' },
//         { month: 'Dec 2025', date: '2025-12-10', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Nov 2025', date: '2025-11-20', mode: 'Cash', amount: 12000, status: 'paid' },
//         { month: 'Oct 2025', date: '2025-10-18', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Sep 2025', date: '2025-09-12', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Aug 2025', date: '2025-08-25', mode: 'Cash', amount: 12000, status: 'paid' }
//     ],
//     '103': [
//         { month: 'Jan 2026', date: '2026-01-15', mode: 'UPI', amount: 8500, status: 'paid' },
//         { month: 'Dec 2025', date: '2025-12-10', mode: 'UPI', amount: 8500, status: 'paid' },
//         { month: 'Nov 2025', date: '2025-11-20', mode: 'Cash', amount: 8500, status: 'paid' },
//         { month: 'Oct 2025', date: '2025-10-18', mode: 'UPI', amount: 8500, status: 'paid' },
//         { month: 'Sep 2025', date: '2025-09-12', mode: 'UPI', amount: 8500, status: 'paid' },
//         { month: 'Aug 2025', date: '2025-08-25', mode: 'Bank Transfer', amount: 8500, status: 'paid' }
//     ],
//     '104': [
//         { month: 'Jan 2026', date: '2026-01-20', mode: 'UPI', amount: 12000, status: 'overdue' },
//         { month: 'Dec 2025', date: '2025-12-10', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Nov 2025', date: '2025-11-20', mode: 'Cash', amount: 12000, status: 'paid' },
//         { month: 'Oct 2025', date: '2025-10-18', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Sep 2025', date: '2025-09-12', mode: 'UPI', amount: 12000, status: 'paid' },
//         { month: 'Aug 2025', date: '2025-08-25', mode: 'Cash', amount: 12000, status: 'paid' }
//     ],
//     '201': [
//         { month: 'Jan 2026', date: '2026-01-15', mode: 'UPI', amount: 10000, status: 'paid' },
//         { month: 'Dec 2025', date: '2025-12-10', mode: 'Bank Transfer', amount: 10000, status: 'paid' },
//         { month: 'Nov 2025', date: '2025-11-20', mode: 'Cash', amount: 10000, status: 'paid' },
//         { month: 'Oct 2025', date: '2025-10-18', mode: 'UPI', amount: 10000, status: 'paid' },
//         { month: 'Sep 2025', date: '2025-09-12', mode: 'UPI', amount: 10000, status: 'paid' },
//         { month: 'Aug 2025', date: '2025-08-25', mode: 'Bank Transfer', amount: 10000, status: 'paid' }
//     ],
//     '202': [
//         { month: 'Jan 2026', date: '2026-01-28', mode: 'UPI', amount: 10000, status: 'pending' },
//         { month: 'Dec 2025', date: '2025-12-10', mode: 'UPI', amount: 10000, status: 'paid' },
//         { month: 'Nov 2025', date: '2025-11-20', mode: 'Cash', amount: 10000, status: 'paid' },
//         { month: 'Oct 2025', date: '2025-10-18', mode: 'UPI', amount: 10000, status: 'paid' },
//         { month: 'Sep 2025', date: '2025-09-12', mode: 'UPI', amount: 10000, status: 'paid' },
//         { month: 'Aug 2025', date: '2025-08-25', mode: 'Cash', amount: 10000, status: 'paid' }
//     ],
//     '203': [
//         { month: 'Jan 2026', date: '2026-01-15', mode: 'UPI', amount: 9500, status: 'paid' },
//         { month: 'Dec 2025', date: '2025-12-10', mode: 'UPI', amount: 9500, status: 'paid' },
//         { month: 'Nov 2025', date: '2025-11-20', mode: 'Cash', amount: 9500, status: 'paid' },
//         { month: 'Oct 2025', date: '2025-10-18', mode: 'UPI', amount: 9500, status: 'paid' },
//         { month: 'Sep 2025', date: '2025-09-12', mode: 'UPI', amount: 9500, status: 'paid' },
//         { month: 'Aug 2025', date: '2025-08-25', mode: 'Bank Transfer', amount: 9500, status: 'paid' }
//     ]
// };

// // Initialize room details page
// if (window.location.pathname.includes('room-details')) {
//     initRoomDetails();
// }

// function initRoomDetails() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const roomNum = urlParams.get('room') || '101';
    
//     // Update room info
//     const roomNumberEl = document.getElementById('room-number');
//     const tenantNameEl = document.getElementById('tenant-name');
//     const totalDueEl = document.getElementById('total-due');
    
//     if (roomNumberEl) roomNumberEl.textContent = `Room ${roomNum}`;
//     const data = roomData[roomNum] || roomData['101'];
//     if (tenantNameEl) tenantNameEl.textContent = data.tenant;
//     if (totalDueEl) totalDueEl.textContent = `Current Due: ₹${data.due}`;
    
//     // Display payments
//     const payments = paymentHistory[roomNum] || paymentHistory['101'];
//     displayPayments(payments);
    
//     // Toggle full history
//     window.toggleFullHistory = function() {
//         toggleFullHistory(roomNum);
//     };
// }

// function displayPayments(payments) {
//     const container = document.getElementById('payment-history');
//     if (!container) return;
    
//     container.innerHTML = payments.slice(0, 6).map(p => `
//         <div class="payment-card ${p.status}">
//             <div class="payment-info">
//                 <div class="payment-month">${p.month}</div>
//                 <div class="payment-date">${new Date(p.date).toLocaleDateString('en-IN')}</div>
//                 <div class="payment-mode">${p.mode}</div>
//             </div>
//             <div class="payment-amount">₹${p.amount.toLocaleString()}</div>
//         </div>
//     `).join('');
// }

// let showFullHistory = false;

// function toggleFullHistory(roomNum) {
//     showFullHistory = !showFullHistory;
//     const btn = event.target;
    
//     if (showFullHistory) {
//         const fullHistory = [...(paymentHistory[roomNum] || paymentHistory['101']), 
//             { month: 'Jul 2025', date: '2025-07-15', mode: 'Cash', amount: 12000, status: 'paid' },
//             { month: 'Jun 2025', date: '2025-06-20', mode: 'UPI', amount: 12000, status: 'pending' }];
//         displayPayments(fullHistory);
//         btn.textContent = '📊 Show Last 6 Months';
//     } else {
//         const payments = paymentHistory[roomNum] || paymentHistory['101'];
//         displayPayments(payments);
//         btn.textContent = '📊 View Full History';
//     }
// }


















// ============================================
// AZAD BHAWAN TENANT PORTAL - FIXED JS
// ============================================

// Load data from LocalStorage or use defaults
function loadDataFromStorage() {
    const savedRoomData = localStorage.getItem('roomData');
    const savedPaymentHistory = localStorage.getItem('paymentHistory');
    
    if (savedRoomData) roomData = JSON.parse(savedRoomData);
    if (savedPaymentHistory) paymentHistory = JSON.parse(savedPaymentHistory);
}

// Save data to LocalStorage
function saveDataToStorage() {
    localStorage.setItem('roomData', JSON.stringify(roomData));
    localStorage.setItem('paymentHistory', JSON.stringify(paymentHistory));
}

// ============ ADMIN FUNCTIONS ============
const ADMIN_PASSWORD = "qawsedrf";
let isAdminMode = false;

function openAdminModal() {
    document.getElementById('adminModal').style.display = 'flex';
}

function closeAdminModal() {
    document.getElementById('adminModal').style.display = 'none';
    document.getElementById('adminPassword').value = '';
}

function adminLogin() {
    const password = document.getElementById('adminPassword').value;
    if (password === ADMIN_PASSWORD) {
        isAdminMode = true;
        document.getElementById('adminModal').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadAdminData();
    } else {
        alert('❌ Wrong Password!');
        document.getElementById('adminPassword').style.borderColor = '#ae2012';
    }
}

function closeAdminPanel() {
    isAdminMode = false;
    document.getElementById('adminPanel').style.display = 'none';
}

function saveRoomData() {
    const roomNum = document.getElementById('adminRoomNum').value;
    const tenant = document.getElementById('adminTenant').value || 'Unknown Tenant';
    const contact = document.getElementById('adminContact').value || '';
    const email = document.getElementById('adminEmail').value || '';
    const due = parseInt(document.getElementById('adminDue').value) || 0;

    // Update room data
    roomData[roomNum] = { tenant, contact, email, due };
    saveDataToStorage(); // ✅ SAVES TO LOCALSTORAGE
    
    alert(`✅ Room ${roomNum} updated successfully!\nTenant: ${tenant}\nDue: ₹${due}`);
    loadAdminData();
    updateRoomCards(); // Update index.html room cards
}

function loadAdminData() {
    const roomSelect = document.getElementById('adminRoomNum');
    if (!roomSelect) return;
    
    roomSelect.innerHTML = '';
    Object.keys(roomData).forEach(roomNum => {
        const option = document.createElement('option');
        option.value = roomNum;
        option.textContent = `Room ${roomNum}`;
        roomSelect.appendChild(option);
    });
    
    updateAdminForm();
}

function updateAdminForm() {
    const roomNum = document.getElementById('adminRoomNum').value;
    const data = roomData[roomNum];
    
    if (data) {
        document.getElementById('adminTenant').value = data.tenant;
        document.getElementById('adminContact').value = data.contact;
        document.getElementById('adminEmail').value = data.email;
        document.getElementById('adminDue').value = data.due;
    }
}

// Update room cards on index.html with live data
function updateRoomCards() {
    if (!window.location.pathname.includes('index.html')) return;
    
    Object.keys(roomData).forEach(roomNum => {
        const statusDiv = document.querySelector(`[onclick="openRoom('${roomNum}')"] .room-status`);
        if (statusDiv) {
            const data = roomData[roomNum];
            const status = data.due === 0 ? '✓ Paid' : `⚠️ Due: ₹${data.due}`;
            statusDiv.innerHTML = status;
            statusDiv.style.color = data.due === 0 ? '#94d2bd' : '#ee9b00';
        }
    });
}

// ============ ROOM DATA (loads from LocalStorage) ============
let roomData = {
    '101': { tenant: 'Rahul Sharma', contact: '+91 98765 43210', email: 'rahul@tenant.com', due: 0 },
    '102': { tenant: 'Priya Singh', contact: '+91 87654 32109', email: 'priya@tenant.com', due: 15000 },
    '103': { tenant: 'Amit Kumar', contact: '+91 76543 21098', email: 'amit@tenant.com', due: 0 },
    '104': { tenant: 'Neha Patel', contact: '+91 65432 10987', email: 'neha@tenant.com', due: 17000 },
    '201': { tenant: 'Vikram Singh', contact: '+91 54321 09876', email: 'vikram@tenant.com', due: 0 },
    '202': { tenant: 'Anjali Rao', contact: '+91 43210 98765', email: 'anjali@tenant.com', due: 12000 },
    '203': { tenant: 'Suresh Kumar', contact: '+91 32109 87654', email: 'suresh@tenant.com', due: 0 }
};

let paymentHistory = {
    '101': [
        { month: 'Jan 2026', date: '2026-01-15', mode: 'UPI', amount: 12000, status: 'paid' },
        { month: 'Dec 2025', date: '2025-12-10', mode: 'Bank Transfer', amount: 12000, status: 'paid' }
    ]
    // Add other rooms as needed
};

// ============ PAGE FUNCTIONS ============
function openRoom(room) {
    window.location.href = `room-details.html?room=${room}`;
}

// Room details page initialization
if (window.location.pathname.includes('room-details')) {
    initRoomDetails();
}

function initRoomDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomNum = urlParams.get('room') || '101';
    
    const roomNumberEl = document.getElementById('room-number');
    const tenantNameEl = document.getElementById('tenant-name');
    const totalDueEl = document.getElementById('total-due');
    
    if (roomNumberEl) roomNumberEl.textContent = `Room ${roomNum}`;
    const data = roomData[roomNum] || roomData['101'];
    if (tenantNameEl) tenantNameEl.textContent = data.tenant;
    if (totalDueEl) totalDueEl.textContent = `Current Due: ₹${data.due}`;
    
    const payments = paymentHistory[roomNum] || paymentHistory['101'];
    displayPayments(payments);
    
    window.toggleFullHistory = function() {
        toggleFullHistory(roomNum);
    };
}

function displayPayments(payments) {
    const container = document.getElementById('payment-history');
    if (!container) return;
    
    container.innerHTML = payments.slice(0, 6).map(p => `
        <div class="payment-card ${p.status}">
            <div class="payment-info">
                <div class="payment-month">${p.month}</div>
                <div class="payment-date">${new Date(p.date).toLocaleDateString('en-IN')}</div>
                <div class="payment-mode">${p.mode}</div>
            </div>
            <div class="payment-amount">₹${p.amount.toLocaleString()}</div>
        </div>
    `).join('');
}

// ============ INITIALIZE ON PAGE LOAD ============
document.addEventListener('DOMContentLoaded', function() {
    loadDataFromStorage(); // ✅ Load saved data
    updateRoomCards(); // Update room status displays
    
    // Close modals on outside click
    window.onclick = function(event) {
        const adminModal = document.getElementById('adminModal');
        const adminPanel = document.getElementById('adminPanel');
        
        if (event.target === adminModal) closeAdminModal();
        if (event.target === adminPanel) closeAdminPanel();
    }
    
    // Admin room dropdown
    const adminRoomSelect = document.getElementById('adminRoomNum');
    if (adminRoomSelect) {
        adminRoomSelect.addEventListener('change', updateAdminForm);
    }
});
