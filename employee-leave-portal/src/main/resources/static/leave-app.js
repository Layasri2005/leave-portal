// Initial Mock Data if LocalStorage is empty
const INITIAL_LEAVES = [
    { id: 'LV-1001', type: 'Casual Leave', dates: '2026-10-10 to 2026-10-12', reason: 'Personal Work', status: 'Approved' },
    { id: 'LV-1002', type: 'Sick Leave', dates: '2026-10-15 to 2026-10-16', reason: 'Fever', status: 'Pending' }
];

// Helper functions for LocalStorage
function getLeaves() {
    const stored = localStorage.getItem('myLeaves');
    if (!stored) {
        localStorage.setItem('myLeaves', JSON.stringify(INITIAL_LEAVES));
        return INITIAL_LEAVES;
    }
    return JSON.parse(stored);
}

function saveLeaves(leaves) {
    localStorage.setItem('myLeaves', JSON.stringify(leaves));
}

function updateLeaveStatus(id, newStatus) {
    const leaves = getLeaves();
    const target = leaves.find(item => item.id === id);
    if (target) {
        target.status = newStatus;
        saveLeaves(leaves);
        return true;
    }
    return false;
}