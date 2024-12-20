import DataTable from '@/components/dashboard/orders/data-table'

const Sales = () => {
    return (
        <div className="h-full flex flex-col gap-5 mt-14 p-8">
            <h2 className="text-lg sm:text-xl mt-5 font-medium">Recent Orders</h2>
            <DataTable />
        </div>
    )
}

export default Sales
