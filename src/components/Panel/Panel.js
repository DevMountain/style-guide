import React from 'react';

export default function Panel({ update, showColorPicker, togglePanel }) {
  return (
    <div className='panel-container'>
      <div>
        <div>Poor Color Choice</div>
        <section
          className='theme-container'
          onClick={() => { update('bad') }}
        >
          <div className="theme-color blue"></div>
          <div className="theme-color black"></div>
          <div className="theme-color darkGray"></div>
          <div className="theme-color lightGray"></div>
        </section>
      </div>
      <div>
        <div>Good Colors, Used Poorly</div>
        <section
          className='theme-container'
          onClick={() => update('okay')}
        >
          <div className="theme-color darkGray"></div>
          <div className="theme-color lightGray"></div>
          <div className="theme-color white"></div>
          <div className="theme-color salmon"></div>
        </section>

      </div>
      <div>
        <div>Good Colors, Used Well</div>
        <section
          className='theme-container'
          onClick={() => update('good')}
        >
          <div className="theme-color darkGray"></div>
          <div className="theme-color lightGray"></div>
          <div className="theme-color white"></div>
          <div className="theme-color salmon"></div>
        </section>
      </div>
      <div className='panel-circle' onClick={togglePanel}>
        <span className={showColorPicker ? 'arrow up' : 'arrow down'}></span>
      </div>
    </div>
  )
}