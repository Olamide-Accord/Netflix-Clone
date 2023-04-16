import styled, {css} from 'styled-components'
import {colors} from "../lib/styles/colors"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 8px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white;
    
  }
  background-color: ${(props) => props.bg};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap};
  ${(props) => props.alignment && css`
    align-items: ${props.alignment};
  `}
  ${(props) => props.distribution && css`
    justify-content: ${props.distribution};
  `}
  ${(props) => props.vertical && css`
    flex-direction: column;
  `}
  @media only screen and (max-width: 991px) {
    width: ${(props) => props.tabWidth};
    height: ${(props) => props.tabHeight};
    margin: ${(props) => props.tabMargin};
    padding: ${(props) => props.tabPadding};
    ${(props) => props.tabAlignment && css`
    align-items: ${props.tabAlignment};
    `}
    ${(props) => props.tabDistribution && css`
      justify-content: ${props.tabDistribution};
    `}
    ${(props) => props.tabVertical && css`
      flex-direction: column;
    `}
    ${(props) => props.tabHorizontal && css`
      flex-direction: row;
    `}
    ${(props) => props.tabGap && css`
      gap: ${props.tabGap};
    `}
  }
  @media only screen and (max-width: 580px) {
    width: ${(props) => props.mobileWidth};
    height: ${(props) => props.mobileHeight};
    ${(props) => props.mobileAlignment && css`
      align-items: ${props.mobileAlignment};
    `}
    ${(props) => props.mobileDistribution && css`
      justify-content: ${props.mobileDistribution};
    `}
    ${(props) => props.mobileVertical && css`
      flex-direction: column;
    `}
    ${(props) => props.mobileHorizontal && css`
      flex-direction: row;
    `}
    ${(props) => props.mobileGap && css`
      gap: ${props.mobileGap};
    `}
  }
`

/**
 * @param {String} as -
 * @param {String} bg
 * @param {String} width
 * @param {String} height
 * @param {String} padding
 * @param {String} margin
 * @param {String} border
 * @param {String} distribution
 * @param {String} alignment
 * @param {String} horizontal
 * @param {String} wrap
 * @param {String} tabWidth
 * @param {String} tabHeight
 * @param {String} tabDistribution
 * @param {String} tabAlignment
 * @param {String} tabVertical
 * @param {String} tabHorizontal
 * @param {String} tabMargin
 * @param {String} tabPadding
 * @param {String} mobileWidth
 * @param {String} mobileHeight
 * @param {String} mobileDistribution
 * @param {String} mobileAlignment
 * @param {String} mobileVertical
 * @param {String} mobileHorizontal
 */

const Container = ({
  as = 'div',
  bg,
  width,
  height,
  padding,
  margin,
  border,
  distribution,
  alignment,
  vertical,
  horizontal,
  wrap,
  tabWidth,
  tabHeight,
  tabHorizontal,
  tabVertical,
  tabDistribution,
  tabAlignment,
  tabGap,
  tabMargin,
  tabPadding,
  mobileAlignment,
  mobileDistribution,
  mobileGap,
  mobileHeight,
  mobileHorizontal,
  mobileVertical,
  mobileWidth,
  children,
  ...rest
}) => {
  return (
    <Wrapper
      as={as}
      width={width}
      height={height}
      alignment={alignment}
      distribution={distribution}
      margin={margin}
      padding={padding}
      vertical={vertical}
      wrap={wrap}
      tabWidth={tabWidth}
      tabHeight
      tabVertical
      tabDistribution
      tabAlignment
      tabGap
      tabMargin
      tabPadding
      mobileAlignment
      mobileDistribution
      mobileGap
      mobileHeight
      mobileHorizontal={mobileHorizontal}
      mobileVertical={mobileVertical}
      mobileWidth
      bg
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default Container