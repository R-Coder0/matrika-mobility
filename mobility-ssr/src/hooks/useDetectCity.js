import { useLocation } from "react-router-dom";

const CITIES = ["delhi", "noida", "gurugram", "mumbai", "hyderabad", "bangalore"];

export default function useDetectCity() {
  const { pathname } = useLocation();
  const path = pathname.toLowerCase(); // 🔥 important

  for (let city of CITIES) {
    if (path.includes(city)) {
      return city;
    }
  }

  return null;
}
