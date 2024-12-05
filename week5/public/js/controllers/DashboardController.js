// public/js/controllers/DashboardController.js
class DashboardController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async refreshStats() {
        try {
            const stats = await this.model.getStats();
            if (stats) {
                this.view.renderStats(stats);
            } else {
                // Handle case where no stats are returned
                this.view.renderStats({ totalUsers: 0, activeUsers: 0 });
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
            // Show error message in the dashboard
            this.view.showError('Unable to load statistics');
        }
    }
}