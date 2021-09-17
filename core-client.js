import axios from 'axios'

export default class LUMASERVCoreClient {
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
        if(this.token){
            this.headers['Authorization'] = 'Bearer '+this.token;
        }else{
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
    getS3Buckets(query = null){
        return this.request('get', '/storage/s3/buckets', query, null);
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
    getS3AccessKeys(query = null){
        return this.request('get', '/storage/s3/access-keys', query, null);
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
    getPleskLicenses(query = null){
        return this.request('get', '/licenses/plesk', query, null);
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
    getPleskLicenseTypes(query = null){
        return this.request('get', '/licenses/plesk-types', query, null);
    }
    getPleskLicenseType(id){
        return this.request('get', '/licenses/plesk-types/' + id, null, null);
    }
    getS3AccessKeyGrants(access_key_id, query = null){
        return this.request('get', '/storage/s3/access-keys/' + access_key_id + '/grants', query, null);
    }
    createS3AccessKeyGrant(access_key_id, body = null){
        return this.request('post', '/storage/s3/access-keys/' + access_key_id + '/grants', null, body);
    }
    deleteS3AccessKeyGrant(access_key_id, id){
        return this.request('delete', '/storage/s3/access-keys/' + access_key_id + '/grants/' + id, null, null);
    }
    getDomainHandles(query = null){
        return this.request('get', '/domain-handles', query, null);
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
    getDomains(query = null){
        return this.request('get', '/domains', query, null);
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
    getSSLContacts(query = null){
        return this.request('get', '/ssl/contacts', query, null);
    }
    createSSLContact(body = null){
        return this.request('post', '/ssl/contacts', null, body);
    }
    deleteSSLContact(id){
        return this.request('delete', '/ssl/contacts/' + id, null, null);
    }
    getSSLContact(id){
        return this.request('get', '/ssl/contacts/' + id, null, null);
    }
    getSSLOrganisations(query = null){
        return this.request('get', '/ssl/organisations', query, null);
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
    getSSLTypes(query = null){
        return this.request('get', '/ssl/types', query, null);
    }
    getSSLType(id){
        return this.request('get', '/ssl/types/' + id, null, null);
    }
    getSSLCertificates(query = null){
        return this.request('get', '/ssl/certificates', query, null);
    }
    createSSLCertificate(body = null){
        return this.request('post', '/ssl/certificates', null, body);
    }
    getSSLCertificate(id){
        return this.request('get', '/ssl/certificates/' + id, null, null);
    }
    getSSHKeys(query = null){
        return this.request('get', '/ssh-keys', query, null);
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
    getServers(query = null){
        return this.request('get', '/servers', query, null);
    }
    createServer(body = null){
        return this.request('post', '/servers', null, body);
    }
    getServer(id){
        return this.request('get', '/servers/' + id, null, null);
    }
    getServerVolumes(query = null){
        return this.request('get', '/server-volumes', query, null);
    }
    getServerVolume(id){
        return this.request('get', '/server-volumes/' + id, null, null);
    }
    getServerTemplates(query = null){
        return this.request('get', '/server-templates', query, null);
    }
    getServerTemplate(id){
        return this.request('get', '/server-templates/' + id, null, null);
    }
    getServerISOs(query = null){
        return this.request('get', '/server-isos', query, null);
    }
    getServerISO(id){
        return this.request('get', '/server-isos/' + id, null, null);
    }
    getDomainPricingList(){
        return this.request('get', '/pricing/domains', null, null);
    }
    search(query = null){
        return this.request('get', '/search', query, null);
    }
    checkDomain(name){
        return this.request('get', '/domains/' + name + '/check', null, null);
    }
    getDNSZones(){
        return this.request('get', '/dns/zones', null, null);
    }
    getDNSZone(name){
        return this.request('get', '/dns/zones/' + name, null, null);
    }
    updateDNSZone(name, body = null){
        return this.request('put', '/dns/zones/' + name, null, body);
    }
    getDNSZoneRecords(name){
        return this.request('get', '/dns/zones/' + name + '/records', null, null);
    }
}
