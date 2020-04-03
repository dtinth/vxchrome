interface VXOutput {
  (state: {
    status: string
    finalTranscript: string
    interimTranscript: string
    showing: string
  }): void
}
