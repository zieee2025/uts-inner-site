import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Art & Design</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development, Art,
                    Design, and Animation will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep the artistic side of me alive. I'm always looking to
                    push myself creatively and learn new things.
                </p>
            </div>
            <div className="text-block">
                <h2>Pixel Art and Animation</h2>
                <br />
                <p>
                    
                </p>
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b>
                        </sub> 
                    </p>
                </div>
                <p>
                 
                </p>
                <br />
                <h3>Video Links:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href=""
                        >
                            <p>
                                <b>VIDEO</b>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href=""
                        >
                            <p>
                                <b>VIDEO</b>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href=""
                        >
                            <p>
                                <b>VIDEO</b> 
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    This page is currently a work in progress. I've recently
                    found myself wanting to make more pixel art recently and I
                    have some project plans and ideas in the works. Expect
                    updates to this page as I dive back into the world of pixel
                    art!
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
