export default function ActivateButton({ onAction }) {
    return (<button type="button" onClick={ onAction }>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1999 10.7999L11.9999 23.9999L5.3999 17.3999L6.34657 16.4533L11.9999 22.1199L24.2532 9.85327L25.1999 10.7999Z" fill="black"/>
        </svg>
    </button>);
}