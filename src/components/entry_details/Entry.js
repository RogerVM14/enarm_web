import React, { useEffect, useState } from 'react'; 
import blogImage from '../../assets/imgs/blog_1.png';
import userPic from '../../assets/imgs/user.png';
import '../../css/entry_details/Entry.css';

const Entry = ({ size, ismobile }) => {

    const [mobileDevice, setMobileDevice] = useState(true);  

    useEffect(() =>{
        const isMobileDevice = () =>{
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice();
    }, [ismobile]);

    const userName = "Arturo Hernandez"; 
 
    return (
        <div className='entry-component'>
            <div className="entry-component-container">
                {
                    ['xl', 'xxl'].includes(size) && (
                        <div className="entry-user-info">
                            <img src={userPic} alt="user" className="entry-user-pic" />
                            <p className="entry-user-info gray regular-14">Escrito por {userName}</p>
                        </div>
                    )
                }
                <div className="container-head"></div>
                <div className="container-body"> 
                    <article className='header'>
                        <div className="article-head">
                            <h1>Este es un subtítulo - HeadLine 2</h1>
                        </div>
                        <div className="article-body">
                            <p className={ mobileDevice ? 'regular-14' : 'regular-16'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <img src={blogImage} alt="blog-pic" />
                        </div>
                    </article>

                    <article className='section'>
                        <div className="article-head">
                            <h2>Este es otro subtítulo - Headline 3</h2>
                        </div>
                        <div className="article-body">
                            <p className={ mobileDevice ? 'regular-14' : 'regular-16'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <ul>
                                <li>
                                    <p className={ mobileDevice ? 'regular-14' : 'regular-16'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </li>
                                <li>
                                    <p className={ mobileDevice ? 'regular-14' : 'regular-16'}>
                                        Ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                </li>
                                <li>
                                    <p className={ mobileDevice ? 'regular-14' : 'regular-16'}>
                                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </li>
                            </ul>
                            <p className={ mobileDevice ? 'regular-14' : 'regular-16'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>                                
                        </div>
                    </article>

                    <article className='section'>
                        <div className="article-head">
                            <h2>Este es otro subtítulo - Headline 3</h2>
                        </div>
                        <div className="article-body">
                            <p className={ mobileDevice ? 'regular-14' : 'regular-16'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>                                
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Entry;