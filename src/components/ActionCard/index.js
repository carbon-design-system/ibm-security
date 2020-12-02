import { Settings16 } from '@carbon/icons-react';

import { string } from 'prop-types';
import React from 'react';

import Button from '../Button';
import Card from '../Card';

const ActionCard = ({ action, label }) => (
  <Card className="card">
    <span className="label">{label}</span>

    <Button renderIcon={Settings16}>{action}</Button>
  </Card>
);

ActionCard.propTypes = {
  /** Provide the label of the `ActionCard`. */
  label: string.isRequired,

  /** Provide the contents of the `Button`. */
  action: string.isRequired,
};

export default ActionCard;
