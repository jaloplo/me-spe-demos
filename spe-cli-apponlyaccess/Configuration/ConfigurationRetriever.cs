using Microsoft.Extensions.Configuration;

public class ConfigurationRetriever {

    private readonly IConfigurationRoot _configuration;
    private readonly string _sectionName;

    public ConfigurationRetriever(IConfigurationRoot configuration, string sectionName) {
        _configuration = configuration;
        _sectionName = sectionName;
    }

    public string GetValue(string key) {
        var section = _configuration.GetSection(_sectionName);
        
        if(null == section) {
            return String.Empty;
        }

        var value = section[key];

        return value?.ToString() ?? String.Empty;
    }

}