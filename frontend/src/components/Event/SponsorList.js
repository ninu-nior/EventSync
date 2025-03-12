import { useEffect, useState } from "react";
import Axios from "axios";
import SponsorCard from "./SponsorCard";
import "./Sponsors.css";

const SponsorList = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/eventRoute/sponsor-list")
      .then((res) => {
        if (res.status === 200) setSponsors(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="cardContainer">
      {sponsors.map((sponsor, index) => (
        <SponsorCard key={index} sponsor={sponsor} />
      ))}
    </div>
  );
};

export default SponsorList;