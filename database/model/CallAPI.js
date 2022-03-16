const apiURL = "http://192.168.181.133:2000/v1";

export default class CallAPI {
    constructor(){}
    getRequest = (url, data) => {
        let uri = apiURL + url;
        fetch(uri, {
            method: 'GET',
            params: {
                data
            }
        })
        .then(response => {
            const res = response.data;
            return res;
        })
        .catch(err => {
            console.log(err);
            return 0;
        })
        /* console.log("Abans get");
        axios.get('http://192.168.181.133:2000/v1/user', {
        params: {
            _id: "622e3db2e949df09ae796cf2"
        }
        })
        .then(returnStatement => {
            console.log("Dins el then. Return: ", returnStatement);
            return returnStatement.data;
        })
        .catch(error => {
            console.log("Dins el error. Error: ", error);
            return error;
        }); */
    }

    postRequest = (url, params) => {

    }

}