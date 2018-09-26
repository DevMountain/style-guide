import React, { Component } from 'react';

export default class ColorTheme extends Component {

  state = {
    showSideBar: false,
    colorTheme: {
      backgroundColor: '#f5f6f7',
      secondaryColor: '#000',
      primaryFont: '#3d4449',
      secondaryFont: '#7f888f',
      accent: '#f56a6a'
    },
    badTheme: {
      backgroundColor: 'blue',
      secondaryColor: 'green',
      primaryFont: 'blue',
      secondaryFont: 'darkgreen',
      accent: '#000000'
    },
    badUseGoodColor: {
      backgroundColor: '#f56a6a',
      primaryFont: '#f56a6a',
      accent: '#3d4449',
      secondaryFont: '#7f888f'
    },
    goodTheme: {}
  }

  toggleMenu = () => {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }

  updateColors = (theme) => {
    const { badTheme, goodTheme, badUseGoodColor } = this.state;
    let newTheme;
    switch (theme) {
      case 'bad':
        newTheme = badTheme;
        break;
      case 'good':
        newTheme = goodTheme;
        break;
      case 'badUseGoodColor':
        newTheme = badUseGoodColor;
        break;
      default:
        return;
    }
    this.setState({ colorTheme: newTheme })
  }

  render() {
    const { backgroundColor, secondaryColor, primaryFont, secondaryFont, accent } = this.state.colorTheme;
    return (
      <div id="wrapper" style={{
        backgroundColor
      }}>

        <div>
          < button onClick={() => this.updateColors('bad')}>BAD</button>
          < button onClick={() => this.updateColors('badUseGoodColor')}>Bad use of good color</button>
          <button onClick={() => this.updateColors('good')}>GOOD</button>
        </div >

        <div id="main">
          <div className="inner">
            <header id="header"
              style={{ backgroundColor, borderBottomColor: accent }}>
              <a className="logo"><strong>Editorial</strong> by JOE BLANK</a>
              <ul className="icons">
                <li><a className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a className="icon fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                <li><a className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a className="icon fa-medium"><span className="label">Medium</span></a></li>
              </ul>
            </header>


            <section id="banner">
              <div className="content">
                <header>
                  <h1>DevMountain, Offering What Traditional Schools Don't</h1>
                  <p>How a push to master branch can end career early</p>
                </header>
                <p style={{ color: secondaryFont }}>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <ul className="actions">
                  <li><a className="button big">Learn More</a></li>
                </ul>
              </div>
              <span className="image object">
                <img src="images/pic10.jpg" alt="" />
              </span>
            </section>


            <section>
              <header className="major">
                <h2>Erat lacinia</h2>
              </header>
              <div className="features">
                <article>
                  <span className="icon fa-diamond"></span>
                  <div className="content">
                    <h3>Portitor ullamcorper</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
                <article>
                  <span className="icon fa-paper-plane"></span>
                  <div className="content">
                    <h3>Sapien veroeros</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
                <article>
                  <span className="icon fa-rocket"></span>
                  <div className="content">
                    <h3>Quam lorem ipsum</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
                <article>
                  <span className="icon fa-signal"></span>
                  <div className="content">
                    <h3>Sed magna finibus</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
              </div>
            </section>


            <section>
              <header className="major">
                <h2>Ipsum sed dolor</h2>
              </header>
              <div className="posts">
                <article>
                  <a className="image"><img src="images/pic01.jpg" alt="" /></a>
                  <h3>Interdum aenean</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul className="actions">
                    <li><a className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <a className="image"><img src="images/pic02.jpg" alt="" /></a>
                  <h3>Nulla amet dolore</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul className="actions">
                    <li><a className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <a className="image"><img src="images/pic03.jpg" alt="" /></a>
                  <h3>Tempus ullamcorper</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul className="actions">
                    <li><a className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <a className="image"><img src="images/pic04.jpg" alt="" /></a>
                  <h3>Sed etiam facilis</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul className="actions">
                    <li><a className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <a className="image"><img src="images/pic05.jpg" alt="" /></a>
                  <h3>Feugiat lorem aenean</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul className="actions">
                    <li><a className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <a className="image"><img src="images/pic06.jpg" alt="" /></a>
                  <h3>Amet varius aliquam</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul className="actions">
                    <li><a className="button">More</a></li>
                  </ul>
                </article>
              </div>
            </section>

          </div>
        </div>


        <div
          // id="sidebar"
          className={
            this.state.showSideBar ?
              'sidebar' :
              'sidebar hide'
          }
          style={{ backgroundColor: secondaryColor, color: primaryFont }}
        >
          <div className='ham' onClick={this.toggleMenu}>HAM</div>
          <div className="inner">
            <section id="search" className="alt">
              <form method="post" action="">
                <input type="text" name="query" id="query" placeholder="Search" />
              </form>
            </section>


            <nav id="menu">
              <header className="major">
                <h2>Menu</h2>
              </header>
              <ul>
                <li><a>Homepage</a></li>
                <li><a >Generic</a></li>
                <li><a >Elements</a></li>
                <li>
                  <span className="opener">Submenu</span>
                  <ul>
                    <li><a >Lorem Dolor</a></li>
                    <li><a >Ipsum Adipiscing</a></li>
                    <li><a >Tempus Magna</a></li>
                    <li><a >Feugiat Veroeros</a></li>
                  </ul>
                </li>
                <li><a >Etiam Dolore</a></li>
                <li><a >Adipiscing</a></li>
                <li>
                  <span className="opener">Another Submenu</span>
                  <ul>
                    <li><a >Lorem Dolor</a></li>
                    <li><a >Ipsum Adipiscing</a></li>
                    <li><a >Tempus Magna</a></li>
                    <li><a >Feugiat Veroeros</a></li>
                  </ul>
                </li>
                <li><a >Maximus Erat</a></li>
                <li><a >Sapien Mauris</a></li>
                <li><a >Amet Lacinia</a></li>
              </ul>
            </nav>


            <section>
              <header className="major">
                <h2>Ante interdum</h2>
              </header>
              <div className="mini-posts">
                <article>
                  <a className="image"><img src="images/pic07.jpg" alt="" /></a>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
                <article>
                  <a className="image"><img src="images/pic08.jpg" alt="" /></a>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
                <article>
                  <a className="image"><img src="images/pic09.jpg" alt="" /></a>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
              </div>
              <ul className="actions">
                <li><a className="button">More</a></li>
              </ul>
            </section>


            <section>
              <header className="major">
                <h2>Get in touch</h2>
              </header>
              <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <ul className="contact">
                <li className="fa-envelope-o"><a >information@untitled.tld</a></li>
                <li className="fa-phone">(000) 000-0000</li>
                <li className="fa-home">1234 Somewhere Road #8254<br />
                  Nashville, TN 00000-0000</li>
              </ul>
            </section>


            <footer id="footer">
              <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </footer>

          </div>
        </div>
      </div >
    )
  }
}