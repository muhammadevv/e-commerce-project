import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Axios from "../../api";
import { productWithCategoryId, productWithSlug } from "../../utils/urls";

export const productGet = createAsyncThunk('product/get', async (slug) => {
  let response = await Axios.get(productWithSlug(slug))
  return response.data
})

export const productRecommendeds = createAsyncThunk('product/withCateogryId', async (id) => {
  let response = await Axios.get(productWithCategoryId(id))
  return response.data
})