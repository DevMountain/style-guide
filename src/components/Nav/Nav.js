import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from './back-arrow.png'

export default class Nav extends Component {
  state = {
    showMenu: false
  }

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu })

  render() {
    const { showMenu } = this.state;
    return (
      <div className='nav-container'>
        <section
          className='icon-container'
          onClick={this.toggleMenu}
        >
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </section>
        <section
          className={showMenu ? 'menu-container menu-slide' : 'menu-container'}
        >
          <img src={arrow} className='arrow' onClick={this.toggleMenu} />
          <p onClick={this.toggleMenu}>
            <Link to='/'>Home</Link>
          </p>
          <p onClick={this.toggleMenu}>
            <Link to='color-theme'>Color Theme</Link>
          </p>
          <p onClick={this.toggleMenu}>
            <Link to='fonts'>Fonts</Link>
          </p>
          <p onClick={this.toggleMenu}>
            <Link to='images'>Images</Link>
          </p>
          <p onClick={this.toggleMenu}>
            <Link to='text-over-images'>Text Over Images</Link>
          </p>
          <p onClick={this.toggleMenu}>
            <Link to='spacing-layout'>Spacing and Layout</Link>
          </p>
        </section>
      </div >
    )
  }
}



{/* <div>
<Link to='/'>Home</Link>
<Link to='color-theme'>Color Theme</Link>
<Link to='fonts'>Fonts</Link>
<Link to='images'>Images</Link>
<Link to='text-over-images'>Text Over Images</Link>
<Link to='spacing-layout'>Spacing and Layout</Link>
</div> */}