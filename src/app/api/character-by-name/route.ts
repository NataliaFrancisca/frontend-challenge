import { httpRequest } from "@/app/functions/httpRequest";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const { searchParams } = new URL(request.url);
    const characterName = searchParams.get('name');

    if(!characterName){
        return new Response(JSON.stringify({error: "Nome do personagem é obrigatório"}), {
            status: 400
        });
    };

    return await httpRequest(`/characters?name=${characterName}&`);
}
