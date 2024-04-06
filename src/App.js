import Header from "./components/Header";
import CompanyDetails from "./components/CompanyDetails";
import ClaimSection from "./components/ClaimSection";
import GrantsAndSubsidies from "./components/GrantsAndSubsidies";
import Expenses from "./components/Expenses";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  
  const [data, setData] = useState([]);
  const [scrollToClaimSection, setScrollToClaimSection] = useState({});
  const [scrollToGrantsSection, setScrollToGrantsSection] = useState({});
  const [scrollToExpensesSection, setScrollToExpensesSection] = useState({});

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

  function handleClaimScroll(scrollToClaimSection){
      setScrollToClaimSection({
        value: scrollToClaimSection,
        id: Math.random()
      })
  }
  // console.log("rerender");

  function handleGrantsScroll(scrollToGrantsSection){
    setScrollToGrantsSection({
      value: scrollToGrantsSection,
      id : Math.random()
    })
  }

  function handleExpensesScroll(scrollToExpensesSection){
    setScrollToExpensesSection({
      value : scrollToExpensesSection,
      id : Math.random()
    })
  }
  
  useEffect(()=>{
    console.log(scrollToClaimSection);
  },[scrollToClaimSection])
  return (
    <>
      <Header />
      <CompanyDetails data={data} handleScroll={handleClaimScroll} />
      <ClaimSection scrollToClaimSection={scrollToClaimSection} handleGrantsScroll={handleGrantsScroll} />
      <GrantsAndSubsidies scrollToGrantsSection={scrollToGrantsSection} handleExpensesScroll={handleExpensesScroll} />
      <Expenses scrollToExpensesSection={scrollToExpensesSection} />
      <Footer />
    </>
  );
}

export default App;
