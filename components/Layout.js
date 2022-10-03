import Header from "./header";
import Footer from "./footer";
import Welcome from '../components/Welcome';
import { useEffect, useState } from 'react';

export default function Layout({children}){
  const [showWelcome, setShowWelcome] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setShowWelcome(false), 2000)
  },[])
  
    return (
    <>
        {showWelcome? <Welcome />
        :<> 
            <Header />
            <div>{children}</div>
            <Footer />
        </>}
    </>
    )
}