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
            <h1>Entry No. 1</h1>
            <h3>The Metacognitive Learner</h3>
            <br />
            <p>
                Submitted to: Krisha Pearl L. Nayga
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>MAI</h2>
                <br />
                <p>
                    I've finished taking the Metacognitive Awareness Inventory (MAI), and the results are eye-opening. It's not just a score; it's a map. The realizations are hitting me.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Summary
                        </sub>
                    </p>
                </div>
                <p>
                 My Metacognitive Awareness Inventory (MAI) showed that my biggest challenge is Conditional Knowledge (score of 1). To improve my conditional knowledge, I just need to get better at picking the perfect tool for the job every time. It's about training myself to look at a task, quickly know exactly which learning method or strategy fits that specific situation best, and then using that experience to build a simple mental library of rules for future success.
                </p>
                <br />
                <p>
                 Fortunately, I have a major asset in my strong Comprehension Monitoring (score of 7), I will make sure I'm always watching my own understanding. Every time I learn something new, I'll stop often and ask myself, "Does this make sense?" If the answer is no, I won't keep going. I'll slow down, find out why it's confusing, and fix the confusion before I let myself move forward. This keeps my knowledge solid from the start.
                </p>
            </div>
            <div className="text-block">
                <h2>Reflection</h2>
                <br />
                <p>
                    The biggest change I need to make is how I pick my study tools. Before, I just grabbed whatever felt easiest. Now, I see that true smart learning, what you call Conditional Knowledge, is all about being a good detective first. When I start a new task, I am going to pause and really look at the kind of thinking the job demands. If the assignment is about remembering dates, my brain should immediately shout, "Flashcards and drilling, no question." If it is about understanding a big new concept, the answer must be, "Draw a picture or teach it to an empty chair." This way, I am not wasting effort on strategies that just will not work for that specific job. Every time I get that match right, it becomes a solid lesson I can use automatically next time. It is about building a personal roadmap for success by carefully choosing the best route before the journey even begins.

For Comprehension Monitoring, the goal is total honesty with myself about what I understand. Having a good score means I know when something is wrong, but a great score means I fix the problem instantly. I need to make a firm commitment to myself that the very second I read a sentence and realize it did not click, I stop right there. That moment of confusion is a critical warning sign that I must not ignore. I will not push through or hope that the next page will clear things up. Instead, I immediately look back. Maybe a word was tricky, or a previous paragraph was missed. Fixing that small hole right away prevents bigger problems later on. A great technique to keep this awareness active is turning all the titles and headers into actual questions I have to answer. If I cannot answer my own question clearly, I know I need to cycle back and work on that section until it is crystal clear. This process ensures I am always in charge of my learning, constantly verifying that the information is actually sinking in.
                </p>
                <br />
               
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
