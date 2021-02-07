
export default () => {
  return window.fetch('https://api.github.com/repos/facebook/react/issues')
    .then(response => response.json())
}
