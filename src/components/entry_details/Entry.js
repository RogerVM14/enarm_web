import React from 'react';
import blogImage from '../../assets/imgs/blog_1.png';
import '../../css/entry_details/Entry.css';
import userPic from '../../assets/imgs/user.png';

const Entry = ({width}) => {

    const userName = "Arturo Hernandez"; 
 
    return (
        <div className='entry-component'>
            <div className="entry-component-container">
                {
                    width === 'extra-large' && (
                        <div className="entry-user-info">
                            <img src={userPic} alt="user" className="entry-user-pic" />
                            <p className="entry-user-info gray regular-14">Escrito por {userName}</p>
                        </div>
                    )
                }
                <div className="container-head"></div>
                <div className="container-body"> 
                    <div className="entry-user">
                        <article className='header'>
                            <div className="article-head">
                                Este es un subtítulo - HeadLine 2
                            </div>
                            <div className="article-body">
                                <p className={width !=='extra-large' ? 'regular-14' : 'regular-16'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <img src={blogImage} alt="blog-pic" />
                            </div>
                        </article>

                        <article className='section'>
                            <div className="article-head">
                            Este es otro subtítulo - Headline 3 
                            </div>
                            <div className="article-body">
                                <p className={width !=='extra-large' ? 'regular-14' : 'regular-16'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <ul>
                                    <li><p className={width !=='extra-large' ? 'regular-14' : 'regular-16'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p></li>
                                    <li><p className={width !=='extra-large' ? 'regular-14' : 'regular-16'}>Ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></li>
                                    <li><p className={width !=='extra-large' ? 'regular-14' : 'regular-16'}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></li>
                                </ul>
                                <p className={width !=='extra-large' ? 'regular-14' : 'regular-16'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                                
                            </div>
                        </article>

                        <article className='section'>
                            <div className="article-head">
                            Este es otro subtítulo - Headline 3 
                            </div>
                            <div className="article-body">
                                <p className={width !=='extra-large' ? 'regular-14' : 'regular-16'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                                
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry;