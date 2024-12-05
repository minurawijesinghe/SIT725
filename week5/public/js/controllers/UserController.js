class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('saveButton').addEventListener('click', () => this.saveUser());
        document.getElementById('refreshButton').addEventListener('click', () => this.getUsers());
        
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.saveUser();
            });
        });
    }

    async saveUser() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (!this.validateForm(name, email)) return;

        try {
            await this.model.createUser({ name, email });
            this.view.showMessage('User saved successfully', 'success');
            nameInput.value = '';
            emailInput.value = '';
            M.updateTextFields();
            this.getUsers();
            dashboardController.refreshStats();
        } catch (error) {
            this.view.showMessage(error.message, 'error');
        }
    }

    async getUsers() {
        try {
            const users = await this.model.getUsers();
            this.view.renderUsers(users);
        } catch (error) {
            this.view.showMessage(error.message, 'error');
        }
    }

    async viewUserDetails(userId) {
        try {
            const user = await this.model.getUserById(userId);
            // Open modal with user details
            const modal = document.getElementById('userModal');
            const instance = M.Modal.init(modal);
            document.getElementById('userDetails').innerHTML = `
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Created:</strong> ${new Date(user.createdAt).toLocaleString()}</p>
            `;
            instance.open();
        } catch (error) {
            this.view.showMessage(error.message, 'error');
        }
    }

    validateForm(name, email) {
        if (!name || !email) {
            this.view.showMessage('Please fill in all fields', 'error');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.view.showMessage('Please enter a valid email address', 'error');
            return false;
        }

        return true;
    }
}