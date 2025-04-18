import { Route, Routes } from "react-router"

import Home from "./pages/Home"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Register_Company from "./pages/Compani/Register_Company"
import Sign_in from "./pages/Sign_in"
import User_page from "./pages/User_page"
import Worker_page from "./pages/Worker/Worker_page"
import IsAught from "./routes/IsAught"
import CampaniLeyout from "./layout/CampaniLeyout"
import NotFound from "./pages/NotFound"
import Company_worker_page from "./pages/Compani/Company_worker_page"
import WorkerLeyout from "./layout/WorkerLeyout"
import Register_worker from "./pages/Compani/Register_worker"
import Company_history_page from "./pages/Compani/Company_history_page"

type Props = {}

export default function App({ }: Props) {

  return (<>

    <Header />

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/reg_com" element={<Register_Company />} />
      <Route path="/sign_in" element={<Sign_in />} />
      <Route path="/user" element={<User_page />} />

      <Route path="/company" element={<IsAught type="company"> <CampaniLeyout /> </IsAught>} >
        <Route path="worker" element={<Company_worker_page />} />
        <Route path="worker/create" element={<Register_worker />} />
        <Route path="history" element={<Company_history_page />} />
      </Route>

      <Route path="/worker" element={<IsAught type="worker"> <WorkerLeyout /> </IsAught>} >
        <Route path="account" element={<Worker_page />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>

    <Footer />

  </>
  )
}