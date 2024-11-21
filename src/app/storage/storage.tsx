"use server";
import { cookies } from "next/headers";
import { TCharacterBasicInfo } from "../ts/types";

const ONE_YEAR = 365 * 24 * 60 * 60;
const STORAGE_FAVORITES = "MARVEL_FAVORITES";
const DEFAULT_STORAGE = [] as TCharacterBasicInfo[];

export async function initializeStorage(){
  const existCookie = (await cookies()).get(STORAGE_FAVORITES);

  if(!existCookie){
    (await cookies()).set(STORAGE_FAVORITES, JSON.stringify(DEFAULT_STORAGE), {maxAge: ONE_YEAR});
  }
}
