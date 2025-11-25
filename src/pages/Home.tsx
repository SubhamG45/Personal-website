import minimart from "../assets/minimart.jpg"
import fbLogin from "../assets/login.jpg"
import "./Home.css";
function Home() {
  return (
    <>
      <div className="container">

        <h1 className="container-heading">
          Hi, I'm Subham Gyawali</h1>
      </div>
      <div className="home-section">
        <p>
          A passionate full stack developer,problem solver
        and tech Enthusiast.</p>
      </div>
      <div className="hero-button">
        <a href="#"><button> Explore my work</button></a>
      </div>
      <section className="skills">
  <h2>My Skills</h2>

  <div className="skills-box">
    <div className="skill">HTML5</div>
    <div className="skill">CSS3</div>
    <div className="skill">JavaScript</div>
    <div className="skill">React.js</div>
    <div className="skill">Node.js</div>
    <div className="skill">MongoDB</div>
    <div className="skill">Git & GitHub</div>
  </div>
</section>
<div className="Pro-ject">

<h1>My Projects</h1>

</div>
<section className="projects">
  <div className="project-card">
    <img src={minimart} alt="My Project"></img>

    <h3>minmart</h3>

    <p>
      Minimart project using react.js
    </p>

    <div className="project-buttons">
      <a href="https://minimart-subhamgyawali.vercel.app/" target="_blank" className="btn live">Live Demo</a>
      <a href="https://github.com/SubhamG45/minimart" target="_blank" className="btn github">GitHub</a>
    </div>
  </div>


  <div className="project-card">
    <img src={fbLogin} alt="My Project"></img>

    <h3>fb-login page</h3>

    <p>
      fb-login page using html and css
    </p>

    <div className="project-buttons">
      <a href=" " target="_blank" className="btn live">Live Demo</a>
      <a href="https://github.com/SubhamG45/Facebook-Login-Page/branches" target="_blank" className="btn github">GitHub</a>
    </div>
  </div>

</section>



      
      
    </>
  );
}
export default Home;
