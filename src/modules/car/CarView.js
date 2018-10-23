import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ScrollView,
  View,
  StyleSheet,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import TableRow from '../../components/TableRow';

import t from 'tcomb-form-native';

const Form = t.form.Form;

var Nil = t.Nil;
function toNull(value) {
    return (t.Str.is(value) && value.trim() === '') || Nil.is(value) ? null : value;
}

var myNumberTransformer = {
    format: value => Nil.is(value) ? null : String(value),
    parse: value =>{
        if(value)
            value = value.replace(/,/g, '.');
        var n = parseFloat(value);
        var isNumeric = (value - n + 1) >= 0;
        return isNumeric ? n : toNull(value);
    }
};
// Globally set number transformer
t.form.Textbox.numberTransformer = myNumberTransformer;

const Outgo = t.struct({
    quantity: t.Number,
    description: t.String,
});

var options = {
    fields: {
        quantity: {
            factory: t.form.Textbox.numberTransformer
        }
    }
};

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
class CarView extends Component {
  static displayName = 'CarView';

  static navigationOptions = {
    title: 'Car outgoes',
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
      background: 'rgba(255, 255, 255, 1)',
      serverports: []
    };
  }

  componentDidMount() {
      this.getOutgoes();
  }

  getOutgoes() {
      axios.get('http://puigpedros.salle.url.edu/PMM/PMM4/project/api/outgoes')
          .then(response => {
              this.setState({ serverports: response.data.outgoes });
          })
          .catch(function (error) {
              alert('ERROR. Details: ' + JSON.stringify(error));
          });
  }

  tabRow() {
      const myFunction = function(object, i) {
          return <TableRow obj={object} key={i} />;
      };
      return this.state.serverports.map(myFunction);
  }

  open = () => {
      this.props.navigate({routeName: 'Car'});
  };

  handleSubmit = () => {
      const values = this._form.getValue(); // use that ref to get the form value

      if (values !== null) {
          const outgo = {
              quantity: values.quantity,
              description: values.description
          };
          const that = this;
          axios.post('http://puigpedros.salle.url.edu/PMM/PMM4/project/api/outgoes', outgo)
              .then(response => {
                  that.getOutgoes();
              })
              .catch(function (error) {
                  alert('ERROR. Details: ' + JSON.stringify(error));
              });
      }
  };

  render() {
    return (
      <ScrollView style={[styles.container, {backgroundColor: this.state.background}]}>
          <View style={{ margin: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {this.tabRow()}
          </View>
          <View style={styles.container}>
              <Form
                  ref={c => this._form = c} // assign a ref
                  type={Outgo}
              />
              <Button
                  title="Save outgo"
                  onPress={this.handleSubmit}
              />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});

export default CarView;
