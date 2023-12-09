import axios from "axios";
import { API_URL } from "../../config/baseurl";

export interface Player {
  name: string;
  team: string;
  mainPos: string;
  allPos: string[];
  injured: boolean;
  curAvgPts: number;
  sznAvgProj: number;
  pctOwned: number;
  pctStarted: number;
  drafted: boolean;
}

export interface Roster {
  id: number;
  ownerId: number;
  draftPosition: number;
  teamName: string;
  leagueSize: number;
  players: Player[];
}

export interface CreateRosterRequest {
  teamName: string;
  leagueSize: number;
  draftPosition: number;
  pickPreference: string;
}

export const getRosters = async () => {
  const result = await axios.get<Roster[]>(`${API_URL}/rosters/my`);
  return result.data;
};

export const createRoster = async (data: CreateRosterRequest) => {
  const result = await axios.post<Roster>(`${API_URL}/rosters`, data);
  return result.data;
};
