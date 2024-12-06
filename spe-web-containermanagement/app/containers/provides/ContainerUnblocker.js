export default function ContainerUnblocker(store) {

    return {
        unblock(id) {
            store.updateOne({
                id,
                status: 'active'
            });
        }
    };
}