import { connect } from 'react-redux';

import PerLetter from './perLetterComponent';

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
  mapDispatchToProps)(PerLetter);
