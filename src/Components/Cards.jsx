import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const Cards = (props) => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 5800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className="flex justify-between">
    <div className="">
      <div className="flex">
        <img src="/icon.svg" alt="" />
      <h4 className="font-bold">{props.title}</h4>
    </div>
        <h1 className="py-6">{props.number}</h1>
        <Link className="text-soft-colorr" to='/'>View all</Link>
    </div>
    <div>
        <div className="flex h-16  ">
        <ResponsiveContainer width="99%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Tooltip
          contentStyle={{background:"transparent", border:"none"}}
          labelStyle={{display:"none"}}
          position={{x:10, y:40}}/>

        </LineChart>
      </ResponsiveContainer>
        </div>
        <span className="font-bold">{props.percentage}%</span>
        <div>this month</div>
    </div>
    </div>
  )
}

export default Cards
