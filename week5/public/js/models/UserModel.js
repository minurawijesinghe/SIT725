class UserModel {
    constructor() {
        this.API_URL = 'http://localhost:3000';
    }

    async createUser(userData) {
        try {
            const response = await fetch(`${this.API_URL}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            return await response.json();
        } catch (error) {
            throw new Error('Error creating user');
        }
    }

    async getUsers() {
        try {
            const response = await fetch(`${this.API_URL}/users`);
            return await response.json();
        } catch (error) {
            throw new Error('Error fetching users');
        }
    }

    async getUserById(id) {
        try {
            const response = await fetch(`${this.API_URL}/users/${id}`);
            return await response.json();
        } catch (error) {
            throw new Error('Error fetching user');
        }
    }
}