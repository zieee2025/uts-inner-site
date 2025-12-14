import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Entry No. 2</h1>
            <h3>My Five-Year Plan</h3>
            <br />
            <div className="text-block">
                <p>
                
                </p>
            </div>
            <br />

            <MusicPlayer
                src={house}
                title="Let it Be"
                subtitle="The Beatles"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> Roadmap of my Five-Year Plan.
                    </sub>
                </p>
            </div>
            <p>
                The major threat to my goals is the massive disruption caused if I fail one subject, which immediately delays my graduation, causes intense stress, and impacts my job timeline. My adaptive coping strategy is I will first take a conscious breath to manage the initial stress, then immediately re-focus on my studies by reinforcing my consistent study routine, and I will only return to intensive study when I feel mentally better, ensuring I am learning effectively rather than just feeling frustrated.
            </p>
            <br />
            <p>
            </p>
            <br />
            <h2>Reflection</h2>
            <br />
            <p>
                Making this five-year plan was really helpful because it took my big dreams and turned them into clear, simple steps. It helped me set goals that are easy to check and track in three main areas: school success, staying healthy, and getting a job.
            </p>
            <br />
            <br />
            <p> The hardest part of engineering school is the courses, so Academic Stability is my first priority. I learned that getting good grades isn't the only point; it's about learning how to study hard and understand difficult things like forces and structures. If I do well here, everything else, like graduating on time, will be much easier.
            </p>
            <br />
            <p>I also realized that I can’t ignore my health. Health and Balance is about making sure I don't burn out. Promising to exercise three times a week and take short, calm breaks every day shows I know that engineering school is a long race. Keeping my mind and body healthy is my way of playing defense against the huge stress I know is coming in the later years.</p>
            <br />
            <p>The last goal, Professional Preparedness, is the finish line. It means more than just getting a diploma; it means passing the government’s Board Exam right away and landing a job at a good company. This makes me focus on finding an internship next year and setting aside time to study for that exam before graduation.</p>
            <br />
            <p>Thinking about the biggest worry, failing one subject, was the most important part of the plan. My strategy is simple: if I fail, I won't panic. I will first take a deep breath to calm down, then immediately get back to my study routine to fix the problem, and only study when I feel mentally ready so I don't waste time being frustrated. This entire plan helps me solve problems in school and manage myself, making my goal of becoming an engineer feel very real and doable.</p>
            <br />
            <MusicPlayer
                src={edge}
                title="Edge [W.I.P.]"
                subtitle="Henry Heffernan - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                This track is so dark and I love it! The bass and percussion are
                the obvious stars of the piece, and I had a blast designing each
                of them. The bass in this song is layered with a lot of textures
                and they really give it a lot of the character it needs to be
                the driving force of the track. The percussion on the other hand
                gives the track a lot of depth in the high end so when
                juxtaposed with the bass it radiates this dark and mysterious
                vibe.
            </p>
            <br />
            <h2>My love for Drum & Bass</h2>
            <br />
            <p>
                I've always loved drum & bass, and over the years I feel like I
                always come back to it. My first song I ever made was a DnB
                track and as I've continued to make music over these last few
                years the way I produce DnB really reflects my specific taste at
                that time. It's very fun looking back at the various DnB styles
                I've taken stabs at over time and how my taste has evolved.
            </p>
            <br />
            <p>
                The track below is a snip-it from a DnB track I started work on
                back in 2019. I recently decided to pick it up again and work on
                it more because I loved the idea, bassline and especially the
                drums. Below is a short demo of the track including a small
                buildup and drop.
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="Henry Heffernan - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Like I said, I decided to come back to this track because I
                absolutely loved so much about it. When I picked up work on it
                again I decided to totally remix the drums and I'm super proud
                with how they turned out. So proud in fact, I wanted to show
                them off some more on their own! Below are the drums in the
                above track, but isolated. I have also included the sub bass
                because it is drum and bass after all!
            </p>
            <br />
            <MusicPlayer
                src={dnbDrums}
                title="Break [Drums and Sub]"
                subtitle="Henry Heffernan - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drums and sub for the track Break. See
                        if you can follow along in the image as the audio above
                        plays!
                    </sub>
                </p>
            </div>
            <br />
            <p>
                There are a lot of layers to DnB drums, and I honestly find them
                the hardest to mix and get right since the sound design of DnB
                so often wants to fight in the same frequency range as the
                drums. Because of this I use very aggressive sidechain to keep
                the drums clear while giving me the freedom to not have to
                overly eq the bass and general sound design. I also find that
                parallel compression on drums in DnB can be an absolute life
                saver to keep the drums controlled but still hard hitting.
            </p>
            <br />
            <h2>The Future of my music</h2>
            <br />
            <p>
                I love to make music and will continue to make music as long as
                I can. I think soon enough I will be releasing music publicly
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years. I also want
                to one day make an album, but that is a long ways away.
            </p>
            <br />
            <p>
                I am aware this section of my portfolio is rather short, but
                it's because I am very selective with what I want to show off to
                the world. I've been producing for over 6 years and have made
                hundreds maybe even a thousand tracks/loops in that time. I only
                recently have been feeling very content with the stuff I've made
                and I'm very excited to see what I can do for the future. Thanks
                for listening I hope you enjoyed!
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
