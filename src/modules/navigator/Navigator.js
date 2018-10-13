import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import MyCarsViewContainer from '../my_cars/MyCarsViewContainer';
import SharedWithMeViewContainer from '../shared_with_me/SharedWithMeViewContainer';
import CarViewContainer from '../car/CarViewContainer';

const headerColor = '#03A9F4';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  Counter: {screen: MyCarsViewContainer},
  Color: {screen: SharedWithMeViewContainer}
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
  Home: {screen: MainScreenNavigator},
  Car: {screen: CarViewContainer}
});

export default AppNavigator;
