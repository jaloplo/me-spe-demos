using Microsoft.Extensions.Configuration;

public class EntraIdConfigurationRetriever: ConfigurationRetriever {

    public string TenantId => GetValue("tenantId");
    public string ClientId => GetValue("clientId"); 
    public string ClientSecret => GetValue("clientSecret");

    public EntraIdConfigurationRetriever(IConfigurationRoot configuration) :
        base(configuration, "entraId") 
    {
    }
}