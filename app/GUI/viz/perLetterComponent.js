import React, {Component, PropTypes} from 'react';

import {Grid, Col} from 'react-bootstrap';

import {prepPerLetter} from './helpers/prepVizData';
import DR2 from 'd3-react-squared';

export default class PerLetter extends Component {
  render() {
    const {dogData} = this.props;
    const {raw, filtered} = dogData;

    const myDataRaw = prepPerLetter(raw);
    const myDataFiltered = prepPerLetter(filtered);

    return (
      <Grid fluid>
        <Col xs={6}>
          <h4>All Dogs</h4>
          <DR2
            data={myDataRaw}
            highlightEmit={['perLetter']}
            highlightListen={['perLetter']}
            params={
              {labelSize: 2}
            }
          />
        </Col>
        <Col xs={6}>
          <h4>Filtered Data</h4>
          <DR2
            data={myDataFiltered}
            highlightEmit={['perLetter']}
            highlightListen={['perLetter']}
            params={
              {labelSize: 2}
            }
          />
        </Col>
      </Grid>
    );
  }
}

PerLetter.propTypes = {
  dogData: PropTypes.object.isRequired,
};
