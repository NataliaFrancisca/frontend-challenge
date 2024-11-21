import { httpRequest } from "@/app/functions/httpRequest";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){

    const { searchParams } = new URL(request.url);
    const characterId = searchParams.get('id');

    if (!characterId) {
        return new Response(JSON.stringify({ error: 'ID do personagem é obrigatório' }), {
          status: 400,
        });
    }

    return await httpRequest(`/characters/${characterId}/comics?formatType=comic&orderBy=onsaleDate&`, 10);
}
