import { PlayerRole, PlayerStatus } from "@/types";

export interface IPLTeamPreset {
  id: string;
  name: string;
  shortCode: string;
  ownerName: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  logoUrl: string;
  initialBudget: number;
}

export interface IPLPlayerPreset {
  id: string;
  name: string;
  teamName: string;
  role: PlayerRole;
  basePrice: number;
  points: number;
  photoUrl: string;
}

export const IPL_TEAMS_PRESETS: IPLTeamPreset[] = [
  {
    id: "csk",
    name: "Chennai Super Kings",
    shortCode: "CSK",
    ownerName: "N. Srinivasan",
    color: "from-yellow-400 to-amber-600",
    bgGradient: "rgba(234, 179, 8, 0.15)",
    borderColor: "rgba(234, 179, 8, 0.4)",
    logoUrl: "/Team photos/csk.svg",
    initialBudget: 100000000,
  },
  {
    id: "mi",
    name: "Mumbai Indians",
    shortCode: "MI",
    ownerName: "Nita Ambani",
    color: "from-blue-500 to-indigo-700",
    bgGradient: "rgba(59, 130, 246, 0.15)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    logoUrl: "/Team photos/mi.svg",
    initialBudget: 100000000,
  },
  {
    id: "rcb",
    name: "Royal Challengers Bengaluru",
    shortCode: "RCB",
    ownerName: "Prathamesh",
    color: "from-red-600 to-slate-900",
    bgGradient: "rgba(239, 68, 68, 0.15)",
    borderColor: "rgba(239, 68, 68, 0.4)",
    logoUrl: "/Team photos/rcb.jpg",
    initialBudget: 100000000,
  },
  {
    id: "kkr",
    name: "Kolkata Knight Riders",
    shortCode: "KKR",
    ownerName: "Shah Rukh Khan",
    color: "from-purple-600 to-amber-500",
    bgGradient: "rgba(168, 85, 247, 0.15)",
    borderColor: "rgba(168, 85, 247, 0.4)",
    logoUrl: "/Team photos/kkr.svg",
    initialBudget: 100000000,
  },
  {
    id: "gt",
    name: "Gujarat Titans",
    shortCode: "GT",
    ownerName: "CVC Capital",
    color: "from-cyan-600 to-slate-900",
    bgGradient: "rgba(8, 145, 178, 0.15)",
    borderColor: "rgba(8, 145, 178, 0.4)",
    logoUrl: "/Team photos/gt.svg",
    initialBudget: 100000000,
  },
  {
    id: "rr",
    name: "Rajasthan Royals",
    shortCode: "RR",
    ownerName: "Manoj Badale",
    color: "from-pink-500 to-blue-700",
    bgGradient: "rgba(236, 72, 153, 0.15)",
    borderColor: "rgba(236, 72, 153, 0.4)",
    logoUrl: "/Team photos/rr.png",
    initialBudget: 100000000,
  },
  {
    id: "srh",
    name: "Sunrisers Hyderabad",
    shortCode: "SRH",
    ownerName: "Kalanithi Maran",
    color: "from-orange-500 to-black",
    bgGradient: "rgba(249, 115, 22, 0.15)",
    borderColor: "rgba(249, 115, 22, 0.4)",
    logoUrl: "/Team photos/srh.png",
    initialBudget: 100000000,
  },
  {
    id: "lsg",
    name: "Lucknow Super Giants",
    shortCode: "LSG",
    ownerName: "Sanjiv Goenka",
    color: "from-sky-400 to-blue-900",
    bgGradient: "rgba(56, 189, 248, 0.15)",
    borderColor: "rgba(56, 189, 248, 0.4)",
    logoUrl: "/Team photos/lsg.avif",
    initialBudget: 100000000,
  },
  {
    id: "dc",
    name: "Delhi Capitals",
    shortCode: "DC",
    ownerName: "Parth Jindal",
    color: "from-blue-600 to-red-600",
    bgGradient: "rgba(37, 99, 235, 0.15)",
    borderColor: "rgba(37, 99, 235, 0.4)",
    logoUrl: "/Team photos/dc.jpg",
    initialBudget: 100000000,
  },
  {
    id: "pbks",
    name: "Punjab Kings",
    shortCode: "PBKS",
    ownerName: "Preity Zinta",
    color: "from-red-600 to-yellow-500",
    bgGradient: "rgba(220, 38, 38, 0.15)",
    borderColor: "rgba(220, 38, 38, 0.4)",
    logoUrl: "/Team photos/pbks.svg",
    initialBudget: 100000000,
  },
];

export const MARQUEE_INDIAN_PLAYERS: IPLPlayerPreset[] = [
  {
    id: "virat-kohli",
    name: "Virat Kohli",
    teamName: "Royal Challengers Bengaluru",
    role: PlayerRole.BATSMAN,
    basePrice: 20000000,
    points: 99,
    photoUrl: "/players/virat-kohli.jpg",
  },
  {
    id: "rohit-sharma",
    name: "Rohit Sharma",
    teamName: "Mumbai Indians",
    role: PlayerRole.BATSMAN,
    basePrice: 20000000,
    points: 98,
    photoUrl: "/players/rohit-sharma.jpg",
  },
  {
    id: "ms-dhoni",
    name: "MS Dhoni",
    teamName: "Chennai Super Kings",
    role: PlayerRole.WICKET_KEEPER,
    basePrice: 20000000,
    points: 99,
    photoUrl: "/players/ms-dhoni.jpg",
  },
  {
    id: "jasprit-bumrah",
    name: "Jasprit Bumrah",
    teamName: "Mumbai Indians",
    role: PlayerRole.BOWLER,
    basePrice: 20000000,
    points: 99,
    photoUrl: "/players/jasprit-bumrah.jpg",
  },
  {
    id: "hardik-pandya",
    name: "Hardik Pandya",
    teamName: "Mumbai Indians",
    role: PlayerRole.ALL_ROUNDER,
    basePrice: 20000000,
    points: 96,
    photoUrl: "/players/hardik-pandya.jpg",
  },
  {
    id: "suryakumar-yadav",
    name: "Suryakumar Yadav",
    teamName: "Mumbai Indians",
    role: PlayerRole.BATSMAN,
    basePrice: 20000000,
    points: 97,
    photoUrl: "/players/suryakumar-yadav.jpg",
  },
  {
    id: "ravindra-jadeja",
    name: "Ravindra Jadeja",
    teamName: "Chennai Super Kings",
    role: PlayerRole.ALL_ROUNDER,
    basePrice: 20000000,
    points: 96,
    photoUrl: "/players/ravindra-jadeja.jpg",
  },
  {
    id: "rishabh-pant",
    name: "Rishabh Pant",
    teamName: "Delhi Capitals",
    role: PlayerRole.WICKET_KEEPER,
    basePrice: 20000000,
    points: 95,
    photoUrl: "/players/rishabh-pant.jpg",
  },
  {
    id: "shubman-gill",
    name: "Shubman Gill",
    teamName: "Gujarat Titans",
    role: PlayerRole.BATSMAN,
    basePrice: 20000000,
    points: 96,
    photoUrl: "/players/shubman-gill.jpg",
  },
  {
    id: "kl-rahul",
    name: "KL Rahul",
    teamName: "Lucknow Super Giants",
    role: PlayerRole.WICKET_KEEPER,
    basePrice: 20000000,
    points: 95,
    photoUrl: "/players/kl-rahul.jpg",
  },
  {
    id: "shreyas-iyer",
    name: "Shreyas Iyer",
    teamName: "Kolkata Knight Riders",
    role: PlayerRole.BATSMAN,
    basePrice: 20000000,
    points: 94,
    photoUrl: "/players/shreyas-iyer.jpg",
  },
  {
    id: "sanju-samson",
    name: "Sanju Samson",
    teamName: "Rajasthan Royals",
    role: PlayerRole.WICKET_KEEPER,
    basePrice: 20000000,
    points: 94,
    photoUrl: "/players/sanju-samson.jpg",
  },
];
