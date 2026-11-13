import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type UserRole = "Sales Representative" | "Manager" | "Admin";
export type SessionUser = { name:string; email:string; role:UserRole; initials:string; title:string };
type AuthState = { user:SessionUser|null; authenticated:boolean };
function readSavedUser(): SessionUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("northstar-session");
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<SessionUser>;
    if (
      typeof value.name === "string" &&
      typeof value.email === "string" &&
      typeof value.initials === "string" &&
      typeof value.title === "string" &&
      ["Sales Representative", "Manager", "Admin"].includes(String(value.role))
    ) return value as SessionUser;
  } catch {
    window.localStorage.removeItem("northstar-session");
  }
  return null;
}
const initialUser = readSavedUser();
const initialState: AuthState = { user: initialUser, authenticated: !!initialUser };
const authSlice=createSlice({
 name:"auth",initialState,
 reducers:{
  signIn(state,action:PayloadAction<SessionUser>){state.user=action.payload;state.authenticated=true;if(typeof localStorage!=="undefined")localStorage.setItem("northstar-session",JSON.stringify(action.payload));},
  signOut(state){state.user=null;state.authenticated=false;if(typeof localStorage!=="undefined")localStorage.removeItem("northstar-session");},
  updateProfile(state,action:PayloadAction<Pick<SessionUser,"name"|"email"|"title">>){if(state.user){state.user={...state.user,...action.payload,initials:action.payload.name.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase()};if(typeof localStorage!=="undefined")localStorage.setItem("northstar-session",JSON.stringify(state.user));}}
 }
});
export const {signIn,signOut,updateProfile}=authSlice.actions;
export default authSlice.reducer;
