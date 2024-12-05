class UserView {
    constructor() {
        this.userList = document.getElementById('userList');
        this.userForm = document.getElementById('userForm');
    }

    renderUsers(users) {
        this.userList.innerHTML = '<h5 class="center-align">Users List</h5>';
        
        if (users.length === 0) {
            this.userList.innerHTML += `
                <div class="center-align grey-text">
                    <i class="material-icons medium">person_outline</i>
                    <p>No users found</p>
                </div>`;
            return;
        }
        
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-item';
            userDiv.innerHTML = `
                <div class="row valign-wrapper" style="margin-bottom: 0;">
                    <div class="col s2 m1">
                        <i class="material-icons circle blue white-text">person</i>
                    </div>
                    <div class="col s8 m9">
                        <span class="black-text">
                            <strong>${user.name}</strong>
                        </span><br>
                        <span class="user-email">
                            <i class="material-icons tiny">email</i> ${user.email}
                        </span>
                    </div>
                    <div class="col s2 m2">
                        <button class="btn-floating btn-small waves-effect waves-light blue" 
                                onclick="userController.viewUserDetails('${user._id}')">
                            <i class="material-icons">visibility</i>
                        </button>
                    </div>
                </div>
            `;
            this.userList.appendChild(userDiv);
        });
    }

    showMessage(message, type) {
        M.toast({
            html: message,
            classes: type,
            displayLength: 3000
        });
    }
}