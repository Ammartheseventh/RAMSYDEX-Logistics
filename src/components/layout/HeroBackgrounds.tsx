export function HeroBaseBg() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1b1818_0%,#504949_55%,#b0a182_74%,#e4b21b_100%)]">
      {/* Solid ground */}
      <div className="absolute inset-x-0 bottom-0 h-[26.67%] bg-[#131111]" />
      {/* Gold line on the ground */}
      <div className="absolute inset-x-0 bottom-[17.33%] h-[2px] bg-[#e4b21b] opacity-50" />
    </div>
  );
}

export function ContactHeroFg() {
  return (
    <svg viewBox="0 0 1600 450" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <radialGradient id="cg">
          <stop offset="0" stopColor="#efd176" stopOpacity=".9"/>
          <stop offset="1" stopColor="#efd176" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="1250" cy="330" r="170" fill="url(#cg)"/>
      <circle cx="1250" cy="330" r="55" fill="#faf0d1"/>
      <polygon points="1236,330 1264,330 1600,450 900,450" fill="#363030"/>
      <line x1="1250" y1="330" x2="1250" y2="450" stroke="#e4b21b" strokeWidth="3" strokeDasharray="8 10"/>
      <line x1="1236" y1="330" x2="900" y2="450" stroke="#867979" strokeWidth="2"/>
      <line x1="1264" y1="330" x2="1600" y2="450" stroke="#867979" strokeWidth="2"/>
      <path d="M880 260 Q1020 80 1250 120" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      <circle cx="880" cy="260" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="880" cy="260" r="6" fill="#eac148"/>
      <path d="M1250 250 C1205 200 1205 140 1250 140 C1295 140 1295 200 1250 250Z" fill="#a1332b" stroke="#f5f3ef" strokeWidth="3" transform="translate(0 -20)"/>
      <circle cx="1250" cy="150" r="12" fill="#f5f3ef"/>
    </svg>
  );
}

export function GalleryHeroFg() {
  return (
    <svg viewBox="0 0 1600 450" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <radialGradient id="gg">
          <stop offset="0" stopColor="#efd176" stopOpacity=".9"/>
          <stop offset="1" stopColor="#efd176" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="1000" cy="200" r="170" fill="url(#gg)"/>
      <circle cx="1000" cy="200" r="55" fill="#faf0d1"/>
      
      <rect x="965" y="92" width="62" height="30" fill="#363030" />
      <rect x="1031" y="92" width="62" height="30" fill="#867979" />
      <rect x="1097" y="92" width="62" height="30" fill="#6b6161" />
      <rect x="1163" y="92" width="62" height="30" fill="#b78e15" />
      <rect x="1229" y="92" width="62" height="30" fill="#c93f36" />
      <rect x="1295" y="92" width="62" height="30" fill="#896b10" />
      <rect x="1361" y="92" width="62" height="30" fill="#6b6161" />
      <rect x="1427" y="92" width="62" height="30" fill="#6b6161" />
      <rect x="1493" y="92" width="62" height="30" fill="#a1332b" />
      
      <rect x="1020" y="126" width="62" height="30" fill="#b78e15" />
      <rect x="1086" y="126" width="62" height="30" fill="#867979" />
      <rect x="1152" y="126" width="62" height="30" fill="#a1332b" />
      <rect x="1218" y="126" width="62" height="30" fill="#363030" />
      <rect x="1284" y="126" width="62" height="30" fill="#511915" />
      <rect x="1350" y="126" width="62" height="30" fill="#867979" />
      <rect x="1416" y="126" width="62" height="30" fill="#896b10" />
      <rect x="1482" y="126" width="62" height="30" fill="#6b6161" />
      <rect x="1548" y="126" width="62" height="30" fill="#867979" />
      
      <rect x="965" y="160" width="62" height="30" fill="#363030" />
      <rect x="1031" y="160" width="62" height="30" fill="#a1332b" />
      <rect x="1097" y="160" width="62" height="30" fill="#867979" />
      <rect x="1163" y="160" width="62" height="30" fill="#867979" />
      <rect x="1229" y="160" width="62" height="30" fill="#363030" />
      <rect x="1295" y="160" width="62" height="30" fill="#896b10" />
      <rect x="1361" y="160" width="62" height="30" fill="#867979" />
      <rect x="1427" y="160" width="62" height="30" fill="#867979" />
      <rect x="1493" y="160" width="62" height="30" fill="#511915" />
      
      <rect x="1020" y="194" width="62" height="30" fill="#6b6161" />
      <rect x="1086" y="194" width="62" height="30" fill="#511915" />
      <rect x="1152" y="194" width="62" height="30" fill="#b78e15" />
      <rect x="1218" y="194" width="62" height="30" fill="#363030" />
      <rect x="1284" y="194" width="62" height="30" fill="#896b10" />
      <rect x="1350" y="194" width="62" height="30" fill="#363030" />
      <rect x="1416" y="194" width="62" height="30" fill="#c93f36" />
      <rect x="1482" y="194" width="62" height="30" fill="#867979" />
      <rect x="1548" y="194" width="62" height="30" fill="#6b6161" />
      
      <rect x="965" y="228" width="62" height="30" fill="#867979" />
      <rect x="1031" y="228" width="62" height="30" fill="#a1332b" />
      <rect x="1097" y="228" width="62" height="30" fill="#867979" />
      <rect x="1163" y="228" width="62" height="30" fill="#867979" />
      <rect x="1229" y="228" width="62" height="30" fill="#363030" />
      <rect x="1295" y="228" width="62" height="30" fill="#b78e15" />
      <rect x="1361" y="228" width="62" height="30" fill="#b78e15" />
      <rect x="1427" y="228" width="62" height="30" fill="#867979" />
      <rect x="1493" y="228" width="62" height="30" fill="#b78e15" />
      
      <rect x="1020" y="262" width="62" height="30" fill="#c93f36" />
      <rect x="1086" y="262" width="62" height="30" fill="#896b10" />
      <rect x="1152" y="262" width="62" height="30" fill="#363030" />
      <rect x="1218" y="262" width="62" height="30" fill="#867979" />
      <rect x="1284" y="262" width="62" height="30" fill="#867979" />
      <rect x="1350" y="262" width="62" height="30" fill="#a1332b" />
      <rect x="1416" y="262" width="62" height="30" fill="#6b6161" />
      <rect x="1482" y="262" width="62" height="30" fill="#a1332b" />
      <rect x="1548" y="262" width="62" height="30" fill="#c93f36" />
      
      <rect x="965" y="296" width="62" height="30" fill="#867979" />
      <rect x="1031" y="296" width="62" height="30" fill="#c93f36" />
      <rect x="1097" y="296" width="62" height="30" fill="#511915" />
      <rect x="1163" y="296" width="62" height="30" fill="#896b10" />
      <rect x="1229" y="296" width="62" height="30" fill="#363030" />
      <rect x="1295" y="296" width="62" height="30" fill="#6b6161" />
      <rect x="1361" y="296" width="62" height="30" fill="#b78e15" />
      <rect x="1427" y="296" width="62" height="30" fill="#363030" />
      <rect x="1493" y="296" width="62" height="30" fill="#c93f36" />
      
      <rect x="1090" y="120" width="170" height="120" fill="#f5f3ef" />
      <rect x="1098" y="128" width="154" height="104" fill="#b0a182" />
      <rect x="1098" y="190.4" width="154" height="41.6" fill="#363030" />
      <circle cx="1200.5" cy="180.0" r="14.4" fill="#faf0d1"/>
      
      <rect x="1300" y="160" width="150" height="105" fill="#f5f3ef" />
      <rect x="1308" y="168" width="134" height="89" fill="#b0a182" />
      <rect x="1308" y="221.4" width="134" height="35.6" fill="#363030" />
      <circle cx="1397.5" cy="212.5" r="12.6" fill="#faf0d1"/>
      
      <rect x="1210" y="260" width="120" height="80" fill="#f5f3ef" />
      <rect x="1218" y="268" width="104" height="64" fill="#b0a182" />
      <rect x="1218" y="306.4" width="104" height="25.6" fill="#363030" />
      <circle cx="1288.0" cy="300.0" r="9.6" fill="#faf0d1"/>
    </svg>
  );
}

export function NetworkHeroFg() {
  return (
    <svg viewBox="0 0 1600 450" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <radialGradient id="ng">
          <stop offset="0" stopColor="#efd176" stopOpacity=".9"/>
          <stop offset="1" stopColor="#efd176" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="1000" cy="280" r="170" fill="url(#ng)"/>
      <circle cx="1000" cy="280" r="55" fill="#faf0d1"/>
      
      <circle cx="1250" cy="480" r="270" fill="#131111" stroke="#867979" strokeWidth="2"/>
      <ellipse cx="1250" cy="480" rx="90" ry="270" fill="none" stroke="#504949" strokeWidth="1.5"/>
      <ellipse cx="1250" cy="480" rx="180" ry="270" fill="none" stroke="#504949" strokeWidth="1.5"/>
      <ellipse cx="1250" cy="480" rx="263" ry="22" fill="none" stroke="#504949" strokeWidth="1.5" transform="translate(0 -60)"/>
      <ellipse cx="1250" cy="480" rx="236" ry="22" fill="none" stroke="#504949" strokeWidth="1.5" transform="translate(0 -130)"/>
      <ellipse cx="1250" cy="480" rx="181" ry="22" fill="none" stroke="#504949" strokeWidth="1.5" transform="translate(0 -200)"/>
      
      <path d="M1100 300 Q1165 140 1230 230" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      <path d="M1230 230 Q1310 140 1390 280" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      <path d="M1390 280 Q1420 190 1450 380" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      <path d="M1100 300 Q1085 210 1070 400" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      <path d="M1230 230 Q1340 140 1450 380" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      
      <circle cx="1100" cy="300" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="1100" cy="300" r="6" fill="#eac148"/>
      <circle cx="1230" cy="230" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="1230" cy="230" r="6" fill="#eac148"/>
      <circle cx="1390" cy="280" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="1390" cy="280" r="6" fill="#eac148"/>
      <circle cx="1450" cy="380" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="1450" cy="380" r="6" fill="#eac148"/>
      <circle cx="1070" cy="400" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="1070" cy="400" r="6" fill="#eac148"/>
      
      <path d="M900 110 Q1250 -40 1580 100" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      <circle cx="900" cy="110" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="900" cy="110" r="6" fill="#eac148"/>
      <circle cx="1580" cy="100" r="12" fill="#eac148" opacity=".3"/>
      <circle cx="1580" cy="100" r="6" fill="#eac148"/>
    </svg>
  );
}

export function SolutionsHeroFg() {
  return (
    <svg viewBox="0 0 1600 450" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <radialGradient id="sg">
          <stop offset="0" stopColor="#efd176" stopOpacity=".9"/>
          <stop offset="1" stopColor="#efd176" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="1200" cy="290" r="170" fill="url(#sg)"/>
      <circle cx="1200" cy="290" r="55" fill="#faf0d1"/>
      
      <path d="M900 120 Q1050 60 1180 90" fill="none" stroke="#eac148" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"/>
      <g transform="translate(1250 90) rotate(-10)">
        <ellipse rx="55" ry="8" fill="#f5f3ef"/>
        <polygon points="-8,0 18,0 -14,-32 -22,-32" fill="#ebe7e0"/>
        <polygon points="-8,0 18,0 -14,32 -22,32" fill="#cfc9c9"/>
        <polygon points="-48,0 -58,0 -62,-16 -52,-16" fill="#f5f3ef"/>
      </g>
      
      <polygon points="990,222 1180,182 1370,222" fill="#131111"/>
      <rect x="1000" y="222" width="360" height="108" fill="#363030" />
      <rect x="1020" y="272" width="44" height="58" fill="#e4b21b" opacity=".85"/>
      <rect x="1088" y="272" width="44" height="58" fill="#e4b21b" opacity=".85"/>
      <rect x="1156" y="272" width="44" height="58" fill="#e4b21b" opacity=".85"/>
      <rect x="1224" y="272" width="44" height="58" fill="#e4b21b" opacity=".85"/>
      <rect x="1292" y="272" width="44" height="58" fill="#e4b21b" opacity=".85"/>
      
      <rect x="1390" y="282" width="150" height="48" fill="#a1332b" />
      <rect x="1540" y="298" width="42" height="32" fill="#363030" />
      <rect x="1562" y="304" width="14" height="12" fill="#e4b21b" />
      <circle cx="1415" cy="332" r="9" fill="#131111" stroke="#867979" strokeWidth="2"/>
      <circle cx="1500" cy="332" r="9" fill="#131111" stroke="#867979" strokeWidth="2"/>
      <circle cx="1560" cy="332" r="9" fill="#131111" stroke="#867979" strokeWidth="2"/>
    </svg>
  );
}