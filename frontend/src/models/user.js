async function register(options) {
    const response = await fetch('http://localhost:3000/auths/register', options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const authenticatedUser = await response.json();
    return authenticatedUser;
}

export default register;