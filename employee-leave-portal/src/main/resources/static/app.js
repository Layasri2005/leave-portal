// Initial Mock Data setup for local storage
function initStorage() {
    if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify({
            name: 'Laya Sri',
            empId: 'EMP001',
            email: 'layasri@gmail.com',
            phone: '+91 98765 43210',
            dept: 'Computer Science',
            designation: 'Software Developer',
            joiningDate: '01 Jan 2025'
        }));
    }

    if (!localStorage.getItem('leaves')) {
        const initialLeaves = [
            { id: 101, type: 'Casual Leave', from: '2026-10-10', to: '2026-10-11', days: 2, status: 'Pending', reason: 'Personal work' },
            { id: 102, type: 'Sick Leave', from: '2026-09-05', to: '2026-09-05', days: 1, status: 'Approved', reason: 'Fever' },
            { id: 103, type: 'Earned Leave', from: '2026-08-15', to: '2026-08-16', days: 2, status: 'Approved', reason: 'Family event' },
            { id: 104, type: 'Casual Leave', from: '2026-07-20', to: '2026-07-21', days: 2, status: 'Rejected', reason: 'Project launch' }
        ];
        localStorage.setItem('leaves', JSON.stringify(initialLeaves));
    }

    if (!localStorage.getItem('leaveBalances')) {
        localStorage.setItem('leaveBalances', JSON.stringify({
            casual: { available: 8, total: 12 },
            sick: { available: 5, total: 8 },
            earned: { available: 10, total: 15 },
            maternity: { available: 180, total: 180 },
            marriage: { available: 15, total: 15 }
        }));
    }
}

initStorage();