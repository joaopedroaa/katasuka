
const synopsisResume = (text, max) => {
  if (text.length > max) {
    return text.substring(0, max) + "..."
  }
  return text

}
export default synopsisResume
