# Gold Nightmare - Scalping Engine Strategy

This document outlines the strategy and indicators used by the mock Scalping Engine in the Gold Nightmare application.

## Overview

The scalping engine is designed to generate short-term trading signals for timeframes such as 1 minute, 5 minutes, and 15 minutes. The core requirement for the engine is to use a combination of three key technical indicators:
1.  **RSI (Relative Strength Index):** To measure momentum and identify overbought/oversold conditions.
2.  **MACD (Moving Average Convergence Divergence):** To identify trend direction and potential reversals.
3.  **ATR (Average True Range):** To measure market volatility, which helps in setting realistic Stop Loss (SL) and Take Profit (TP) levels.

## Mock Implementation

The current implementation in `src/services/scalpingService.ts` is a **mock simulation** of this strategy. It is designed to provide realistic-looking data for frontend development and testing without performing real market analysis.

### How the Mock Service Works:

1.  **Simulated Delay:** The service includes a 1.5-second delay to mimic the time it would take for a real engine to perform complex calculations and analysis.
2.  **Base Price:** It uses a static base price (`3625.00`) as a starting point for generating signals.
3.  **Random Signal Generation:**
    *   **Type (BUY/SELL):** The signal type is chosen randomly.
    *   **Entry Price:** A random entry price is generated within a small range around the base price.
    *   **Stop Loss & Take Profit:** SL and TP levels are calculated based on the entry price, with random but logical offsets. For a BUY signal, SL is placed below entry and TPs are above. For a SELL signal, the opposite is true.
    *   **Confidence Score:** A random confidence level between 65% and 95% is generated to make the signal more realistic.

### Real Implementation (Future Work)

A real-world implementation of this engine would require:
-   A real-time market data feed (e.g., via WebSockets).
-   A robust backend service capable of performing calculations on the incoming data stream.
-   A well-defined strategy that combines the signals from RSI, MACD, and ATR into a single, actionable trading signal. For example:
    -   **BUY Signal Condition:** RSI is not overbought (< 70) AND a bullish MACD crossover has occurred AND ATR is within an acceptable range.
    -   **SELL Signal Condition:** RSI is not oversold (> 30) AND a bearish MACD crossover has occurred.
-   The ATR value would be used to dynamically calculate the distance for SL and TP levels from the entry price, adapting to current market volatility.
