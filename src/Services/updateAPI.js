 
import axios from 'axios';

const url="https://6623a7483e17a3ac846fc7bb.mockapi.io/project/users";

const updateUsersService=()=>{
    return axios.get(url)
}
export default updateUsersService;