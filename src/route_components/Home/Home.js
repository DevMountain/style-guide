import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div id="home-page-wrapper">

        <section id="header">
          <div className="container">


            <h1 id="logo"><a href="index.html">Student Style Guide</a></h1>
            <p>Guidelines and tips for creating a well designed personal project.</p>


            <nav id="nav">
              <ul>
                <li><a className="icon fa-home" href="index.html"><span>Color Theme</span></a></li>
                <li>
                  <a href="#" className="icon fa-bar-chart-o"><span>Images</span></a>
                </li>
                <li><a className="icon fa-cog" href="left-sidebar.html"><span>Fonts</span></a></li>
                <li><a className="icon fa-retweet" href="right-sidebar.html"><span>Spacing & Layout</span></a></li>
                <li><a className="icon fa-sitemap" href="no-sidebar.html"><span>Text Over Images</span></a></li>
                <li><a className="icon fa-sitemap" href="no-sidebar.html"><span>Generator</span></a></li>
              </ul>
            </nav>

          </div>
        </section>


        <section id="features">
          <div className="container">
            <header>
              <h2>Fonts, colors, & layouts matter! <strong>Make them count!</strong></h2>
            </header>
            <div className="row aln-center">
              <div className="col-4 col-6-medium col-12-small">


                <section>
                  <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                  <header>
                    <h3>Okay, so what is this?</h3>
                  </header>
                  <p>This is <strong>Strongly Typed</strong>, a free, fully responsive site template
										by <a href="http://html5up.net">HTML5 UP</a>. Free for personal and commercial use under the
										<a href="http://html5up.net/license">CCA 3.0 license</a>.</p>
                </section>

              </div>
              <div className="col-4 col-6-medium col-12-small">


                <section>
                  <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                  <header>
                    <h3>Nice! What is HTML5 UP?</h3>
                  </header>
                  <p><a href="http://html5up.net">HTML5 UP</a> is a side project of <a href="http://twitter.com/ajlkn">AJ’s</a> (= me).
                  I started it as a way to both test my responsive tools and sharpen up my coding
										and design skills a bit.</p>
                </section>

              </div>
              <div className="col-4 col-6-medium col-12-small">


                <section>
                  <a href="https://designforhackers.com/blog/comic-sans-hate/" className="image featured" target='_blank'><img src="./images/warning_comic_sans.png" alt="" /></a>
                  <header>
                    <h3>Should I use comic sans?</h3>
                  </header>
                  <p>Comic Sans is the <strong>infamous font</strong> that you probably don't want to use if you want your app taken seriously. <br />
                    <a href='http://www.comicsanscriminal.com/' target='_blank'>
                      Are you a criminal?
                  </a></p>
                </section>

              </div>
            </div>
          </div>
        </section>


        <section id="banner">
          <div className="container">
            <p>"The details are not the details. <br /><strong>They make the design</strong>."<br />
              -Charles Eames</p>
          </div>
        </section>

      </div>
    )
  }
}