import Barchartbox from "../Components/Barchartbox"
import Bigchartbox from "../Components/Bigchartbox"
import Cards from "../Components/Cards"
import Piechartbox from "../Components/Piechartbox"
import Topdeals from "../Components/Topdeals"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../Components/data"

const Home = () => {
  return (
    <div className="grid gap-5 grid-cols-4 m-5 ">
     <div className="box row-span-3 "><Topdeals/></div>
     <div className="box text-soft-color"><Cards {...chartBoxUser}/></div>
     <div className="box text-soft-color"><Cards {...chartBoxProduct}/></div>
     <div className="box row-span-3"><Piechartbox/></div>
     <div className="box text-soft-color"><Cards {...chartBoxConversion}/></div>
     <div className="box text-soft-color"><Cards {...chartBoxRevenue}/></div>
     <div className="box row-span-2 col-span-2"><Bigchartbox/></div>
     <div className="box"><Barchartbox  {...barChartBoxVisit}/></div>
     <div className="box"><Barchartbox  {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home
