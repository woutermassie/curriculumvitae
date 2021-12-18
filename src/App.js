import './App.scss';
import Header from './components/header/header.component';
import SkillBlock from './components/skillblock/skillblock.component';
import Block from './components/block/block.component';
import PersonalInfo from './components/personal-info/personal-info.component';
import Interests from './components/interests/interests.component';

const contentProfile = `<br>Multimedia developer with over 5 years experience on the production and media side of the digital advertising sector looking to further his skills towards the new web3 era.`;

const contentExperience = `<div class='title'>Multimedia Developer, AdSomeNoise, Leuven : 2016 - Present</div>

<ul><li>Used the adobe creative cloud suite to create ads for sites such as HLN.be, Creative deliverables from email-headers to flash screensavers, and videos for ClearChannel billboards.
</li><li>Created dynamic ad campaigns on Google’s double-click platform.
</li><li>Produced multiple ad campaigns in HTML/CSS/JS with the addition of the TweenMax library for animation.
</li><li>Created websites with HTML/CSS/JS and jQuery. </ul>
</ul>

<div class='title'>Graphic Intern, Famous, Dilbeek : 2016 - 2016</div>
<ul><li>Worked together with the startup POM to create diverse graphic deliverables and provide social media support.
</li><li>Created landing pages for sale campaigns.
</li><li>Produced creative deliverables for digital media and print media in the adobe suite, with a heavy emphasis on social media banners.
</li><li>Coded E-Mails in HTML for various clients.</ul>
</ul>`;

const contentEducation = `<div class='title'>Erasmus Hogeschool, Brussel</div
<div class='sub-title'>Bachelor in Multimedia and Communication technology,
specialisation Art & Technology, 2012 - 2016</div>
<div class='title'>KHLeuven, Leuven</div>
<div class='sub-title'>Applied Informatics, 2010 - 2012</div>

`;

const contentSkills = `<div class='title'>Graphical software:</div>
Photoshop, Animate CC, After effects, Illustrator, InDesign, Adobe XD, Premiere Pro, Cinema4D, GWD
<div class='title'>Coding languages:</div>
HTML, CSS, JS, Solidity, Java, C++, C#, MySQL, PHP
<div class='title'>Frameworks:</div>
ReactJS, jQuery, Web3, TweenMax, CreateJS, ThreeJS, Redux, P5.js, D3.js, Processing (Java), OpenframeWorks (C++), Unity
<div class='title'>Ad platforms:</div>
Google DoubleClick, Sizmek, Google Ads, Flashtalking, S4M, JustPremium
<div class='title'>Office tools:</div>
Microsoft Office suite and Google docs suite
<div class='title'>Organisational tools:</div>
Slack, basecamp, Harvest`;

function App() {
  return (
    <div className="App">
      <Header name='Wouter Massie' />
      <div className='main-content'>
        <div className='side-blocks'>
           <PersonalInfo />
            <SkillBlock  />
            <Interests  />

        </div>
       
        <div className='main-blocks'>
          <Block name='Profile' className='profile' content={contentProfile} />
          <Block name='Experience' className=''  content={contentExperience} />
          <Block name='Education' className=''  content={contentEducation} />
          <Block name='Software Skills' className='skills'  content={contentSkills} />
      </div> 
      </div>
      <div className='circleBase circle1' />
      <div className='circleBase circle2' />
      <div className='circleBase circle3' />

    </div>
  );
}

export default App;
