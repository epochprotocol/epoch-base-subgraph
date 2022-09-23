// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class JobInfoEventEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save JobInfoEventEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JobInfoEventEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JobInfoEventEntity", id.toString(), this);
    }
  }

  static load(id: string): JobInfoEventEntity | null {
    return changetype<JobInfoEventEntity | null>(
      store.get("JobInfoEventEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get executionInterval(): BigInt | null {
    let value = this.get("executionInterval");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set executionInterval(value: BigInt | null) {
    if (!value) {
      this.unset("executionInterval");
    } else {
      this.set("executionInterval", Value.fromBigInt(<BigInt>value));
    }
  }

  get strictExecution(): boolean {
    let value = this.get("strictExecution");
    return value!.toBoolean();
  }

  set strictExecution(value: boolean) {
    this.set("strictExecution", Value.fromBoolean(value));
  }

  get jobInfoData(): Bytes | null {
    let value = this.get("jobInfoData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set jobInfoData(value: Bytes | null) {
    if (!value) {
      this.unset("jobInfoData");
    } else {
      this.set("jobInfoData", Value.fromBytes(<Bytes>value));
    }
  }
}

export class JobParamsEventEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save JobParamsEventEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JobParamsEventEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JobParamsEventEntity", id.toString(), this);
    }
  }

  static load(id: string): JobParamsEventEntity | null {
    return changetype<JobParamsEventEntity | null>(
      store.get("JobParamsEventEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get initiatorAddress(): Bytes | null {
    let value = this.get("initiatorAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set initiatorAddress(value: Bytes | null) {
    if (!value) {
      this.unset("initiatorAddress");
    } else {
      this.set("initiatorAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get executionContract(): Bytes | null {
    let value = this.get("executionContract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set executionContract(value: Bytes | null) {
    if (!value) {
      this.unset("executionContract");
    } else {
      this.set("executionContract", Value.fromBytes(<Bytes>value));
    }
  }

  get functionSignature(): Bytes | null {
    let value = this.get("functionSignature");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set functionSignature(value: Bytes | null) {
    if (!value) {
      this.unset("functionSignature");
    } else {
      this.set("functionSignature", Value.fromBytes(<Bytes>value));
    }
  }

  get tokensInvolved(): string | null {
    let value = this.get("tokensInvolved");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokensInvolved(value: string | null) {
    if (!value) {
      this.unset("tokensInvolved");
    } else {
      this.set("tokensInvolved", Value.fromString(<string>value));
    }
  }

  get data(): Bytes | null {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set data(value: Bytes | null) {
    if (!value) {
      this.unset("data");
    } else {
      this.set("data", Value.fromBytes(<Bytes>value));
    }
  }
}

export class JobExecutionEventEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JobExecutionEventEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JobExecutionEventEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JobExecutionEventEntity", id.toString(), this);
    }
  }

  static load(id: string): JobExecutionEventEntity | null {
    return changetype<JobExecutionEventEntity | null>(
      store.get("JobExecutionEventEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isExpired(): boolean {
    let value = this.get("isExpired");
    return value!.toBoolean();
  }

  set isExpired(value: boolean) {
    this.set("isExpired", Value.fromBoolean(value));
  }

  get data(): Bytes | null {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set data(value: Bytes | null) {
    if (!value) {
      this.unset("data");
    } else {
      this.set("data", Value.fromBytes(<Bytes>value));
    }
  }

  get jobExecutionStatus(): Array<string> | null {
    let value = this.get("jobExecutionStatus");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set jobExecutionStatus(value: Array<string> | null) {
    if (!value) {
      this.unset("jobExecutionStatus");
    } else {
      this.set(
        "jobExecutionStatus",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }
}

export class JobExecutionStatusEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JobExecutionStatusEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JobExecutionStatusEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JobExecutionStatusEntity", id.toString(), this);
    }
  }

  static load(id: string): JobExecutionStatusEntity | null {
    return changetype<JobExecutionStatusEntity | null>(
      store.get("JobExecutionStatusEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get success(): boolean {
    let value = this.get("success");
    return value!.toBoolean();
  }

  set success(value: boolean) {
    this.set("success", Value.fromBoolean(value));
  }

  get nextExecution(): BigInt | null {
    let value = this.get("nextExecution");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nextExecution(value: BigInt | null) {
    if (!value) {
      this.unset("nextExecution");
    } else {
      this.set("nextExecution", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class WalletEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WalletEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WalletEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WalletEntity", id.toString(), this);
    }
  }

  static load(id: string): WalletEntity | null {
    return changetype<WalletEntity | null>(store.get("WalletEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get walletId(): BigInt {
    let value = this.get("walletId");
    return value!.toBigInt();
  }

  set walletId(value: BigInt) {
    this.set("walletId", Value.fromBigInt(value));
  }

  get walletAddress(): Bytes {
    let value = this.get("walletAddress");
    return value!.toBytes();
  }

  set walletAddress(value: Bytes) {
    this.set("walletAddress", Value.fromBytes(value));
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }
}

export class UserEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserEntity", id.toString(), this);
    }
  }

  static load(id: string): UserEntity | null {
    return changetype<UserEntity | null>(store.get("UserEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (!value) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(<Bytes>value));
    }
  }

  get activeWallet(): string | null {
    let value = this.get("activeWallet");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set activeWallet(value: string | null) {
    if (!value) {
      this.unset("activeWallet");
    } else {
      this.set("activeWallet", Value.fromString(<string>value));
    }
  }

  get wallets(): Array<string> | null {
    let value = this.get("wallets");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set wallets(value: Array<string> | null) {
    if (!value) {
      this.unset("wallets");
    } else {
      this.set("wallets", Value.fromStringArray(<Array<string>>value));
    }
  }
}
