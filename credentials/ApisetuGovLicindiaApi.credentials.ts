import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovLicindiaApi implements ICredentialType {
        name = 'N8nDevApisetuGovLicindiaApi';

        displayName = 'Apisetu Gov Licindia API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovLicindia/apisetu-gov-licindia.svg', dark: 'file:../nodes/ApisetuGovLicindia/apisetu-gov-licindia.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/licindia/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/licindia/v3',
                        description: 'The base URL of your Apisetu Gov Licindia API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
