import crypto from "crypto";
import { NextResponse } from "next/server";

const URL_BASE = 'https://gateway.marvel.com/v1/public';

const MARVEL_PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const MARVEL_PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;

export async function httpRequest(url: string, requestLimit?: number){
    try{
        const timestamp = new Date().getTime().toString();
        const hash = crypto
            .createHash("md5")
            .update(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
            .digest("hex");

        const limit = requestLimit || 20;
        const offset = 0;

        const params = `ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

        const fetchURL = `${URL_BASE}${url}${params}`;
        const response = await fetch(fetchURL);

        if(!response.ok){
            return NextResponse.json({ error: "Erro na API da Marvel" }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    }catch(error){
        console.error("Erro na API Route: ", error);
        return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
    }
}