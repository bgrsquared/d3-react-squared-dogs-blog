/* global ga */

import React, {Component, PropTypes} from 'react';

import {Grid, Well, Col, Row} from 'react-bootstrap';

import PerLetter from './viz/perLetterContainer';
import NameLength from './viz/nameLengthContainer';
import Filter from './filter/filterContainer';
import TextComponent from './TextComponent/textContainer';

export default class mainComponent extends Component {
  componentDidMount() {
    if (document.location.hostname !== 'localhost') {
      ga('send', 'pageview', '/dogs');
    }
    const {getRaw, dispatch} = this.props;
    getRaw()(dispatch);
  }

  render() {
    return (<Grid fluid>
      <h1>Dog Names in Zurich - a showcase</h1>
      <h2>a.k.a. why do we need d3-react-squared?</h2>
      <small><a target={'_blank'}
                href={'https://data.stadt-zuerich.ch/dataset/' +
         'pd-stapo-hundenamen/' +
          'resource/11207c68-fc9f-4883-a2ef-3b4a60dd048a'}>Source: Open Data Zurich</a>
        {' '}
        <a target={'_blank'} href={'http://www.opendefinition.org/licenses/cc-zero'}>(under CC-Zero)</a>
      </small>

      <Well bsSize={'small'}>
        <h3>Note/Disclaimer:</h3>
        This page is to demonstrate a use-case
        for <a target={'_blank'}
               href={'https://github.com/bgrsquared/d3-react-squared'}>d3-react-squared</a>.
        <br/>
        <ul>
          <li>
            MEDIUM Blog Post (TODO/Insert Link)
          </li>
          <li>
            <a target={'_blank'}
               href={'https://github.com/bgrsquared/d3-react-squared'}>github</a>
          </li>
        </ul>
        The graphs are just examples and by no means useful regarding the information presented
        (or: the way it is presented).
        d3-react squared was designed to link charts, information, events.
      </Well>

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
