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
                <h2>WIP</h2>
                <br />
                <p>
                   WIP
                </p>
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> WIP
                        </sub>
                    </p>
                </div>
                <p>
                    WIP
                </p>
               
        </div>
    );
};

export default ArtProjects;
