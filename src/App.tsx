import { Route, Routes } from "react-router"

import Home from "./pages/Home"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Register_Company from "./pages/Register_Company"
import Sign_in from "./pages/Sign_in"
import User_page from "./pages/User_page"
import Worker_page from "./pages/Worker_page"
import IsAught from "./routes/IsAught"
import CampaniLeyout from "./layout/CampaniLeyout"
import NotFound from "./pages/NotFound"
import Company_page from "./pages/Company_page"

type Props = {}

export default function App({ }: Props) {

  return (<>

    <Header />

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/reg_com" element={<Register_Company />} />
      <Route path="/sign_in" element={<Sign_in />} />
      <Route path="user" element={<User_page />} />

      <Route path="company" element={<IsAught type="company"><CampaniLeyout /></IsAught>} >
        <Route path="account" element={<Company_page />} />
      </Route>

      <Route path="worker" element={<IsAught type="worker"><Worker_page /></IsAught>} >

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>

    <Footer />

  </>
  )
}