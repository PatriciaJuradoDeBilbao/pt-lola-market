const fetchCategories = (token, companyId) => 
    fetch(`https://api.comprea.com/v7/company/categories?company_id=${companyId}`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(error => console.log('error', error))     

export default fetchCategories
