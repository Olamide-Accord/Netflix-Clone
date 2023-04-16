import { colors } from "lib/styles/colors";
import styled from "styled-components";

const TextWrapper = styled.p`
  font-size: ${(props) => props.size || "1.3rem"};
  font-weight: ${(props) => props.weight || "500"};
  color: ${(props) =>
    props.color
      ? colors[props.color]
        ? props.theme.colors[props.color]
        : props.color
      : "#fff"};
  text-align: ${(props) => (props.alignment ? props.alignment : "center")};
  line-height: ${(props) => props.lineHeight || "130%"};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin || "0.5rem 0"};
  @media only screen and (max-width: 991px) {
    text-align: ${(props) => props.tabAlign || "center"};
  }
`;

/**
 * Custom Text component
 * @param {string} alignment
 * @param {string} as
 * @param {string} color -
 * @param {string} size -
 * @param {string} weight -
 * @param {string} lineHeight -
 * @param {string} mobileLineHeight
 * @param {string} tabSize -
 * @param {string} mobileSize -
 * @param {string} mobileWeight -
 * @param {string} tabAlign -
 * width
 */

const Text = ({
  as = 'p',
  alignment,
  weight,
  color,
  size,
  lineHeight,
  tabAlign,
  children,
  ...rest
}) => {
  return (
    <TextWrapper
      as={as}
      size={size}
      weight={weight}
      color={color}
      alignment={alignment}
      lineHeight={lineHeight}
      tabAlign={tabAlign}
      {...rest}
    >
      {children}
    </TextWrapper>
  )
}

export default Text;