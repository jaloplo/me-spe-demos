import Link from 'next/link';

export default function CreateButton() {
    return (<Link href="/new">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6667 29.0769V26.9231H24.5898V14H26.7437V26.9231H39.6667V29.0769H26.7437V42H24.5898V29.0769H11.6667Z" fill="black"/>
        </svg>
    </Link>);
}