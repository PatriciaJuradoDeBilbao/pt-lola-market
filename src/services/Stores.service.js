const fetchStores = (token, postalcode) => {

      const response =  fetch(`https://api.comprea.com/v7/user/postalcode?postalcode=${postalcode}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(result => {
            return result.services[1].markets
        })
        .catch(error => console.log('error', error)); 
    return response
}
export default fetchStores