export interface LicenseActivationResponse {
  success: boolean;
  message: string;
  licenseType?: string;
  pointsAdded?: number;
}

export const activateLicense = async (licenseKey: string): Promise<LicenseActivationResponse> => {
  const response = await fetch('/api/license/activate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ licenseKey }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to activate license.');
  }

  return data;
};
