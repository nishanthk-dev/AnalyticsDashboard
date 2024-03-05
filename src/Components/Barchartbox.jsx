import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";


const Barchartbox = (props) => {

  return (
    <div className="h-36">
        <h1 className="text-soft-color text-xl font-bold">{props.title} </h1>
        <ResponsiveContainer className="p-5 " width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
          contentStyle={{background:"#2a3447" , borderRadius:"5px"}}
          labelStyle={{display:"none"}}
          cursor={{fill:"none"}}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>      
    </div>
  )
}

export default Barchartbox
