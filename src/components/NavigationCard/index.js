import { ArrowRight16 } from '@carbon/icons-react';

import { string } from 'prop-types';
import React from 'react';

import Card from '../Card';
import Link from '../Link';

const NavigationCard = ({ label, link }) => (
  <Card>
    <ArrowRight16 />

    <h3 className="label">{label}</h3>

    <Link href="#">{link}</Link>
  </Card>
);

NavigationCard.propTypes = {
  /** Provide the label of the `NavigationCard`. */
  label: string.isRequired,

  /** Provide the contents of the `Link`. */
  link: string.isRequired,
};

export default NavigationCard;
