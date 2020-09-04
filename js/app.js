// Init Classes
const http = new Github;
const ui = new UI;

const searchUser = document.querySelector('.search-container');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    ui.clearError();

    if(userText !== '') {
        // make http call
        http.getUser(userText)
        .then(data => {
            if(data.profileData.message === 'Not Found') {
                // display error
                ui.showAlert('User Not Found', 'alert error');
            } else {
                // display user profile
                ui.displayProfile(data.profileData);

                // display user repositories
                ui.displayRepos(data.repos);

                ui.clearError()
            }
        })
        .catch(err => console.log(err));
    } else {
        document.querySelector('#profile').innerHTML ='';
    }
})
