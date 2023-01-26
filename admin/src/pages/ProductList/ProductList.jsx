import { DataGrid } from '@mui/x-data-grid';
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import {
  ProductListContainer,
  ProductListItem,
  ProductImg,
  ProductTitle,
  ActionContainer,
  EditProduct,
  DeleteProduct
} from "./ProductList.styled";


const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);                      
    
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
        {
          field: "_id",
          headerName: "ID",
          flex: 2
        },
        {
          field: "product",
          headerName: "Product",
          flex: 3,
          renderCell: (params) => {
              return (
                    <ProductListItem>
                      <ProductImg src={params.row.img} alt="" />
                      {params.row.title}
                      <ProductTitle>{params.row.name}</ProductTitle>
                    </ProductListItem>
              );
            },
        },
        {
          field: "inStock",
          headerName: "Stock",
          flex: 1,
        },
        {
          field: "price",
          headerName: "Price",
          flex: 1,
        },
        {
          field: "action",
          headerName: "Action",
          flex: 1,
          renderCell: (params) => {
              return (
                <ActionContainer>
                  <EditProduct to={"/product/" + params.row._id}>
                    Edit
                  </EditProduct>
                  <DeleteProduct onClick={() => handleDelete(params.row._id)}>
                    Delete
                  </DeleteProduct> 
                </ActionContainer>
            );
          },
        },
  ];

    return (
      <ProductListContainer>
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          autoPageSize={true}
          checkboxSelection
          
          />
      </ProductListContainer>
    );
}
export default ProductList;