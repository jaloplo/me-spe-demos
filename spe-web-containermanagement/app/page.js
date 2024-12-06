'use client';

import { useState } from "react";
import ContainerListItem from "./components/containers/ContainerListItem";
import CreateButton from "./components/CreateButton";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";

import { containerListRetrieverUseCase } from "./containers";

export default function Page() {

    const intialContainers = containerListRetrieverUseCase.retrieve();
    const [containers, setContainers] = useState(intialContainers);

    const onAction = (event) => {
        event.preventDefault();
        setContainers(containerListRetrieverUseCase.retrieve());
    };

    return (
        <>
            <PageHeader />
            <main>
                <header>
                    <h2>Tenant containers</h2>
                    <CreateButton />
                </header>
                <ul>
                    { 
                        containers.map(container => {
                            return (<li key={container.id}><ContainerListItem containerItem={ container } onAction={ onAction } /></li>);
                        }) 
                    }
                </ul>
            </main>
            <PageFooter />
        </>
    );
  }