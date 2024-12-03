using Microsoft.Extensions.Configuration;

public class SPEConfigurationRetriever: ConfigurationRetriever {

    public string ContainerTypeId => GetValue("containerTypeId");
    
    public SPEConfigurationRetriever(IConfigurationRoot configuration) :
        base(configuration, "sharepoint-embedded") 
    {
    }
}