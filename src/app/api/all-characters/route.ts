import { httpRequest } from "@/app/functions/httpRequest";

export async function GET(){
    return await httpRequest("/characters?");
}
