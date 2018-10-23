import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CarView from './CarView';
import {NavigationActions} from 'react-navigation';
import * as CarStateActions from './CarState';

export default connect(
    state => ({
        car: state.getIn(['car', 'value']),
        loading: state.getIn(['car', 'loading'])
    }),
    dispatch => {
        return {
            navigate: bindActionCreators(NavigationActions.navigate, dispatch),
            carStateActions: bindActionCreators(CarStateActions, dispatch)
        };
    }
)(CarView);
