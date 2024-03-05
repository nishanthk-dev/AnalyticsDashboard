
import DataTable from "../Components/DataTable"
import { products } from "../Components/data";



const Products = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];
  return (
    <div className="">
      <div className= 'mx-9 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-white mb-3'>Products</h1>
      <button className='border border-solid border-white px-6  py-3 m-9 rounded-full text-white'>Add Products</button>
      </div>
      <DataTable columns={columns} rows={products}/>
    </div>
  )
}

export default Products
