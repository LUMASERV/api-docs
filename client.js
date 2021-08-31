import axios from 'axios'

export default class LUMASERVClient {
    constructor(baseURL = 'https://api.lumaserv.cloud'){
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
    getProjects(){
        return this.request('get', '/projects', null, null);
    }
    createProject(body = null){
        return this.request('post', '/projects', null, body);
    }
    deleteProject(id){
        return this.request('delete', '/projects/' + id, null, null);
    }
    getProject(id){
        return this.request('get', '/projects/' + id, null, null);
    }
    updateProject(id, body = null){
        return this.request('put', '/projects/' + id, null, body);
    }
    login(body = null){
        return this.request('post', '/auth/login', null, body);
    }
    getUsers(){
        return this.request('get', '/users', null, null);
    }
    getUser(id){
        return this.request('get', '/users/' + id, null, null);
    }
    getS3Buckets(){
        return this.request('get', '/storage/s3/buckets', null, null);
    }
    createS3Bucket(body = null){
        return this.request('post', '/storage/s3/buckets', null, body);
    }
    deleteS3Bucket(id){
        return this.request('delete', '/storage/s3/buckets/' + id, null, null);
    }
    getS3Bucket(id){
        return this.request('get', '/storage/s3/buckets/' + id, null, null);
    }
    getS3AccessKeys(){
        return this.request('get', '/storage/s3/access-keys', null, null);
    }
    createS3AccessKey(body = null){
        return this.request('post', '/storage/s3/access-keys', null, body);
    }
    deleteS3AccessKey(id){
        return this.request('delete', '/storage/s3/access-keys/' + id, null, null);
    }
    getS3AccessKey(id){
        return this.request('get', '/storage/s3/access-keys/' + id, null, null);
    }
    getPleskLicenses(){
        return this.request('get', '/licenses/plesk', null, null);
    }
    createPleskLicense(body = null){
        return this.request('post', '/licenses/plesk', null, body);
    }
    getPleskLicense(id){
        return this.request('get', '/licenses/plesk/' + id, null, null);
    }
    updatePleskLicense(id, body = null){
        return this.request('put', '/licenses/plesk/' + id, null, body);
    }
    getPleskLicenseTypes(){
        return this.request('get', '/licenses/plesk-types', null, null);
    }
    getPleskLicenseType(id){
        return this.request('get', '/licenses/plesk-types/' + id, null, null);
    }
    getS3AccessKeyGrants(access_key_id){
        return this.request('get', '/storage/s3/access-keys/' + access_key_id + '/grants', null, null);
    }
    createS3AccessKeyGrant(access_key_id, body = null){
        return this.request('post', '/storage/s3/access-keys/' + access_key_id + '/grants', null, body);
    }
    deleteS3AccessKeyGrant(access_key_id, id){
        return this.request('delete', '/storage/s3/access-keys/' + access_key_id + '/grants/' + id, null, null);
    }
    getDomainHandles(){
        return this.request('get', '/domain-handles', null, null);
    }
    createDomainHandle(body = null){
        return this.request('post', '/domain-handles', null, body);
    }
    deleteDomainHandle(code){
        return this.request('delete', '/domain-handles/' + code, null, null);
    }
    getDomainHandle(code){
        return this.request('get', '/domain-handles/' + code, null, null);
    }
    updateDomainHandle(code, body = null){
        return this.request('put', '/domain-handles/' + code, null, body);
    }
    getDomains(){
        return this.request('get', '/domains', null, null);
    }
    createDomain(body = null){
        return this.request('post', '/domains', null, body);
    }
    deleteDomain(name){
        return this.request('delete', '/domains/' + name, null, null);
    }
    getDomain(name){
        return this.request('get', '/domains/' + name, null, null);
    }
    updateDomain(name, body = null){
        return this.request('put', '/domains/' + name, null, body);
    }
    removeDomainAuthinfo(name){
        return this.request('delete', '/domains/' + name + '/authinfo', null, null);
    }
    getDomainAuthinfo(name){
        return this.request('get', '/domains/' + name + '/authinfo', null, null);
    }
    restoreDomain(name){
        return this.request('post', '/domains/' + name + '/restore', null, null);
    }
    scheduleDomainDelete(name, body = null){
        return this.request('post', '/domains/' + name + '/schedule-delete', null, body);
    }
    unscheduleDomainDelete(name){
        return this.request('post', '/domains/' + name + '/unschedule-delete', null, null);
    }
    deleteSSLContact(id){
        return this.request('delete', '/ssl/contacts/' + id, null, null);
    }
    getSSLContact(id){
        return this.request('get', '/ssl/contacts/' + id, null, null);
    }
    getSSLContacts(){
        return this.request('get', '/ssl/contacts', null, null);
    }
    createSSLContact(body = null){
        return this.request('post', '/ssl/contacts', null, body);
    }
    getSSLOrganisations(){
        return this.request('get', '/ssl/organisations', null, null);
    }
    createSSLOrganisation(body = null){
        return this.request('post', '/ssl/organisations', null, body);
    }
    deleteSSLOrganisation(id){
        return this.request('delete', '/ssl/organisations/' + id, null, null);
    }
    getSSLOrganisation(id){
        return this.request('get', '/ssl/organisations/' + id, null, null);
    }
    getSSLTypes(){
        return this.request('get', '/ssl/types', null, null);
    }
    getSSLType(id){
        return this.request('get', '/ssl/types/' + id, null, null);
    }
    getSSLCertificates(){
        return this.request('get', '/ssl/certificates', null, null);
    }
    createSSLCertificate(body = null){
        return this.request('post', '/ssl/certificates', null, body);
    }
    getSSLCertificate(id){
        return this.request('get', '/ssl/certificates/' + id, null, null);
    }
    getSSHKeys(){
        return this.request('get', '/ssh-keys', null, null);
    }
    createSSHKey(body = null){
        return this.request('post', '/ssh-keys', null, body);
    }
    deleteSSHKey(id){
        return this.request('delete', '/ssh-keys/' + id, null, null);
    }
    getSSHKey(id){
        return this.request('get', '/ssh-keys/' + id, null, null);
    }
    getServers(){
        return this.request('get', '/servers', null, null);
    }
    createServer(body = null){
        return this.request('post', '/servers', null, body);
    }
    getServer(id){
        return this.request('get', '/servers/' + id, null, null);
    }
    getServerVolumes(){
        return this.request('get', '/server-volumes', null, null);
    }
    getServerVolume(id){
        return this.request('get', '/server-volumes/' + id, null, null);
    }
    getServerTemplates(){
        return this.request('get', '/server-templates', null, null);
    }
    getServerTemplate(id){
        return this.request('get', '/server-templates/' + id, null, null);
    }
    getServerISOs(){
        return this.request('get', '/server-isos', null, null);
    }
    getServerISO(id){
        return this.request('get', '/server-isos/' + id, null, null);
    }
}
