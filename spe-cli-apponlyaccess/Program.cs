using Azure.Core;
using Azure.Identity;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Headers;


Console.WriteLine(">>> Reading configuration...");
var configuration = new ConfigurationBuilder().AddJsonFile(".\\configuration.json").Build();
var entraIdSection = new EntraIdConfigurationRetriever(configuration);
var speSection = new SPEConfigurationRetriever(configuration);


Console.WriteLine(">>> Setting app-only credentials...");
var credential = new ClientSecretCredential(
    entraIdSection.TenantId, 
    entraIdSection.ClientId, 
    entraIdSection.ClientSecret);


Console.WriteLine(">>> Retrieving the access token...");
var scopes = new string[] { 
    "https://graph.microsoft.com/.default"
};
var requestContext = new TokenRequestContext(scopes, null);
var accessToken = credential.GetToken(requestContext, new CancellationToken());


Console.WriteLine(">>> Requesting the list of containers...");
HttpClient httpClient = new HttpClient();
httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken.Token);
var response = await httpClient.GetAsync($"https://graph.microsoft.com/v1.0/storage/fileStorage/containers?$filter=containerTypeId eq {speSection.ContainerTypeId}");
var content = await response.Content.ReadAsStringAsync();

var containerResponse = JsonSerializer.Deserialize<ContainerResponseModel>(content);
foreach (var container in containerResponse.Containers) {
    Console.WriteLine($"Container: {container.Id} - {container.DisplayName}");
}