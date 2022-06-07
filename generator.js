// Imports
const fs = require("fs")

const API_NAME = process.argv[2];
const SOURCE_FILE = process.argv[3];
const DEST_FILE = process.argv[4];

// Load OpenAPI Spec
const spec = JSON.parse(fs.readFileSync(SOURCE_FILE, 'utf8'))

// Generate Methods
let generatedMethods = [];

let methods = [];

Object.keys(spec.paths).forEach(path => {
    Object.keys(spec.paths[path]).forEach(method => {
        const opSpec = spec.paths[path][method];
        let pathParams = [];
        let hasQueryParams = false;
        [...(opSpec.parameters||[]),...(spec.paths[path].parameters||[])].forEach(p => {
            if(p.in == 'path'){
                pathParams.push(p.name);
            }
            if(p.in == 'query'){
                hasQueryParams = true;
            }
        })
        let params = [];
        params.push(...pathParams);
        if(hasQueryParams)
            params.push('query = null');
        if(opSpec.requestBody)
            params.push('body = null');
        let generatedPath = "'" + path + "'";
        pathParams.forEach(p => {
            generatedPath = generatedPath.replace('{'+p+'}', "' + " + p + " + '")
        })
        if(generatedPath.endsWith(" + ''"))
            generatedPath = generatedPath.substr(0, generatedPath.length - 5);
        let code = "return this.request('" + method + "', " + generatedPath + ", " + (hasQueryParams?'query':'null') + ', ' + (opSpec.requestBody?'body':'null') + ");";
        methods.push({name: opSpec.operationId,params,code});
    })
})

methods.forEach(m => generatedMethods.push(m.name + '(' + m.params.join(', ') + ') {\n        ' + m.code + '\n    }'))

// Write client.js
const source = fs.readFileSync('client.source.js', 'utf8')
fs.writeFileSync(DEST_FILE, source.replace('{API_NAME}', API_NAME).replace('{GENERATED_METHODS}', generatedMethods.join('\n    ')))