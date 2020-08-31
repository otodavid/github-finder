// Init Classes
const http = new Github;
const ui = new UI;


const searchUser = document.querySelector('.search-container');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

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
                // console.log(data.profileData);
            }
        })
        .catch(err => new Error(err));
    } 

    
})