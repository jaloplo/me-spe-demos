'use client';

import { redirect } from 'next/navigation'
import { use } from 'react';
import { useRef } from "react";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";

import { 
    containerRetrieverUseCase, 
    containerUpdaterUseCase } from "../../containers";

export default function UpdateContainerPage({ params }) {

    const id = parseInt(use(params).id);
    var currentContainer = containerRetrieverUseCase.retrieve({ id });

    const nameRef = useRef(null);
    const descriptionRef = useRef(currentContainer.description);
    const property1Ref = useRef(currentContainer.properties[0]);
    const property2Ref = useRef(currentContainer.properties[1]);
    const property3Ref = useRef(currentContainer.properties[2]);

    const update = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const property1 = property1Ref.current.value;
        const property2 = property2Ref.current.value;
        const property3 = property3Ref.current.value;

        containerUpdaterUseCase.update({
            id,
            name,
            description,
            property1, 
            property2,
            property3
        });

        redirect('/');
    };

    return (<>
        <PageHeader />
        <main>
            <header>
                <h2>New container</h2>
            </header>
            <form>
                <fieldset>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" ref={ nameRef } defaultValue={ currentContainer.name } />
                    </div>
                    <div>
                        <label for="description">Description</label>
                        <input type="text" id="description" name="description" ref={ descriptionRef } defaultValue={ currentContainer.description } />
                    </div>
                    <div>
                        <label for="property1">Property 1</label>
                        <input type="text" id="property1" name="property1" ref={ property1Ref } defaultValue={ currentContainer.properties[0] } />
                    </div>
                    <div>
                        <label for="property2">Property 2</label>
                        <input type="text" id="property2" name="property2" ref={ property2Ref } defaultValue={ currentContainer.properties[1] } />
                    </div>
                    <div>
                        <label for="property3">Property 3</label>
                        <input type="text" id="property3" name="property3" ref={ property3Ref } defaultValue={ currentContainer.properties[2] } />
                    </div>
                </fieldset>
                <ul>
                    <li><button type="submit" onClick={ event => update(event) }>Update</button></li>
                    <li><button type="reset">Cancel</button></li>
                </ul>
            </form>
        </main>
        <PageFooter />
    </>);
}