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
                    I am sharing an art made by one of of my favorite artist, Miles Johnston, because I think it gives meaning to this entry :), The photo shows a woman's face shown like it's made of multiple layers that are sliding away, one after the other. It's meant to show that people aren't just one simple person; we all have lots of different sides or "selves" inside us.
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Art by Miles Johnston.
                        </sub>
                    </p>
                </div>
                <p>
                    The most powerful topic I encountered that redefined my understanding of identity was the psychological contrast between the Unified Self and the Multiple Self. This dichotomy forced me to examine whether my identity is a single, consistent core or a collection of different "masks" I wear.
                </p>
                <p> The idea that I have a unified self, my core identity, while also having multiple selves, like the helpful friend or the focused student, instantly made sense because it proved that adapting how I act in different situations is not being fake or being plastic, it is simply me using The Authentic Mask, a genuine way to adapt and connect while staying true to my beliefs. To make this concept practical and improve my life I will focus on two simple deliberate actions: first, I will strengthen my unified self by prioritizing one core feeling each week by intentionally choosing to act in ways that make me feel whole and consistent and second, I will use a simple conscious action to transition between roles by setting a physical boundary for example putting on noise canceling headphones and clearing my workspace when I switch from being fully engaged with friends to focusing on studies ensuring my multiple selves are present and fully engaged.</p>
                </p>
                <br />
                <h3>Reflection</h3>
                <p>
                    WIP
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
