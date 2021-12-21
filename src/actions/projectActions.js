import axios from "axios";
import { GET_ERRORS } from "./types";
import history from "../history";





export const createProject = (project) => async  dispatch => {
        await axios.post("http://localhost:8081/api/v1/projects", project)
        .then(res => {
            console.log(res);
            history.push("/dashboard");
            console.log("after push");
        })
        .catch(error => {
            console.log(error);
        })
}
//     } catch (error) {
//         console.log(error);
//         dispatch({
//             type:GET_ERRORS,
//             payload:error.res
//         })
//     }
// }