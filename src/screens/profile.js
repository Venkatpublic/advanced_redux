import React, { useEffect, useState, useRef } from "react";
import { produce,original, isDraft, current } from "immer";
import { clock } from "./clock";

const Profile = () => {
  const [data, setData] = useState([
    {
      name: "Kent",
      business: "Real Estate",
      finance: {
        lastmonth_income: 50000000,
        lastmonth_expense: 30000000,
        paid_tax: 1200000,
        audit_data: {
          dates: [
            { date: "04/01/2024", norm: 2023, is_okay: true },
            { date: "04/05/2024", norm: 2023, is_okay: true },
            { date: "04/09/2024", norm: 2024, is_okay: false },
          ],
        },
      },
    },
    {
      name: "El-Bahar",
      business: "Retail",
      finance: {
        lastmonth_income: 2000000,
        lastmonth_expense: 500000,
        paid_tax: 200000,
        audit_data: {
          dates: [
            { date: "04/01/2024", norm: 2024, is_okay: false },
            { date: "04/05/2024", norm: 2024, is_okay: false },
            { date: "04/09/2024", norm: 2024, is_okay: true },
          ],
        },
      },
    },
    {
      name: "Greenways",
      business: "Cosntruction",
      finance: {
        lastmonth_income: 800000000,
        lastmonth_expense: 20000000,
        paid_tax: 31200000,
        audit_data: {
          dates: [
            { date: "04/01/2024", norm: 2024, is_okay: false },
            { date: "04/05/2024", norm: 2024, is_okay: false },
            { date: "04/09/2024", norm: 2024, is_okay: true },
          ],
        },
      },
    },
  ]);



 

  const onPress = (I,index) => {
setData( produce(data,(draft)=>{draft[I].finance.audit_data.dates[index].is_okay = !draft[I].finance.audit_data.dates[index].is_okay}) )
  };
const clock1 = new clock(22,45)
const clock2  = clock1.tick()
const baseState = {users: [{name: "Richie"}]}
const nextState = produce(baseState, draftState => {
  console.log(original(draftState).users[0].name,current(draftState).users[0].name)
  draftState.users[0].name = 'Richie Rich'

  console.log(original(draftState).users[0].name,current(draftState).users[0].name)
})
  return (
    <div>
      <h1>this is profile screen</h1>
      <div>
      
        {data.map((item,I) => (
          <div key={item.name}>
            <s>{item.name}</s>
            {item.finance.audit_data.dates.map((date,index) => (
              <div key={index}>
                <input onClick={()=>{onPress(I,index)}} checked={date.is_okay} type="checkbox" />
                <s>{date.date}</s>
                <s>{date.norm}</s>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
