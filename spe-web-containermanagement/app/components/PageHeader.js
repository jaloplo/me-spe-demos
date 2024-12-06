import LogoImage from "./LogoImage";

export default function PageHeader() {
    return (<header>
        <div>
            <div><LogoImage /></div>
            <section>
                <h1>SharePoint Embedded Container Management</h1>
                <small>By Jaime López</small>
            </section>
        </div>
        <div></div>
    </header>);
}