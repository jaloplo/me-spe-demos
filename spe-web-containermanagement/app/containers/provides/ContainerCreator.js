export default function ContainerCreator(store) {
    return {
        create: (item) => {
            store.create({
                displayName: item.name,
                description: item.description,
                properties: [
                    { name: 'Property 1', value: item.property1 },
                    { name: 'Property 2', value: item.property2 },
                    { name: 'Property 3', value: item.property3 }
                ]
            });
        }
    }
}