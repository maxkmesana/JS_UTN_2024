async function handleGetUsers() {
    try {
        const response = await fetch("https://api.example.com/users");
        if(response.ok){
            const users = await response.json();
            users.filter(user => user.isActive).sort((a,b) => a.username.localeCompare(b.username));
            for(const user of users){
                console.log(user);
            }
        }else{
            throw new Error(`El servidor respondio: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.log(error);
    }
}