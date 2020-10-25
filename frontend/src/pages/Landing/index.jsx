import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import GitHub from '../../assets/GitHub.png';
import api from '../../services/api';
import './style.css'

function Landing() {

    const history = useHistory()
    const [github_username, setGithubusername] = useState('');
    const [notFound, setNotFound] = useState(false);

    async function onSubmit(e = new Event()) {
        e.preventDefault();
        try {
            const response = await api.post('/', {
                github_username
            });
            const data = response.data;
            
            history.push('/profile', data);
        } catch (err) {
            setNotFound(true);
        }
    }

    return (
        <div id="landing">
            <form className="search" onSubmit={onSubmit}>
                <img src={GitHub} alt="GitHub"/>

                <div className="input">
                    <input type="text" placeholder="Digite um perfil do GitHub" onChange={e => setGithubusername(e.target.value)}/>
                </div>

                <div className="center">
                    <input type="submit" value="Pesquisar"/>
                    <div className="error">
                        {notFound && 
                            <span>Úsuario não existe</span>
                        }
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Landing;
