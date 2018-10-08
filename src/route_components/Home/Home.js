import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div id="home-page-wrapper">

        <section id="header">
          <div className="container">

            <img id='dm_logo' src="./images/dm_logo.jpg" alt="" />
            <h1 id="logo">Student Style Guide</h1>
            <p>Guidelines and tips for creating a well designed personal project.</p>


            <nav id="nav">
              <ul>
                <li><a className="icon fa-paint-brush" ><span>Color Theme</span></a></li>
                <li>
                  <a className="icon fa-picture-o"><span>Images</span></a>
                </li>
                <li><a className="icon fa-font" ><span>Fonts</span></a></li>
                <li><a className="icon fa-retweet" ><span>Spacing & Layout</span></a></li>
                <li><a className="icon fa-sitemap" ><span>Text Over Images</span></a></li>
                <li><a className="icon fa-cogs" ><span>Generator</span></a></li>
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
                  <a className="image featured"><img src="http://cdn.instantshift.com/media/uploads/2015/12/most-ugly-websites.jpg" alt="" /></a>
                  <header>
                    <h3>Too much going on?</h3>
                  </header>
                  <p>Websites with tons of images, text, and other things going on will take a while to load, and they’ll confuse your visitors. Avoid busy designs like the plague.</p>
                </section>

              </div>
              <div className="col-4 col-6-medium col-12-small">


                <section>
                  <a className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                  <header>
                    <h3>Hidden navigation...not cool!</h3>
                  </header>
                  <p>Making your navigation menu hard to find is one common web design mistake. Have you ever been to a website and you can’t find the menu or the search bar? It’s infuriating.</p>
                </section>

              </div>
              <div className="col-4 col-6-medium col-12-small">


                <section>
                  <a className="image featured" target='_blank'><img src="./images/warning_comic_sans.png" alt="" /></a>
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