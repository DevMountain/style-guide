import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from './back-arrow.png'

export default class Nav extends Component {
  state = {
    showMenu: false,
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    expanded: true
  }

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu })

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className='nav-container'>
        <div className="parent2">
          <div className="test1" style={expanded ? {
            'backgroundColor': 'gray',
            'transform': 'translate(125px,0px)'
          } : null
          }>
            <i className="fas fa-cogs fa-2x"></i>
          </div>
          <div className="test2" style={expanded ? {
            'backgroundColor': 'gray',
            'transform': 'translate(105px,-60px)'
          } : null
          }>
            <i className="far fa-object-ungroup fa-2x"></i>
          </div>
          <div className="test3" style={expanded ? {
            'backgroundColor': 'gray',
            'transform': 'translate(60px,-105px)'
          } : null
          }>
            <i className="fas fa-images fa-2x"></i>
          </div>
          <div className="test4" style={expanded ? {
            'backgroundColor': 'gray',
            'transform': 'translate(0px,-125px)'
          } : null
          }>
            <i className="fas fa-home fa-2x"></i>
          </div>
          <div className="test5" style={expanded ? {
            'backgroundColor': 'gray',
            'transform': 'translate(0px,-70px)'
          } : null
          }>
            <i className="fas fa-layer-group" style={{ fontSize: '24px' }}></i>
          </div>
          <div className="test6" style={expanded ? {
            'backgroundColor': 'gray',
            'transform': 'translate(46px,-46px)'
          } : null
          }>
            <i className="fas fa-palette" style={{ fontSize: '24px' }}></i>
          </div>
          <div className="test7" style={expanded ? {
            'backgroundColor': 'gray',
            'transform': 'translate(70px,0px)'
          } : null
          }>
            <i className="fas fa-font" style={{ fontSize: '24px' }}></i>
          </div>
          <div className="mask2" onClick={this.expand}>
            {
              this.state.expanded ? (
                <i className="fas fa-compress fa-3x"></i>
              ) : (
                  <i className="fas fa-expand-arrows-alt fa-3x"></i>
                )
            }
          </div>
        </div>
      </div>
    )
  }
}
