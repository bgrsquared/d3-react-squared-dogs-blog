import React, {Component, PropTypes} from 'react';

import {Button, ButtonGroup} from 'react-bootstrap';

export default class FilterComponent extends Component {
  constructor() {
    super();
    this.state = {
      showFilter: true,
    };
  }

  onFilter(obj) {
    const {setFilter} = this.props;
    setFilter(obj);
  }

  render() {
    const {dogData} = this.props;
    const {showFilter} = this.state;
    const {sex, nameLengthMax, nameLengthMin} = dogData;

    const nameLengthMaxButtons = [];
    const nameLengthsMax = [3, 5, 10, 20, Infinity];
    nameLengthsMax.map(n => {
      nameLengthMaxButtons.push(
        <Button
          bsStyle={n === nameLengthMax ? 'primary' : 'default'}
          disabled={n <= nameLengthMin}
          key={'nameLengthMaxBtn' + n}
          onClick={() => {this.onFilter({nameLengthMax: n});}}>
          {n}
        </Button>);
    });

    const nameLengthMinButtons = [];
    const nameLengthsMin = [0, 3, 5, 10, 20];
    nameLengthsMin.map(n => {
      nameLengthMinButtons.push(
        <Button
          bsStyle={n === nameLengthMin ? 'primary' : 'default'}
          disabled={n >= nameLengthMax}
          key={'nameLengthMaxBtn' + n}
          onClick={() => {this.onFilter({nameLengthMin: n});}}>
          {n}
        </Button>);
    });

    const filterControls = (<div>
      <h4>Sex</h4>
      <ButtonGroup>
        <Button
          bsStyle={(sex.size === 1 && sex.has('m')) ? 'primary' : 'default'}
          onClick={() => {this.onFilter({'sex': new Set(['m'])});}}>
          M
        </Button>
        <Button
          bsStyle={(sex.size === 1 && sex.has('w')) ? 'primary' : 'default'}
          onClick={() => {this.onFilter({sex: new Set(['w'])});}}>
          F
        </Button>
        <Button
          bsStyle={sex.size === 2 ? 'primary' : 'default'}
          onClick={() => {this.onFilter({sex: new Set(['m', 'w'])});}}>
          Both
        </Button>
      </ButtonGroup>
      <h4>Length of Dog's name</h4>
      <ButtonGroup>
        <Button
          bsStyle={(nameLengthMax === 5 && nameLengthMin === 0) ? 'primary' : 'default'}
          onClick={() => {this.onFilter({nameLengthMax: 5, nameLengthMin: 0});}}>
          Short Names
        </Button>
        <Button
          bsStyle={(nameLengthMax === Infinity && nameLengthMin === 20) ? 'primary' : 'default'}
          onClick={() => {this.onFilter({nameLengthMax: Infinity, nameLengthMin: 20});}}>
          Long Names
        </Button>
        <Button
          bsStyle={(nameLengthMax === Infinity && nameLengthMin === 0) ? 'primary' : 'default'}
          onClick={() => {this.onFilter({nameLengthMax: Infinity, nameLengthMin: 0});}}>
          All
        </Button>
      </ButtonGroup>

      <h5>Minimal number of letters</h5>
      <ButtonGroup>
        {nameLengthMinButtons}
      </ButtonGroup>
      <h5>Maximal number of letters</h5>
      <ButtonGroup>
        {nameLengthMaxButtons}
      </ButtonGroup>
    </div>);

    return (
      <div>
        <h3>Filter{' '}
          <Button
            bsSize={'small'}
            onClick={() => {this.setState({showFilter: !showFilter});}}>
            Toggle Filter
          </Button>
        </h3>
        {showFilter ? filterControls : ''}
      </div>);
  }
}

FilterComponent.propTypes = {
  dogData: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
};
