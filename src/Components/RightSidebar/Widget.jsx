import React from 'react';
import './RightSidebar.css';
import comment from '../../Assets/comment-alt.svg';
import pen from '../../Assets/pen-solid.svg';
import blacklogo from '../../Assets/stack-overflow.svg';

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18' />
          <p>Observability is the key to the future of your software (and your DevOps career)</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
