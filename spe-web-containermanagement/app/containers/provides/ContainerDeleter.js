export default function ContainerDeleter(store) {

    return {
        delete(id) {
            store.removeOne(id);
        }
    };
}