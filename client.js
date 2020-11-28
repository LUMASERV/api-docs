import axios from 'axios'

export default class LUMASERVClient {
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
    getCloudServers(){
        return this.request('get', '/cloud/servers', null, null);
    }
    createCloudServer(body = null){
        return this.request('post', '/cloud/servers', null, body);
    }
    deleteCloudServer(id){
        return this.request('delete', '/cloud/servers/' + id, null, null);
    }
    getCloudServer(id){
        return this.request('get', '/cloud/servers/' + id, null, null);
    }
    updateCloudServer(id, body = null){
        return this.request('put', '/cloud/servers/' + id, null, body);
    }
    getCloudServerFirewallRules(id){
        return this.request('get', '/cloud/servers/' + id + '/firewall/rules', null, null);
    }
    createCloudServerFirewallRule(id, body = null){
        return this.request('post', '/cloud/servers/' + id + '/firewall/rules', null, body);
    }
    deleteCloudServerFirewallRule(id, rule_id){
        return this.request('delete', '/cloud/servers/' + id + '/firewall/rules/' + rule_id, null, null);
    }
    getCloudServerFirewallRule(id, rule_id){
        return this.request('get', '/cloud/servers/' + id + '/firewall/rules/' + rule_id, null, null);
    }
    updateCloudServerFirewallRule(id, rule_id, body = null){
        return this.request('put', '/cloud/servers/' + id + '/firewall/rules/' + rule_id, null, body);
    }
    getFirewallRuleSets(){
        return this.request('get', '/cloud/firewall/rule-sets', null, null);
    }
    createFirewallRuleSet(body = null){
        return this.request('post', '/cloud/firewall/rule-sets', null, body);
    }
    deleteFirewallRuleSet(id){
        return this.request('delete', '/cloud/firewall/rule-sets/' + id, null, null);
    }
    getFirewallRuleSet(id){
        return this.request('get', '/cloud/firewall/rule-sets/' + id, null, null);
    }
    updateFirewallRuleSet(id, body = null){
        return this.request('put', '/cloud/firewall/rule-sets/' + id, null, body);
    }
    getFirewallRuleSetRules(id){
        return this.request('get', '/cloud/firewall/rule-sets/' + id + '/rules', null, null);
    }
    createFirewallRuleSetRule(id, body = null){
        return this.request('post', '/cloud/firewall/rule-sets/' + id + '/rules', null, body);
    }
    deleteFirewallRuleSetRule(id, rule_id){
        return this.request('delete', '/cloud/firewall/rule-sets/' + id + '/rules/' + rule_id, null, null);
    }
    getFirewallRuleSetRule(id, rule_id){
        return this.request('get', '/cloud/firewall/rule-sets/' + id + '/rules/' + rule_id, null, null);
    }
    updateFirewallRuleSetRule(id, rule_id, body = null){
        return this.request('put', '/cloud/firewall/rule-sets/' + id + '/rules/' + rule_id, null, body);
    }
    getFirewallAddressSets(){
        return this.request('get', '/cloud/firewall/address-sets', null, null);
    }
    createFirewallAddressSet(body = null){
        return this.request('post', '/cloud/firewall/address-sets', null, body);
    }
    deleteFirewallAddressSet(id){
        return this.request('delete', '/cloud/firewall/address-sets/' + id, null, null);
    }
    getFirewallAddressSet(id){
        return this.request('get', '/cloud/firewall/address-sets/' + id, null, null);
    }
    updateFirewallAddressSet(id, body = null){
        return this.request('put', '/cloud/firewall/address-sets/' + id, null, body);
    }
    getFirewallAddressSetAddresses(id){
        return this.request('get', '/cloud/firewall/address-sets/' + id + '/addresses', null, null);
    }
    createFirewallAddressSetAddress(id, body = null){
        return this.request('post', '/cloud/firewall/address-sets/' + id + '/addresses', null, body);
    }
    deleteFirewallAddressSetAddress(id, cidr){
        return this.request('delete', '/cloud/firewall/address-sets/' + id + '/addresses/' + cidr, null, null);
    }
    getFirewallAddressSetAddress(id, cidr){
        return this.request('get', '/cloud/firewall/address-sets/' + id + '/addresses/' + cidr, null, null);
    }
    updateFirewallAddressSetAddress(id, cidr, body = null){
        return this.request('put', '/cloud/firewall/address-sets/' + id + '/addresses/' + cidr, null, body);
    }
    getProjects(){
        return this.request('get', '/projects', null, null);
    }
    createProject(body = null){
        return this.request('post', '/projects', null, body);
    }
    deleteProject(uuid){
        return this.request('delete', '/projects/' + uuid, null, null);
    }
    getProject(uuid){
        return this.request('get', '/projects/' + uuid, null, null);
    }
    updateProject(uuid, body = null){
        return this.request('put', '/projects/' + uuid, null, body);
    }
    getCloudServerInterfaces(id){
        return this.request('get', '/cloud/servers/' + id + '/interfaces', null, null);
    }
    createCloudServerInterface(id, body = null){
        return this.request('post', '/cloud/servers/' + id + '/interfaces', null, body);
    }
    deleteCloudServerInterface(id, netname){
        return this.request('delete', '/cloud/servers/' + id + '/interfaces/' + netname, null, null);
    }
    getCloudServerInterface(id, netname){
        return this.request('get', '/cloud/servers/' + id + '/interfaces/' + netname, null, null);
    }
    updateCloudServerInterface(id, netname, body = null){
        return this.request('put', '/cloud/servers/' + id + '/interfaces/' + netname, null, body);
    }
    getCloudServerStorages(id){
        return this.request('get', '/cloud/servers/' + id + '/storages', null, null);
    }
    createCloudServerStorage(id, body = null){
        return this.request('post', '/cloud/servers/' + id + '/storages', null, body);
    }
    deleteCloudServerStorage(id, title){
        return this.request('delete', '/cloud/servers/' + id + '/storages/' + title, null, null);
    }
    getCloudServerStorage(id, title){
        return this.request('get', '/cloud/servers/' + id + '/storages/' + title, null, null);
    }
    updateCloudServerStorage(id, title, body = null){
        return this.request('put', '/cloud/servers/' + id + '/storages/' + title, null, body);
    }
    login(body = null){
        return this.request('post', '/auth/login', null, body);
    }
    logout(){
        return this.request('post', '/auth/logout', null, null);
    }
    getSelf(){
        return this.request('get', '/auth/self', null, null);
    }
    getUsers(){
        return this.request('get', '/users', null, null);
    }
    getUser(username){
        return this.request('get', '/users/' + username, null, null);
    }
    updateUser(username, body = null){
        return this.request('put', '/users/' + username, null, body);
    }
    getNetworks(){
        return this.request('get', '/cloud/networks', null, null);
    }
    getAddresses(){
        return this.request('get', '/addresses', null, null);
    }
    createAddress(body = null){
        return this.request('post', '/addresses', null, body);
    }
    deleteAddress(address){
        return this.request('delete', '/addresses/' + address, null, null);
    }
    getAddress(address){
        return this.request('get', '/addresses/' + address, null, null);
    }
    updateAddress(address, body = null){
        return this.request('put', '/addresses/' + address, null, body);
    }
    startCloudServer(id){
        return this.request('post', '/cloud/servers/' + id + '/start', null, null);
    }
    shutdownCloudServer(id){
        return this.request('post', '/cloud/servers/' + id + '/shutdown', null, null);
    }
    stopCloudServer(id){
        return this.request('post', '/cloud/servers/' + id + '/stop', null, null);
    }
    restartCloudServer(id){
        return this.request('post', '/cloud/servers/' + id + '/restart', null, null);
    }
    restoreCloudServer(id, body = null){
        return this.request('post', '/cloud/servers/' + id + '/restore', null, body);
    }
    getCloudServerBackups(id){
        return this.request('get', '/cloud/servers/' + id + '/backups', null, null);
    }
    createCloudServerBackup(id, body = null){
        return this.request('post', '/cloud/servers/' + id + '/backups', null, body);
    }
    getAllCloudServerBackups(){
        return this.request('get', '/cloud/servers/backups', null, null);
    }
    getCloudServerScheduledTasks(id){
        return this.request('get', '/cloud/servers/' + id + '/scheduled-tasks', null, null);
    }
    createCloudServerScheduledTask(id, body = null){
        return this.request('post', '/cloud/servers/' + id + '/scheduled-tasks', null, body);
    }
    deleteCloudServerScheduledTask(id, task_id){
        return this.request('delete', '/cloud/servers/' + id + '/scheduled-tasks/' + task_id, null, null);
    }
    getCustomers(){
        return this.request('get', '/customers', null, null);
    }
    createCustomer(body = null){
        return this.request('post', '/customers', null, body);
    }
    getCustomer(customer_id){
        return this.request('get', '/customers/' + customer_id, null, null);
    }
}
