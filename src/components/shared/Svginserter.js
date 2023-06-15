import React, { Component } from 'react';

//Svgs and Images
import Avatars from '../../../assets/svg/avatars';
import Email from '../../../assets/svg/email';
import OpenLock from '../../../assets/svg/openlock';
import CloseLock from '../../../assets/svg/closelock';

class Svginserter extends Component {
      components = {
            Avatars: Avatars,
            Email: Email,
            Password: OpenLock,
            ConfirmPass: CloseLock,
      };
      render(...props) {
            const TagName = this.components[this.props.tag];
            const st = this.props.style;
            return <TagName style={st} width={this.props.width} height={this.props.height} />
      }
}

export default Svginserter;