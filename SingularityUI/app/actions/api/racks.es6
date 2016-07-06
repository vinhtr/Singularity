import { buildApiAction, buildJsonApiAction } from './base';

export const FetchRacks = buildApiAction(
  'FETCH_RACKS',
  {url: '/racks'}
);

export const FreezeRack = buildJsonApiAction(
  'FREEZE_RACK',
  'POST',
  (rackId, message) => ({
    url: `/racks/${rackId}/freeze`,
    body: { message }
  })
);

export const DecommissionRack = buildJsonApiAction(
  'DECOMMISSION_RACK',
  'POST',
  (rackId, message) => ({
    url: `/racks/${rackId}/decommission`,
    body: { message }
  })
);

export const RemoveRack = buildJsonApiAction(
  'REMOVE_RACK',
  'DELETE',
  (rackId, message) => ({
    url: `/racks/${rackId}`,
    body: { message }
  })
);

export const ReactivateRack = buildJsonApiAction(
  'ACTIVATE_RACK',
  'POST',
  (rackId, message) => ({
    url: `/racks/${rackId}/activate`,
    body: { message }
  })
);
