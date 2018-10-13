import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MyCarsView from './MyCarsView';
import {NavigationActions} from 'react-navigation';
import * as MyCarsStateActions from './MyCarsState';

export default connect(
  state => ({
    myCars: state.getIn(['myCars', 'value']),
    loading: state.getIn(['myCars', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      myCarsStateActions: bindActionCreators(MyCarsStateActions, dispatch)
    };
  }
)(MyCarsView);
