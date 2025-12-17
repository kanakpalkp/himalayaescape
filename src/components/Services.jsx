import React from 'react'
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div className=" p-6">
      <h1 className="font-popins-HelveticaNeue-Light text-3xl  font-bold text-center text-black-600">Our.<span className="font-popins-HelveticaNeue-Light gap-5 text-3xl font-bold text-center text-violet-600">.Services</span></h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        <Link to="https://www.justdial.com/Dehradun/Car-Rental/nct-10076456" className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 text-center">
          <img src="car.jpeg" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Car Rentals</h2>
          <p>Comfortable rides for your travels across the hills and cities.</p>
        </Link>

        
        <Link to="https://www.booking.com/index.html?aid=2311236&label=slgp_-FNUJyR1iYZtYeFdNgHudMQS652804038422%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-17218370%3Alp9144883%3Ali%3Adec%3Adm&sid=210e09093b1ca6ce3197b7d86bd0849c&;gad_source=1;gclid=Cj0KCQiAubrJBhCbARIsAHIdxD-CIoigIfgzx0tru4VYct4keFbcE61UKSqkdYCWYlYrO6t9JJBiDTQaAs39EALw_wcB;gad_campaignid=19856801640;gbraid=0AAAAAD_Ls1Ky1ShA19xTyy8ejiIHMcTnF" className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center">
          <img src="hotel.webp" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Hotel Booking</h2>
          <p>Affordable and premium stays at the best tourist spots.</p>
        </Link>

       
        <Link to="https://www.booking.com/searchresults.en-gb.html?aid=311984&label=hiking-break-for-rent-in-wadi-kob-3LGwyQnzT5qI00dFgq8cLQS714035674470%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-297131768156%3Alp9144864%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXdX6HrtnYy-Ml68sH-ljtU&gclid=Cj0KCQiAubrJBhCbARIsAHIdxD-k2hPJ_sKtk-4jXYDzOghd4fuCH6Zuu2CCyF6_LHyy-V_XhQR1g0QaAqfNEALw_wcB&highlighted_hotels=11153047&redirected=1&city=-783421&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=210e09093b1ca6ce3197b7d86bd0849c" className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center">
          <img src="kk.webp" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Trekking & Hiking</h2>
          <p>Explore mountains with expert guides and thrilling trails.</p>
        </Link>
      </div>
    </div>
  );
};

export default Services;