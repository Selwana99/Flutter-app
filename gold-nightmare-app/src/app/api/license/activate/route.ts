import { NextResponse } from 'next/server';

// This is a mock database of valid license keys.
const validKeys: { [key: string]: { type: string; points: number } } = {
  'GOLD-NIGHTMARE-2024-VIP': { type: 'VIP', points: 1000 },
  'GOLD-NIGHTMARE-2024-PRO': { type: 'PRO', points: 500 },
  'GOLD-NIGHTMARE-2024-TRIAL': { type: 'TRIAL', points: 50 },
};

export async function POST(request: Request) {
  try {
    const { licenseKey } = await request.json();

    if (!licenseKey || typeof licenseKey !== 'string') {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'License key is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check against the mock database (case-insensitive)
    const keyDetails = validKeys[licenseKey.toUpperCase()];

    if (keyDetails) {
      // In a real app, you would update the user's account in the database.
      return NextResponse.json({
        success: true,
        message: `License activated successfully! Type: ${keyDetails.type}`,
        licenseType: keyDetails.type,
        pointsAdded: keyDetails.points,
      });
    } else {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Invalid or expired license key.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'An internal server error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
