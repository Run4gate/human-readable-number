module.exports = function toReadable (number) {
    let str = number.toString()
    let result = ""
    let remained = number % 100
    let simple = {
      1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: '',
    }
    let teens = {
      0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen', 6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen',
    }
    let tens = {
      2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
    }
    if (number < 10) {
      if (number > 0) {
        result = simple[number]
      } else {
        result = 'zero'
      }
    } else if (number < 100) {
      if (number < 20) {
        result = teens[str[1]]
      } else {
        result = `${tens[str[0]]} ${simple[str[1]]}`
      }
    } else if (number >= 100) {
      if (remained < 10) {
        result = `${simple[str[0]]} hundred ${simple[str[2]]}`
      } else if (remained < 20) {
        result = `${simple[str[0]]} hundred ${teens[str[2]]}`
      } else {
        result = `${simple[str[0]]} hundred ${tens[str[1]]} ${simple[str[2]]}`
      }
    }
    return result.trim()
  }
  
