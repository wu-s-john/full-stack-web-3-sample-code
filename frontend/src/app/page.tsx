import { OwnershipTable } from "@/components/OwnershipTable";
import { Button } from "@/components/ui/button";
import { Owner } from "@/types";
import Image from "next/image";

export default function Home() {
  const mockOwnership: Owner = {
    tokenId: 1,
    address: "0x1234",
  };
  const getOwners = async (): Promise<Owner[]> => {
    //TODO: Call to backend to get ownerships
    return [];
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div>
          <Button className="w-[400px] mb-4">Mint</Button>
          <h2 className="text-2xl font-bold mt-12 mb-4">Ownerships</h2>
          <OwnershipTable owners={[mockOwnership]} />
        </div>
      </div>
    </main>
  );
}
