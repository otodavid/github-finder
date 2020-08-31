class Github {
    constructor() {
        this.cllient_id =  'bd7ca57d3fa9a431a89a';
        this.cllient_secret = '9fe921696fdc13b7a3e34071a84d26ef8196fc02';
    }

    async getUser(userText) {
        const profileResponse = await fetch(`https://api.github.com/users/${userText}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {profileData};
    }
}