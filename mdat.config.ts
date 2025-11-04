import { mdatConfig } from '@kitschpatrol/mdat-config'
import examplePlugin from './src'

export default mdatConfig({
	rules: {
		...examplePlugin,
	},
})
