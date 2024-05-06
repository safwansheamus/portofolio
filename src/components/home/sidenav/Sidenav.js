import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
   
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+62 89660533383</li>
        <li className="sidenavLi">smartcow721@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav