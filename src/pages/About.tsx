import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import profileimg from "../assets/img1.jpeg";
import "./About.css";
function About() {
  return (
    <>
      <div className="about-profile">
        <section className="about-section">
          <h1 className="about-title">ABOUT ME</h1>

          <div className="about-left">
            <div className="about-img">
              <img src={profileimg} alt="profile" />
            </div>

            <button className="about-btn">Read More</button>
          </div>

          <div className="about-profile">
            <div className="about-right">
              <p>
                Hi I am Subham Gyawali, a passionate web developer who loves
                creating clean and responsive websites. I enjoy learning new
                technologies and building user-friendly web applications. My
                goal is to improve my skills every day and create meaningful
                digital experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="story-section">
          <h2 className="story-title">MY STORY</h2>
          <p>
            I have experience working with core web technologies such as HTML
            and CSS for building clean and responsive web pages. I use
            JavaScript to create interactive and dynamic features on websites. I
            actively work with React.js to build modern, fast, and reusable user
            interface components. I also have basic knowledge of Node.js for
            backend development and MongoDB for database management. I use Git
            and GitHub to manage my projects and code efficiently and I am
            always learning new technologies to improve my skills as a
            developer.
          </p>
        </section>
      </div>
      <div className="about-info">
        <div className="profiles">
          <p className="profile-pic"> </p>
          <p>
            <a
              href="https://github.com/SubhamG45"
              target="_blank"
              className="profile-link "
            >
              <FaGithubSquare size={40} />
            </a>
          </p>

          <p>
            <a
              href="https://www.instagram.com/in/_sub_ham_45"
              target="_blank"
              className="profile-link instagram"
            >
              {" "}
              <FaSquareInstagram size={40} />
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/subbam.gyawali"
              target="_blank"
              className="profile-link facebook"
            >
              {" "}
              <FaFacebook size={40} />
            </a>
          </p>
        </div>
      </div>
      <h3>Contact with me if needed, from the above profile !!! </h3>
    </>
  );
}
export default About;
