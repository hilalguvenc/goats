import React from 'react';

const Colomns = () => {
  return <>
    <div className="column">
      <div className="card">
        <ul>
          <li className="card1">
            <h3 className="card-header" >Keçi Sütünün Faydaları</h3>
            <p>"Keçi sütünün bağışıklığı güçlendirme, metabolizmayı hızlandırma, kalp sağlığını koruma, kemikleri güçlendirme, kilo vermeye yardımcı olma gibi etkileri vardır." </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <ul>
          <li className="card2" >
            <h3 className="card-header">Neden Keçi Sütü.Com?</h3>
            <p>Hijyenik, içerisinde katkı maddesi olmayan sütlerimizle %100 güven teşkil ediyoruz. </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <ul>
          <li className="card3" >
            <h3 className="card-header">Aynı gün, kapınıza ücretsiz teslim!</h3>
            <p className="card-main">Keçi Sütü.Com dan verdiğiniz siparişler istediğiniz saatte kapınıza ücretsiz teslim edilmektedir.</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <ul>
          <li className="card4" >
            <h3 className="card-header">Biz Kimiz?</h3>
            <p>Yıllardır edinmiş olduğumuz tecrübe ile hijyenik, doğal keçi sütünü çiftlikten kapınıza getiriyoruz.</p>
          </li>
        </ul>
      </div>
    </div>
  </>
}

export { Colomns }