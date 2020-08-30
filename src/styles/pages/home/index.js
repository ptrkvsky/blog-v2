import styled from '@emotion/styled'
import theme from '../../global/theme'
import mediaQueries from '../../global/mediaQueries'

const GridHome = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }

  .left-col {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    margin-bottom: 1em;
    text-align: left;
    color: ${theme.colors.primary};
    font-size: 2.5em;
    line-height: 1.5;
    font-family: ${theme.fonts.title};
    font-weight: 200;
    font-style: italic;
  }

  p {
    font-size: 24px;
    line-height: 1.4;
    margin-bottom: 20px;
  }
`

export { GridHome }