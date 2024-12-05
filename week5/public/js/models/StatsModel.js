// public/js/models/StatsModel.js
class StatsModel {
    constructor() {
        this.API_URL = 'http://localhost:3000/api';  // Updated base URL
    }

    async getStats() {
        try {
            const response = await fetch(`${this.API_URL}/stats`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Stats fetch error:', error);
            throw new Error('Error fetching stats');
        }
    }
}