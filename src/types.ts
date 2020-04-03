interface VXOutput {
  (
    state: {
      status: string
      finalTranscript: string
      interimTranscript: string
      showing: string
    },
    settings: typeof import('./VXDefaultSettings').defaultSettings,
  ): void
}
