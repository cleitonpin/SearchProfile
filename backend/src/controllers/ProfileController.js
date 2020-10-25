const { request, response } = require('express');
const axios = require('axios').default;

class Profile {
    async store (req = request, res = response) {

        try {
            const { github_username } = req.body;
            const apiDataUser = await axios.get(`https://api.github.com/users/${github_username}`);
            const apiDataRepo = await axios.get(`https://api.github.com/users/${github_username}/repos`);


            const { login, name, followers, following, avatar_url } = apiDataUser.data;
            const repositories = apiDataRepo.data;

            return res.json({ login, name, followers, following, avatar_url, repositories });
        } catch (err) {
            return res.status(404).json({ message: 'Error' });
        }
    }
}


module.exports = new Profile();