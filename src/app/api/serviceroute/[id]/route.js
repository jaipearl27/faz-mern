import { connectToDatabase } from "@/lib/Database";
import Services from "@/lib/Database/Model/serviceModel";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Service ID is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const service = await Services.findById(id);

    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Service found", data: service },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching service:", error);

    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
