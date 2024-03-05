import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data =[
    {name:"Mobile", value:400, color:"#0088FE"},
    {name:"Desktop", value:300, color:"#00C49F"},
    {name:"Laptop", value:300, color:"#FFBB28"},
    {name:"Tablet", value:200, color:"#FF8042"},
]

const Piechartbox = () => {
  return (
    <div className=" h-full w-64 flex flex-col justify-between">
      <h1 className=" text-xl font-bold text-soft-color">Leads by Source</h1>
      <div className="flex h-4 items-center justify-center">
      <ResponsiveContainer width="99%" height={300}>
      <PieChart  >
        <Tooltip
        contentStyle={{background:"white", borderRadius:"5px"}}/>
        <Pie
          data={data}

          innerRadius={"70%"}
          outerRadius={"90%"}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    </div>
    <div className=" text-soft-color justify-between gap-3 text-sm">
        {data.map((item)=>(
            <div key={item.name}>
                <div className="flex items-center">
                    <div className="mr-3 h-3 w-3 rounded-full" style={{backgroundColor:item.color}}/>
                  <div className="flex w-full justify-between">
                        <span>{item.name}</span>
                    <span>{item.value}</span>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    </div>
  )
}

export default Piechartbox
