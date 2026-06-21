import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import type { TickMetrics } from "../model/types";
import { formatIndex } from "../utils/formatters";

export function MapView({ summary }: { summary: TickMetrics }) {
  return (
    <section className="map-panel" id="regional-map">
      <div className="panel-heading">
        <span>Regional Map</span>
        <h2>Grid Bottlenecks and Unmet Critical Demand</h2>
      </div>
      <div className="map-frame">
        <MapContainer
          center={[51.2, 9.5]}
          zoom={4}
          minZoom={3}
          maxZoom={7}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {summary.zones.map((zone) => (
            <CircleMarker
              key={zone.zone}
              center={[zone.lat, zone.lon]}
              radius={Math.max(8, Math.min(28, zone.unmetCriticalDemand + 8))}
              pathOptions={{
                color: zone.congestionMarkup > 10 ? "#BE6E52" : "#0E4C54",
                fillColor: zone.congestionMarkup > 10 ? "#E0A458" : "#1C8A8F",
                fillOpacity: 0.72,
                weight: 2
              }}
            >
              <Tooltip>
                <strong>{zone.name}</strong>
                <br />
                Electricity {formatIndex(zone.electricityPriceIndex)}
                <br />
                Weather {zone.weatherStressIndex.toFixed(2)} (
                {zone.weatherPriceComponent >= 0 ? "+" : ""}
                {zone.weatherPriceComponent.toFixed(1)})
                <br />
                Critical unmet {formatIndex(zone.unmetCriticalDemand)}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
