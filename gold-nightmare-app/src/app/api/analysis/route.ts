import { NextResponse } from 'next/server';

// Function to simulate network/processing delay
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request) {
  try {
    const { analysisType, userPoints } = await request.json();

    const requiredPoints: { [key: string]: number } = {
      quick: 1,
      detailed: 2,
      scalping: 2,
      swing: 3,
      nightmare: 5,
    };

    const pointsNeeded = requiredPoints[analysisType];

    if (pointsNeeded === undefined) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Invalid analysis type provided.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (userPoints < pointsNeeded) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Not enough points for this analysis.' }),
        { status: 402, headers: { 'Content-Type': 'application/json' } } // 402 Payment Required is semantic
      );
    }

    await sleep(2500); // Simulate the time it takes for the AI to process

    let responseData = {};

    switch (analysisType) {
      case 'quick':
        responseData = {
          summary: 'تحليل سريع: يبدو أن هناك فرصة شراء على المدى القصير. الاتجاه العام صاعد.',
          confidence: '75%',
        };
        break;
      case 'detailed':
        responseData = {
          entry: 3620.50,
          stopLoss: 3610.00,
          takeProfit1: 3635.00,
          takeProfit2: 3650.00,
          analysisText: 'تحليل مفصل: بناءً على مؤشرات القوة النسبية والماكد، هناك تقاطع إيجابي يدعم الشراء. يوصى بوقف الخسارة تحت مستوى الدعم الرئيسي.',
        };
        break;
      case 'nightmare':
        responseData = {
          title: 'تحليل الكابوس الذهبي',
          indicators: [
            { name: 'RSI', signal: 'Bullish Divergence', details: 'مؤشر القوة النسبية يظهر تباعدًا إيجابيًا.' },
            { name: 'MACD', signal: 'Golden Cross', details: 'الماكد على وشك تكوين تقاطع ذهبي.' },
            { name: 'ATR', volatility: 'High', details: 'مؤشر ATR يشير إلى تقلبات عالية متوقعة.' },
          ],
          conclusion: 'جميع المؤشرات تشير إلى حركة صعودية قوية قادمة. درجة الثقة عالية جدًا.',
        };
        break;
      default:
         // This case is already handled by the check above, but as a fallback:
        responseData = { summary: 'تحليل غير معروف.' };
    }

    return NextResponse.json({ success: true, data: responseData, pointsUsed: pointsNeeded });

  } catch (error) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'An internal server error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
