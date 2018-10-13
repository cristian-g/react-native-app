import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MyCarsView from './MyCarsView';
import {NavigationActions} from 'react-navigation';
import * as MyCarsStateActions from './MyCarsState';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      counterStateActions: bindActionCreators(MyCarsStateActions, dispatch)
    };
  }
)(MyCarsView);
