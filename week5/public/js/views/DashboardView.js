class DashboardView {
    constructor() {
        this.dashboardStats = document.getElementById('dashboardStats');
    }

    renderStats(stats) {
        this.dashboardStats.innerHTML = `
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Total Users</span>
                            <h3>${stats.totalUsers}</h3>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card green darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Active Users</span>
                            <h3>${stats.activeUsers}</h3>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}