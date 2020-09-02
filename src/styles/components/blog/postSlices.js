import styled from '@emotion/styled'

const ArticleContainer = styled('div')`
  line-height: 1.5;
  p,
  ul,
  ol {
    margin-bottom: 20px;
  }
  ul,
  ol {
    margin-left: 20px;
    list-style-type: initial;
  }
  em {
    font-style: italic;
  }
`

export { ArticleContainer }
