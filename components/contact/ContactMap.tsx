"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GoogleMapsGlobal = any;

declare global {
  interface Window {
    google?: GoogleMapsGlobal;
    initProbusMap?: () => void;
  }
}

const PROBUS_COORDINATES = { lat: 28.52518, lng: 77.28153 };

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<boolean>(false);

  const apiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    "AIzaSyDrfXPptz9MDwanCiLa-YzfsG5hmNAaJxI";

  useEffect(() => {
    async function initMap() {
      if (!mapRef.current || !window.google || !window.google.maps) return;

      try {
        let MapClass = window.google.maps.Map;
        let InfoWindowClass = window.google.maps.InfoWindow;
        let AdvancedMarkerClass =
          window.google.maps.marker?.AdvancedMarkerElement;
        let MarkerClass = window.google.maps.Marker;

        // When loading=async is used, Google Maps loads components via importLibrary
        if (typeof window.google.maps.importLibrary === "function") {
          try {
            const mapsLib = await window.google.maps.importLibrary("maps");
            if (mapsLib && mapsLib.Map) MapClass = mapsLib.Map;
            if (mapsLib && mapsLib.InfoWindow) InfoWindowClass = mapsLib.InfoWindow;
          } catch (err) {
            console.warn("Could not import maps library:", err);
          }

          try {
            const markerLib = await window.google.maps.importLibrary("marker");
            if (markerLib && markerLib.AdvancedMarkerElement) {
              AdvancedMarkerClass = markerLib.AdvancedMarkerElement;
            }
            if (markerLib && markerLib.Marker) {
              MarkerClass = markerLib.Marker;
            }
          } catch (err) {
            console.warn("Could not import marker library:", err);
          }
        }

        if (!MapClass) {
          setMapError(true);
          return;
        }

        const mapOptions = {
          center: PROBUS_COORDINATES,
          zoom: 14,
          scrollwheel: false,
          disableDefaultUI: false,
          mapTypeControl: true,
          zoomControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          mapId: "probus_contact_map",
        };

        const map = new MapClass(mapRef.current, mapOptions);

        const infoWindow = new InfoWindowClass({
          content: `
            <div style="font-family: sans-serif; padding: 8px; max-width: 220px;">
              <h5 style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold; color: #033361;">Probus Smart Things Pvt. Ltd.</h5>
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #4B5563; line-height: 1.4;">
                63, 3rd Floor DSIDC Complex, Okhla I, New Delhi, Delhi 110020
              </p>
              <a href="https://maps.google.com/?q=28.525180,77.281530" target="_blank" style="color: #097DF5; font-size: 12px; text-decoration: underline; font-weight: 500;">
                Get Directions &rarr;
              </a>
            </div>
          `,
        });

        // Use modern AdvancedMarkerElement if available
        if (AdvancedMarkerClass) {
          const pinImg = document.createElement("img");
          pinImg.src = "/images/markermap.png";
          pinImg.alt = "Probus Location";
          pinImg.style.width = "40px";
          pinImg.style.height = "auto";
          pinImg.style.cursor = "pointer";

          const advancedMarker = new AdvancedMarkerClass({
            position: PROBUS_COORDINATES,
            map: map,
            title: "Probus Smart Things Pvt. Ltd.",
            content: pinImg,
          });

          advancedMarker.addListener("click", () => {
            infoWindow.open({
              anchor: advancedMarker,
              map: map,
            });
          });
        } else if (MarkerClass) {
          // Fallback to classic Marker
          const marker = new MarkerClass({
            position: PROBUS_COORDINATES,
            map: map,
            title: "Probus Smart Things Pvt. Ltd.",
            animation: window.google.maps?.Animation?.DROP,
            icon: "/images/markermap.png",
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        }
      } catch (err) {
        console.error("Error initializing Google Maps:", err);
        setMapError(true);
      }
    }

    // If google maps is already loaded on window
    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    // Check if script is already present in DOM
    const existingScript = document.getElementById("google-maps-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,marker&loading=async`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        initMap();
      };

      script.onerror = () => {
        console.error("Failed to load Google Maps script");
        setMapError(true);
      };

      document.head.appendChild(script);
    } else {
      existingScript.addEventListener("load", () => {
        initMap();
      });
    }
  }, [apiKey]);

  return (
    <section className="relative w-full h-[450px] md:h-[500px] overflow-hidden bg-gray-100">
      {/* Google Map Canvas Container */}
      <div
        ref={mapRef}
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Fallback iFrame if Google Maps JS fails to initialize */}
      {mapError && (
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Probus+Smart+Things+Pvt.+Ltd.,Okhla,New+Delhi&zoom=14`}
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", top: 0, left: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Probus Location"
        />
      )}

      {/* Floating Address Card matching design */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[15px] md:left-[8%] lg:left-[calc(50%-550px)] bg-white rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] w-[280px] z-10 flex flex-col overflow-hidden border border-gray-100">
        <div className="w-full h-[120px] relative">
          <Image
            src="/images/uploads/2025/06/addressimg.png"
            alt="Probus Smart Things"
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>
        <div className="p-[20px_25px]">
          <h4 className="text-[14px] font-bold text-[#000000] mb-[5px] font-sans">
            Probus Smart Things Pvt. Ltd.
          </h4>
          <p className="text-[#333333] font-normal text-[11px] leading-[17px] mb-[15px] font-sans pr-[5px]">
            63, 3rd Floor DSIDC Complex, Okhla I, New Delhi, Delhi 110020
          </p>
          <a
            href="https://www.google.com/maps/place/Probus+Smart+Things+Pvt.+Ltd./@28.525774,77.2464677,14z/data=!4m15!1m7!3m6!1s0x390ce14d8c6dab57:0xd2006a309eda09c2!2sProbus+Smart+Things+Pvt.+Ltd.!8m2!3d28.525774!4d77.2825166!16s%2Fg%2F11dxb8gt9y!3m6!1s0x390ce14d8c6dab57:0xd2006a309eda09c2!8m2!3d28.525774!4d77.2825166!15sChtQcm9idXMgU21hcnQgVGhpbmdzIFB2dCBMdGSSARNlbGVjdHJvbmljc19jb21wYW554AEA!16s%2Fg%2F11dxb8gt9y?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#097DF5] font-semibold text-[12px] hover:underline font-sans inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Get Directions</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
