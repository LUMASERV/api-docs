import axios from 'axios'

export default class LUMASERVDomainClient {
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
    getDomainHandles(query = null) {
        return this.request('get', '/domain-handles', query, null);
    }
    createDomainHandle(body = null) {
        return this.request('post', '/domain-handles', null, body);
    }
    deleteDomainHandle(code) {
        return this.request('delete', '/domain-handles/' + code, null, null);
    }
    getDomainHandle(code) {
        return this.request('get', '/domain-handles/' + code, null, null);
    }
    updateDomainHandle(code, body = null) {
        return this.request('put', '/domain-handles/' + code, null, body);
    }
    getDomains(query = null) {
        return this.request('get', '/domains', query, null);
    }
    createDomain(body = null) {
        return this.request('post', '/domains', null, body);
    }
    deleteDomain(name) {
        return this.request('delete', '/domains/' + name, null, null);
    }
    getDomain(name) {
        return this.request('get', '/domains/' + name, null, null);
    }
    updateDomain(name, body = null) {
        return this.request('put', '/domains/' + name, null, body);
    }
    removeDomainAuthinfo(name) {
        return this.request('delete', '/domains/' + name + '/authinfo', null, null);
    }
    getDomainAuthinfo(name) {
        return this.request('get', '/domains/' + name + '/authinfo', null, null);
    }
    restoreDomain(name) {
        return this.request('post', '/domains/' + name + '/restore', null, null);
    }
    scheduleDomainDelete(name, body = null) {
        return this.request('post', '/domains/' + name + '/schedule-delete', null, body);
    }
    unscheduleDomainDelete(name) {
        return this.request('post', '/domains/' + name + '/unschedule-delete', null, null);
    }
    getDomainPricingList(query = null) {
        return this.request('get', '/pricing/domains', query, null);
    }
    search(query = null) {
        return this.request('get', '/search', query, null);
    }
    checkDomain(name) {
        return this.request('get', '/domains/' + name + '/check', null, null);
    }
    getDNSZones(query = null) {
        return this.request('get', '/dns/zones', query, null);
    }
    getDNSZone(name) {
        return this.request('get', '/dns/zones/' + name, null, null);
    }
    updateDNSZone(name, body = null) {
        return this.request('put', '/dns/zones/' + name, null, body);
    }
    getDNSZoneRecords(name, query = null) {
        return this.request('get', '/dns/zones/' + name + '/records', query, null);
    }
    createDNSZoneRecord(name, body = null) {
        return this.request('post', '/dns/zones/' + name + '/records', null, body);
    }
    updateDNSZoneRecords(name, body = null) {
        return this.request('put', '/dns/zones/' + name + '/records', null, body);
    }
    deleteDNSRecord(name, id) {
        return this.request('delete', '/dns/zones/' + name + '/records/' + id, null, null);
    }
    updateDNSRecord(name, id, body = null) {
        return this.request('put', '/dns/zones/' + name + '/records/' + id, null, body);
    }
    checkDomainVerification(name) {
        return this.request('get', '/domains/' + name + '/verification', null, null);
    }
    sendDomainVerification(name) {
        return this.request('post', '/domains/' + name + '/verification', null, null);
    }
    getLabels(query = null) {
        return this.request('get', '/labels', query, null);
    }
}
