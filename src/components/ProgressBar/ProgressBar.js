/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderRadius': 4 + 'px',
    '--height': 8 + 'px',
    '--padding': 0 + 'px'
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--height': 12 + 'px',
    '--padding': 0 + 'px'
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--height': 24 + 'px',
    '--padding': 4 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      ariva-valuemax={100}
      value={value}
      style={styles}
    >
      <VisuallyHidden>
        {value}%
      </VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);

  &:before {
    content: '';
    display: block;
    background-color: ${COLORS.primary};
    width: ${props => props.value}%;
    height: 100%;
    border-radius: 4px ${props => props.value >= 99 ? '4px 4px' : '0 0'} 4px;
  }
`

export default ProgressBar;
