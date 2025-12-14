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
            
            <br />
            <p>
               
            </p>
            <br />
           
            <br />
            <p>
                
            </p>
            <br />
            <p>
                
            </p>
            <br />
            
        
            <br />
            <p>
               
            </p>
            <br />
            
            <br />
            
            <br />
            <p>
               
            </p>
            <br />
           
            <br />
            <p>
               
            </p>
            <br />
            <p>
               
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
