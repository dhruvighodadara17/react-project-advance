import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

// Define the Image Type
interface Image {
  id: string
  author: string
  download_url: string
}

// Define the State Structure
interface ImageState {
  images: Image[]
  loading: boolean
  error: string | null
}

// Initial State
const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
}

// ✅ Fetch Images from API using AsyncThunk
export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=50')
  return (await response.json()) as Image[]
})

// ✅ Create Image Slice
const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchImages.fulfilled, (state, action: PayloadAction<Image[]>) => {
        state.loading = false
        state.images = action.payload
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to load images'
      })
  },
})

export default imageSlice.reducer
