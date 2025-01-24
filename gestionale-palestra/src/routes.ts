export const calendarRoute = '/calendar'
export const loginRoute = '/login'
export const dasbhoardRoute = '/dashboard'

export const getRouteWithLocale = (locale: string, route: string) => {
    const url = new URL(route, 'http://not-used')
  
    const relativeUrl = url.pathname + url.search + url.hash
  
    if (locale === 'en') return relativeUrl
  
    return `/${locale}${relativeUrl}`
  }