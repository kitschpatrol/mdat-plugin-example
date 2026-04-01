import type { Config } from 'mdat'

export default {
	example: {
		content() {
			return 'Hello from the [mdat](https://github.com/kitschpatrol/mdat) example plugin!'
		},
	},
} satisfies Config
