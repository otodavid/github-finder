class Github {
    constructor() {
        this.cllient_id =  '0040dde07ff57e933370';
        this.cllient_secret = '9a86ef02c843b4bfe51c7904c919c62c1a633d00';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(userText) {
        // fetch user profile data
        const profileResponse = await fetch(`https://api.github.com/users/${userText}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // fetch user repos
        const reposResponse = await fetch(`https://api.github.com/users/${userText}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profileData,
            repos
        };
    }
}