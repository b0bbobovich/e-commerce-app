import { useLocation } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
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
  UpdateForm,
  FormLeftContainer,
  UpdatingItemTitle,
  UpdatingItemInput,
  UploadContainer,
  CurrentProductImg,
  FormRightContainer,
  UpdateButton,
  UploadIcon
} from "./Product.styled";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  
  const handleImgUpload = (event) => {
    const productImg = document.getElementById("productImg");
    productImg.src = URL.createObjectURL(event.target.files[0]); 
    productImg.onload = () => {
      URL.revokeObjectURL(productImg.src);
    }
  }

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
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
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
                          <FeatureValue>5123</FeatureValue>                           {/* TODO INSERT REAL SALES NUMBER */}
                      </ProductFeatureContainer>
                      <ProductFeatureContainer>
                          <FeatureName>in stock:</FeatureName>
                          <FeatureValue>{String(product.inStock)}</FeatureValue>
                      </ProductFeatureContainer>
                  </RightBottomContainer>
              </RightContainer>
          </TopContainer>
          <BottomContainer>
            <UpdateForm>
              <FormLeftContainer>
                <UpdatingItemTitle>Product Name</UpdatingItemTitle>
                <UpdatingItemInput type="text" placeholder={product.title} />
                <UpdatingItemTitle>Product Description</UpdatingItemTitle>
                <textarea rows="5" cols="50" autoComplete="off" placeholder={product.description} /> 
                <UpdatingItemTitle>Price</UpdatingItemTitle>
                <UpdatingItemInput type="number" placeholder={product.price} />
                <UpdatingItemTitle>In Stock</UpdatingItemTitle>
                <select name="inStock" id="idStock" style={{marginBottom: 10}}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </FormLeftContainer>
              <FormRightContainer>
                <UploadContainer>
                  <CurrentProductImg id="productImg" src={product.img} alt=""/>
                  <label htmlFor="file">
                    <UploadIcon>
                      <Publish />
                    </UploadIcon>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} onChange={handleImgUpload} />
                </UploadContainer>
                <UpdateButton>Update</UpdateButton>
              </FormRightContainer>
            </UpdateForm>
          </BottomContainer>
    </ProductContainer>
  );
}

export default Product;