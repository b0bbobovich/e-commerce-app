import { useLocation } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { Publish } from "@material-ui/icons";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useMemo, useState, forwardRef, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import {
  ProductContainer,
  ProductTitleContainer,
  AddProductButton,
  TopContainer,
  LeftContainer,
  RightContainer,
  RightTopContainer,
  ProductImg,
  ProductName,
  RightBottomContainer,
  ProductFeatureContainer,
  FeatureName,
  FeatureValue,
  BottomContainer,
  SubmitForm,
  FormLeftContainer,
  TextArea,
  Select,
  Option,
  InputLabel,
  Input,
  UploadContainer,
  InputFileLabel,
  CurrentImgContainer,
  Image,
  ImageLabel,
  UploadInput,
  FormRightContainer,
  UpdateButton,
  UploadButton,
  IconLabel,
} from "./Product.styled";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../redux/productSlice";
import { useSelector } from "react-redux";


const Product = () => {
  const token = useSelector(state => state.user.currentUser.accessToken);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [fileName, setFileName] = useState("");
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const {
    data: products,
    isError
  } = useGetProductsQuery();
  const product = products.find((product) => product._id === productId);
  const [updateProduct] = useUpdateProductMutation();

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleImgUpload = (event) => {
    const productImg = document.getElementById("productImg");
    productImg.src = URL.createObjectURL(event.target.files[0]);
    productImg.onload = () => {
      URL.revokeObjectURL(productImg.src);
    };
    setFileName(event.target.files.item(0).name);
  };

  const prepareFormData = (form) => {
    const productImg = form.img?.files[0];
    const formData = new FormData();
    formData.append("_id", productId);
    form.title && formData.append("title", form.title.value);
    form.description && formData.append("description", form.description.value);
    productImg && formData.append("images", productImg, productImg.name);
    form.price && formData.append("price", form.price.value);
    form.stock && formData.append("inStock", form.stock.value);
    return formData;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = prepareFormData(event.target);
    let updatedData = {};
    for (let key of formData.keys()) {
      updatedData[key] = formData.get(key);
    }
    try {
      updateProduct(updatedData);
      setIsOpenSnackbar(true);

    } catch (err) {
      console.error("Error: ", err);
      setIsOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpenSnackbar(false);
  };

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest(token).get("orders/income?pid=" + productId);
        const list = res.data.monthlyStats.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <ProductContainer>
      <ProductTitleContainer>
        <h1>Product</h1>
        <AddProductButton to="/newproduct">Create</AddProductButton>
      </ProductTitleContainer>
      <TopContainer>
        <LeftContainer>
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </LeftContainer>
        <RightContainer>
          <RightTopContainer>
            <ProductImg src={product.img} alt="" />
            <ProductName>{product.name}</ProductName>
          </RightTopContainer>
          <RightBottomContainer>
            <ProductFeatureContainer>
              <FeatureName>id:</FeatureName>
              <FeatureValue>{product._id}</FeatureValue>
            </ProductFeatureContainer>
            <ProductFeatureContainer>
              <FeatureName>sales:</FeatureName>
              <FeatureValue>5123</FeatureValue>{" "}
              {/* TODO INSERT REAL SALES NUMBER */}
            </ProductFeatureContainer>
            <ProductFeatureContainer>
              <FeatureName>in stock:</FeatureName>
              <FeatureValue>{String(product.inStock)}</FeatureValue>
            </ProductFeatureContainer>
          </RightBottomContainer>
        </RightContainer>
      </TopContainer>
      <BottomContainer>
        <SubmitForm id="update-form" onSubmit={handleSubmit}>
          <FormLeftContainer>
            <InputLabel>Product Name</InputLabel>
            <Input name="title" type="text" placeholder={product.title} />
            <InputLabel>Product Description</InputLabel>
            <TextArea
              name="description"
              rows="5"
              cols="50"
              autoComplete="off"
              placeholder={product.description}
              form="submit-form"
            />
            <InputLabel>Price</InputLabel>
            <Input name="price" type="number" placeholder={product.price} />
            <InputLabel>In Stock</InputLabel>
            <Select
              name="stock"
              id="id-stock"
              form="update-form"
              defaultValue={"true"}
            >
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </FormLeftContainer>
          <FormRightContainer>
            <InputFileLabel>Product Image</InputFileLabel>
            <UploadContainer>
              <CurrentImgContainer>
                <Image id="productImg" src={product.img} alt="" />
                <ImageLabel>{fileName}</ImageLabel>
              </CurrentImgContainer>
              <InputLabel htmlFor="file-upload">
                <UploadButton>
                  <Publish />
                  <IconLabel>Upload</IconLabel>
                </UploadButton>
              </InputLabel>
              <UploadInput
                name="img"
                type="file"
                id="file-upload"
                onChange={handleImgUpload}
                accept="image/png, image/jpeg, image/jpg"
              />
            </UploadContainer>
            <UpdateButton type="submit" form="update-form">
              Update
            </UpdateButton>
          </FormRightContainer>
        </SubmitForm>
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
              Updating failed!
            </Alert>
            :
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully updated!
          </Alert>
          
          }
        </Snackbar>
      </BottomContainer>
    </ProductContainer>
  );
};

export default Product;
