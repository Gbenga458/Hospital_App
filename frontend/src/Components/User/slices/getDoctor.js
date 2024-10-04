// import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

//  const initialState={
//     doctor:[],
//     isLoading:false,
//     error:''
// }

//  export const getdoctor=createAsyncThunk("getdoctor", async()=>{
//     const res=await fetch("http://localhost:8080/public/doctor")
//     const data=res.json()
//     return data

// })
// export const getDoctor=createSlice({
//     name:'getDoctor',
//     initialState,
//     extraReducers:{
//         [getdoctor.pending]:(state)=>{
//             state.isLoading=true
//         },
//         [getdoctor.fulfilled]:(state,action)=>{
//             state.isLoading=false
//             state.doctor=action.payload
//         },
//         [getdoctor.rejected]:(state,action)=>{
//             state.isLoading=false
//             state.error=action.payload
//         }

//     }

// })


// export default getDoctor.reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor: [],
  isLoading: false,
  error: ''
};

// Create async thunk for fetching doctor data
export const getdoctor = createAsyncThunk("doctor/getDoctor", async () => {
  try {
    const res = await fetch("http://localhost:8080/public/doctor");
    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }
    const data = await res.json(); // Await the JSON response
    return data;
  } catch (error) {
    return Promise.reject(error.message || "Something went wrong");
  }
});

// Create slice for doctor data
const getDoctor = createSlice({
  name: 'doctor',
  initialState,
  reducers: {}, // Define reducers if needed
  extraReducers: (builder) => {
    builder
      .addCase(getdoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getdoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctor = action.payload;
        state.error = ''; // Clear previous errors on success
      })
      .addCase(getdoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to load doctors"; // Handle rejection message
      });
  },
});

// Export the reducer as default
export default getDoctor.reducer;

// If you need to use getdoctor elsewhere, you can import it without exporting again here.
