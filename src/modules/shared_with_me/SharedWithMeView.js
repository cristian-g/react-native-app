import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Card, Button} from 'react-native-elements';

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
class SharedWithMeView extends Component {
  static displayName = 'SharedWithMeView';

  static navigationOptions = {
    title: 'Shared with me',
    tabBarIcon: (props) => (
        <Icon name='color-lens' size={24} color={props.tintColor} />
      ),
    // TODO: move this into global config?
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#39babd'
    }
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      background: 'rgba(255, 255, 255 , 1)'
    };
  }

  open = () => {
    this.props.navigate({routeName: 'Car'});
  };

  render() {
    return (
      <ScrollView style={[styles.container, {backgroundColor: this.state.background}]}>

        <Card
            title='Tesla Model S Black'
            image={require('../../../images/cars/tesla_model_s.jpg')}>
          <Text style={{marginBottom: 10}}>
            Albert
          </Text>
          <Button
              icon={{name: 'list'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW DETAILS'
              onPress={this.open}
          />
        </Card>

        <Card
            title='Bat Mobile'
            image={require('../../../images/cars/batmobile.png')}>
          <Text style={{marginBottom: 10}}>
            Marc
          </Text>
          <Button
              icon={{name: 'list'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW DETAILS'
              onPress={this.open}
          />
        </Card>

        <Card
            title='Ford Mustang GT King Edition'
            image={require('../../../images/cars/ford_mustang.jpg')}>
          <Text style={{marginBottom: 10}}>
            Àngela
          </Text>
          <Button
              icon={{name: 'list'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW DETAILS'
              onPress={this.open}
          />
        </Card>

        <Card
            title='Ford Garage 62'
            image={require('../../../images/cars/Ford_Car_Garage_62.jpg')}>
          <Text style={{marginBottom: 10}}>
            Pol
          </Text>
          <Button
              icon={{name: 'list'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW DETAILS'
              onPress={this.open}
          />
        </Card>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SharedWithMeView;
