import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProfileView from './ProfileView';
import {NavigationActions} from 'react-navigation';
import * as ProfileStateActions from './ProfileState';

export default connect(
    state => ({
        profile: state.getIn(['profile', 'value']),
        loading: state.getIn(['profile', 'loading'])
    }),
    dispatch => {
        return {
            navigate: bindActionCreators(NavigationActions.navigate, dispatch),
            profileStateActions: bindActionCreators(ProfileStateActions, dispatch)
        };
    }
)(ProfileView);
