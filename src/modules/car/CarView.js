import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
class CarView extends Component {
  static displayName = 'CarView';

  static navigationOptions = {
    title: 'Car details',
    tabBarIcon: (props) => (
        <Icon name='color-lens' size={24} color={props.tintColor} />
      ),
    // TODO: move this into global config?
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#03A9F4'
    }
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      background: 'rgba(255, 255, 255, 1)'
    };
  }

  open = () => {
    this.props.navigate({routeName: 'Car'});
  };

  render() {
    return (
      <ScrollView style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text style={{margin: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor diam, aliquam varius ante. Morbi nulla magna, iaculis non gravida nec, maximus vitae justo. Phasellus at euismod eros, vel euismod ex. Cras sed pretium lectus. Nam dolor tellus, sagittis id leo et, tristique iaculis metus. Maecenas sed porttitor odio, sed rhoncus est. Fusce luctus orci vel augue lacinia luctus. Morbi orci magna, tristique nec tellus eu, hendrerit interdum risus. Pellentesque porta commodo erat. In eu facilisis nibh, in mollis tortor. Sed imperdiet sodales dui eu porta. Proin vestibulum bibendum tempor. Proin posuere tellus nec elit scelerisque fermentum a et erat. Vestibulum ut elit condimentum, volutpat quam in, volutpat felis.

          Vivamus egestas magna sem, nec interdum nisi fermentum a. Vestibulum pretium dui id nunc consectetur maximus. Donec sit amet ipsum dictum, interdum ante ac, egestas ipsum. Aenean aliquet sagittis massa, non imperdiet sapien feugiat ac. Integer vehicula ipsum eu quam rutrum porttitor et eget augue. Suspendisse tempus, diam ut placerat varius, turpis augue rhoncus eros, et molestie felis ex id nisl. Aenean volutpat leo metus, eu tincidunt justo viverra at. Donec vitae mattis justo. Curabitur pellentesque risus nunc, at venenatis metus venenatis vitae. Etiam ultrices, dolor eget malesuada ornare, massa ipsum consequat nisi, vel euismod purus sem quis mauris. Nullam nunc augue, efficitur a sapien in, feugiat porttitor ligula. Vivamus ut turpis a mi malesuada scelerisque at nec mauris. Nunc dictum eros at luctus consectetur.

          Vestibulum at varius nisl. Pellentesque tincidunt magna lorem, a pulvinar erat molestie at. Suspendisse et eros vel nisl volutpat convallis nec a nisi. Duis ut odio ullamcorper, sollicitudin dolor in, hendrerit eros. Donec erat purus, imperdiet eu erat at, placerat dignissim velit. Ut nibh felis, consectetur id tortor eget, malesuada suscipit elit. Morbi nisl turpis, malesuada vel ipsum eu, tristique dignissim dui.

          Maecenas nec erat pharetra est elementum vulputate ac nec sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper justo leo, non pulvinar augue pretium nec. Pellentesque malesuada in risus ultrices fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam suscipit dolor nec lobortis. Morbi aliquam tempus mauris sed maximus.

          In vitae diam augue. Praesent aliquam massa id varius mattis. Aliquam placerat metus urna, tempor egestas odio scelerisque a. Vivamus metus ligula, hendrerit egestas efficitur nec, gravida a lacus. Duis sit amet odio vel elit tristique tristique eu quis est. Quisque quis ligula sed nisi sodales scelerisque. Nulla vel metus et ante pellentesque vehicula non in odio. Vestibulum pellentesque fermentum elit, eu luctus sapien finibus eget. Cras lobortis nec justo mollis viverra. Proin ut purus elementum, porta ipsum vitae, varius orci. Duis venenatis libero orci. Nunc finibus risus sit amet quam mollis, gravida ullamcorper sapien consequat. Nulla imperdiet sapien neque, egestas feugiat augue tincidunt vel. Nunc facilisis suscipit imperdiet.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default CarView;
