export function track(event: string, data?: Record<string, any>) {
  if (process.env.NODE_ENV === 'development') {
    console.log('track', event, data);
  }
}
