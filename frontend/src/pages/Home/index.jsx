import React from 'react';
import { useColorScheme } from 'use-color-scheme';

import { BsBookmark, BsStar } from 'react-icons/bs';
import './style.css'

const modes = {
    dark: { background: 'black', color: 'white' },
    light: { background: 'white', color: 'black' },
}

function Home({ location }) {

    const { 
        avatar_url, login, name, followers, following, repositories
    } = location.state;
    const { scheme } = useColorScheme();
    const style = modes[scheme] || scheme.dark

    return (
        <div id="home" style={style}>
            <div className="profile">
                <img src={avatar_url} alt="Avatar"/>
                <div className="dados">
                    <h1>
                        <span>{name}</span> 
                        <span>{login}</span>
                    </h1>
                    <p>{followers} followers · {following} following</p>
                </div>
            </div>

            <div className="inline">
                {repositories.map((data, index) => {
                    const color = data.language === 'JavaScript' ? '#FFFF70' :
                    data.language === 'Python' ? '#428FCE' : data.language === 'TypeScript' ? '#3691AB' :
                    data.language === 'HTML' ? '#FF5F30' : data.language === 'CSS' ? '#6C4C9B' :
                    data.language === 'C' ? '#6A6A6A' : data.language === 'C#' ? '#1DA800' : '#FFF'

                    return (
                        data.name !== login ? 
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
