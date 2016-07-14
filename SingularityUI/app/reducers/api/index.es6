import { combineReducers } from 'redux';
import buildApiActionReducer from './base';
import buildKeyedApiActionReducer from './keyed';

import { FetchUser } from '../../actions/api/auth';
import {
  FetchPendingDeploys,
  SaveDeploy
} from '../../actions/api/deploys';

import {
  FetchTaskHistory,
  FetchActiveTasksForRequest,
  FetchTaskHistoryForRequest,
  FetchActiveTasksForDeploy,
  FetchTaskHistoryForDeploy,
  FetchDeployForRequest,
  FetchDeploysForRequest,
  FetchTaskSearchParams,
  FetchRequestHistory
} from '../../actions/api/history';

import { FetchTaskS3Logs } from '../../actions/api/logs';

import {
  FetchRacks,
  FreezeRack,
  DecommissionRack
} from '../../actions/api/racks';

import {
  FetchRequests,
  FetchRequest,
  SaveRequest,
  RemoveRequest,
  PauseRequest,
  UnpauseRequest,
  ExitRequestCooldown,
  FetchRequestsInState
} from '../../actions/api/requests';

import { FetchTaskFiles } from '../../actions/api/sandbox';

import {
  FetchSlaves,
  FreezeSlave,
  DecommissionSlave
} from '../../actions/api/slaves';

import {
  FetchSingularityStatus
} from '../../actions/api/state';

import {
  FetchTasksInState,
  FetchScheduledTasksForRequest,
  FetchTask, // currently FetchTaskHistory is used for `task` in the store
  KillTask,
  FetchTaskCleanups,
  FetchTaskStatistics,
  RunCommandOnTask
} from '../../actions/api/tasks';

import { FetchWebhooks } from '../../actions/api/webhooks';

const user = buildApiActionReducer(FetchUser);
const webhooks = buildApiActionReducer(FetchWebhooks, []);
const slaves = buildApiActionReducer(FetchSlaves, []);
const racks = buildApiActionReducer(FetchRacks, []);
const request = buildKeyedApiActionReducer(FetchRequest);
const saveRequest = buildApiActionReducer(SaveRequest);
const requests = buildApiActionReducer(FetchRequests, []);
const requestsInState = buildApiActionReducer(FetchRequestsInState, []);
const requestHistory = buildKeyedApiActionReducer(FetchRequestHistory, []);
const status = buildApiActionReducer(FetchSingularityStatus);
const deploy = buildApiActionReducer(FetchDeployForRequest);
const deploys = buildApiActionReducer(FetchPendingDeploys, []);
const deploysForRequest = buildKeyedApiActionReducer(FetchDeploysForRequest, []);
const saveDeploy = buildApiActionReducer(SaveDeploy);
const activeTasksForDeploy = buildApiActionReducer(FetchActiveTasksForDeploy);
const activeTasksForRequest = buildKeyedApiActionReducer(FetchActiveTasksForRequest, []);
const scheduledTasksForRequest = buildKeyedApiActionReducer(FetchScheduledTasksForRequest, []);
const taskHistoryForDeploy = buildApiActionReducer(FetchTaskHistoryForDeploy);
const taskHistoryForRequest = buildKeyedApiActionReducer(FetchTaskHistoryForRequest, []);
const taskCleanups = buildApiActionReducer(FetchTaskCleanups, []);
const taskFiles = buildKeyedApiActionReducer(FetchTaskFiles, []);
const taskResourceUsage = buildApiActionReducer(FetchTaskStatistics);
const taskS3Logs = buildApiActionReducer(FetchTaskS3Logs, []);
const taskShellCommandResponse = buildApiActionReducer(RunCommandOnTask);
const task = buildKeyedApiActionReducer(FetchTaskHistory);
const taskHistory = buildApiActionReducer(FetchTaskSearchParams, []);
const tasks = buildApiActionReducer(FetchTasksInState, []);

export default combineReducers({
  user,
  webhooks,
  slaves,
  racks,
  request,
  saveRequest,
  requests,
  requestsInState,
  requestHistory,
  status,
  deploy,
  deploys,
  deploysForRequest,
  saveDeploy,
  task,
  tasks,
  activeTasksForDeploy,
  activeTasksForRequest,
  scheduledTasksForRequest,
  taskHistoryForDeploy,
  taskHistoryForRequest,
  taskCleanups,
  taskFiles,
  taskResourceUsage,
  taskS3Logs,
  taskShellCommandResponse,
  taskHistory
});
