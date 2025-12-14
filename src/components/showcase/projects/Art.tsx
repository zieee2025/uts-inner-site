import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Entry No. 3</h1>
            <h3>The Authentic Mask?</h3>
            <br />
            <div className="text-block">
                <p>
                    There was a time that was really weird, you know? It felt like I was just watching myself, like my life was a movie playing on a TV, and I was stuck behind my own eyes, just watching the character that was me. I felt totally numb, like I couldn't touch anything real, and the whole world just kept spinning and passing by without me actually being in it. That feeling lasted for months, where I was just an observer, and everything felt easy to look at but hard to care about.
                </p>
            </div>
            <div className="text-block">
                <h2>Unified and Multiple Selves</h2>
                <br />
                <p>
                    The most powerful topic I encountered that redefined my understanding of identity was the psychological contrast between the Unified Self and the Multiple Self. This dichotomy forced me to examine whether my identity is a single, consistent core or a collection of different "masks" I wear.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Art
                        </sub>
                    </p>
                </div>
                <p>
                    WIP
                </p>
                <br />
                <h3>Reflection</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Walk Cycle Time-lapse
                                and Tutorial
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=xXEDKQ3wSfM"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art "Bag Up" Animation
                                Time-lapse
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=leZzb-Y0SKQ"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Bipedal Creature Run
                                Cycle Time-lapse
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    WIP
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
