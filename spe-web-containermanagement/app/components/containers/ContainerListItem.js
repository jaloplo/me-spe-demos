'use client';

import ActivateButton from "../ActivateButton";
import ActiveStatusImage from "../ActiveStatusImage";
import BlockButton from "../BlockButton";
import BlockedStatusImage from "../BlockedStatusImage";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import InactiveStatusImage from "../InactiveStatusImage";
import UnblockButton from "../UnblockButton";

import { redirect } from 'next/navigation';
import {
    containerActivatorUseCase,
    containerBlockerUseCase,
    containerDeleterUseCase,
    containerUnblockerUseCase
} from "../../containers";

export default function ContainerListItem({ containerItem, onAction }) {

    const isActive = containerItem.status === 'active';
    const isBlocked = containerItem.status === 'blocked';
    const isInactive = containerItem.status === 'inactive';

    const canBeActivated = isInactive;
    const canBeEdited = isActive || isInactive;
    const canBeBlocked = isActive;
    const canBeDeleted = isActive || isInactive;
    const canBeUnblocked = isBlocked;

    const activateAction = (event) => {
        event.preventDefault();
        containerActivatorUseCase.activate(containerItem.id);
        onAction(event);
    };

    const blockAction = (event) => {
        event.preventDefault();
        containerBlockerUseCase.block(containerItem.id);
        onAction(event);
    };

    const deleteAction = (event) => {
        event.preventDefault();
        containerDeleterUseCase.delete(containerItem.id);
        onAction(event);
    };

    const editAction = (event) => {
        event.preventDefault();
        redirect(`/${containerItem.id}/edit`);
    };

    const unblockAction = (event) => {
        event.preventDefault();
        containerUnblockerUseCase.unblock(containerItem.id);
        onAction(event);
    };

    return (<>
        <div>
            { isActive && <ActiveStatusImage /> }
            { isInactive && <InactiveStatusImage /> }
            { isBlocked && <BlockedStatusImage /> }
        </div>
        <article>
            <header>
                <h3 className={isInactive || isBlocked ? "highlight" : ""}>{ containerItem.name }</h3>
                { canBeActivated && <ActivateButton onAction={ activateAction } /> }
                { canBeEdited && <EditButton onAction={ editAction } /> }
                { canBeBlocked && <BlockButton onAction={ blockAction } /> }
                { canBeDeleted && <DeleteButton onAction={ deleteAction } /> }
                { canBeUnblocked && <UnblockButton onAction={ unblockAction } /> }
            </header>
            <small>{ containerItem.createdAt.toLocaleString('en-us', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }) }</small>
            <span>{ containerItem.description }</span>
            { 
                containerItem.properties && 
                (<ul>
                    { containerItem.properties.map(property => <li key={ property.name }><small>{ property.name }: { property.value }</small></li> )}
                </ul>) 
            }
        </article>
    </>);
}