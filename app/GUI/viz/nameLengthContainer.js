import { connect } from 'react-redux';

import NameLength from './nameLengthComponent';

function mapStateToProps(state) {
  return {
    dogData: state.dogData,
  };
}

function mapDispatchToProps() {
  const allActions = {};
  return allActions;
}

export default connect(mapStateToProps,
  mapDispatchToProps)(NameLength);
