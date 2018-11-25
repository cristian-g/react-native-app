import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import MyCarsViewContainer from '../my_cars/MyCarsViewContainer';
import SharedWithMeViewContainer from '../shared_with_me/SharedWithMeViewContainer';
import CarViewContainer from '../car/CarViewContainer';
import HomeViewContainer from '../home/HomeViewContainer';
import ProfileViewContainer from '../profile/ProfileViewContainer';

const headerColor = '#03A9F4';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  MyCars: {screen: MyCarsViewContainer},
  SharedWithMe: {screen: SharedWithMeViewContainer}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'Car sharing app',
  headerTitleStyle: {color: 'white'},
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: HomeViewContainer},
  Cars: {screen: MainScreenNavigator},
  Car: {screen: CarViewContainer},
  Profile: {screen: ProfileViewContainer}
});

export default AppNavigator;
