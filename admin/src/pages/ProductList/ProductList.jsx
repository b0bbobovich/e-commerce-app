import { DataGrid } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef, useState } from "react";

import {
  ProductListContainer,
  ProductListItem,
  ProductImg,
  ProductTitle,
  ActionContainer,
  EditProduct,
  DeleteProduct,
  PreloaderContainer,
  Preloader
} from "./ProductList.styled";
import { useGetProductsQuery, useDeleteProductMutation } from "../../redux/productSlice";


const ProductList = () => {
  
  const { data: products, isError, isFetching, refetch } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setIsOpenSnackbar(true);
    }
    catch (err) {
      console.error(err);
      setIsOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpenSnackbar(false);
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
  
  if (isFetching) {
    return (
      <PreloaderContainer>
        <Preloader src={process.env.PUBLIC_URL + "/preloaderLogo.svg"}/>
      </PreloaderContainer>
    )
  }
  else {
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
        <Snackbar
          open={isOpenSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          {isError === true
            ?
            <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: "100%" }}
            >
              Deleting failed!
            </Alert>
            :
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ width: "100%" }}
            >
              Successfully deleted!
            </Alert>
          }
        </Snackbar>
      </ProductListContainer>
    );
  }

}
export default ProductList;