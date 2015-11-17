import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FilterActions from '../../actions/FilterActions';

import TextComponent from './textComponent';

function mapStateToProps(state) {
  return {
    dogData: state.dogData,
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = Object.assign({},
    bindActionCreators(FilterActions, dispatch), {dispatch});
  return allActions;
}

export default connect(mapStateToProps,
  mapDispatchToProps)(TextComponent);
