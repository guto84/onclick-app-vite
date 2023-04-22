export type EnvAdapter = {
  apiUrl: string
}

export const envAdapter: EnvAdapter = {
  // apiUrl: process.env.API_URL || '',
  apiUrl: 'http://localhost:8080',
}
