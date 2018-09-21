import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='color-theme'>Color Theme</Link>
        <Link to='fonts'>Fonts</Link>
        <Link to='images'>Images</Link>
        <Link to='text-over-images'>Text Over Images</Link>
        <Link to='spacing-layout'>Spacing and Layout</Link>
      </div>
    )
  }
}