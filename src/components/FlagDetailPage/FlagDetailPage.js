import "./FlagDetailPage.css";
import Missing from "../Missing/Missing";
import FlagDetailBackButton from "../FlagDetailBackButton/FlagDetailBackButton";
import FlagDetailImage from "../App/FlagDetailImage/FlagDetailImage";
import FlagDetailName from "../FlagDetailName/FlagDetailName";
import FlagDetailNativeName from "../FlagDetailNativeName/FlagDetailNativeName";
import FlagDetailPopulation from "../FlagDetailPopulation/FlagDetailPopulation";
import FlagDetailRegion from "../FlagDetailRegion/FlagDetailRegion";
import FlagDetailSubregion from "../FlagDetailSubregion/FlagDetailSubregion";
import FlagDetailCapital from "../FlagDetailCapital/FlagDetailCapital";
import FlagDetailTopLevelDomain from "../FlagDetailTopLevelDomain/FlagDetailTopLevelDomain";
import FlagDetailCurrencies from "../FlagDetailCurrencies/FlagDetailCurrencies";
import FlagDetailLanguages from "../FlagDetailLanguages/FlagDetailLanguages";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FlagDetailPage = () => {
  const { fullname } = useParams();
  const [detailedCountry, setDetailedCountry] = useState({});
  const [detailedFetchError, setDetailedFetchError] = useState("");
  const [detailedIsLoading, setDetailedIsLoading] = useState(true);

  useEffect(() => {
    const handleCardClick = async () => {
      setDetailedIsLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${fullname}?fullText=true`
        );
        if (!response.ok) throw Error("Page Not Found");
        const data = await response.json();
        const country = data[0];

        setDetailedCountry(country);
        setDetailedFetchError("");
      } catch (err) {
        setDetailedFetchError(err.message);
      } finally {
        setDetailedIsLoading(false);
      }
    };

    handleCardClick();
  }, [fullname]);

  return (
    <section className="flag-detail-page">
      {!detailedIsLoading && detailedFetchError && (
        <Missing detailedFetchError={detailedFetchError} />
      )}
      {!detailedIsLoading && !detailedFetchError && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FlagDetailBackButton />

          <FlagDetailImage detailedCountry={detailedCountry} />
          <FlagDetailName detailedCountry={detailedCountry} />
          <FlagDetailNativeName detailedCountry={detailedCountry} />
          <FlagDetailPopulation detailedCountry={detailedCountry} />
          <FlagDetailRegion detailedCountry={detailedCountry} />
          <FlagDetailSubregion detailedCountry={detailedCountry} />
          <FlagDetailCapital detailedCountry={detailedCountry} />
          <FlagDetailTopLevelDomain detailedCountry={detailedCountry} />
          <FlagDetailCurrencies detailedCountry={detailedCountry} />
          <FlagDetailLanguages detailedCountry={detailedCountry} />
        </div>
      )}
    </section>
  );
};

export default FlagDetailPage;
