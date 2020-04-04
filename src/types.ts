interface VXOutput {
  (
    state: {
      status: 'idle' | 'listening' | 'starting' | 'error' | 'ended'
      finalTranscript: string
      interimTranscript: string
      showing: string
    },
    settings: typeof import('./VXDefaultSettings').defaultSettings,
    actions: {
      stop(): void
    },
  ): void
}
