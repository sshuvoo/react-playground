import { useEffect, useState } from 'react';

export default function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const startFetching = async () => {
         try {
            const response = await fetch(
               'https://pro-server.vercel.app/booked-ticket/a@a.com'
            );
            if (response.ok) {
               const data = await response.json();
               setData(data);
            }
         } catch (error) {
            console.log(error);
         }
      };
      startFetching();
   }, []);

   return (
      <ul className="space-y-4">
         {data?.map((d) => (
            <li key={d.id}>
               {d.name} - {d.age} - {d.center}
            </li>
         ))}
      </ul>
   );
}
