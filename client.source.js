class LUMASERVClient {
    constructor(baseURL = 'https://connect.nicapi.eu/api/v2'){
        this.axios = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            responseEncoding: 'utf8'
        })
        this.headers = {};
        this.setToken(undefined);
        this.setImpersonation(undefined);
    }
    setToken(token){
        this.token = token || null;
        if(this.token){
            this.headers['Authorization'] = 'Bearer '+this.token;
        }else{
            delete this.headers['Authorization'];
        }
    }
    setImpersonation(user){
        this.impersonation = user || null;
        if(this.impersonation){
            this.headers['X-Impersonate'] = this.impersonation;
        }else{
            delete this.headers['X-Impersonate'];
        }
    }
    request(method,path,queryParams,body){
        return new Promise((resolve, reject) => {
            this.axios.request({
                method,
                params: queryParams,
                url: path,
                data: body,
                headers: this.headers
            }).then(response => {
                resolve(response.data);
            }, error => {
                reject(error);
            })
        });
    }
    GENERATED_METHODS
}