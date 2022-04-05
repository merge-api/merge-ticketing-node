# Merge Ticketing API TypeScript SDK

The unified API for building rich integrations with multiple Ticketing platforms.

This TypeScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

* API version: 1.0
* Package version: 1.0.1
* Build package: org.openapitools.codegen.languages.TypeScriptNodeClientCodegen For more information, please visit https://www.merge.dev/

<a name="requirements"></a>
## Requirements

### Dependencies

* bluebird: ^3.5.0
* request: ^2.81.0
* @types/bluebird: *
* @types/request: *
* rewire: ^3.0.2

### Dev Dependencies
* typescript: ^4.3.3
* @types/node: ^15.12.2

<a name="getting-started"></a>
## Getting Started

Here is an example auth configuration for calling a Merge API:


```
import { AccountDetailsApi, HttpBearerAuth } from "@mergeapi/merge-ticketing-node";

const auth = new HttpBearerAuth();
auth.accessToken = "YOUR_API_KEY";

// Substitute AccountDetailsApi with the API you're trying to use
const apiInstance = new AccountDetailsApi();
apiInstance.setDefaultAuthentication(auth);
```

