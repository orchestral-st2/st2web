import React from 'react';
import { PropTypes } from 'prop-types';

import isExpandable from '@stackstorm/module-filter-expandable';

export default class ActionFlexCard extends React.Component {
  static propTypes = {
    action: PropTypes.object,
    selected: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    const { action, selected, onClick } = this.props;

    const props = {
      className: 'st2-flex-card',
      'data-test': `action action:${action.ref}`,
      onClick
    };

    if (selected) {
      props.className += ' st2-flex-card--active';
    }

    return <div {...props}>
      <div className="st2-flex-card__header">
        <div className="st2-flex-card__column">
          <div className="st2-flex-card__header-primary" title={ action.ref }>
            { action.name }
          </div>
          <div className="st2-flex-card__header-secondary">
            { action.description }
          </div>
        </div>
        <div className="st2-flex-card__column st2-flex-card__header-type" title={ action.runner_type }>
          { action.runner_type }
        </div>
        <div className="st2-flex-card__column st2-flex-card__header-status">
          { isExpandable({ action }) ?
            <i className="icon-branch"></i>
            : null }
        </div>
      </div>
    </div>;
  }
}
