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
                    I am sharing an art made by one of my favorite artist, Miles Johnston, because I think it gives meaning to this entry :), The photo shows a woman's face shown like it's made of multiple layers that are sliding away, one after the other. It's meant to show that people aren't just one simple person; we all have lots of different sides or "selves" inside us.
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
                    The big idea about the Unified Self and the Multiple Self gave me a much needed way to feel good about myself. It was a huge relief. This concept took away the stress of thinking that acting differently in different situations sometimes meant I was being fake or somehow not whole. This new way of seeing things showed me clearly that changing how I act to fit a certain time or place is actually a good skill that helps me deal with life in a better way. The most important lesson I learned is that being real does not mean you have to be one unmoving block everywhere you go or with every person you meet. Instead, being real is about the strong center inside you that guides everything you do and every part you play. This stable, core identity is like the "root" of a tree, and all my different actions or roles are simply the "branches" that reach out into the world.

This powerful idea instantly lessened the worry I felt about doing things differently in front of different people. It proves to me that I need separate ways of acting and thinking, like the deep focus and quiet I need for school work and the easy humor and loud talk I use when I am with friends. This difference is not a fault; it is a tool. The biggest discovery I made is that my true self is not found in the specific role I play at the moment but in the firm link between that role and my most important values. This means I can change my outward behavior, but my inner guide remains steady. This realization makes me feel free to move between different groups of people and different parts of my life without fearing I am fooling anyone or losing who I really am.
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
