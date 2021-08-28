import { MDXProvider } from '@mdx-js/react'
import { Themed } from 'theme-ui'
import { useColormap } from '@carbonplan/colormaps'
import { Layout, Row, Column } from '@carbonplan/components'

const Section = ({ children }) => {
  return (
    <MDXProvider>
      <Layout>
        <Row sx={{ mb: [7, 8, 9, 10] }}>
          <Column start={[1, 2, 3, 3]} width={6}>
            {children}
          </Column>
        </Row>
      </Layout>
    </MDXProvider>
  )
}

export default Section
