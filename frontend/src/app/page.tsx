'use client'


import { OwnershipTable } from "@/components/OwnershipTable";
import { Button } from "@/components/ui/button";
import { Owner } from "@/types";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { NFTAbi } from "../abi/NFTAbi";
import { erc721Address } from "../constants";

export default function Home() {
  // set state for owners
  const [owners, setOwners] = useState<Owner[]>([]);
  const { config } = usePrepareContractWrite({
    address: erc721Address,
    abi: NFTAbi,
    functionName: 'mint',
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  const { status } = useAccount();

  const getOwners = async (): Promise<Owner[]> => {
    //TODO: Call to backend to get ownerships
    return [];
  };

  const mintNFT = () => {
    if (status !== 'connected') {
      toast.error('Please connect your wallet first');
      return;
    }

    if (write) {
      write();
    }
  };

  // Notifiy the user that minting the NFT was successful

  useEffect(() => {
    if (isSuccess) {
      toast.success('NFT minted successfully');
    }
  }, [isSuccess])


  useEffect(() => {
    getOwners().then((owners) => {
      setOwners(owners);
    })
  }, [data, isLoading, isSuccess, write])



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div>
          <div className="flex flex-col ">
            <Button className="mb-4 flex">
              <ConnectButton />
            </Button>

            <Button className="w-[400px] mb-4" onClick={mintNFT}>Mint</Button>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Ownerships</h2>
          <OwnershipTable owners={owners} />
        </div>
      </div>
    </main>
  );
}
