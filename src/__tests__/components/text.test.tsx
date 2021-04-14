import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import Text from '../../components/Text/Text'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Text>Alium</Text>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ jodyWs"
        color="text"
      >
        alium
      </div>
    </DocumentFragment>
  `)
})
