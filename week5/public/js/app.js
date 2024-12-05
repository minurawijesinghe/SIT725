// public/js/app.js
// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    M.Modal.init(document.querySelectorAll('.modal'));
    M.updateTextFields();

    // Initialize Models
    const userModel = new UserModel();
    const statsModel = new StatsModel();

    // Initialize Views
    const userView = new UserView();
    const dashboardView = new DashboardView();

    // Initialize Controllers
    window.userController = new UserController(userModel, userView);
    window.dashboardController = new DashboardController(statsModel, dashboardView);

    // Load initial data
    userController.getUsers();
    dashboardController.refreshStats();
});

// Navigation functions
function showDashboard() {
    document.getElementById('dashboardStats').style.display = 'block';
    dashboardController.refreshStats();
}

function showUsers() {
    document.getElementById('dashboardStats').style.display = 'none';
    userController.getUsers();
}