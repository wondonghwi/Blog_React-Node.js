import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

//자동 import가 되게 하기위해 한번감싸기 -> 스타일컴포넌트를 바로 내보내면 -> 자동 import X
const Button = props => {
  return props.to ? <StyledLink {...props} cyan={props.cyan ? 1 : 0} /> : <StyledButton {...props} />;
};

export default Button;

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  ${fullWidth =>
    fullWidth &&
    css`
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${cyan =>
    cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;