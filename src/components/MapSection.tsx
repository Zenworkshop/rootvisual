import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapSection () {
  return (
    <MapContainer
      center={[-6.485, 106.65]} // Koordinat area sekitar Bogor
      zoom={11}
      style={{ height: "40vh", width: "100%" }}
    >
      {/* Tambahkan Peta TileLayer dari Google Maps atau OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Tambahkan beberapa marker untuk lokasi tertentu */}
      <Marker position={[-6.485, 106.65]}>
        <Popup>Ini adalah area sekitar Bogor.</Popup>
      </Marker>
      <Marker position={[-6.415, 106.75]}>
        <Popup>Sentul International Circuit</Popup>
      </Marker>
      <Marker position={[-6.55, 106.83]}>
        <Popup>Universitas Pertahanan Indonesia</Popup>
      </Marker>
      <Marker position={[-6.6, 106.9]}>
        <Popup>Kebun Wisata Pasirmukti</Popup>
      </Marker>
    </MapContainer>
  );
};

