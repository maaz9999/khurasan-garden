"use client";

interface GoogleMapProps {
  query?: string;
  height?: string;
  className?: string;
}

export function GoogleMap({
  query = "M-9 Karachi-Hyderabad Motorway, Gadap Town, Karachi",
  height = "100%",
  className = "",
}: GoogleMapProps) {
  const encodedQuery = encodeURIComponent(query);
  const src = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-[#DCCDB6]/60 shadow-lg ${className}`}>
      <iframe
        title="Khurasan Garden Google Map Location"
        width="100%"
        height={height}
        style={{ border: 0, minHeight: "350px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        className="w-full h-full filter saturate-[0.95] contrast-[1.05]"
      />
    </div>
  );
}
