import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const iconSize = 24

  return (
    <Wrapper>
      <RealSelect value={value} onChange={onChange}>
        {children}
      </RealSelect>
      <FancySelect>
        {displayedValue}
        <IconWrapper style={{ '--size': iconSize + 'px' }}>
          <Icon id="chevron-down" size={iconSize} color={COLORS.GRAY_DARK} />
        </IconWrapper>
      </FancySelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const RealSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const FancySelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  font-size: ${16/16}rem;

  ${RealSelect}:focus + & {
    outline: 1px dotted hsl(212, 100%, 40%);
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${RealSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`

export default Select;
