import React, {Component, PropTypes} from 'react';

import {Grid, Col} from 'react-bootstrap';

import {prepNameLength} from './helpers/prepVizData';
import DR2 from 'd3-react-squared';

export default class NameLength extends Component {
  render() {
    const {dogData} = this.props;
    const {raw, filtered} = dogData;

    const myDataRaw = prepNameLength(raw);
    const myDataFiltered = prepNameLength(filtered);

    return (
      <Grid fluid>
        <Col xs={6}>
          <h4>All Dogs</h4>
          <DR2
            data={myDataRaw}
            highlightEmit={['nameLength']}
            highlightListen={['nameLength']}
            params={
              {labelSize: 2}
            }
          />
        </Col>
        <Col xs={6}>
          <h4>Filtered Data</h4>
          <DR2
            data={myDataFiltered}
            highlightEmit={['nameLength']}
            highlightListen={['nameLength']}
            params={
              {labelSize: 2}
            }
          />
        </Col>
      </Grid>
    );
  }
}

NameLength.propTypes = {
  dogData: PropTypes.object.isRequired,
};
