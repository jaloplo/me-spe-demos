export default function EditButton({ onAction }) {
    return (<button type="button" onClick={ onAction }>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.28 10.7201L23.16 13.8267L18.16 8.82674L21.28 5.72008C21.8 5.20008 22.6667 5.20008 23.16 5.72008L26.28 8.84008C26.8 9.33341 26.8 10.2001 26.28 10.7201ZM4 23.0001L17.4133 9.57341L22.4133 14.5734L9 28.0001H4V23.0001ZM22.16 6.72008L20.1067 8.77341L23.2267 11.8934L25.28 9.84008L22.16 6.72008ZM20.48 14.6667L17.3333 11.5201L5.33333 23.5467V26.6667H8.45333L20.48 14.6667Z" fill="black"/>
        </svg>
    </button>);
}