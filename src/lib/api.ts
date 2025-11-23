// API configuration and client
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// API client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Include cookies in requests
      ...options,
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Network error' }));
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  async post(endpoint: string, data: any): Promise<any> {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiClient(API_BASE_URL);

// Auth service
export const authService = {
  async login(email: string, password: string): Promise<{ user: any }> {
    const response = await api.post('/auth/login', { email, password });
    return response;
  },

  async register(data: { email: string; password: string; name: string; role: string }): Promise<{ user: any }> {
    const response = await api.post('/auth/register', data);
    return response;
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout', {});
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  redirectToApp(userRole: string): void {
    const athleteAppUrl = import.meta.env.VITE_ATHLETE_APP_URL || 'http://localhost:5174';
    const coachDashboardUrl = import.meta.env.VITE_COACH_DASHBOARD_URL || 'http://localhost:5175';

    console.log('🔀 Redirecting user with role:', userRole);

    if (userRole === 'ATHLETE') {
      console.log('✅ Redirecting to Athlete App');
      window.location.href = athleteAppUrl;
    } else if (userRole === 'COACH') {
      console.log('✅ Redirecting to Coach Dashboard');
      window.location.href = coachDashboardUrl;
    } else {
      console.error('❌ Unknown role:', userRole);
    }
  }
};
