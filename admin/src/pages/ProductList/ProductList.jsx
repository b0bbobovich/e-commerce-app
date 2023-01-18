import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import {
  ProductListContainer,
  ProductListItem,
  ProductImg,
  ProductTitle,
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
                <>
                    <EditProduct to={"/product/" + params.row._id}>
                      Edit
                    </EditProduct>
                    <DeleteProduct>
                        <DeleteOutline
                          onClick={() => handleDelete(params.row._id)}
                        />
                    </DeleteProduct>  
                </>
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
          pageSize={8}
          checkboxSelection
        />
      </ProductListContainer>
    );
}
export default ProductList;