export default function ContainerActivator(store) {

    return {
        activate(id) {
            store.updateOne({
                id,
                status: 'active'
            });
        }
    };
}