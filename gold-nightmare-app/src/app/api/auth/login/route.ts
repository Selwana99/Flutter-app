import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // In a real-world application, you would validate against a database.
    // Here, we are mocking the validation logic.
    if (email === 'admin@example.com' && password === 'password123') {
      const user = {
        name: 'Admin',
        email: 'admin@example.com',
        points: 999999,
        licenseType: 'VIP',
      };
      // In a real app, you'd generate and return a JWT for session management.
      return NextResponse.json({ success: true, message: 'Login successful', user });
    } else {
      // For any other credentials, return an unauthorized error.
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Invalid email or password' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    // Generic error for malformed requests or other issues.
    return new NextResponse(
      JSON.stringify({ success: false, message: 'An internal server error occurred' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
