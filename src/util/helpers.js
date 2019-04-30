export const sortAlphabetically = (a, b) => {
  if (a.text.trim() < b.text.trim()) { // Sort string ascending
    return -1
  } else if (a.text.trim() > b.text.trim()) {
    return 1
  }
  return 0 // No sorting
}

// Returns the data grouped by categories based on starting character
export const categoriseText = (data) => {
  data = data.sort(sortAlphabetically)
  let result = {
    '0-9': [],
    'a': [],
    'b': [],
    'c': [],
    'd': [],
    'e': [],
    'f': [],
    'g': [],
    'h': [],
    'i': [],
    'j': [],
    'k': [],
    'l': [],
    'm': [],
    'n': [],
    'o': [],
    'p': [],
    'q': [],
    'r': [],
    's': [],
    't': [],
    'u': [],
    'v': [],
    'w': [],
    'x': [],
    'y': [],
    'z': []
  }
  data.map((item, i) => {
    let firstChar = item.text.trim()[0] // Get first character
    // If number then add to 0-9 key
    if (!isNaN(firstChar)) {
      result['0-9'].push(item)
    } else { // Else convert to lowercase and add to corresponding character key
      result[firstChar.toLowerCase()].push(item)
    }
  })
  return result
}
