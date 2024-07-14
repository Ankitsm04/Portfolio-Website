import './About.css';
import Fast from '../assets/images/about/speed.png';
import Responsive from '../assets/images/about/responsive.png';
import Userfreindly from '../assets/images/about/userfreindly.png';
import Dynamic from '../assets/images/about/dynamic.png';
import Section from './Section';


const About = () => {
  const skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 90 },
    { name: 'Bootstrap', percent: 75 },
    { name: 'Tailwind', percent: 70 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React', percent: 70 },
    { name: 'Node.js', percent: 60 },
    { name: 'MongoDB', percent: 75 },
  ];

  return (
    <div className='about' id='about'>
      <Section id="head">
        <div className='head'>
          <p>My Websites are</p>
          <div className='line'></div>
        </div>
      </Section>
      <div className='about-body'>
        <Section id="card-1">
          <div className='about-card'>
            <div className='hexagon'>
              <img src={Fast} alt="fast" height="80" width="80" />
            </div>
            <div className='text'>
              <p className='head'>Fast</p>
              <p className='body'>Fast load times and lag free interaction, my highest priority.</p>
            </div>
          </div>
        </Section>
        <Section id="card-2">
          <div className='about-card'>
            <div className='hexagon'>
              <img src={Responsive} alt="responsive" height="80" width="80" />
            </div>
            <div className='text'>
              <p className='head'>Responsive</p>
              <p className='body'>My layouts will work on any device, big or small.</p>
            </div>
          </div>
        </Section>
        <Section id="card-3">
          <div className='about-card'>
            <div className='hexagon'>
              <img src={Userfreindly} alt="user-friendly" height="80" width="80" />
            </div>
            <div className='text'>
              <p className='head'>User-friendly</p>
              <p className='body'>Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
          </div>
        </Section>
        <Section id="card-4">
          <div className='about-card'>
            <div className='hexagon'>
              <img src={Dynamic} alt="dynamic" height="80" width="80" />
            </div>
            <div className='text'>
              <p className='head'>Dynamic</p>
              <p className='body'>Websites don't have to be static, I love making pages come to life.</p>
            </div>
          </div>
        </Section>
      </div>
      <Section id="more-about">
        <div className='more-about'>
          <div className="text">
            <p className='head'>MORE ABOUT MYSELF</p>
            <p>
              I'm an undergraduate B-Tech Computer Science and Engineering 
              student from <span><a href="https://www.alliance.edu.in/">Alliance University</a></span>, specializing in AI and ML. 
              Currently, I'm working on the MERN stack but also want to 
              explore my potential in Machine Learning and 
              Artificial Intelligence.</p>
            <a href="#contact">Let's make something out of the box.</a>
          </div>
          <div className='skill-board'>
            {skills.map(skill => (
              <div className="skill-bar" key={skill.name}>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-percent" style={{ width: `${skill.percent}%` }}>
                {skill.percent}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
