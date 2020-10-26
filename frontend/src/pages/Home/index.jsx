import React, { useState } from 'react';

import { BsBookmark, BsStar } from 'react-icons/bs';
import './style.css'

function Home({ location }) {

    const { 
        avatar_url, login, name, followers, following, repositories
    } = location.state;
    const [repo, setRepo] = useState("");
    const repos = repositories.find(rep => rep.name === repo);
    
    return (
        <div id="home">
            <div className="profile">
                <img src={avatar_url} alt="Avatar"/>
                <div className="dados">
                    <h1>
                        <span>{name}</span> 
                        <span>{login}</span>
                    </h1>
                    <p>{followers} followers · {following} following</p>
                    <input type="text" onChange={e => setRepo(e.target.value)} value={repo} placeholder="Find a repository..." />
                </div>
            </div>
            
            <div className="inline">
                { 
                repos ? 
                <div className="repo">
                    <div className="pin">
                        <BsBookmark/>
                        <a href="/"><span>{repos.name}</span></a>
                        <div className="description">
                            {repos.description ? <span>{repos.description}</span> : '\u200b'}
                        </div>
                    
                        <div className="d-blok">
                            <span 
                                style=
                                {{ 
                                    backgroundColor: repos.language === 'JavaScript' ? '#FFFF70' :
                                    repos.language === 'Python' ? '#428FCE' : repos.language === 'TypeScript' ? '#3691AB' :
                                    repos.language === 'HTML' ? '#FF5F30' : repos.language === 'CSS' ? '#6C4C9B' :
                                    repos.language === 'C' ? '#6A6A6A' : repos.language === 'C#' ? '#1DA800' : '#FFF', 
                                    width: '12px', 
                                    height: '12px',
                                    display: 'inline-block',
                                    borderRadius: '50%'
                                }}>
                            </span>
                            <span>{repos.language}</span>
                            {repos.stargazers_count > 0 ? 
                                <a href="/"><BsStar/> {repos.stargazers_count}</a> :
                                '\u200b'
                            }
                        </div>
                    </div>
                </div> : 
                repositories.map((data, index) => {
                    const color = data.language === 'JavaScript' ? '#FFFF70' :
                    data.language === 'Python' ? '#428FCE' : data.language === 'TypeScript' ? '#3691AB' :
                    data.language === 'HTML' ? '#FF5F30' : data.language === 'CSS' ? '#6C4C9B' :
                    data.language === 'C' ? '#6A6A6A' : data.language === 'C#' ? '#1DA800' : '#FFF'
                    
                    
                    return (   
                        data.name != login ?
                        <div className="repo" key={index}>
                            <div className="pin">
                                <BsBookmark/>
                                <a href="/"><span>{data.name}</span></a>
                                <div className="description">
                                    {data.description ? <span>{data.description}</span> : '\u200b'}
                                </div>
                            
                                <div className="d-blok">
                                    <span 
                                        style=
                                        {{ 
                                            backgroundColor: color, 
                                            width: '12px', 
                                            height: '12px',
                                            display: 'inline-block',
                                            borderRadius: '50%'
                                        }}>
                                    </span>
                                    <span>{data.language}</span>
                                    {data.stargazers_count > 0 ? 
                                        <a href="/"><BsStar/> {data.stargazers_count}</a> :
                                        '\u200b'
                                    }
                                </div>
                            </div>
                        </div> : null
                    
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
