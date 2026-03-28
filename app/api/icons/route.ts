import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const FREEPIK_API_KEY = process.env.API_KEY;

export async function GET(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json({ error: "No [query] provided" }, { status: 400 });
    }

    const res = await fetch(
        `https://api.freepik.com/v1/icons?term=${encodeURIComponent(query)}&page=1&limit=20&order=relevance`,
        {
            headers: {
                "x-freepik-api-key": FREEPIK_API_KEY ?? "",
                "Accept-Language": "en-US",
            },
        }
    );

    if (res.status !== 200) {
        return NextResponse.json({ error: "Failed to fetch icons" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
}