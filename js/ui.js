class UI {

    displayProfile(user) {
        /* display profile picture
            have a link that opens user profile in new tab
            display no of repos
            no of gists
            no of followers
            no of folowing
            company
            website/blog
            location
            member since */

        const profile = document.getElementById('profile');
        profile.innerHTML =
         `<div class='profile-image'> 
            <div class=''profile-image>
                <img src='${user.avatar_url}' alt='profile picture/>
            </div>
            <a href='${user.html_url}'>View Profile</a>
        </div>
        <div class='details'>
            <div class='github-details>
                <span class='repos'>Public Repos: ${user.public_repos}</span>
                <span class='gists'>Public Gists: ${user.public_gists}</span>
                <span class='followers'>Followers: ${user.followers}</span>
                <span class='following'>Following: ${user.following}</span>
            </div>
            <ul class='personal-details'>
                <li class='company'>Company: ${user.company}</li>
                <li class='website'>Website/Blog: ${user.blog}</li>
                <li class='location'>Location: ${user.location}</li>
                <li class='membership'>Member Since: ${user.created_at}</li>
            </ul>
        </div>`

        // console.log(user.avatar_url);
        // console.log(user.html_url);
        // console.log(user.public_repos);
        // console.log(user.public_gists);
        // console.log(user.followers);
        // console.log(user.following);
        // console.log(user.company);
        // console.log(user.blog);
        // console.log(user.location);
        // console.log(user.created_at);
    }

    showAlert(message, className) {
        // create alert div
        const errorAlert = document.createElement('div');
        
        // assign css class
        errorAlert.className = className;

        // Add Text
        errorAlert.appendChild(document.createTextNode(message));

        // Append div before search container
        const container = document.querySelector('.search-container');
        container.before(errorAlert);
    }
}