const initialState = {
    isAuthenticated: false,
    user: null
}

const auth = (state =initialState,action)=>{
    switch(action.type){
        case 'DO_LOGIN':
            console.log("11 "+action.data.username +" "+action.data.password)
            if(action.data.username=='Lovish'&& action.data.password=='password'){
                return {
                    ...state,
                    isAuthenticated:true,
                    user:{
                        id :  1,
                        firstName: "Lovish",
                        lastName: "Sachdeva",
                        isAdmin: true,
                        // password: "password1"
                    }
                }
            }
            return state
            
        default:
            return state
    }

}


export default auth