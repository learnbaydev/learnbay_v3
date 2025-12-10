// app/api/book-calendly/route.js
import { NextResponse } from "next/server";
import { z } from "zod";
import { autoBookCalendly } from "@/lib/calendly"; // Make sure this path matches where you put the lib file

// Define Validation Schema
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  jobRole: z.string().min(2, "Please enter your current job role"),
  workExperience: z.string().min(1, "Please select your work experience"),
  timezone: z.string().optional().default("UTC"),
});

export async function POST(request) {
  try {
    // 1. Parse JSON body
    const body = await request.json();

    // 2. Validate Data
    const validatedData = bookingSchema.parse(body);

    // 3. Call Logic
    const result = await autoBookCalendly({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      jobRole: validatedData.jobRole,
      workExperience: validatedData.workExperience,
      timezone: validatedData.timezone,
    });

    // 4. Return Success
    return NextResponse.json(
      {
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);

    // Handle Zod Validation Errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: error.errors[0].message,
        },
        { status: 400 }
      );
    }

    // Handle General Errors
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to book your slot. Please try again.",
      },
      { status: 500 }
    );
  }
}
