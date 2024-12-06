import ContainerActivator from './provides/ContainerActivator';
import ContainerBlocker from './provides/ContainerBlocker';
import ContainerCreator from './provides/ContainerCreator';
import ContainerDeleter from './provides/ContainerDeleter';
import ContainerListRetriever from './provides/ContainerListRetriever';
import ContainerRetriever from './provides/ContainerRetriever';
import ContainerUnblocker from './provides/ContainerUnblocker';
import ContainerUpdater from './provides/ContainerUpdater';

import ContainerStore from './requires/ContainerStore';

const store = new ContainerStore();

export const containerActivatorUseCase = new ContainerActivator(store);
export const containerBlockerUseCase = new ContainerBlocker(store);
export const containerCreatorUseCase = new ContainerCreator(store);
export const containerDeleterUseCase = new ContainerDeleter(store);
export const containerListRetrieverUseCase = new ContainerListRetriever(store);
export const containerRetrieverUseCase = new ContainerRetriever(store);
export const containerUnblockerUseCase = new ContainerUnblocker(store);
export const containerUpdaterUseCase = new ContainerUpdater(store);