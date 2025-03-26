const SHORT_MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const LONG_MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function getShortDate(date) {
    const thisDate = new Date(date)
    return `${SHORT_MONTH_NAMES[thisDate.getMonth()]} ${thisDate.getFullYear()}`
  }

 export function getLongDateString(dateString) {
    const date = new Date(dateString)
  
    const formattedDateString = `${LONG_MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return isNaN(date) ? dateString : formattedDateString
  }