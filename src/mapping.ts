import { BigInt } from "@graphprotocol/graph-ts"
import {
  EpochBase,
  ExpireJobEvent,
  JobExecutionEvent,
  JobInfoEvent,
  JobParamsEvent,
  MetaTransactionExecuted
} from "../generated/EpochBase/EpochBase"
import { JobExecutionEventEntity, JobInfoEventEntity, JobParamsEventEntity } from "../generated/schema"

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
  var success: String = event.params.success ? "True" : "False";
  entity.success = entity.success == null ? "" : entity.success + "-" + success;
  entity.data = event.params.data;
  entity.nextExecution = entity.nextExecution == null ? "" : entity.nextExecution + "-" + event.params.nextExecution.toString();
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
  let entity = JobParamsEventEntity.load(event.params.id.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new JobParamsEventEntity(event.params.id.toHex())
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
