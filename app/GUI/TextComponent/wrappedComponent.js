import React, {Component, PropTypes} from 'react';

export default class WrappedText extends Component {
  sendEvent(id, grp, event) {
    const {setEvent} = this.props;
    const eventObj = {
      data: {id},
      event,
      eventGroup: grp,
    };
    setEvent(eventObj);
  }

  render() {
    const {dogData, eventData, setFilter} = this.props;
    const {filtered, raw} = dogData;
    const {timeStamp} = eventData;
    const ratio = (filtered.length / raw.length) || 0;

    let eventText;
    if (timeStamp) {
      eventText = 'The last event was called ' + eventData.event +
        ' on eventGroup "' + eventData.eventGroup.join(', ') + '"' +
        ' and happened on ' + (new Date(timeStamp));
    } else {
      eventText = 'So far, no event happened. Nothing noteworthy...';
    }


    return (
      <div>
        <h4>Here's a wrapped component</h4>
        <h5>Using redux data</h5>
        So, we are currently looking at {filtered.length} dogs (after filtering)...
        <br/>
        Let's add an interactive svg here, without d3:
        <svg width={'100%'} height={'20px'}>
          <rect
            width={100 * ratio + '%'}
            height={'20px'}
            x={'0%'}
            rx={5}
            style={{fill: 'orangered'}}/>
          <rect
            width={100 * (1 - ratio) + '%'}
            height={'20px'}
            x={100 * ratio + '%'}
            rx={5}
            style={{fill: '#DDD'}}/>
          <text x={'5'} y={'15'}>
            {Math.round(filtered.length / raw.length * 10000) / 100 + '% of all dogs (filtering)'}
          </text>
        </svg>
        <h5>Sending events from text...</h5>
        Names starting with{' '}
        <span
          style={{background: '#FFFF66'}}
          onMouseOver={()=>{this.sendEvent('L', ['perLetter'], 'mouseover');}}
          onMouseOut={()=>{this.sendEvent('', ['perLetter'], 'mouseout');}}
        >
          L (mouseover here)
        </span>
        ... bla bla ... or{' '}
        <span
          style={{background: '#FFFF66'}}
          onMouseOver={()=>{this.sendEvent('0-5', ['nameLength'], 'mouseover');}}
          onMouseOut={()=>{this.sendEvent('', ['nameLength'], 'mouseout');}}
        >
          short names (mouseover here)
        </span>
        <h5>Or send redux actions from text</h5>
        So{' '}
        <span
          style={{background: '#FFFF66'}}
          onMouseOver={()=>{setFilter({sex: new Set(['w'])});}}
        >
          female dogs (filter on mouseover!)
        </span>
        ... blah blah ...{' '}
        <span
          style={{background: '#FFFF66'}}
          onMouseOver={()=>{setFilter({sex: new Set(['m'])});}}
        >
          male dogs (filter on mouseover!)
        </span>
        ... blah blah ...{' '}
        <span
          style={{background: '#FFFF66'}}
          onMouseOver={()=>{setFilter({sex: new Set(['m', 'w'])});}}
        >
          both sexes (filter on mouseover!)
        </span>
        <h5>Using eventData from d3-react-squared</h5>
        {eventText}
      </div>
    );
  }
}

WrappedText.propTypes = {
  dogData: PropTypes.object.isRequired,
  eventData: PropTypes.object.isRequired,
  setEvent: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};
