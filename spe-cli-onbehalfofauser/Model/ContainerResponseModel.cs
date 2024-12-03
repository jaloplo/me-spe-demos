using System.Text.Json.Serialization;

public struct ContainerResponseModel {
    
    [JsonPropertyName("value")]
    public IList<ContainerModel> Containers { get; set; }
}