import axios from "axios";

const baseURL="https://6623a7483e17a3ac846fc7bb.mockapi.io/project/users";

const loginService=(data)=>

    axios.get(baseURL).then(res=>{
        const filterUsers= res.data.filter(item=>
            item.email === data.userName && item.password === data.password
        );
        const user= filterUsers && filterUsers.length > 0 && filterUsers[0];
        return {...res,data:user}
        
    })

export default loginService;