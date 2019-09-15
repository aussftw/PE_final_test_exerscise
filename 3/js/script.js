
function portionSize() {
  const englishBreakfast = ["поджареный бекон", "колбаски", "яичница", "жареные грибы", "жареные помидоры", "фасоль", "хлеб с джемом", "кофе"];
  let englishDinner = []
  if (englishBreakfast.length > 3) {
    englishDinner = englishBreakfast.slice(4)
    englishBreakfast.splice(4)
    console.log(englishDinner)
    console.log(englishBreakfast)
  }
}

portionSize() 
