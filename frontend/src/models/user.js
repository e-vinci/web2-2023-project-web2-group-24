async function login(options){
    
    const response = await fetch('http://localhost:3000/auths/login', options )
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`)
    const authenticatedUser = await response.json()
    return authenticatedUser
}


export default login;