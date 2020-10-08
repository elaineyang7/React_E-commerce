import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss';

import Stamp from '../../images/nara.png';
import Wreath from '../../images/wreath.png';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'stamps',
        imageUrl: Stamp,
        id: 1,
        linkUrl: 'stamps'
      },
      {
        title: 'wreath',
        imageUrl: Wreath,
        id: 2,
        linkUrl: 'wreaths'
      }]
    }
  }
  render() {
    return (
      <div className = 'directory-menu' >
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;
