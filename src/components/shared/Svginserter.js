import React, { Component } from 'react';

//Svgs and Images
import Avatars from '../../../assets/svg/avatars';
import Email from '../../../assets/svg/email';
import OpenLock from '../../../assets/svg/openlock';
import CloseLock from '../../../assets/svg/closelock';
import MailLogo from '../../../assets/svg/mailLogo';
import NextLogo from '../../../assets/svg/nextLogo';
import AccountLogo from '../../../assets/svg/accountLogo';
import Locationillustration from '../../../assets/svg/locationillustration';

class Svginserter extends Component {
      components = {
            Avatars: Avatars,
            Email: Email,
            Password: OpenLock,
            ConfirmPass: CloseLock,
            Mail: MailLogo,
            Next: NextLogo,
            Account: AccountLogo,
            Location: Locationillustration
      };
      render(...props) {
            const TagName = this.components[this.props.tag];
            const st = this.props.style;
            return <TagName style={st} width={this.props.width} height={this.props.height} />
      }
}

export default Svginserter;