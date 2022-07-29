function authHeader(){
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if(user && user.token){
        console.log(user.token);
        return {"Authorization": "Bearer "+user.token};
    }
    else{
        return {};
    }
}
export default authHeader;