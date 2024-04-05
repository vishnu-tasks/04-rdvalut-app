import Header from "./components/Header";
import CompanyDetails from "./components/CompanyDetails";
import ClaimSection from "./components/ClaimSection";
import GrantsAndSubsidies from "./components/GrantsAndSubsidies";
import Expenses from "./components/Expenses";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  
  const [data, setData] = useState([]);

  const getData = async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(()=>{
    getData('/company-info.json')
    .then((res)=>{
      setData(res);
    })
    .catch((err)=> console.log(err))
  },[])

  return (
    <>
      <Header />
      <CompanyDetails data={data} />
      <ClaimSection />
      <GrantsAndSubsidies />
      <Expenses />
      <Footer />
    </>
  );
}

export default App;
