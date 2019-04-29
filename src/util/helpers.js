export const sortAlphabetically = (a, b) => {
  if (a.text < b.text) { // Sort string ascending
    return -1
  } else if (a.text > b.text) {
    return 1
  }
  return 0 // No sorting
}
