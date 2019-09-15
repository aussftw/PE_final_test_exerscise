let dogsFavor = [{
  name: "Мария",
  lastName: "Салтыкова",
  age: 25
  }, {
  name: "Осана",
  lastName: "Меньшинова",
  age: 20
  }, {
  name: "Андрей",
  lastName: "Первозваный",
  age: 100
  }, {
  name: "Василий",
  lastName: "Гофман",
  age: 40
  }, {
  name: "Поручик",
  lastName: "Ржевский",
  age: "вечно молодой"
  }];

let catsFavor = [{
    name: "Мария",
    lastName: "Розгозина",
    age: 22
  }, {
    name: "Осана",
    lastName: "Меньшинова",
    age: 20
  }, {
    name: "Андрей",
    lastName: "Первозваный",
    age: 100
  }, {
    name: "Алексей",
    lastName: "Гофман",
    age: 40
  }, {
    name: "Капитан",
    lastName: "Очевидность",
    age: "вечно молодой"
  }];

const filteredArr = (arrFirst, arrSecond) => {
  arr = arrFirst.filter(item => {
      validatorStatus = true
        arrSecond.forEach(id => {
          if(item.name === id.name && item.lastName === id.lastName) validatorStatus = false
      })
      return validatorStatus
  })
  return arr
  }
  console.log(filteredArr(dogsFavor, catsFavor))