import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WalletState {
  walletAddress: string;
  balance: number;
}

// Define the initial state using that type
const initialState: WalletState = {
  walletAddress: "",
  balance: 0
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWalletInfo: (state, action: PayloadAction<WalletState>) => {
      state.walletAddress = action.payload.walletAddress;
      state.balance = action.payload.balance;
    }
  }
});

export const { setWalletInfo } = walletSlice.actions;

export default walletSlice.reducer;
