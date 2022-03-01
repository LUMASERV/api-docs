import axios from 'axios'

export default class LUMASERVBillingClient {
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
    getBankTransactions(query = null){
        return this.request('get', '/bank-transactions', query, null);
    }
    getBankTransaction(id){
        return this.request('get', '/bank-transactions/' + id, null, null);
    }
    getBillingPositions(query = null){
        return this.request('get', '/billing-positions', query, null);
    }
    createBillingPosition(body = null){
        return this.request('post', '/billing-positions', null, body);
    }
    deleteBillingPosition(id){
        return this.request('delete', '/billing-positions/' + id, null, null);
    }
    getBillingPosition(id){
        return this.request('get', '/billing-positions/' + id, null, null);
    }
    updateBillingPosition(id, body = null){
        return this.request('put', '/billing-positions/' + id, null, body);
    }
    getCustomers(query = null){
        return this.request('get', '/customers', query, null);
    }
    createCustomer(body = null){
        return this.request('post', '/customers', null, body);
    }
    getCustomer(id){
        return this.request('get', '/customers/' + id, null, null);
    }
    updateCustomer(id, body = null){
        return this.request('put', '/customers/' + id, null, body);
    }
    getCustomerTransactions(query = null){
        return this.request('get', '/customer-transactions', query, null);
    }
    getCustomerTransaction(id){
        return this.request('get', '/customer-transactions/' + id, null, null);
    }
    getDebits(query = null){
        return this.request('get', '/debits', query, null);
    }
    getDebit(id){
        return this.request('get', '/debits/' + id, null, null);
    }
    getDebitMandates(query = null){
        return this.request('get', '/debit-mandates', query, null);
    }
    createDebitMandate(body = null){
        return this.request('post', '/debit-mandates', null, body);
    }
    getDebitMandate(id){
        return this.request('get', '/debit-mandates/' + id, null, null);
    }
    getInvoices(query = null){
        return this.request('get', '/invoices', query, null);
    }
    createInvoice(body = null){
        return this.request('post', '/invoices', null, body);
    }
    deleteInvoice(id){
        return this.request('delete', '/invoices/' + id, null, null);
    }
    getInvoice(id){
        return this.request('get', '/invoices/' + id, null, null);
    }
    updateInvoice(id, body = null){
        return this.request('put', '/invoices/' + id, null, body);
    }
    getInvoiceFile(id){
        return this.request('get', '/invoices/' + id + '/file', null, null);
    }
    getInvoicePositions(id, query = null){
        return this.request('get', '/invoices/' + id + '/positions', query, null);
    }
    createInvoicePosition(id, body = null){
        return this.request('post', '/invoices/' + id + '/positions', null, body);
    }
    deleteInvoicePosition(invoice_id, id){
        return this.request('delete', '/invoices/' + invoice_id + '/positions/' + id, null, null);
    }
    getInvoicePosition(invoice_id, id){
        return this.request('get', '/invoices/' + invoice_id + '/positions/' + id, null, null);
    }
    updateInvoicePosition(invoice_id, id, body = null){
        return this.request('put', '/invoices/' + invoice_id + '/positions/' + id, null, body);
    }
    getOffers(query = null){
        return this.request('get', '/offers', query, null);
    }
    createOffer(body = null){
        return this.request('post', '/offers', null, body);
    }
    getOffer(id){
        return this.request('get', '/offers/' + id, null, null);
    }
    updateOffer(id, body = null){
        return this.request('put', '/offers/' + id, null, body);
    }
    getOfferPositions(query = null){
        return this.request('get', '/offer-positions', query, null);
    }
    createOfferPosition(body = null){
        return this.request('post', '/offer-positions', null, body);
    }
    deleteOfferPosition(id){
        return this.request('delete', '/offer-positions/' + id, null, null);
    }
    getOfferPosition(id){
        return this.request('get', '/offer-positions/' + id, null, null);
    }
    updateOfferPosition(id, body = null){
        return this.request('put', '/offer-positions/' + id, null, body);
    }
    getOnlinePayments(query = null){
        return this.request('get', '/online-payments', query, null);
    }
    getOnlinePayment(id){
        return this.request('get', '/online-payments/' + id, null, null);
    }
    getPaymentReminders(query = null){
        return this.request('get', '/payment-reminders', query, null);
    }
    createPaymentReminder(body = null){
        return this.request('post', '/payment-reminders', null, body);
    }
    getPaymentReminder(id){
        return this.request('get', '/payment-reminders/' + id, null, null);
    }
    updatePaymentReminder(id, body = null){
        return this.request('put', '/payment-reminders/' + id, null, body);
    }
    getServiceContracts(query = null){
        return this.request('get', '/service-contracts', query, null);
    }
    createServiceContract(body = null){
        return this.request('post', '/service-contracts', null, body);
    }
    deleteServiceContract(id){
        return this.request('delete', '/service-contracts/' + id, null, null);
    }
    getServiceContract(id){
        return this.request('get', '/service-contracts/' + id, null, null);
    }
    updateServiceContract(id, body = null){
        return this.request('put', '/service-contracts/' + id, null, body);
    }
    getServiceContractPositions(query = null){
        return this.request('get', '/service-contract-positions', query, null);
    }
    createServiceContractPosition(body = null){
        return this.request('post', '/service-contract-positions', null, body);
    }
    deleteServiceContractPosition(id){
        return this.request('delete', '/service-contract-positions/' + id, null, null);
    }
    getServiceContractPosition(id){
        return this.request('get', '/service-contract-positions/' + id, null, null);
    }
    updateServiceContractPosition(id, body = null){
        return this.request('put', '/service-contract-positions/' + id, null, body);
    }
}
