let books = [ {author: "Скотт Бэккер", book: "Князь пустоты"}, {author: "Донцова", book: "Старуха Кристи – отдыхает!"}, {author: "Скотт Бэккер", book: "Тьма, что приходит прежде"}, {author: "Скотт Бэккер", book: "Воин-пророк"}, {author: "Скотт Бэккер", book: "Тысячекратная мысль"}, {author: "Донцова", book: "Диета для трех поросят"}, {author: "Скотт Бэккер", book: "Аспект-император"}, {author: "Скотт Бэккер", book: "Око Судии"}, {author: "Скотт Бэккер", book: "Воин Доброй удачи"}, {author: "Донцова", book: "Идеальное тело Пятачка"}, {author: "Скотт Бэккер", book: "Великая Ордалия"}, {author: "Скотт Бэккер", book: "Нечестивый Консульт"}, {author: "Скотт Бэккер", book: "Не-Бог"}, {author: "Скотт Бэккер", book: "Истории о Злодеяниях"}, {author: "Донцова", book: "Идеальное тело Пятачка"}, {author: "Скотт Бэккер", book: "Ложное солнце"}, {author: "Донцова", book: "Дед Снегур и Морозочка"}, {author: "Скотт Бэккер", book: "Четыре Откровения Киниал’джина"}, {author: "Донцова", book: "Инь, янь и всякая дрянь"}, {author: "Скотт Бэккер", book: "Нож, что всем по руке"} ];

let goodBooks = []
let badBooks = []

function filter(arr) {
  arr.forEach((element) => {
   if (element.author.toUpperCase() ==="Донуцова".toUpperCase()) {
    badBooks.push(element)
   } else {
    goodBooks.push(element)
   }}
  )}

  filter(books)
        
console.log(goodBooks)
console.log(badBooks)

