import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RawActions from '../actions/RawActions';

import MainComponent from './mainComponent';

function mapStateToProps(state) {
  return {
    dogData: state.dogData,
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = Object.assign({},
    bindActionCreators(RawActions, dispatch), {dispatch});
  return allActions;
}

export default connect(mapStateToProps,
  mapDispatchToProps)(MainComponent);
