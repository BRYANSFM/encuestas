import { Button, ButtonGroup, divider } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { 
  Input, 
  Select, 
  SelectItem, 
  SelectSection 
} from "@nextui-org/react";

const opciones = [
  {
    label: "Si",
    value: "si",
  },
  {
    label: "No",
    value: "no",
  },
];

export default function Home() {
  return (
    <div>
      <div className=" flex justify-between h-16">
        <div className="text-3xl font-bold">Encuestas</div>
        <Button
          className="font-bold"
          radius="none"
          color="primary"
          variant="flat"
        >
          Agregar Nueva Encuesta
        </Button>
      </div>
      <div className="w-[50rem] gap-2">
        <Input
          className="w-[36rem]"
          variant="faded"
          labelPlacement="outside"
          type="text"
          label={
            <h1 className="text-base font-bold text-[#6c7177]">
              Filtrar por Nombre
            </h1>
          }
          placeholder=" "
        />
        {/* <Select
          key='select'
          label='Filtrar por Habilitado'
          placeholder="Selecciona"
          radius="none"
          variant="bordered"
        >
          {opciones.map(({label, value}, index)=>(
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </Select>  */}
      </div>
      <div>
      <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </div>
    </div>
  );
}
