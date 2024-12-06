export default function ContainerBlocker(store) {

    return {
        block(id) {
            store.updateOne({
                id,
                status: 'blocked'
            });
        }
    };
}