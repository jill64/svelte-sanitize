import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://53b452d0789f84a03e66003b78bb1239@o4505814639312896.ingest.sentry.io/4506335525208064'
)

export const handle = onHandle()
export const handleError = onError()
