import React, {Component, PropTypes} from 'react';

import {Grid, Well, Col, Row} from 'react-bootstrap';

import PerLetter from './viz/perLetterContainer';
import NameLength from './viz/nameLengthContainer';
import Filter from './filter/filterContainer';
import TextComponent from './TextComponent/textContainer';

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
      <small><a target={'_blank'}
        href={'https://data.stadt-zuerich.ch/dataset/' +
         'pd-stapo-hundenamen/' +
          'resource/11207c68-fc9f-4883-a2ef-3b4a60dd048a'}>Source: Open Data Zurich</a>
        {' '}
        <a target={'_blank'} href={'http://www.opendefinition.org/licenses/cc-zero'}>(under CC-Zero)</a>
      </small>

      <Well bsSize={'small'}>
        <h5>Note:</h5>
        This page is to demonstrate a use-case
        for <a target={'_blank'}
               href={'https://github.com/bgrsquared/d3-react-squared'}>d3-react-squared</a>.
        Please see TODO/Link for
        a blog post.
        <br/>
        The graphs are just examples and by no means useful, regarding the information presented.
        d3-react squared was designed to link charts, information, events.
      </Well>

      <Col xs={12}>
        <p>Currently loaded: {raw.length}</p>
        <p>Currently active (after filtering): {filtered.length} (
          {Math.round(filtered.length / raw.length * 10000) / 100}%)</p>
      </Col>

      <Row>
        <Col xs={6} md={5} lg={4}>
          <Well bsSize={'small'}><Filter/></Well>
        </Col>
        <Col xs={6} md={7} lg={8}>
          <TextComponent/>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <PerLetter/>
        </Col>
        <Col xs={12} md={6}>
          <NameLength/>
        </Col>
      </Row>
    </Grid>);
  }
}

mainComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dogData: PropTypes.object.isRequired,
  getRaw: PropTypes.func.isRequired,
};
