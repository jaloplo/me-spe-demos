export default function ContainerUpdater(store) {

    return {
        update(item) {
            store.updateOne({
                id: item.id,
                displayName: item.name,
                description: item.description,
                properties: [
                    { name: 'Property 1', value: item.property1 },
                    { name: 'Property 2', value: item.property2 },
                    { name: 'Property 3', value: item.property3 }
                ]
            });
        }
    };
}