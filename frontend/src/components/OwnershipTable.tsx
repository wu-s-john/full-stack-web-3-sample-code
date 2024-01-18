import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Owner } from "@/types";

export const OwnershipTable = ({ owners }: { owners: Owner[] }) => {
  return (
    <Table>
      <TableCaption>A list ownerships</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Owner</TableHead>
          <TableHead className="text-right">Token Id</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {owners.map((owner) => (
          <TableRow key={owner.address}>
            <TableCell className="font-medium">{owner.address}</TableCell>
            <TableCell className="text-right">{owner.tokenId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
