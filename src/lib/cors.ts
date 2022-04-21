import { NextApiRequest, NextApiResponse } from 'next';
import { assertOrigin } from '~/lib/config';
import { env } from '~/lib/variables';

export function addCorsHeaders(req: NextApiRequest, res: NextApiResponse) {
  const config = {
    origins: env.origins,
    originsRegex: env.origins_regex,
  };

  if (!assertOrigin(req.headers.origin, config)) {
    res.setHeader('Access-Control-Allow-Origin', config.origins[0] ?? '*');
  } else {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin ?? '*');
  }
}
