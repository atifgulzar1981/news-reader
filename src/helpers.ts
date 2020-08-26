export type ErrorInfo = {
  status: number;
  statusText: string;
  data: any;
};

export type ApiRequest<T> = { request: T };
export type ApiResponse<T> = { response: T };
export type ApiError = { error: ErrorInfo };

export const getTimeDifference = (timestamp: number) => {
  const seconds = Math.floor((Date.now() - timestamp * 1000) / 1000);

  if (!seconds)
  {
      return "N/A";
  }

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years ago`;
  }
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months ago`;
  }
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days ago`;
  }
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours ago`;
  }
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes ago`;
  }

  return `${Math.floor(seconds)} seconds ago`;
};
