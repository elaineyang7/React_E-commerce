import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss';


class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'stamps',
        imageUrl: 'https://i.ibb.co/2gLm5Nv/nara.jpg',
        id: 1,
        linkUrl: 'stamps'
      },
      {
        title: 'wreaths',
        imageUrl: 'https://i.ibb.co/Sfvz9Rk/wreath.jpg',
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
    );
  }
}

export default Directory;
