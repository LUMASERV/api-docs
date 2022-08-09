import axios from 'axios'

export default class LUMASERVComputeClient {
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
    getS3Buckets(query = null) {
        return this.request('get', '/storage/s3/buckets', query, null);
    }
    createS3Bucket(body = null) {
        return this.request('post', '/storage/s3/buckets', null, body);
    }
    deleteS3Bucket(id) {
        return this.request('delete', '/storage/s3/buckets/' + id, null, null);
    }
    getS3Bucket(id) {
        return this.request('get', '/storage/s3/buckets/' + id, null, null);
    }
    getS3AccessKeys(query = null) {
        return this.request('get', '/storage/s3/access-keys', query, null);
    }
    createS3AccessKey(body = null) {
        return this.request('post', '/storage/s3/access-keys', null, body);
    }
    deleteS3AccessKey(id) {
        return this.request('delete', '/storage/s3/access-keys/' + id, null, null);
    }
    getS3AccessKey(id) {
        return this.request('get', '/storage/s3/access-keys/' + id, null, null);
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
    getPleskLicenseTypes(query = null) {
        return this.request('get', '/licenses/plesk-types', query, null);
    }
    getPleskLicenseType(id) {
        return this.request('get', '/licenses/plesk-types/' + id, null, null);
    }
    getS3AccessKeyGrants(access_key_id, query = null) {
        return this.request('get', '/storage/s3/access-keys/' + access_key_id + '/grants', query, null);
    }
    createS3AccessKeyGrant(access_key_id, body = null) {
        return this.request('post', '/storage/s3/access-keys/' + access_key_id + '/grants', null, body);
    }
    deleteS3AccessKeyGrant(access_key_id, id) {
        return this.request('delete', '/storage/s3/access-keys/' + access_key_id + '/grants/' + id, null, null);
    }
    getSSHKeys(query = null) {
        return this.request('get', '/ssh-keys', query, null);
    }
    createSSHKey(body = null) {
        return this.request('post', '/ssh-keys', null, body);
    }
    deleteSSHKey(id) {
        return this.request('delete', '/ssh-keys/' + id, null, null);
    }
    getSSHKey(id) {
        return this.request('get', '/ssh-keys/' + id, null, null);
    }
    getServers(query = null) {
        return this.request('get', '/servers', query, null);
    }
    createServer(body = null) {
        return this.request('post', '/servers', null, body);
    }
    deleteServer(id) {
        return this.request('delete', '/servers/' + id, null, null);
    }
    getServer(id) {
        return this.request('get', '/servers/' + id, null, null);
    }
    updateServer(id, body = null) {
        return this.request('put', '/servers/' + id, null, body);
    }
    getServerVolumes(query = null) {
        return this.request('get', '/server-volumes', query, null);
    }
    createServerVolume(body = null) {
        return this.request('post', '/server-volumes', null, body);
    }
    deleteServerVolume(id) {
        return this.request('delete', '/server-volumes/' + id, null, null);
    }
    getServerVolume(id) {
        return this.request('get', '/server-volumes/' + id, null, null);
    }
    updateServerVolume(id, body = null) {
        return this.request('put', '/server-volumes/' + id, null, body);
    }
    getServerTemplates(query = null) {
        return this.request('get', '/server-templates', query, null);
    }
    createServerTemplate(body = null) {
        return this.request('post', '/server-templates', null, body);
    }
    getServerTemplate(id) {
        return this.request('get', '/server-templates/' + id, null, null);
    }
    getServerMedias(query = null) {
        return this.request('get', '/server-medias', query, null);
    }
    createServerMedia(body = null) {
        return this.request('post', '/server-medias', null, body);
    }
    deleteServerMedia(id) {
        return this.request('delete', '/server-medias/' + id, null, null);
    }
    getServerMedia(id) {
        return this.request('get', '/server-medias/' + id, null, null);
    }
    search(query = null) {
        return this.request('get', '/search', query, null);
    }
    getAvailabilityZones(query = null) {
        return this.request('get', '/availability-zones', query, null);
    }
    createAvailabilityZone(body = null) {
        return this.request('post', '/availability-zones', null, body);
    }
    getAvailabilityZone(id) {
        return this.request('get', '/availability-zones/' + id, null, null);
    }
    updateAvailabilityZone(id, body = null) {
        return this.request('put', '/availability-zones/' + id, null, body);
    }
    getServerVariants(query = null) {
        return this.request('get', '/server-variants', query, null);
    }
    createServerVariant(body = null) {
        return this.request('post', '/server-variants', null, body);
    }
    deleteServerVariant(id) {
        return this.request('delete', '/server-variants/' + id, null, null);
    }
    getServerVariant(id) {
        return this.request('get', '/server-variants/' + id, null, null);
    }
    getServerStorageClasses(query = null) {
        return this.request('get', '/server-storage-classes', query, null);
    }
    createServerStorageClass(body = null) {
        return this.request('post', '/server-storage-classes', null, body);
    }
    getServerStorageClass(id) {
        return this.request('get', '/server-storage-classes/' + id, null, null);
    }
    getNetworks(query = null) {
        return this.request('get', '/networks', query, null);
    }
    createNetwork(body = null) {
        return this.request('post', '/networks', null, body);
    }
    getNetwork(id) {
        return this.request('get', '/networks/' + id, null, null);
    }
    updateNetwork(id, body = null) {
        return this.request('put', '/networks/' + id, null, body);
    }
    getServerNetworks(id, query = null) {
        return this.request('get', '/servers/' + id + '/networks', query, null);
    }
    createServerNetwork(id, body = null) {
        return this.request('post', '/servers/' + id + '/networks', null, body);
    }
    deleteServerNetwork(id, network_id) {
        return this.request('delete', '/servers/' + id + '/networks/' + network_id, null, null);
    }
    getSubnets(query = null) {
        return this.request('get', '/subnets', query, null);
    }
    createSubnet(body = null) {
        return this.request('post', '/subnets', null, body);
    }
    deleteSubnet(id) {
        return this.request('delete', '/subnets/' + id, null, null);
    }
    getSubnet(id) {
        return this.request('get', '/subnets/' + id, null, null);
    }
    getServerHosts(query = null) {
        return this.request('get', '/server-hosts', query, null);
    }
    createServerHost(body = null) {
        return this.request('post', '/server-hosts', null, body);
    }
    getServerHost(id) {
        return this.request('get', '/server-hosts/' + id, null, null);
    }
    updateServerHost(id, body = null) {
        return this.request('put', '/server-hosts/' + id, null, body);
    }
    getServerStorages(query = null) {
        return this.request('get', '/server-storages', query, null);
    }
    createServerStorage(body = null) {
        return this.request('post', '/server-storages', null, body);
    }
    getServerStorage(id) {
        return this.request('get', '/server-storages/' + id, null, null);
    }
    startServer(id) {
        return this.request('post', '/servers/' + id + '/start', null, null);
    }
    shutdownServer(id, query = null) {
        return this.request('post', '/servers/' + id + '/shutdown', query, null);
    }
    stopServer(id) {
        return this.request('post', '/servers/' + id + '/stop', null, null);
    }
    recreateServer(id) {
        return this.request('post', '/servers/' + id + '/recreate', null, null);
    }
    getServerVNC(id) {
        return this.request('get', '/servers/' + id + '/vnc', null, null);
    }
    getServerActions(query = null) {
        return this.request('get', '/server-actions', query, null);
    }
    getServerAction(id) {
        return this.request('get', '/server-actions/' + id, null, null);
    }
    attachServerVolume(id, body = null) {
        return this.request('post', '/server-volumes/' + id + '/attach', null, body);
    }
    detachServerVolume(id) {
        return this.request('post', '/server-volumes/' + id + '/detach', null, null);
    }
    getServerStatus(id) {
        return this.request('get', '/servers/' + id + '/status', null, null);
    }
    getAddresses(query = null) {
        return this.request('get', '/addresses', query, null);
    }
    getAddress(id) {
        return this.request('get', '/addresses/' + id, null, null);
    }
    resizeServer(id, body = null) {
        return this.request('post', '/servers/' + id + '/resize', null, body);
    }
    getLabels(query = null) {
        return this.request('get', '/labels', query, null);
    }
    getServerGraph(id, query = null) {
        return this.request('get', '/servers/' + id + '/graph', query, null);
    }
    getServerBackups(query = null) {
        return this.request('get', '/server-backups', query, null);
    }
    createServerBackup(body = null) {
        return this.request('post', '/server-backups', null, body);
    }
    deleteServerBackup(id) {
        return this.request('delete', '/server-backups/' + id, null, null);
    }
    getServerBackup(id) {
        return this.request('get', '/server-backups/' + id, null, null);
    }
    updateServerBackup(id, body = null) {
        return this.request('put', '/server-backups/' + id, null, body);
    }
    restoreServer(id, body = null) {
        return this.request('post', '/servers/' + id + '/restore', null, body);
    }
    getScheduledServerActions(id, query = null) {
        return this.request('get', '/servers/' + id + '/scheduled-actions', query, null);
    }
    createScheduledServerAction(id, body = null) {
        return this.request('post', '/servers/' + id + '/scheduled-actions', null, body);
    }
    deleteScheduledServerAction(id, action_id) {
        return this.request('delete', '/servers/' + id + '/scheduled-actions/' + action_id, null, null);
    }
    getScheduledServerAction(id, action_id) {
        return this.request('get', '/servers/' + id + '/scheduled-actions/' + action_id, null, null);
    }
    updateScheduledServerAction(id, action_id, body = null) {
        return this.request('put', '/servers/' + id + '/scheduled-actions/' + action_id, null, body);
    }
    getServerFirewalls(query = null) {
        return this.request('get', '/server-firewalls', query, null);
    }
    createServerFirewall(body = null) {
        return this.request('post', '/server-firewalls', null, body);
    }
    deleteServerFirewall(id) {
        return this.request('delete', '/server-firewalls/' + id, null, null);
    }
    getServerFirewall(id) {
        return this.request('get', '/server-firewalls/' + id, null, null);
    }
    getServerFirewallRules(id, query = null) {
        return this.request('get', '/server-firewalls/' + id + '/rules', query, null);
    }
    createServerFirewallRule(id, body = null) {
        return this.request('post', '/server-firewalls/' + id + '/rules', null, body);
    }
    deleteServerFirewallRule(id, rule_id) {
        return this.request('delete', '/server-firewalls/' + id + '/rules/' + rule_id, null, null);
    }
    getServerFirewallRule(id, rule_id) {
        return this.request('get', '/server-firewalls/' + id + '/rules/' + rule_id, null, null);
    }
    updateServerFirewallRule(id, rule_id, body = null) {
        return this.request('put', '/server-firewalls/' + id + '/rules/' + rule_id, null, body);
    }
    getServerFirewallMembers(id, query = null) {
        return this.request('get', '/server-firewalls/' + id + '/members', query, null);
    }
    createServerFirewallMember(id, body = null) {
        return this.request('post', '/server-firewalls/' + id + '/members', null, body);
    }
    deleteServerFirewallMember(id, member_id) {
        return this.request('delete', '/server-firewalls/' + id + '/members/' + member_id, null, null);
    }
    getServerFirewallMember(id, member_id) {
        return this.request('get', '/server-firewalls/' + id + '/members/' + member_id, null, null);
    }
    getServerPriceRanges(query = null) {
        return this.request('get', '/server-price-ranges', query, null);
    }
    createServerPriceRange(body = null) {
        return this.request('post', '/server-price-ranges', null, body);
    }
    getServerPriceRange(id) {
        return this.request('get', '/server-price-ranges/' + id, null, null);
    }
    getServerVariantPrices(id, query = null) {
        return this.request('get', '/server-price-ranges/' + id + '/variant-prices', query, null);
    }
    createServerVariantPrice(id, body = null) {
        return this.request('post', '/server-price-ranges/' + id + '/variant-prices', null, body);
    }
    deleteServerVariantPrice(id, variant_id) {
        return this.request('delete', '/server-price-ranges/' + id + '/variant-prices/' + variant_id, null, null);
    }
    getServerVariantPrice(id, variant_id) {
        return this.request('get', '/server-price-ranges/' + id + '/variant-prices/' + variant_id, null, null);
    }
    updateServerVariantPrice(id, variant_id, body = null) {
        return this.request('put', '/server-price-ranges/' + id + '/variant-prices/' + variant_id, null, body);
    }
    getServerPriceRangeAssignments(query = null) {
        return this.request('get', '/server-price-range-assignments', query, null);
    }
    createServerPriceRangeAssignment(body = null) {
        return this.request('post', '/server-price-range-assignments', null, body);
    }
    deleteServerPriceRangeAssignment(id) {
        return this.request('delete', '/server-price-range-assignments/' + id, null, null);
    }
    getServerPriceRangeAssignment(id) {
        return this.request('get', '/server-price-range-assignments/' + id, null, null);
    }
    updateServerPriceRangeAssignment(id, body = null) {
        return this.request('put', '/server-price-range-assignments/' + id, null, body);
    }
    restartServer(id) {
        return this.request('post', '/servers/' + id + '/restart', null, null);
    }
    cancelServerAction(id) {
        return this.request('post', '/server-actions/' + id + '/cancel', null, null);
    }
    unmountServerMedia(id) {
        return this.request('delete', '/servers/' + id + '/mount', null, null);
    }
    mountServerMedia(id, body = null) {
        return this.request('post', '/servers/' + id + '/mount', null, body);
    }
}
