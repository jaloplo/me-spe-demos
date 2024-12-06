export default function ContainerRetriever(containerStore) {

    return {
        retrieve: (item) => {
            const container = containerStore.getOne(item.id);

            return {
                id: container.id,
                createdAt: new Date(container.createdDateTime),
                description: container.description,
                name: container.displayName,
                properties: [],
                status: container.status
            };
        }
    };
}