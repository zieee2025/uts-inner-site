import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>fritziejose.vercel.app</h2>
                <br />
                <p>
                    WIP
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b>WIP
                        </sub>
                    </p>
                </div>
                <p>
                    WIP
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href=""
                    >
                        here
                    </a>{' '}
                    WIP
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href=""
                        >
                            <p>
                                <b>[3D Site]</b> - WIP
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
                                <b>[OS Site]</b> - WIP
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
                                <b>[GitHub]</b> - 3D Site Repository
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
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    WIP
                
                    </a>
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
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> WIP
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                   WIP
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href=""
                        >
                            <p>
                                <b>[GitHub]</b> - Guntattchment Saga The Sequel
                                Unity Repository
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
                                <b>[GitHub]</b> - Guntattchment Saga The Sequel
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    WIP
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
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> WIP
                        </sub>
                    </p>
                </div>
                <p>
                    WIP
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href=""
                        >
                            <p>
                                <b>[GitHub]</b> - Skip the Scroll Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/skip-the-scroll/mfehannpjmgfagldoilpngeoecdfgmnd"
                        >
                            <p>
                                <b>[Chrome Web Store]</b> - Skip the Scroll
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                   WIP
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
