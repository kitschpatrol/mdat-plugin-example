import { expandString } from 'mdat'
import { expect, it } from 'vitest'
import examplePlugin from '../src'

it('should expand example rule', async () => {
	const markdown = `<!-- example -->`
	const result = await expandString(markdown, undefined, examplePlugin)
	expect(result.toString()).toMatchInlineSnapshot(`
		"<!-- example -->

		Hello from the [mdat](https://github.com/kitschpatrol/mdat) example plugin!

		<!-- /example -->
		"
	`)
})
