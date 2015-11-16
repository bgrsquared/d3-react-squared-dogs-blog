import React, {Component, PropTypes} from 'react';

import {Grid, Col} from 'react-bootstrap';

import {prepPerLetter} from './helpers/prepVizData';
import DR2 from 'd3-react-squared';

export default class PLP extends Component {
  render() {
    const {dogData} = this.props;
    const {raw, filtered} = dogData;

    const myDataRaw = prepPerLetter(raw);
    const myDataFiltered = prepPerLetter(filtered);

    return (
      <Grid>
        <Col xs={6}>
          <DR2
            data={myDataRaw}
            params={
              {labelSize: 2}
            }
          />
        </Col>
        <Col xs={6}>
          <DR2
            data={myDataFiltered}
            params={
              {labelSize: 2}
            }
          />
        </Col>
      </Grid>
    );
  }
}

PLP.propTypes = {
  dogData: PropTypes.object.isRequired,
};
