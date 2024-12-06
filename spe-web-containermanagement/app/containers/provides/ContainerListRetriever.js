export default function ContainerListRetriever(containerStore) {

    return {
        retrieve: () => {
            const collection = containerStore.getMany();

            return collection.map(item => {
                return {
                    id: item.id,
                    createdAt: new Date(item.createdDateTime),
                    description: item.description,
                    name: item.displayName,
                    properties: item.properties,
                    status: item.status
                };
            });
        }
    };
}