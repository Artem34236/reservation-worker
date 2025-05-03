import { Route, Routes } from "react-router"

import Home from "./pages/Home"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Register_Company from "./pages/Compani/Register_Company"
import Sign_in from "./pages/Sign_in"
import IsAught from "./hooks/IsAught"
import NotFound from "./pages/NotFound"
import useScrollToTop from "./hooks/useScrollTop"

import Company_worker_page from "./pages/Compani/Company_worker_page"
import Compani_acc from "./pages/Compani/Account"
import Register_worker from "./pages/Compani/Register_worker"
import Company_history_page from "./pages/Compani/Company_history_page"

import Worker_acc from "./pages/Worker/Account"
import Reservation from "./pages/Worker/Reservation"

import CampaniLeyout from "./layout/CampaniLeyout"
import UserLeyout from "./layout/UserLeyout"
import WorkerLeyout from "./layout/WorkerLeyout"

import ReservationWorker from "./pages/User/ReservationWorker"
import User_company_page from "./pages/User/User_company_page"
import User_worker_page from "./pages/User/User_worker_page"

type Props = {}

export default function App({ }: Props) {

  useScrollToTop()

  return (<>

    <Header />

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/reg_com" element={<Register_Company />} />
      <Route path="/sign_in" element={<Sign_in />} />

      <Route path="/user" element={<UserLeyout />} >
        <Route path="company" element={<ReservationWorker />} />  
        <Route path="company/:CompanyId" element={<User_company_page />} />
        <Route path="company/:CompanyId/:WorkerId" element={<User_worker_page />} />
      </Route>

      <Route path="/company" element={<IsAught type="company"> <CampaniLeyout /> </IsAught>} >
        <Route path="worker" element={<Company_worker_page />} />
        <Route path="create" element={<Register_worker />} />
        <Route path="history" element={<Company_history_page />} />
        <Route path="acc" element={<Compani_acc />} />
      </Route>

      <Route path="/worker" element={<IsAught type="worker"> <WorkerLeyout /> </IsAught>} >
        <Route path="acc" element={<Worker_acc />} />
        <Route path="reservation" element={<Reservation />} />
      </Route>

    </Routes>

    <Footer />

  </>
  )
}