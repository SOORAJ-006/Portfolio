import React from 'react'
import './Experience.css'
import '../style.css'
import '../media.css'
import checkMark from '../../assets/checkmark.png'
import arrow from '../../assets/arrow.png'

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Vite</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>


          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MongoDb</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MSSQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='#projects'}
      />
    </section>
  )
}

export default Experience