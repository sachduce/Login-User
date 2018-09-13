let nextuserId =3

export const addUser = (firstName,lastName,isAdmin,password) =>({
    type: 'ADD_USER',
    id: nextuserId++ ,
    firstName,
    lastName,
    isAdmin,
    password
})
export const removeUser =(id)=>({
    type: 'REMOVE_USER',
    id
})
export const updateUser =(id,firstName,lastName,isAdmin,password)=>({
    type: 'UPDATE_USER',
    id,
    firstName,
    lastName,
    isAdmin,
    password
})
export const logoutUser =()=>({
    type: 'LOGOUT_USER'
})

export const validateAuth =()=>({
    type: 'VALIDATE_AUTH'
})

export const saveUser = () =>({
    type :'SAVE_USER'
})  

export const doLogin =(data)=>({
    type :'DO_LOGIN',
    data
})