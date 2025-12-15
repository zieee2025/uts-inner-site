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
                Let It Be by The Beatles is my absolute comfort song. When my plans, like studying all that engineering, start to feel too stressful, this song is the perfect remedy. It's the sound of calm and hope, reminding me to simply trust the process and let go of the things I can't control. It's a gentle, reassuring voice that everything will ultimately work itself out.
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
            <p>
               My personal blueprint for success is centered on the absolute goal of achieving professional validation and a secure future: I aim to pass the Civil Engineering Board Exam on my first attempt and secure a full-time engineering position at a reputable company. This aspiration is the powerful engine driving my entire college career, but I recognize that without a strong foundation, the engine will inevitably break down. That's why I've made two equally important commitments that govern my daily choices. The first is Health and Balance, and this is the most critical element of self-preservation. I pledge to maintain my physical and mental well-being throughout college because I understand that the five years of demanding academic work can easily lead to burnout. My health is not a luxury; it is an essential strategy needed to sustain the clarity and focus required to absorb complex technical information and survive the pressure. I am promising my future self that I will arrive at that board exam feeling whole, rested, and mentally sharp, not exhausted and depleted. The second commitment is Academic Stability. I am dedicated to completing all my Civil Engineering subjects precisely on time, which is the practical way I ensure continuous forward momentum toward graduation. More than just keeping to a schedule, this commitment guarantees I build the deep, comprehensive technical foundation necessary not only to pass the high-stakes board exam but to be a truly competent, confident, and professional engineer, ensuring this ambitious goal transforms into a secure reality.
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
