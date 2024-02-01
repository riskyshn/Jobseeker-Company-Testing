export default function formatDate(date: Date, lang: 'en' | 'id' = 'en') {
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const monthsId = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  const daysId = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

  const monthsArray = lang === 'id' ? monthsId : monthsEn
  const daysArray = lang === 'id' ? daysId : daysEn

  const day = daysArray[date.getDay()]
  const month = monthsArray[date.getMonth()]
  const dayOfMonth = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()

  return lang == 'en' ? `${day} ${month} ${dayOfMonth} ${year}` : `${day}, ${dayOfMonth} ${month} ${year}`
}
