import React from 'react'

import { DfuseConfig } from './types'
import { DfuseConfigContext } from './dfuse-config.context'

export default function DfuseProvider({ apiKey, network, children }: DfuseConfig & { children: JSX.Element }) {
  return <DfuseConfigContext.Provider value={{ apiKey, network }}>{children}</DfuseConfigContext.Provider>
}
