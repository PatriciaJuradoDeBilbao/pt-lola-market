const fetchToken = () => fetch('https://api.comprea.com/v7/user/session')
.then(response => response.json())

export default fetchToken

