import { connect } from 'react-redux';

import PerLetterPie from './perLetterPieComponent';

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
  mapDispatchToProps)(PerLetterPie);
