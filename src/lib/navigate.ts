export const navigateLinkHandlerFactory = (url: string) => (e: Event) => {
  console.debug('Open window')
  window.open(url)
}