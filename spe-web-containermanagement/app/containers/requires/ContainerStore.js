let containers = [
    {
        id: 1,
        displayName: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus',
        createdDateTime: '2024-10-22T17:25:44Z',
        status: 'active'
    },
    {
        id: 2,
        displayName: 'sit amet consectetur',
        description: 'Quae, quisquam, doloremque, quos, consequuntur, velit, voluptas, asperiores, fugiat, laborum, eaque',
        createdDateTime: '2024-10-21T11:13:21Z',
        status: 'inactive'
    },
    {
        id: 3,
        displayName: 'Quae, quisquam, doloremque',
        description: 'Quidem, quaerat, dolorum, accusantium, quibusdam, vel, voluptate, fugit, aspernatur, labore, rerum, odit, et, dolores, molestiae, tempore, quo, necessitatibus, deleniti, beatae, repellendus, ipsa, error, nihil, sint, rerum',
        createdDateTime: '2024-09-01T22:56:12Z',
        status: 'blocked'
    }
];

export default function ContainerStore() {

    return {
        create: (item) => {
            const id = containers.reduce((prev, current) => prev.id > current.id ? prev : current, 0).id + 1;

            item.id = id;
            item.createdDateTime = new Date().toISOString();
            item.status = 'inactive';
            
            containers.push(item);
        },
        getOne: (id) => {
            return containers.filter(c => c.id === parseInt(id)).pop();
        },
        getMany: () => {
            return containers.sort((a, b) => a.id > b.id ? 1 : -1);
        },
        removeOne: (id) => {
            containers = containers.filter(c => c.id !== parseInt(id));
        },
        updateOne: (item) => {
            var container = containers.filter(c => c.id === parseInt(item.id)).pop();
            Object.assign(container, item);

            containers = containers.filter(c => c.id !== parseInt(item.id));
            containers.push(container);
        }
    };
}