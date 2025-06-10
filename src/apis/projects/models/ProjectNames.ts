export interface ProjectNamesRequest {
  userId?: number;
}

export interface ProjectNamesResponse {
  projectId: number;
  projectName: string;
}
