/*
const userDummy = {
  id: 1,
  username: 'username',
  password: 'password',
  email: 'user@mail.com',
  isActive: true
};

*/

class User{
    #id;
    #password
    constructor(id, username, password, email, isActive){
        this.#id = id;
        this.username = username;
        this.#password = password;
        this.email = email;
        this.isActive = isActive;
    }

    get getId(){
        return this.#id;
    }

    get getUsername(){
        return this.username;
    }

    set setUsername(newUsername){
        this.username = newUsername;
    }

    get getPassword(){
        return this.#password;
    }

    get getemail(){
        return this.email;
    }

    set setEmail(newEmail){
        this.email = newEmail;
    }

    get getIsActive(){
        return this.isActive;
    }

    changeIsActive(){
        this.isActive = this.isActive === true ? false : false;
    }
}