import axios from 'axios'

export default class LUMASERVAddonClient {
    constructor(baseURL = 'https://api.lumaserv.com') {
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
    getSSLCertificates(query = null) {
        return this.request('get', '/ssl/certificates', query, null);
    }
    createSSLCertificate(body = null) {
        return this.request('post', '/ssl/certificates', null, body);
    }
    getSSLCertificate(id) {
        return this.request('get', '/ssl/certificates/' + id, null, null);
    }
    getSSLContacts(query = null) {
        return this.request('get', '/ssl/contacts', query, null);
    }
    createSSLContact(body = null) {
        return this.request('post', '/ssl/contacts', null, body);
    }
    deleteSSLContact(id) {
        return this.request('delete', '/ssl/contacts/' + id, null, null);
    }
    getSSLContact(id) {
        return this.request('get', '/ssl/contacts/' + id, null, null);
    }
    getSSLTypes(query = null) {
        return this.request('get', '/ssl/types', query, null);
    }
    getSSLType(id) {
        return this.request('get', '/ssl/types/' + id, null, null);
    }
    getSSLOrganisations(query = null) {
        return this.request('get', '/ssl/organisations', query, null);
    }
    createSSLOrganisation(body = null) {
        return this.request('post', '/ssl/organisations', null, body);
    }
    deleteSSLOrganisation(id) {
        return this.request('delete', '/ssl/organisations/' + id, null, null);
    }
    getSSLOrganisation(id) {
        return this.request('get', '/ssl/organisations/' + id, null, null);
    }
    search(query = null) {
        return this.request('get', '/search', query, null);
    }
    getPleskLicenseTypes(query = null) {
        return this.request('get', '/license/plesk-types', query, null);
    }
    getPleskLicenseType(id) {
        return this.request('get', '/license/plesk-types/' + id, null, null);
    }
    getPleskLicenses(query = null) {
        return this.request('get', '/licenses/plesk', query, null);
    }
    createPleskLicense(body = null) {
        return this.request('post', '/licenses/plesk', null, body);
    }
    getPleskLicense(id) {
        return this.request('get', '/licenses/plesk/' + id, null, null);
    }
    updatePleskLicense(id, body = null) {
        return this.request('put', '/licenses/plesk/' + id, null, body);
    }
}
