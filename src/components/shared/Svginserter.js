import React, { Component } from 'react';

//Svgs and Images
// import ClearDay from '../assets/svgs/clearday';
import Avatars from '../../../assets/svg/avatars';

class Svginserter extends Component {
      components = {
            // Clear: ClearDay,
            Avatars: Avatars,
      };
      render(...props) {
            const TagName = this.components[this.props.tag];
            const st = this.props.style;
            return <TagName style={st} width={this.props.width} height={this.props.height} />
      }
}

export default Svginserter;