/**
 * One hand-drawn landmark glyph per MAP_CITIES entry, as stroke-only path data
 * on a 32x32 grid with the ground line around y=29. Rendered as <symbol> defs
 * by ChinaMap and referenced with <use>, so the same art serves the callout and
 * the magnifier without shipping bitmaps.
 */
export const LANDMARK_ART: Record<string, string[]> = {
  // Beijing — Great Wall at Mutianyu: wall riding the ridge line with a watchtower.
  beijing: [
    "M1 25 L7 17 L12 20 L18 10 L24 16 L31 10",
    "M1 29 L7 21 L12 24 L18 14 L24 20 L31 14",
    "M14 11 V5 H22 V11",
    "M14 5 V3 H16.5 V5 M19.5 5 V3 H22 V5",
  ],
  // Tianjin — Ancient Culture Street: double-eaved memorial archway.
  tianjin: [
    "M2 29 H30",
    "M7 29 V14 M25 29 V14",
    "M3 14 Q16 7.5 29 14",
    "M11 14 V10.5 M21 14 V10.5",
    "M8 10.5 Q16 5.5 24 10.5",
    "M16 5.5 V3",
  ],
  // Shijiazhuang — Zhengding: city wall, arched gate and the gate tower.
  shijiazhuang: [
    "M2 29 H30",
    "M4 29 V18 H28 V29",
    "M13 29 V23.5 A3 3 0 0 1 19 23.5 V29",
    "M4 18 V15.5 H7.5 V18 M24.5 18 V15.5 H28 V18",
    "M10 15.5 V11 H22 V15.5",
    "M8 11 Q16 6 24 11",
  ],
  // Taiyuan — Jinci Temple: wide sweeping eaves over a colonnade.
  taiyuan: [
    "M2 29 H30",
    "M7 29 V17 M12 29 V17 M20 29 V17 M25 29 V17",
    "M5 17 H27",
    "M3 17 Q16 8.5 29 17",
    "M16 8.5 V6",
  ],
  // Hohhot — Dazhao Temple: battered Tibetan walls under a rooftop pavilion.
  hohhot: [
    "M2 29 H30",
    "M6 29 L8.5 13 H23.5 L26 29",
    "M7.6 18.5 H24.4",
    "M13 29 V22 H19 V29",
    "M10 16.5 H12 M15 16.5 H17 M20 16.5 H22",
    "M12 13 V10 H20 V13",
    "M10 10 Q16 6 22 10",
    "M16 6 V3.5",
  ],
  // Shenyang — Mukden Palace: hall on a stone plinth with a stair.
  shenyang: [
    "M2 29 H30",
    "M4 29 V25 H28 V29",
    "M7 25 V18 M12 25 V18 M20 25 V18 M25 25 V18",
    "M5 18 H27",
    "M3 18 Q16 9.5 29 18",
    "M12 29 H20 M13 27 H19",
  ],
  // Changchun — Puppet Emperor's Palace: symmetrical western mansion.
  changchun: [
    "M2 29 H30",
    "M5 29 V13 H27 V29",
    "M5 13 L16 6 L27 13",
    "M13 29 V21 H19 V29",
    "M8 18 H11 M21 18 H24",
    "M16 9.5 V13",
  ],
  // Harbin — Saint Sophia Cathedral: onion dome over the drum, flanked by apses.
  harbin: [
    "M2 29 H30",
    "M8 29 V17 H24 V29",
    "M11 17 V13 Q11 8.5 16 4.5 Q21 8.5 21 13 V17",
    "M16 4.5 V2",
    "M5 29 V20 Q5 17 8 17 M27 29 V20 Q27 17 24 17",
    "M14 29 V22 H18 V29",
  ],
  // Shanghai — The Bund: the Customs House clock tower reading across to Pudong.
  shanghai: [
    "M2 29 H30",
    "M3 29 V17 H13 V29",
    "M6.5 17 V9 H9.5 V17 M6.5 12.5 H9.5 M8 9 V6.5",
    "M5 26 V21 M11 26 V21",
    "M23 29 V7",
    "M19.4 20 a3.6 3.6 0 1 0 7.2 0 a3.6 3.6 0 1 0 -7.2 0",
    "M20.6 12 a2.4 2.4 0 1 0 4.8 0 a2.4 2.4 0 1 0 -4.8 0",
    "M20 29 L23 24 M26 29 L23 24",
  ],
  // Nanjing — Sun Yat-sen Mausoleum: the long stair rising to the memorial hall.
  nanjing: [
    "M2 29 H30",
    "M6 29 L10 21 H22 L26 29",
    "M8 26 H24 M9 23.5 H23",
    "M11 21 V15.5 H21 V21",
    "M9 15.5 Q16 10.5 23 15.5",
    "M16 21 V17",
  ],
  // Hangzhou — West Lake: a moon bridge on the water with Leifeng Pagoda beyond.
  hangzhou: [
    "M1 21 Q8 12 15 21",
    "M4.5 21 Q8 16.5 11.5 21",
    "M1 21 V24 M15 21 V24 M4.5 21 V24 M11.5 21 V24",
    "M24 26 V9",
    "M20.5 26 H27.5 M21 22 H27 M21.5 18 H26.5 M22 14 H26 M22.5 10 H25.5",
    "M24 9 V6.5",
    "M2 27.5 q4 -1.5 8 0 t8 0 t8 0",
  ],
  // Hefei — Lord Bao Park: lakeside pavilion.
  hefei: [
    "M2 28.5 q4 -1.5 8 0 t8 0 t8 0",
    "M9 26 V17 M23 26 V17",
    "M7 17 H25",
    "M5 17 Q16 9.5 27 17",
    "M16 9.5 V7",
  ],
  // Fuzhou — Three Lanes and Seven Alleys: the stepped horse-head gable line.
  fuzhou: [
    "M2 29 H30",
    "M3 29 V21 H7 V17 H11 V13 H15 V17 H19 V21 H23 V24.5 H27 V29",
    "M8 29 V24 H12 V29",
    "M18 29 V24 H22 V29",
  ],
  // Nanchang — Tengwang Pavilion: three flying-eave tiers on a terrace.
  nanchang: [
    "M2 29 H30",
    "M8 29 V25.5 H24 V29",
    "M6 25.5 H26 M4 25.5 Q16 19.5 28 25.5",
    "M10 25.5 V20.5 M22 25.5 V20.5",
    "M8 20.5 Q16 15 24 20.5",
    "M12 20.5 V15.5 M20 20.5 V15.5",
    "M10 15.5 Q16 10 22 15.5",
    "M16 10 V7",
  ],
  // Jinan — Baotu Spring: the three jets breaking the pool surface.
  jinan: [
    "M2 28.5 q4 -1.5 8 0 t8 0 t8 0",
    "M8 26 Q8 18 11 14.5",
    "M16 26 V12.5",
    "M24 26 Q24 18 21 14.5",
    "M9 12.5 a2 2 0 1 1 4 0",
    "M14 10.5 a2 2 0 1 1 4 0",
    "M19 12.5 a2 2 0 1 1 4 0",
  ],
  // Zhengzhou — Yellow River scenic area: sun over the loess ridges and the bends.
  zhengzhou: [
    "M22 9 a4.5 4.5 0 1 0 9 0 a4.5 4.5 0 1 0 -9 0",
    "M1 20 L8 10 L14 18 L20 12 L26 19",
    "M2 24.5 Q9 20.5 16 24.5 T30 24.5",
    "M2 28.5 Q9 24.5 16 28.5 T30 28.5",
  ],
  // Wuhan — Yellow Crane Tower: stacked eaves narrowing to the finial.
  wuhan: [
    "M2 29 H30",
    "M10 29 V26 H22 V29",
    "M6 26 Q16 21 26 26",
    "M11 26 V21.5 M21 26 V21.5",
    "M8 21.5 Q16 16.5 24 21.5",
    "M12 21.5 V17 M20 21.5 V17",
    "M9.5 17 Q16 12 22.5 17",
    "M13 17 V12.5 M19 17 V12.5",
    "M11 12.5 Q16 7.5 21 12.5",
    "M16 7.5 V4.5",
  ],
  // Changsha — Yuelu Mountain with the academy hall in front of the ridge.
  changsha: [
    "M1 27.5 H31",
    "M1 27.5 L10 12 L17 21 L23 13 L31 27.5",
    "M11 27.5 V21 H21 V27.5",
    "M9 21 Q16 16.5 23 21",
  ],
  // Guangzhou — Canton Tower: the pinched hyperboloid lattice.
  guangzhou: [
    "M2 29 H30",
    "M11 29 Q15.5 18 14 4",
    "M21 29 Q16.5 18 18 4",
    "M12.5 24 H19.5 M13 19 H19 M13.4 14 H18.6 M13.6 9 H18.4",
    "M16 4 V1.5",
  ],
  // Shenzhen — Window of the World: the tower, the pyramid and the globe on one lawn.
  shenzhen: [
    "M2 29 H30",
    "M4 29 L7 12 L10 29 M5.4 21 H8.6 M7 12 V9",
    "M12 29 L16.5 18 L21 29 M14.2 24 H18.8",
    "M20.6 20 a4.4 4.4 0 1 0 8.8 0 a4.4 4.4 0 1 0 -8.8 0",
    "M20.6 20 H29.4 M25 15.6 Q27.6 20 25 24.4 Q22.4 20 25 15.6",
    "M25 24.4 V27.5 M22 27.5 H28",
  ],
  // Chengdu — the giant panda that the breeding base is known for.
  chengdu: [
    "M5.5 9.5 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0",
    "M20.5 9.5 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0",
    "M7 17 a9 8 0 1 0 18 0 a9 8 0 1 0 -18 0",
    "M9.8 16 a2.2 2.8 0 1 0 4.4 0 a2.2 2.8 0 1 0 -4.4 0",
    "M17.8 16 a2.2 2.8 0 1 0 4.4 0 a2.2 2.8 0 1 0 -4.4 0",
    "M14.8 20 a1.2 1 0 1 0 2.4 0 a1.2 1 0 1 0 -2.4 0",
    "M16 21 V22.2 M13.5 23.4 Q16 25.4 18.5 23.4",
  ],
  // Chongqing — Hongya Cave: stilt houses stacked up the cliff.
  chongqing: [
    "M2 29 H30",
    "M4 29 V22.5 H28 V29",
    "M3 22.5 H29",
    "M6 22.5 V16 H26 V22.5",
    "M5 16 H27",
    "M9 16 V10 H23 V16",
    "M7 10 Q16 5 25 10",
    "M8 29 V26 M12 29 V26 M20 29 V26 M24 29 V26",
  ],
  // Kunming — the Stone Forest karst pillars.
  kunming: [
    "M2 29 H30",
    "M5 29 V14 L7 10 L9 14 V29",
    "M12 29 V18 L14 13 L16 18 V29",
    "M19 29 V11 L21 7 L23 11 V29",
    "M25 29 V20 L26.5 16 L28 20 V29",
  ],
  // Zhangjiajie — sandstone pillars cut by drifting mist.
  zhangjiajie: [
    "M2 29 H30",
    "M6 29 V12 L8 8 L10 12 V29",
    "M14 29 V6 L16 2 L18 6 V29",
    "M22 29 V15 L24 11 L26 15 V29",
    "M3 20 H12 M20 17 H29",
  ],
  // Guilin — Li River: karst peaks, a bamboo raft and the current.
  guilin: [
    "M1 24 L6 12 L11 24",
    "M9 24 L15.5 8 L22 24",
    "M20 24 L25 14 L30 24",
    "M2 26.5 q4 -1.5 8 0 t8 0 t8 0",
    "M2 29.5 q4 -1.5 8 0 t8 0 t8 0",
    "M12 25 H20 L18.5 27.5 H13.5 Z M16 25 V21",
  ],
  // Hong Kong — Victoria Peak looking over the harbour skyline.
  "hong-kong": [
    "M2 29 H30",
    "M1 22 L9 8 L17 22 L24 13 L31 22",
    "M4 29 V21 H8 V29",
    "M10 29 V17 H14 V29",
    "M16 29 V23 H20 V29",
    "M22 29 V15 H26 V29",
  ],
  // Macao — Ruins of St Paul's: the tiered facade above its stair.
  macao: [
    "M2 29 H30",
    "M8 29 H24 M9 27 H23 M10 25 H22",
    "M7 25 V16 H25 V25",
    "M9 16 V10 H23 V16",
    "M11 10 L16 5 L21 10",
    "M14 25 V19.5 A2 2 0 0 1 18 19.5 V25",
    "M11.5 21 H13.5 M18.5 21 H20.5 M13 13 H19",
  ],
  // Taipei — Taipei 101: the flared stacked segments.
  taipei: [
    "M2 29 H30",
    "M11 29 H21",
    "M12 29 V22 H20 V29",
    "M12.4 22 L11.7 19.8 H20.3 L19.6 22",
    "M13 19.8 V15 H19 V19.8",
    "M13.4 15 L12.7 12.8 H19.3 L18.6 15",
    "M14 12.8 V9 H18 V12.8",
    "M16 9 V3",
  ],
  // Haikou — Qilou Old Street: the arcade with its upper-floor windows.
  haikou: [
    "M2 29 H30",
    "M3 29 V22 M10 29 V22 M17 29 V22 M24 29 V22 M30 29 V22",
    "M3 22 Q6.5 18 10 22 M10 22 Q13.5 18 17 22 M17 22 Q20.5 18 24 22 M24 22 Q27.5 18 30 22",
    "M3 18 H30 V10 H3 Z",
    "M7 16 V12 M13.5 16 V12 M20 16 V12 M26 16 V12",
  ],
  // Nanning — Qingxiu Mountain and the Longxiang Pagoda on its slope.
  nanning: [
    "M1 28.5 H31",
    "M1 28.5 Q10 13 19 28.5",
    "M23 28.5 V10",
    "M19.5 28.5 H26.5 M20 24.5 H26 M20.5 20.5 H25.5 M21 16.5 H25 M21.5 12.5 H24.5",
    "M23 10 V7.5",
  ],
  // Guiyang — Qingyan Ancient Town: the stone gate on its rampart.
  guiyang: [
    "M2 29 H30",
    "M4 29 V18 H28 V29",
    "M12.5 29 V22.5 A3.5 3.5 0 0 1 19.5 22.5 V29",
    "M4 18 V15.5 H8 V18 M24 18 V15.5 H28 V18",
    "M10 15.5 H22 V10 H10 Z",
    "M8 10 Q16 6 24 10",
  ],
  // Xi'an — Terracotta Warriors ranked in the excavation pit.
  xian: [
    "M2 29 H30",
    "M10.8 14 a3.2 3.2 0 1 0 6.4 0 a3.2 3.2 0 1 0 -6.4 0",
    "M12.4 11 Q14 8.8 15.6 11",
    "M10 29 V20 A4 4 0 0 1 18 20 V29",
    "M20.4 17 a2.6 2.6 0 1 0 5.2 0 a2.6 2.6 0 1 0 -5.2 0",
    "M19 29 V22 A4 4 0 0 1 27 22 V29",
    "M11 23 H17",
  ],
  // Lanzhou — Yellow River Mother: the reclining figure with the child.
  lanzhou: [
    "M2 28.5 q4 -1.5 8 0 t8 0 t8 0",
    "M4 25 Q8 17 16 19 Q24 21 29 16",
    "M8.5 13 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0",
    "M19 17 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0",
    "M11.5 16 Q13 19 16 19",
  ],
  // Xining — Kumbum Monastery: the white stupa on its stepped base.
  xining: [
    "M2 29 H30",
    "M8 29 H24",
    "M10 29 V26 H22 V29",
    "M11 26 V23 H21 V26",
    "M12 23 Q12 17 16 14 Q20 17 20 23",
    "M13 23 H19",
    "M15 14 V11 H17 V14",
    "M16 11 V8.5 M13.5 8.5 Q16 5.5 18.5 8.5",
  ],
  // Yinchuan — Western Xia Tombs: the ribbed earthen cones in the desert.
  yinchuan: [
    "M2 28.5 H30",
    "M9 28.5 Q9 16.5 12 12 Q15 16.5 15 28.5",
    "M10 22 H14 M10.6 18 H13.4",
    "M19.5 28.5 Q19.5 19 22 15 Q24.5 19 24.5 28.5",
    "M20.4 23 H23.6",
    "M3 26 Q6 24.5 8 26",
  ],
  // Urumqi — Grand Bazaar: the minaret beside the domed hall.
  urumqi: [
    "M2 29 H30",
    "M5 29 V12 H9 V29",
    "M5 12 Q7 7 9 12 M7 7 V4",
    "M13 29 V19 H28 V29",
    "M13 19 Q20.5 10 28 19",
    "M20.5 10 V7",
    "M17.5 29 V23.5 A3 3 0 0 1 23.5 23.5 V29",
  ],
  // Lhasa — Potala Palace: the white wings stepping up to the red palace.
  lhasa: [
    "M2 29 H30",
    "M4 29 V20 L6 16 H12 L13 20 V29",
    "M13 29 V14 L15 9 H23 L25 14 V29",
    "M25 29 V19 L27 15 H30 V29",
    "M15 12 H23 M16 20 H22 M7 22 H11",
    "M17 29 V24 H21 V29",
  ],
  // Datong — Yungang Grottoes: three cave arches cut into the cliff, with the central Buddha.
  datong: [
    "M2 29 H30",
    "M4 29 V8 H28 V29",
    "M7 29 V18 A4 4 0 0 1 15 18 V29",
    "M17 29 V18 A4 4 0 0 1 25 18 V29",
    "M12 16 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0",
    "M11 25 Q14 19 17 25 M21 22 a1.5 1.5 0 1 0 3 0",
  ],
  // Suzhou — Humble Administrator's Garden: moon gate, waterside pavilion and garden rock.
  suzhou: [
    "M2 29 H30",
    "M4 29 V11 H17 V29",
    "M7 29 V21 A3.5 3.5 0 0 1 14 21 V29",
    "M18 29 V20 H29 V29 M17 20 Q23.5 14 30 20",
    "M21 29 V23 M27 29 V23",
    "M2 27 q4 -1.5 8 0 t8 0",
  ],
  // Huangshan — Yellow Mountain: granite peaks with the crooked welcoming pine.
  huangshan: [
    "M1 29 H31",
    "M1 29 L8 15 L13 23 L20 7 L30 29",
    "M22 29 V15 Q24 11 27 13 M23 18 Q19 15 16 17",
    "M26 13 L29 10 M24 12 L23 8",
  ],
  // Xiamen — Gulangyu: Sunlight Rock above the island and its piano-shaped cultural mark.
  xiamen: [
    "M2 27 q4 -1.5 8 0 t8 0 t8 0",
    "M3 24 Q8 14 14 24 Q20 10 28 24",
    "M18 19 V11 H25 V19 M17 11 Q21.5 7 26 11",
    "M7 24 V20 H12 V24 M9.5 20 V17",
    "M2 30 q4 -1.5 8 0 t8 0 t8 0",
  ],
  // Jingdezhen — Ancient Kiln: a porcelain vase beside the arched kiln flame.
  jingdezhen: [
    "M2 29 H30",
    "M5 29 V19 Q5 12 11 9 Q17 12 17 19 V29",
    "M8 29 V23 A3 3 0 0 1 14 23 V29",
    "M20 7 H27 M21 7 Q21 12 19 16 Q18 23 23.5 27 Q29 23 28 16 Q26 12 26 7",
    "M22 4 H26 V7 M20 18 H28",
  ],
  // Qingdao — Zhanqiao Pier: the long pier reaching its octagonal pavilion over the sea.
  qingdao: [
    "M2 29 q4 -1.5 8 0 t8 0 t8 0",
    "M3 24 H22 M7 24 V29 M18 24 V29",
    "M20 24 V16 H30 V24",
    "M18 16 Q25 10 32 16",
    "M23 16 V12 M27 16 V12 M21 12 Q25 8 29 12",
  ],
  // Luoyang — Longmen Grottoes: river cliff caves framing the central Vairocana figure.
  luoyang: [
    "M2 29 H30",
    "M3 29 V7 H29 V29",
    "M6 29 V20 A3 3 0 0 1 12 20 V29 M20 29 V20 A3 3 0 0 1 26 20 V29",
    "M13 29 V17 A3 3 0 0 1 19 17 V29",
    "M14 16 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0",
    "M14 25 Q16 20 18 25",
  ],
  // Jiuzhaigou — Five Flower Lake: layered peaks reflected in clear stepped water.
  jiuzhaigou: [
    "M1 21 L8 10 L14 19 L20 7 L31 21",
    "M3 24 Q9 21 15 24 T27 24",
    "M2 27 Q8 24 14 27 T26 27",
    "M4 30 Q10 27 16 30 T28 30",
    "M22 14 L24 18 L27 14",
  ],
  // Dali — the Three Pagodas, with the taller Qianxun Pagoda at centre.
  dali: [
    "M2 29 H30",
    "M13 29 V8 H19 V29 M12 12 H20 M12 17 H20 M12 22 H20 M16 8 V4",
    "M5 29 V16 H10 V29 M4 20 H11 M7.5 16 V12",
    "M22 29 V16 H27 V29 M21 20 H28 M24.5 16 V12",
  ],
  // Lijiang — old-town tiled roofs and the waterwheel beside the canal.
  lijiang: [
    "M2 29 H30",
    "M3 29 V20 H16 V29 M1 20 Q9.5 13 18 20",
    "M7 29 V24 H12 V29",
    "M21 21 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0",
    "M27 15 V27 M21 21 H33 M23 17 L31 25 M31 17 L23 25",
  ],
  // Sanya — Tianya Haijiao: two coastal rocks, a leaning palm and the South China Sea.
  sanya: [
    "M2 27 q4 -1.5 8 0 t8 0 t8 0",
    "M5 26 L8 17 L12 26 M14 26 L18 14 L23 26",
    "M27 26 Q26 16 29 8",
    "M29 8 Q24 6 22 10 M29 8 Q31 4 34 6 M29 8 Q27 3 28 1",
    "M2 30 q4 -1.5 8 0 t8 0 t8 0",
  ],
  // Dunhuang — Mogao Caves: cliff niches and the nine-storey facade silhouette.
  dunhuang: [
    "M2 29 H30",
    "M3 29 V9 H15 V29 M5 15 H13 M5 21 H13",
    "M18 29 V8 H27 V29 M17 12 H28 M17 17 H28 M17 22 H28",
    "M20 29 V25 A2.5 2.5 0 0 1 25 25 V29",
    "M19 8 Q22.5 4 26 8 M22.5 4 V2",
  ],
  // Kashgar — Id Kah Mosque: central prayer hall between two slender minarets.
  kashgar: [
    "M2 29 H30",
    "M7 29 V12 H25 V29",
    "M10 12 Q16 5 22 12",
    "M13 29 V22 A3 3 0 0 1 19 22 V29",
    "M4 29 V9 H7 V29 M25 29 V9 H28 V29",
    "M4 9 Q5.5 5 7 9 M25 9 Q26.5 5 28 9 M5.5 5 V2 M26.5 5 V2",
  ],
};
