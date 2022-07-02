const rea = new RegExp(/\d{1,}[\/|*]\d{1,}/)
const rea2 = new RegExp(/\d{1,}[\\+/\|-]\d{1,}/)
// /\d{1,}[+|-]\d{1,}^/    ^- указывает проге, что поиск в конце строки
// (/$\d{1,}[+|-]\d{1,}/)  $- указывает проге, что поиск в начале строки

function insert(num) {
  if (document.form.textview.value === "" && Number.isInteger(num)) {
    alert("ошибка")
  }
  document.form.textview.value = document.form.textview.value + num
}

function clean() {
  document.form.textview.value = ""
}
function back() {
  let exp = document.form.textview.value
  document.form.textview.value = exp.substring(0, exp.length - 1)
}

function checkStr(value) {
  let strModify = value.match(rea)
  if (strModify !== null) {
    let res = calculate(strModify[0])
    value = value.replace(strModify[0], `${res}`)
    checkStr(value)
  } else {
    return value
  }
}

function checkStr2(value) {
  let strModify = value.match(rea2)
  if (strModify !== null) {
    let res = calculate(strModify[0])
    value = value.replace(strModify[0], `${res}`)
    checkStr2(value)
  } else {
    return value
  }
}

function calculate(valToCalculate) {
  let exp = valToCalculate
  const exp2 = valToCalculate
  let count = 0
  for (let element of exp.split(``)) {
    if (Number.isInteger(element)) {
    } else if (!Number.isInteger(element)) {
      if (element == "*") {
        let bezZnaka = exp2.split(`*`)
        count = parseInt(bezZnaka[0]) * parseInt(bezZnaka[1])
        return count
      } else if (element == "/") {
        let bezZnaka = exp2.split(`/`)
        count = parseInt(bezZnaka[0]) / parseInt(bezZnaka[1])
        return count
      } else if (element == "*") {
        let bezZnaka = exp2.split(`*`)
        count = parseInt(bezZnaka[0]) * parseInt(bezZnaka[1])
        return count
      } else if (element == "/") {
        let bezZnaka = exp2.split(`/`)
        count = parseInt(bezZnaka[0]) / parseInt(bezZnaka[1])
        return count
      }
    }
  }
}

function equal() {
  let exp = document.form.textview.value
  let res = checkStr(exp)
  return checkStr2(res)
  // let exp = document.form.textview.value
  // const exp2 = document.form.textview.value
  // for (let element of exp.split(``)) {
  //   if (Number.isInteger(element)) {
  //   } else if (!Number.isInteger(element)) {
  //     if (element == "+") {
  //       let bezZnaka = exp2.split(`+`)
  //       document.form.textview.value =
  //         parseInt(bezZnaka[0]) + parseInt(bezZnaka[1])
  //       return document.form.textview.value
  //     } else if (element == "-") {
  //       let bezZnaka = exp2.split(`-`)
  //       document.form.textview.value =
  //         parseInt(bezZnaka[0]) - parseInt(bezZnaka[1])
  //       return document.form.textview.value
  //     } else if (element == "*") {
  //       let bezZnaka = exp2.split(`*`)
  //       document.form.textview.value =
  //         parseInt(bezZnaka[0]) * parseInt(bezZnaka[1])
  //       return document.form.textview.value
  //     } else if (element == "/") {
  //       let bezZnaka = exp2.split(`/`)
  //       document.form.textview.value =
  //         parseInt(bezZnaka[0]) / parseInt(bezZnaka[1])
  //       return document.form.textview.value
  //     }
  //   }
  // }
}

// document.form.textview.value.match(new RegExp("*", "/")) || []
