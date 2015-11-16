import React, {Component, PropTypes} from 'react';

import {Grid, Well} from 'react-bootstrap';

import PerLetterPie from './viz/perLetterPieContainer';
import Filter from './filter/filterContainer';

export default class mainComponent extends Component {
  componentDidMount() {
    const {getRaw, dispatch} = this.props;
    getRaw()(dispatch);
  }

  render() {
    const {dogData} = this.props;
    const {raw, filtered} = dogData;

    return (<Grid fluid>
      <h1>Dog Names in Zurich</h1>
      <small><a
        href={'https://data.stadt-zuerich.ch/dataset/' +
         'pd-stapo-hundenamen/' +
          'resource/11207c68-fc9f-4883-a2ef-3b4a60dd048a'}>Source: Open Data Zurich</a>
        {' '}
        <a href={'http://www.opendefinition.org/licenses/cc-zero'}>(under CC-Zero)</a>
      </small>
      <hr/>
      <p>Currently loaded: {raw.length}</p>
      <p>Currently active (after filtering): {filtered.length} (
        {Math.round(filtered.length / raw.length * 10000) / 100}%)</p>

      <Well bsSize={'small'}><Filter/></Well>

      <PerLetterPie/>
    </Grid>);
  }
}

mainComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dogData: PropTypes.object.isRequired,
  getRaw: PropTypes.func.isRequired,
};
