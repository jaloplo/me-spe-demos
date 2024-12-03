using System.Text.Json.Serialization;

public struct ContainerModel {
    
    [JsonPropertyName("id")]
    public string Id { get; set; }
    
    [JsonPropertyName("displayName")]
    public string DisplayName { get; set; }
    public string ContainerTypeId { get; set; }
    public DateTime CreatedDateTime { get; set; }
    public ContainerSettingsModel Settings { get; set; }
}