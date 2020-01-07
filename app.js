// 內容好的時候就執行init
document.addEventListener("DOMContentLoaded", () => {
  // 設定世界時間
  setWordClock() 
  // 每一分鐘跑一次
  setInterval(setWordClock, 60000);
})
// Set getCustomDate function in Date
Date.prototype.getCustomDate = function (timeZone) {
  let config = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timeZone
  }
  let today = this.toLocaleString('en-us', config)
  let date = today.split(' ')[1].slice(0, 2)
  let month = today.split(' ')[0].toUpperCase()
  let year = today.split(' ')[2].slice(0, -1)
  return {
    date: `${date} ${month}. ${year}`,
    time: today.split(' ')[3]
  }
}
// 設定世界時間
function setWordClock() {
  let timeZone = [
    {
      city: 'NEW YORK',
      timeZone: 'America/New_York'
    },
    {
      city: 'LONDON',
      timeZone: 'Europe/London'
    },
    {
      city: 'BANGKOK',
      timeZone: 'Asia/Bangkok'
    },
    {
      city: 'TAIPEI',
      timeZone: 'Asia/Taipei'
    },
    {
      city: 'SYDNEY',
      timeZone: 'Australia/Sydney'
  }]
  let html = ''
  timeZone.forEach((item, index) => {
    let date = new Date()
    let bgClass = index === 0 || timeZone.length - 1 === index ? 'bg-dark white' : 'bg-white'
    html = html +  `
      <li class="wrapper__content__item ${bgClass}">
        <p>${item.city}</p>
        <p>${date.getCustomDate(item.timeZone).date}</p>
        <p>${date.getCustomDate(item.timeZone).time}</p>
      </li>`
  })
  document.querySelector('.wrapper__content').innerHTML = html
}
