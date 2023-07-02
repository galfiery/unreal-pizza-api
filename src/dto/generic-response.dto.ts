export class GenericResponseDto {
  success: boolean;
  error?: string;

  constructor(data?: any) {
    this.success = data.success;
    this.error = data.error;
  }
}
