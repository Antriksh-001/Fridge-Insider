import React, { Component } from 'react';

//Svgs and Images
import Avatars from '../../../assets/svg/avatars';
import Lock from '../../../assets/svg/lock';
import Email from '../../../assets/svg/email';
// import GoogleLogo from '../../../assets/svg/Google';

class Svginserter extends Component {
      components = {
            Avatars: Avatars,
            Password: Lock,
            Email: Email,
            // Google: GoogleLogo,
      };
      render(...props) {
            const TagName = this.components[this.props.tag];
            const st = this.props.style;
            return <TagName style={st} width={this.props.width} height={this.props.height} />
      }
}

export default Svginserter;