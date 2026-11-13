import {describe,it,expect} from "vitest";
import reducer,{signIn,signOut,updateProfile} from "./authSlice";
describe("authSlice",()=>{
 it("signs in a user",()=>{const s=reducer(undefined,signIn({name:"Alex Morgan",email:"alex@example.com",role:"Sales Representative",initials:"AM",title:"Sales Representative"}));expect(s.authenticated).toBe(true);expect(s.user?.email).toBe("alex@example.com")});
 it("updates profile and initials",()=>{let s=reducer(undefined,signIn({name:"Alex Morgan",email:"alex@example.com",role:"Manager",initials:"AM",title:"Manager"}));s=reducer(s,updateProfile({name:"Jamie Chen",email:"jamie@example.com",title:"Team Lead"}));expect(s.user?.initials).toBe("JC")});
 it("signs out",()=>{let s=reducer(undefined,signIn({name:"Alex Morgan",email:"alex@example.com",role:"Manager",initials:"AM",title:"Manager"}));s=reducer(s,signOut());expect(s.authenticated).toBe(false);expect(s.user).toBeNull()});
});
