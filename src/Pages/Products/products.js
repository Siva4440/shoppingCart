import React, { useEffect, useState } from "react";
import Product from "../../Components/product";
import {
  getAllProductsService,
  getCategoriesService,
  getProductByCategory,
} from "../../Services/productsAPI";

import { Grid } from "@mui/material";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    getAllProductsService()
      .then((res) => {
        // console.log("res", res.data.products)
        setProductList(res.data.products);
      })
      .catch();
  }, []);

  useEffect(() => {
    getCategoriesService().then((res) => {
      // console.log("response", res)
      setCategories(res.data);
    });
    
  }, []);

  useEffect(()=>{
   if(selectCategory){
    getProductByCategory(selectCategory).then(res=>{
        // console.log("res",res.data.products)
        setProductList(res.data.products)
    })
   }
  },[selectCategory])

  // console.log("sel", selectCategory)
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <Grid container  >
          {categories.map((item,index) => {
            return (
              <Grid item
                xs={1} key={index}
                style={{
                  padding: "2px",
                  display: "inline-block",
                  backgroundColor: "red",
                  color: "white",
                  cursor: "pointer",
                  margin: "1px",
                  textAlign:'center',
                  
                }}
              >
                <span onClick={()=>setSelectCategory((item))}>{item}</span>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div style={{ padding: "20px" }}>
        <Grid container spacing={1}>
          {productList.map((item, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Product prod={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
