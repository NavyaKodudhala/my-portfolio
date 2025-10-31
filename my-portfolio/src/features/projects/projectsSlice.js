
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepos = createAsyncThunk(
  "projects/fetchRepos",
  async (username = "octocat") => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=12&sort=updated`
    );
    return res.data;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
