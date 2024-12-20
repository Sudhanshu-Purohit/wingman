import DataTable from "./data-table"


const Orders = () => {
    return (
        <div className='w-full flex flex-col gap-8'>
            <h2 className='text-xl font-medium'>Orders</h2>

            <DataTable />
        </div>
    )
}

export default Orders
