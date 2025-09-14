interface AnalysisParams {
  analysisType: string;
  userPoints: number;
}

export const performAnalysis = async ({ analysisType, userPoints }: AnalysisParams): Promise<any> => {
  const response = await fetch('/api/analysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ analysisType, userPoints }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'An error occurred while performing the analysis.');
  }

  return data;
};
