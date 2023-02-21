function createUser(name,id,noOfProjects = 0){
    let user = {};
    user.name = name;
    user.id = id ;
    user.projects = noOfProjects;
    user.getProjects = function(projects){
        return this.projects = projects;
    }
    user.changeName = function (newName) {
       this.name = newName;
       return this.name;
    }
    user.incrementProject = function ( value = 1) {
        this.projects = this.projects + value;
        return this.projects;
    }
    user.decrementProject = function ( value = 1 ) {
        this.projects = this.projects - value;
        return this.projects;
    }
    return user;
}

let user1 = createUser("Arya","Alt130",25);

let user2 = createUser("Sansa","Alt129",22);

console.group(user1.name);
console.log(user1.name);
console.log(user1.id);
console.log(user1.projects);
console.log(user1.incrementProject(5));
console.log(user1.decrementProject(2));
console.log(user1.changeName("Jon"));
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(user2.id);
console.log(user2.projects);
console.log(user2.incrementProject(10));
console.log(user2.decrementProject(12));
console.log(user2.changeName("Ben"));
console.groupEnd();


// object.create method

let userMethods = {
    getProjects:function(projects){
        return this.projects = projects;
    },
    changeName:function(newName) {
       this.name = newName;
       return this.name;
    },
    incrementProject:function( value = 1) {
        this.projects = this.projects + value;
        return this.projects;
    },
    decrementProject:function( value = 1 ) {
        this.projects = this.projects - value;
        return this.projects;
    },
};

function createUsers(name,id,noOfProjects = 0){
    let user = Object.create(userMethods)
    user.name = name;
    user.id = id ;
    user.projects = noOfProjects;

    return user;
};

let user3 = createUsers("Tyrion","Alt150",45);

console.group(user3.name);
console.log(user3.name);
console.log(user3.id);
console.log(user3.projects);
console.log(user3.incrementProject(5));
console.log(user3.decrementProject(2));
console.log(user3.changeName("Lannister"));
console.groupEnd();

function CreateUsersFunc (name,id,noOfProjects = 0){
   this.name = name;
   this.id = id ;
   this.projects = noOfProjects;
};

 CreateUsersFunc.prototype = {
    getProjects(projects){
        return this.projects = projects;
    },
    changeName(newName) {
       this.name = newName;
       return this.name;
    },
    incrementProject( value = 1) {
        this.projects = this.projects + value;
        return this.projects;
    },
    decrementProject( value = 1 ) {
        this.projects = this.projects - value;
        return this.projects;
    }
};

let user4 = new CreateUsersFunc("Arya","Alt130",25);

console.group(user4.name);
console.log(user4.name);
console.log(user4.id);
console.log(user4.projects);
console.log(user4.incrementProject(5));
console.log(user4.decrementProject(2));
console.log(user4.changeName("Lannister"));
console.groupEnd();

// using class

class Users {
    constructor(name,id,noOfProjects = 0) {
        this.name = name;
        this.id = id ;
        this.projects = noOfProjects;
    }
    getProjects(projects){
        return this.projects = projects;
    }
    changeName(newName) {
       this.name = newName;
       return this.name;
    }
    incrementProject( value = 1) {
        this.projects = this.projects + value;
        return this.projects;
    }
    decrementProject( value = 1 ) {
        this.projects = this.projects - value;
        return this.projects;
    }

}

let user5 = new Users("Robb","Alt013",25);

console.group(user5.name);
console.log(user5.name);
console.log(user5.id);
console.log(user5.projects);
console.log(user5.incrementProject(5));
console.log(user5.decrementProject(2));
console.log(user5.changeName("Lannister"));
console.groupEnd();
