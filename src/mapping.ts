import { BigInt } from "@graphprotocol/graph-ts"
import {
  EpochBase,
  ExpireJobEvent,
  JobExecutionEvent,
  JobInfoEvent,
  JobParamsEvent,
  MetaTransactionExecuted
} from "../generated/EpochBase/EpochBase"
import { JobExecutionEventEntity, JobInfoEventEntity, JobExecutionStatusEntity } from "../generated/schema"

export function handleExpireJobEvent(event: ExpireJobEvent): void {
  let entity = JobExecutionEventEntity.load(event.params.id.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new JobExecutionEventEntity(event.params.id.toHex())
  }
  entity.isExpired = true;
  entity.save()
}

export function handleJobExecutionEvent(event: JobExecutionEvent): void {
  let entity = JobExecutionEventEntity.load(event.params.id.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new JobExecutionEventEntity(event.params.id.toHex())
  }

  let jobStatus = new JobExecutionStatusEntity(event.params.id.toHex()+ event.params.nextExecution.toHex())
  jobStatus.success = event.params.success;
  jobStatus.nextExecution = event.params.nextExecution;
  jobStatus.save();
  var jobStatusList = entity.jobExecutionStatus;
  if(jobStatusList == null){
    jobStatusList = [jobStatus.id]
  }else {
    jobStatusList.push(jobStatus.id);
  }
  entity.jobExecutionStatus = jobStatusList;
  entity.data = event.params.data;
  entity.isExpired = event.params.isExpired;
  entity.save()
}

export function handleJobInfoEvent(event: JobInfoEvent): void {
  let entity = JobInfoEventEntity.load(event.params.id.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new JobInfoEventEntity(event.params.id.toHex())
  }

  entity.executionInterval = event.params.executionInterval;
  entity.strictExecution = event.params.strictExecution;
  entity.jobInfoData = event.params.jobInfoData;
  entity.save()

}

export function handleJobParamsEvent(event: JobParamsEvent): void {
  let entity = JobInfoEventEntity.load(event.params.id.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new JobInfoEventEntity(event.params.id.toHex())
  }

  entity.data = event.params.data;
  entity.executionContract = event.params.executionContract;
  entity.functionSignature = event.params.functionSignature;
  entity.tokensInvolved = event.params.tokensInvolved.join("-");
  entity.initiatorAddress = event.params.initiatorAddress;

  entity.save()
}

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecuted
): void { }
