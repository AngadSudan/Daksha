const UserSessionId= new Map();

function setUser(user,id){
    UserSessionId.set(user,id);
}

function getUser(id){
    UserSessionId.get(id);
}

module.exports={
    setUser,
    getUser
}