"use client";

import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import DriftWall, { DriftWallItem } from "./DriftWall";

type Props = {
  items: DriftWallItem[];
};

export default function ResponsiveDriftWall({ items }: Props) {
  const [config, setConfig] = useState({
    columns: 4,
    tileWidth: 243, 
    tileHeight: 162,
    gap: 20,
  });

  // State for the lightbox
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const availableWidth = Math.min(vw, 1280) - 32; 
      const maxWallWidth = availableWidth / 1.18; 

      let columns = 4;
      let gap = 20; 
      
      if (vw < 768) {
        columns = 2;
        gap = 12; 
      } else if (vw < 1024) {
        columns = 3;
        gap = 16; 
      }

      const tileWidth = Math.floor((maxWallWidth / columns) - gap - 1);
      const tileHeight = Math.floor(tileWidth / 1.5);

      setConfig({ columns, tileWidth, tileHeight, gap });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prepare slides for the lightbox
  const slides = items.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
  }));

  return (
    <>
      <DriftWall
        items={items}
        columns={config.columns}
        tileWidth={config.tileWidth}
        tileHeight={config.tileHeight}
        gap={config.gap}
        tilt={0}
        turn={0}
        perspective={1200}
        depth={40}
        speed={20}
        direction="up"
        variance={0.45}
        parallax={0.4}
        lift={32}
        fade={0}
        dim={0.85}
        overlayColor="#060101"
        radius={14}
        roll={0}
        pauseOnHover={true}
        grayscale={false}
        // Add the click handler to open the lightbox
        onTileClick={(item) => {
          const idx = items.findIndex((i) => i.image === item.image);
          if (idx !== -1) setIndex(idx);
        }}
      />

      {/* Render the Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  );
}