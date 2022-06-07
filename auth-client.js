import axios from 'axios'

export default class LUMASERVAuthClient {
    constructor(baseURL = 'https://api.lumaserv.cloud') {
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
    }
    setToken(token) {
        this.token = token || null;
        if(this.token) {
            this.headers['Authorization'] = 'Bearer '+this.token;
        } else {
            delete this.headers['Authorization'];
        }
    }
    request(method,path,queryParams,body) {
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
                reject({ ...error.response.data, status: error.response.status });
            })
        });
    }
    getProjects(query = null) {
        return this.request('get', '/projects', query, null);
    }
    createProject(body = null) {
        return this.request('post', '/projects', null, body);
    }
    deleteProject(id) {
        return this.request('delete', '/projects/' + id, null, null);
    }
    getProject(id, query = null) {
        return this.request('get', '/projects/' + id, query, null);
    }
    updateProject(id, body = null) {
        return this.request('put', '/projects/' + id, null, body);
    }
    login(body = null) {
        return this.request('post', '/login', null, body);
    }
    getUsers(query = null) {
        return this.request('get', '/users', query, null);
    }
    createUser(body = null) {
        return this.request('post', '/users', null, body);
    }
    getUser(id) {
        return this.request('get', '/users/' + id, null, null);
    }
    updateUser(id, body = null) {
        return this.request('put', '/users/' + id, null, body);
    }
    getProjectMembers(id, query = null) {
        return this.request('get', '/projects/' + id + '/members', query, null);
    }
    addProjectMember(id, body = null) {
        return this.request('post', '/projects/' + id + '/members', null, body);
    }
    removeProjectMember(id, user_id) {
        return this.request('delete', '/projects/' + id + '/members/' + user_id, null, null);
    }
    validateSelf() {
        return this.request('get', '/validate/self', null, null);
    }
    requestPasswordReset(body = null) {
        return this.request('post', '/password-reset', null, body);
    }
    executePasswordReset(body = null) {
        return this.request('put', '/password-reset', null, body);
    }
    validateToken(token) {
        return this.request('get', '/validate/' + token, null, null);
    }
    getUserProjectMemberships(id, query = null) {
        return this.request('get', '/users/' + id + '/project_memberships', query, null);
    }
    getTokens(query = null) {
        return this.request('get', '/tokens', query, null);
    }
    createToken(body = null) {
        return this.request('post', '/tokens', null, body);
    }
    deleteToken(id) {
        return this.request('delete', '/tokens/' + id, null, null);
    }
    getToken(id) {
        return this.request('get', '/tokens/' + id, null, null);
    }
    getCountries(query = null) {
        return this.request('get', '/countries', query, null);
    }
    getCountry(code) {
        return this.request('get', '/countries/' + code, null, null);
    }
    searchTransactionLog(body = null) {
        return this.request('post', '/transaction-log', null, body);
    }
    searchAuditLog(query = null) {
        return this.request('get', '/audit-log', query, null);
    }
    insertAuditLogEntry(body = null) {
        return this.request('post', '/audit-log', null, body);
    }
}
