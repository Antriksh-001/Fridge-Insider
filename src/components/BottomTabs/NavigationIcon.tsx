import React from 'react'
import { View } from 'react-native'
import Svginserter from '../shared/Svginserter';
import * as Screen from '../../constants/Screen';

interface NavigationIconProps {
      route: string,
      isFocused: boolean
}

const NavigationIcon = ({ route, isFocused }: NavigationIconProps) => {
      const renderIcon = (route: string, isFocuses: boolean) => {
            const Screenwidth = Screen.SCREEN_WIDTH;
            let height: number = Screenwidth / 16.3;
            let width: number = Screenwidth / 16.3;

            switch (route) {
                  case "Home":
                        return isFocuses ? <Svginserter tag={'House_02'} height={height} width={width} /> : <Svginserter tag={'House_01'} height={height} width={width} />
                  case "Fridge":
                        return isFocuses ? <Svginserter tag={'Fridge_02'} height={height+4} width={width+4} /> : <Svginserter tag={'Fridge_01'} height={height+4} width={width+4} />
                  case "Notifications":
                        return isFocuses ? <Svginserter tag={'Notification_02'} height={height} width={width} /> : <Svginserter tag={'Notification_01'} height={height} width={width} />
                  case "Profile":
                        return isFocuses ? <Svginserter tag={'Recycle_02'} height={height} width={width} /> : <Svginserter tag={'Recycle_01'} height={height} width={width} />
                  default:
                        break;
            }
      }

      return (
            <View>
                  {renderIcon(route, isFocused)}
            </View>
      )
}
export default NavigationIcon