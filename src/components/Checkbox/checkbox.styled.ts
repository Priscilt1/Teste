import styled from "styled-components"

export const IconStyled = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckboxStyled = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  max-width: 24px;
  max-height: 24px;
  background: var(--color-dark-grey-blue);
  border-radius: 3px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: var(--color-dark-blue-grey);
  }
`

export const CheckboxRootContainer = styled.label`
  display: grid;
  grid-template-columns: 25px 1fr;
  margin-bottom: 12px;

  label {
    margin-left: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`
