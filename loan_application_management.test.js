
const { displayApplications, approveApplication, rejectApplication, filterApplications, applications } = require('./loanApplications');

describe('Loan Applications Management', () => {
    beforeEach(() => {
        
        applications.length = 0;
        applications.push(
            { id: 12345, name: 'Monica Keza', cooperativeId: 'C001', loanAmount: 15000, creditScore: 700, status: 'Pending' },
            { id: 12346, name: 'Bonny Umutoni', cooperativeId: 'C002', loanAmount: 20000, creditScore: 580, status: 'Pending' }
        );
    });

    test('Display Loan Applications in Table Format', () => {
        const displayedApplications = displayApplications();
        expect(displayedApplications).toEqual([
            { name: 'Monica Keza', cooperativeId: 'C001', loanAmount: 15000, creditScore: 700, status: 'Pending' },
            { name: 'Bonny Umutoni', cooperativeId: 'C002', loanAmount: 20000, creditScore: 580, status: 'Pending' }
        ]);
    });

    test('Approve Loan Application', () => {
        approveApplication(12345);
        const application = applications.find(app => app.id === 12345);
        expect(application.status).toBe('Approved');
        expect(applications.filter(app => app.status === 'Pending')).not.toContain(application);
    });

    test('Reject Loan Application', () => {
        rejectApplication(12346, 'Credit score below threshold');
        const application = applications.find(app => app.id === 12346);
        expect(application.status).toBe('Rejected');
        expect(applications.filter(app => app.status === 'Pending')).not.toContain(application);
    });

    test('Filter by Status', () => {
        const filteredApplications = filterApplications('Pending');
        expect(filteredApplications).toEqual([
            { id: 12345, name: 'Monica Keza', cooperativeId: 'C001', loanAmount: 15000, creditScore: 700, status: 'Pending' },
            { id: 12346, name: 'Bonny Umutoni', cooperativeId: 'C002', loanAmount: 20000, creditScore: 580, status: 'Pending' }
        ]);
    });

    test('Credit Score Validation', () => {
        const application = applications.find(app => app.id === 12346);
        if (application.creditScore < 600) {
            expect(application.status).toBe('Pending');
        }
    });
});
