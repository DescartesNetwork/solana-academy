import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "store/wallet.reducer";

export const store = configureStore({
  reducer: {
    wallet: walletReducer
  }
});

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {wallet: WalletState}
export type AppDispatch = typeof store.dispatch;
