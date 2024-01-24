import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Transfer as TransferEvent, GlowNFT} from "../generated/GlowNFT/GlowNFT"
import { NFT, User, Transfer } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let nft = NFT.load(event.params.tokenId.toString())
  if (nft == null) {
    nft = new NFT(event.params.tokenId.toString())
    nft.tokenURI = fetchTokenURI(event.params.tokenId, event.address)
  }

  let userFrom = User.load(event.params.from.toHex())
  if (userFrom == null) {
    userFrom = new User(event.params.from.toHex())
    userFrom.save()
  }

  let userTo = User.load(event.params.to.toHex())
  if (userTo == null) {
    userTo = new User(event.params.to.toHex())
    userTo.save()
  }

  nft.owner = userTo.id
  nft.save()

  let transfer = new Transfer(event.transaction.hash.toHex())
  transfer.nft = nft.id
  transfer.from = userFrom.id
  transfer.to = userTo.id
  transfer.timestamp = event.block.timestamp
  transfer.save()
}

function fetchTokenURI(tokenId: BigInt, contractAddress: Address): string {
  let contract = GlowNFT.bind(contractAddress)
  let tokenURICall = contract.try_tokenURI(tokenId)
  if (tokenURICall.reverted) {
    return ""
  } else {
    return tokenURICall.value
  }
}
