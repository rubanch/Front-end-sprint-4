import { Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
function Adminrouting() {
  // let auth = {'role': Cookies.get('Role')}
  let auth = { role: "Admin" };
  return auth.role == "Admin" ? (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  ) : (
    <Navigate to="/" />
  );
}
export default Adminrouting;
