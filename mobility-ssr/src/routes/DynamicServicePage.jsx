// src/routes/DynamicServicePage.jsx
import { useLocation } from "react-router-dom";
import { serviceRouteMap } from "./serviceRouteMap";

export default function DynamicServicePage() {
  const location = useLocation();

  // full slug without starting slash
  const slug = location.pathname.replace("/", "");

  const PageComponent = serviceRouteMap[slug];

  if (!PageComponent) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1 className="text-white">404</h1>
        <p className="text-white">Service page not found</p>
        <p className="text-white">{slug}</p>
      </div>
    );
  }

  return <PageComponent />;
}
