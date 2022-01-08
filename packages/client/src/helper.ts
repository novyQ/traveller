export const capitalizeInput = (value: string) => {
  const words = value.split(' ')
  return words
    .map(word => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
}
