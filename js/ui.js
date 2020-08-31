class UI {

    displayProfile(user) {
        const profile = document.getElementById('profile');
        profile.innerHTML =
         `<div class='profile-intro'> 
            <div class='profile-image'>
                <img src='${user.avatar_url}' alt='profile picture'/>
            </div>
            <a href='${user.html_url}'>View Profile</a>
        </div>
        <div class='details'>
            <div class='github-details'>
                <span class='repos-count'>Public Repos: ${user.public_repos}</span>
                <span class='gists-count'>Public Gists: ${user.public_gists}</span>
                <span class='followers-count'>Followers: ${user.followers}</span>
                <span class='following-count'>Following: ${user.following}</span>
            </div>
            <ul class='personal-details'>
                <li class='company'>Company: ${user.company}</li>
                <li class='website'>Website/Blog: ${user.blog}</li>
                <li class='location'>Location: ${user.location}</li>
                <li class='membership'>Member Since: ${user.created_at}</li>
            </ul>
        </div>`
    }

    displayRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += 
            `<div class='repo'>
                <div class='repo-name'>
                    <a href='${repo.html_url}'>${repo.name}</a>
                </div>
                <div class='repo-details'>
                    <span class='stargazers_count'>Stars: ${repo.stargazers_count}</span>
                    <span class='watchers_count'>Watchers: ${repo.watchers_count}</span>
                    <span class='forks'>Forks: ${repo.forks}</span>
                </div>
            </div>`;
        });

        const repoData = document.createElement('div');
        repoData.className = 'repos-container'
        repoData.innerHTML = 
        `<h1>Repositories</h1>
        <div class='repos'>${output}</div>`;

        // add after profile div
        const profile = document.getElementById('profile');
        profile.append(repoData);
    }

    showAlert(message, className) {
        // Clear Remaining alerts i.e any one showing
        this.clearError();

        // create alert div
        const errorAlert = document.createElement('div');
        
        // assign css class
        errorAlert.className = className;

        // Add Text
        errorAlert.appendChild(document.createTextNode(message));

        // Append div before search container
        const container = document.querySelector('.search-container');
        container.before(errorAlert);

        // remove alert after 3 seconds
        setTimeout(() => {
            this.clearError();
        }, 3000);
    }

    clearError() {
        // get alert div
        const currentAlert = document.querySelector('.alert');

        // if the alert exists, remove it
        if(currentAlert) {
            currentAlert.remove();
        }
    }
}