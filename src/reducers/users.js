
const initialState = [
    {
        id :  1,
        firstName: "Lovish",
        lastName: "Sachdeva",
        isAdmin: true,
        password: "password1"
    },
    {
        id :  2,
        firstName: "Mukesh",
        lastName: "Sharma",
        isAdmin: false,
        password: "password2"
    }
]

const users = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_USER':
            return [
                ...state,
                {
                    id :  action.id,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    isAdmin: action.isAdmin,
                    password: action.password
                }
            ]
        case 'REMOVE_USER':
            return state.filter(user=>
                user.id != action.id
            )
        case 'UPDATE_USER':
            return state.map(user=>
                (user.id==action.id)
                ?
                {
                    id :  action.id,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    isAdmin: action.isAdmin,
                    password: action.password
                }  : user
            )
        default :
            return state
    }
}

export default users