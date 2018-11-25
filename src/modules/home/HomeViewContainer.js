import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomeView from './HomeView';
import {NavigationActions} from 'react-navigation';
import * as HomeStateActions from './HomeState';

export default connect(
    state => ({
        home: state.getIn(['home', 'value']),
        loading: state.getIn(['home', 'loading'])
    }),
    dispatch => {
        return {
            navigate: bindActionCreators(NavigationActions.navigate, dispatch),
            homeStateActions: bindActionCreators(HomeStateActions, dispatch)
        };
    }
)(HomeView);
