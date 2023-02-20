import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsList: [],
  loading: true,
};

//? state'lerin API gibi async kaynaklardan gelen verilere göre güncellenmesi gerekebilir.
//? async işlem tamamlandıktan soru state güncellenmeli
//? gönderilen api isteği ile dogrudan state güncellenmemelidir.
//?Bunun için bir arabirim kullanılıyor, bunun adına middleware denilir. Redux-toolkit default olarak Thunk kullanmaktadır.
//* Thunk'un amacı reducer a islenmiş sonucları gondermeden once gecikmeli asenkron islemlerin yurutulmesini saglamaktır.

const API_KEY = "7df8731b556a4966b0412e084f455423";
//news/getNews action-type ismi   ****async
export const getNews = createAsyncThunk("news/getNews", async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  try {
      const { data } = await axios.get(url);
      console.log(data.articles)
      
    return data.articles;
  } catch (error) {
    console.log(error);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers:  {
    [getNews.pending]: (state, action) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.newsList = payload;
    },
    [getNews.rejected]: (state) => {
      state.loading = false;
    },
  },
});

//! baska slice'lardaki tanimlanan action'lara cevap vermek
//! bilhassa createAsyncThunk tarafından oluşturulan action'lara
//! cevap vermek için kullanılır.
export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;
