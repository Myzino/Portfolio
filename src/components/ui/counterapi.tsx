import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/counter?id=my-website-counter&hit=true',
          {
            headers: {
              'X-Api-Key': import.meta.env.VITE_APP_API_NINJA_KEY, // use string directly
            },
          }
        );
        const data = await response.json();
        console.log(data)
        setVisits(data.value);
      } catch (error) {
        console.error('Error fetching visit count:', error);
      }
    };

    fetchVisitCount();
  }, []);

  return <div className=" bg-white shadow-lg rounded-xl w-40 ">
  <div className="text-center">
    <p className="text-gray-500 text-sm">Visitors</p>
    <p className="text-2xl font-bold text-gray-800">{visits}</p>
  </div>
</div>

}
