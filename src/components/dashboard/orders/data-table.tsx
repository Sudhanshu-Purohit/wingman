'use client';

import {
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { columns } from "./columns";
import { DataTablePagination } from "./data-table-pagination";


const data = [
    {
        id: "1",
        product: {
            name: "Gaming Console",
            image: "https://picsum.photos/id/1050/200/300", // Gaming Console image
        },
        date: "01 Jan 2024",
        time: "1h 30m",
        value: "$400.00",
        commission: "$120",
    },
    {
        id: "2",
        product: {
            name: "Smartphone",
            image: "https://picsum.photos/id/1030/200/300", // Smartphone image
        },
        date: "05 Feb 2024",
        time: "2h 15m",
        value: "$600.00",
        commission: "$180",
    },
    {
        id: "3",
        product: {
            name: "Laptop Computer",
            image: "https://picsum.photos/id/1080/200/300", // Laptop image
        },
        date: "10 Mar 2024",
        time: "3h 45m",
        value: "$1,000.00",
        commission: "$300",
    },
    {
        id: "4",
        product: {
            name: "4K Television",
            image: "https://picsum.photos/id/1090/200/300", // 4K TV image
        },
        date: "15 Apr 2024",
        time: "4h 20m",
        value: "$800.00",
        commission: "$240",
    },
    {
        id: "5",
        product: {
            name: "Wireless Headphones",
            image: "https://picsum.photos/id/1060/200/300", // Headphones image
        },
        date: "20 May 2024",
        time: "5h 10m",
        value: "$200.00",
        commission: "$60",
    },
    {
        id: "6",
        product: {
            name: "Digital Camera",
            image: "https://picsum.photos/id/1100/200/300", // Camera image
        },
        date: "25 Jun 2024",
        time: "6h 30m",
        value: "$500.00",
        commission: "$150",
    },
    {
        id: "7",
        product: {
            name: "Smart Watch",
            image: "https://picsum.photos/id/1110/200/300", // Smart Watch image
        },
        date: "30 Jul 2024",
        time: "7h 45m",
        value: "$250.00",
        commission: "$75",
    },
    {
        id: "8",
        product: {
            name: "Tablet Device",
            image: "https://picsum.photos/id/1120/200/300", // Tablet image
        },
        date: "04 Aug 2024",
        time: "8h 20m",
        value: "$450.00",
        commission: "$135",
    },
    {
        id: "9",
        product: {
            name: "Bluetooth Speaker",
            image: "https://picsum.photos/id/1130/200/300", // Speaker image
        },
        date: "09 Sep 2024",
        time: "9h 10m",
        value: "$180.00",
        commission: "$54",
    },
    {
        id: "10",
        product: {
            name: "Fitness Tracker",
            image: "https://picsum.photos/id/1140/200/300", // Fitness Tracker image
        },
        date: "14 Oct 2024",
        time: "10h 50m",
        value: "$80.00",
        commission: "$24",
    },
    {
        id: "11",
        product: {
            name: "Robot Vacuum Cleaner",
            image: "https://picsum.photos/id/1150/200/300", // Vacuum Cleaner image
        },
        date: "19 Nov 2024",
        time: "11h 25m",
        value: "$300.00",
        commission: "$90",
    },
    {
        id: "12",
        product: {
            name: "Air Purifier",
            image: "https://picsum.photos/id/1160/200/300", // Air Purifier image
        },
        date: "24 Dec 2024",
        time: "12h 15m",
        value: "$220.00",
        commission: "$66",
    },
    {
        id: "13",
        product: {
            name: "Stand Mixer",
            image: "https://picsum.photos/id/1170/200/300", // Stand Mixer image
        },
        date: "29 Jan 2024",
        time: "13h 05m",
        value: "$350.00",
        commission: "$105",
    },
    {
        id: "14",
        product: {
            name: "Espresso Machine",
            image: "https://picsum.photos/id/1180/200/300", // Espresso Machine image
        },
        date: "03 Feb 2024",
        time: "14h 50m",
        value: "$400.00",
        commission: "$120",
    },
    {
        id: "15",
        product: {
            name: "Instant Pot",
            image: "https://picsum.photos/id/1190/200/300", // Instant Pot image
        },
        date: "08 Mar 2024",
        time: "15h 35m",
        value: "$150.00",
        commission: "$45",
    },
    {
        id: "16",
        product: {
            name: "Smart Thermostat",
            image: "https://picsum.photos/id/1200/200/300", // Thermostat image
        },
        date: "13 Apr 2024",
        time: "16h 20m",
        value: "$200.00",
        commission: "$60",
    },
    {
        id: "17",
        product: {
            name: "E-book Reader",
            image: "https://picsum.photos/id/1210/200/300", // E-book Reader image
        },
        date: "18 May 2024",
        time: "17h 05m",
        value: "$120.00",
        commission: "$36",
    },
    {
        id: "18",
        product: {
            name: "Smart Light Bulb",
            image: "https://picsum.photos/id/1220/200/300", // Light Bulb image
        },
        date: "23 Jun 2024",
        time: "18h 50m",
        value: "$60.00",
        commission: "$18",
    },
    {
        id: "19",
        product: {
            name: "Electric Toothbrush",
            image: "https://picsum.photos/id/1230/200/300", // Toothbrush image
        },
        date: "28 Jul 2024",
        time: "19h 35m",
        value: "$50.00",
        commission: "$15",
    },
    {
        id: "20",
        product: {
            name: "Portable Projector",
            image: "https://picsum.photos/id/1240/200/300", // Projector image
        },
        date: "02 Aug 2024",
        time: "20h 45m",
        value: "$500.00",
        commission: "$150",
    },
    {
        id: "21",
        product: {
            name: "Digital Photo Frame",
            image: "https://picsum.photos/id/1250/200/300", // Photo Frame image
        },
        date: "07 Sep 2024",
        time: "21h 30m",
        value: "$120.00",
        commission: "$36",
    },
    {
        id: "22",
        product: {
            name: "Drone",
            image: "https://picsum.photos/id/1260/200/300", // Drone image
        },
        date: "12 Oct 2024",
        time: "22h 15m",
        value: "$800.00",
        commission: "$240",
    },
    {
        id: "23",
        product: {
            name: "Gaming Chair",
            image: "https://picsum.photos/id/1270/200/300", // Gaming Chair image
        },
        date: "17 Nov 2024",
        time: "23h 50m",
        value: "$300.00",
        commission: "$90",
    },
    {
        id: "24",
        product: {
            name: "VR Headset",
            image: "https://picsum.photos/id/1280/200/300", // VR Headset image
        },
        date: "22 Dec 2024",
        time: "24h 25m",
        value: "$400.00",
        commission: "$120",
    },
    {
        id: "25",
        product: {
            name: "Smart Home Hub",
            image: "https://picsum.photos/id/1290/200/300", // Home Hub image
        },
        date: "27 Jan 2024",
        time: "25h 15m",
        value: "$150.00",
        commission: "$45",
    },
    {
        id: "26",
        product: {
            name: "Noise-Canceling Headphones",
            image: "https://picsum.photos/id/1300/200/300", // Noise-Canceling Headphones
        },
        date: "02 Feb 2024",
        time: "26h 50m",
        value: "$300.00",
        commission: "$90",
    },
    {
        id: "27",
        product: {
            name: "Action Camera",
            image: "https://picsum.photos/id/1310/200/300", // Action Camera
        },
        date: "07 Mar 2024",
        time: "27h 35m",
        value: "$250.00",
        commission: "$75",
    },
    {
        id: "28",
        product: {
            name: "Electric Scooter",
            image: "https://picsum.photos/id/1320/200/300", // Scooter
        },
        date: "12 Apr 2024",
        time: "28h 20m",
        value: "$500.00",
        commission: "$150",
    },
    {
        id: "29",
        product: {
            name: "Air Fryer",
            image: "https://picsum.photos/id/1330/200/300", // Air Fryer
        },
        date: "17 May 2024",
        time: "29h 15m",
        value: "$100.00",
        commission: "$30",
    },
    {
        id: "30",
        product: {
            name: "Wireless Mouse",
            image: "https://picsum.photos/id/1340/200/300", // Wireless Mouse
        },
        date: "22 Jun 2024",
        time: "30h 50m",
        value: "$40.00",
        commission: "$12",
    },
];



const DataTable = () => {

    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <div className="rounded-xl border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="px-4 py-3">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <DataTablePagination
                table={table}
            />
        </div>
    )
}

export default DataTable
