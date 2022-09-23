import { BigInt } from "@graphprotocol/graph-ts"
import {
  WalletRegistry,
  ActiveWalletChangedEvent,
  OwnershipTransferred,
  WalletCreatedEvent
} from "../generated/WalletRegistry/WalletRegistry"
import { UserEntity, WalletEntity } from "../generated/schema"

export function handleActiveWalletChangedEvent(
  event: ActiveWalletChangedEvent
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let walletEntity = WalletEntity.load(event.params.walletAddress.toHex())

  let userEntity = UserEntity.load(event.params.owner.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (walletEntity == null) {
    walletEntity = new WalletEntity(event.params.walletAddress.toHex())

  }

  if (userEntity == null) {
    userEntity = new UserEntity(event.params.owner.toHex())

  }
  userEntity.activeWallet = walletEntity.id;
  userEntity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void { }

export function handleWalletCreatedEvent(event: WalletCreatedEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let walletEntity = WalletEntity.load(event.params.walletAddress.toHex())

  let userEntity = UserEntity.load(event.params.owner.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (walletEntity == null) {
    walletEntity = new WalletEntity(event.params.walletAddress.toHex())

  }

  if (userEntity == null) {
    userEntity = new UserEntity(event.params.owner.toHex())

  }
  walletEntity.walletId = BigInt.fromI32(event.params.id);
  walletEntity.walletAddress = event.params.walletAddress;
  walletEntity.owner = userEntity.id;
  userEntity.activeWallet = walletEntity.id;
  userEntity.address = event.params.owner;
  var wallets = userEntity.wallets;
  if (wallets == null) {
    wallets = [walletEntity.id]
  } else {
    wallets.push(walletEntity.id);

  }
  userEntity.wallets = wallets;
  walletEntity.save();
  userEntity.save();

}
