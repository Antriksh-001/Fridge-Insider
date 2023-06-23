import React, { Component } from 'react';

//Svgs and Images
import Avatars from '../../../assets/svg/avatars';
import Email from '../../../assets/svg/email';
import OpenLock from '../../../assets/svg/openlock';
import CloseLock from '../../../assets/svg/closelock';
import MailLogo from '../../../assets/svg/mailLogo';
import NextLogo from '../../../assets/svg/nextLogo';
import AccountLogo from '../../../assets/svg/accountLogo';
import PlusSign from '../../../assets/svg/plusSign';
import House_01 from '../../../assets/svg/house_01';
import House_02 from '../../../assets/svg/house_02';
import Fridge_01 from '../../../assets/svg/fridge_01';
import Fridge_02 from '../../../assets/svg/fridge_02';
import Notification_01 from '../../../assets/svg/notification_01';
import Notification_02 from '../../../assets/svg/notification_02';
import Recycle_01 from '../../../assets/svg/recycle_01';
import Recycle_02 from '../../../assets/svg/recycle_02';
import MenuBurger from '../../../assets/svg/menuBurger';
import MenuClose from '../../../assets/svg/menuClose';
import PlusCircle from '../../../assets/svg/plusCircle';
import MinusCircle from '../../../assets/svg/minusCircle';
import MenuWrapper from '../../../assets/svg/menuWrapperLogo';

class Svginserter extends Component {
      components = {
            Avatars: Avatars,
            Email: Email,
            Password: OpenLock,
            ConfirmPass: CloseLock,
            Mail: MailLogo,
            Next: NextLogo,
            Account: AccountLogo,
            Plus: PlusSign,
            House_01: House_01,
            House_02: House_02,
            Fridge_01: Fridge_01,
            Fridge_02: Fridge_02,
            Notification_01: Notification_01,
            Notification_02: Notification_02,
            Recycle_01: Recycle_01,
            Recycle_02: Recycle_02,
            Menu: MenuBurger,
            MenuClose: MenuClose,
            PlusCircle: PlusCircle,
            MinusCircle: MinusCircle,
            MenuWrapper: MenuWrapper,
      };
      render(...props) {
            const TagName = this.components[this.props.tag];
            const st = this.props.style;
            return <TagName style={st} width={this.props.width} height={this.props.height} />
      }
}

export default Svginserter;