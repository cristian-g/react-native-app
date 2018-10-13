import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Card, Button} from 'react-native-elements';

class MyCarsView extends Component {
  static displayName = 'MyCarsView';

  static navigationOptions = {
    title: 'My cars',
    tabBarIcon: (props) => (
        <Icon name='plus-one' size={24} color={props.tintColor} />
      )
  }

  static propTypes = {
    myCars: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    myCarsStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      random: PropTypes.func.isRequired
    }).isRequired,
    navigate: PropTypes.func.isRequired
  };

  increment = () => {
    this.props.myCarsStateActions.increment();
  };

  random = () => {
    this.props.myCarsStateActions.random();
  };

  renderUserInfo = () => {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
          />
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  };

  open = () => {
      this.props.navigate({routeName: 'Car'});
  };

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <ScrollView style={styles.container}>

        {this.renderUserInfo()}

        <Card
            title='Ford Fiesta 1.25 Trend 82 White'
            image={require('../../../images/cars/ford_fiesta.jpg')}>
          <Button
              icon={{name: 'list'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW DETAILS'
              onPress={this.open}
          />
        </Card>

        <Card
            title='Tesla Model S Red'
            image={require('../../../images/cars/red_tesla_model_s.jpg')}>
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

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  myCarsButton: {
    ...circle,
    backgroundColor: '#349d4a',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  myCars: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default MyCarsView;
