import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response("Missing SANITY_REVALIDATE_SECRET", { status: 500 });
    }

    const { isValidSignature } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // wait for Content Lake propagation
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 }
      );
    }

    revalidatePath("/", "layout");

    return NextResponse.json({ revalidated: true, scope: "entire site" });
  } catch (err) {
    console.error(err);
    return new Response(
      err instanceof Error ? err.message : "Unknown error",
      { status: 500 }
    );
  }
}