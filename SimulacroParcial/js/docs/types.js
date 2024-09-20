/**
 * @typedef {Object} User
 * @prop {number} id its own unique identifier
 * @prop {string} name full name
 * @prop {string} username a unique name in the system
 * @property {{
* street: string,
* suite: string,
* city: string,
* zipcode: string,
* geo: {
* lat: string,
* lng: string}}} address
* @prop {string} phone
* @prop {string} website
* @prop {{
* name: string,
* catchPhrase: string,
* bs: string}} company
*/
export class User{
    id;
    constructor(name, username, address, phone, website, company){
        this.name = name;
        this.username = username;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }

    toString(){
        console.log(`Username: ${this.username} - Name: ${this.name}`);
    }

    get getName(){
        return this.name;
    }

    get getUsername(){
        return this.username;
    }

    get getAddress(){
        return this.address;
    }

    get getPhone(){
        return this.phone
    }

    get getWebsite(){
        return this.website;
    }

    get getCompany(){
        return this.company;
    }
}



/**
* @typedef {Object} ToDo
* @prop {number} userId references a User
* @prop {number} id its own unique identifier
* @prop {string} title
* @prop {boolean} completed
*/
export class ToDo{
    id;
    constructor(userId, title, completed){
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }

    get getUserId(){
        return this.userId;
    }

    get getTitle(){
        return this.title;
    }

    get getIsCompleted(){
        return this.completed;
    }
}

/**
* @typedef {Object} Post
* @prop {number} userId references a User
* @prop {number} id its own unique identifier
* @prop {string} title 
* @prop {string} body
*/
export class Post{
    id;
    constructor(userId, title, body){
        this.userId = userId;
        this.title = title;
        this.body = body;
    }

    get getUserId(){
        return this.userId;
    }

    get getTitle(){
        return this.title;
    }

    get getBody(){
        return this.body;
    }
}

/**
* @typedef {Object} Comment
* @prop {number} postId references a Post
* @prop {number} id its own unique identifier
* @prop {string} name
* @prop {string} email
* @prop {string} body
*/
export class Comment{
    id;
    constructor(postId, name, email, body){
        this.postId = postId;
        this.name = name;
        this.email = email;
        this.body = body;
    }

    get getPostId(){
        return this.postId;
    }

    get getName(){
        return this.name;
    }

    get getEmail(){
        return this.email;
    }

    get getBody(){
        return this.body;
    }
}

/**
* @typedef {Object} Album
* @prop {number} userId references a User
* @prop {number} id its own unique identifier
* @prop {string} title
*/
export class Album{
    id;
    constructor(userId, title){
        this.userId = userId;
        this.title = title;
    }

    get getUserId(){
        return this.userId;
    }

    get getTitle(){
        return this.title;
    }
}

/**
* @typedef {Object} Photo
* @prop {number} albumId references an Album
* @prop {number} id its own unique identifier
* @prop {string} title
* @prop {string} url
* @prop {string} thumbnailUrl
*/
