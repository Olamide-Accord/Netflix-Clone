import styled from 'styled-components'
import { colors } from "lib/styles/colors";

const Style = styled.div`
  width: ${(props) => props.width};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button{
    width: 100%;
    outline: none;
    border: ${(props) => props.border || "none"};
    font-size: ${(props) => props.size || "1.2rem"};
    font-weight: ${(props) => props.weight || '400'};
    line-height: ${(props) => props.lineHeight || "120%"};
    background-color: ${(props) => props.bg 
      ? colors[props.bg]
        ? props.theme.colors[props.bg]
        : props.bg
      :props.theme.colors.primary};
    color: ${(props) => props.color || props.theme.colors.white};
    padding: ${(props) => props.padding || "0.65rem 1.5rem"};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.radius || '0.35rem'};
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover{
    opacity: 0.75;

  }
  a{
    color: #fff;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 991px) {
    width: ${(props) => props.tabWidth};
  }
  @media only screen and (max-width: 580px) {
    width: ${(props) => props.mobileWidth};
  }
`


/**
 * @param {String} width
 * @param {String} bg
 * @param {String} color
 * @param {String} padding
 * @param {String} margin
 * @param {String} radius
 * @param {String} size
 * @param {String} weight
 * @param {String} lineHeight
 * @param {String} tabWidth
 * @param {String} mobileWidth
 * @param {String} border
 * @param {String} gap
 * @param {String} type
 * @param {String} 
 */


const Button = ({
  width,
  bg,
  color,
  padding,
  margin,
  radius,
  size,
  type,
  children,
  tabWidth,
  mobileWidth,
  border,
  weight,
  lineHeight,
  gap,
  ...rest
}) => {
  return (
    <Style
      width={width}
      color={color}
      border={border}
      bg={bg}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      padding={padding}
      margin={margin}
      radius={radius}
      tabWidth={tabWidth}
      mobileWidth={mobileWidth}
      gap
      {...rest}
    >
      <button
        type={type}
      >
        {children}
      </button>
    </Style>
  )
}

export default Button;